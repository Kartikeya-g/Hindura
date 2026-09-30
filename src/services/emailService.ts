import emailjs from '@emailjs/browser';

export interface ProjectEnquiryData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  scale: string;
  message: string;
}

export interface SubmissionResponse {
  success: boolean;
  message?: string;
}

const DESTINATION_EMAIL = 'garvarihant@gmail.com';

/**
 * Sends a project enquiry.
 * 1. Delivers the complete submission to Hindura team (garvarihant@gmail.com)
 * 2. If EmailJS keys are provided, it can also send an automated thank you email to the user.
 * 3. Falls back seamlessly to FormSubmit AJAX endpoint for zero-setup instant delivery.
 */
export async function sendProjectEnquiry(data: ProjectEnquiryData): Promise<SubmissionResponse> {
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateAdmin = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN;
  const emailJsTemplateUser = import.meta.env.VITE_EMAILJS_TEMPLATE_USER;
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // If EmailJS credentials are configured in .env
  if (emailJsServiceId && emailJsPublicKey) {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        project_type: data.projectType,
        location: data.location || 'Not Specified',
        scale: data.scale || 'Not Specified',
        message: data.message,
        to_email: DESTINATION_EMAIL,
        reply_to: data.email,
      };

      // Send to Admin (garvarihant@gmail.com)
      if (emailJsTemplateAdmin) {
        await emailjs.send(emailJsServiceId, emailJsTemplateAdmin, templateParams, emailJsPublicKey);
      }

      // Send Thank You Auto-reply to user
      if (emailJsTemplateUser) {
        await emailjs.send(emailJsServiceId, emailJsTemplateUser, {
          to_name: data.name,
          to_email: data.email,
          project_type: data.projectType,
          company_phone: '+91 98937-01528',
          company_email: DESTINATION_EMAIL,
        }, emailJsPublicKey);
      }

      return { success: true };
    } catch (err: any) {
      console.warn('EmailJS delivery failed, trying fallback gateway:', err);
    }
  }

  // Primary zero-configuration submission gateway via FormSubmit to garvarihant@gmail.com
  try {
    const payload = {
      _subject: `New Project Enquiry: ${data.name} (${data.projectType})`,
      _template: 'table',
      _captcha: 'false',
      _replyto: data.email,
      email: data.email,
      'Client Name': data.name,
      'Client Email': data.email,
      'Phone / WhatsApp': data.phone,
      'Project Typology': data.projectType,
      'Site Location': data.location || 'Not Specified',
      'Approximate Scale': data.scale || 'Not Specified',
      'Project Vision & Requirements': data.message,
      _autoresponse: `Thank you for contacting Hindura Building Solutions. We have received your project details for "${data.projectType}" and our planning team will get in touch with you shortly. For immediate assistance, feel free to call +91 98937-01528.`
    };

    const response = await fetch(`https://formsubmit.co/ajax/${DESTINATION_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    console.log('[Form Submission Response]:', result);

    if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
      return { success: true };
    } else {
      // If error message returned
      throw new Error(result.message || 'Submission failed');
    }
  } catch (error: any) {
    console.error('[Form Submission Error]:', error);
    return {
      success: false,
      message: error?.message || 'Unable to deliver message at this moment. Please call us directly.'
    };
  }
}


