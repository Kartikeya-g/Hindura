const DESTINATION_EMAIL = 'garvarihant@gmail.com';

async function testEmailDelivery() {
  console.log(`\nInitiating test email submission to: ${DESTINATION_EMAIL}...\n`);

  const payload = {
    _subject: `TESTING: Terminal Submission`,
    'Client Name': 'Terminal Tester',
    'Client Email': 'test@example.com',
    'Message': 'This is a test submission from the Node.js terminal to verify the FormSubmit endpoint.',
    _autoresponse: `Thank you. This is an automated test reply.`
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${DESTINATION_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://localhost:5173',
        'Referer': 'http://localhost:5173/'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (response.ok) {
      console.log('✅ SUCCESS!');
      console.log('--------------------------------------------------');
      console.log(JSON.stringify(result, null, 2));
      console.log('--------------------------------------------------');
      console.log('\nIf this is your first time using this email, FormSubmit.co has sent an activation link to garvarihant@gmail.com. You MUST click that link before emails will be forwarded.');
    } else {
      console.log('❌ FAILED!');
      console.log('--------------------------------------------------');
      console.log(JSON.stringify(result, null, 2));
      console.log('--------------------------------------------------');
    }
  } catch (error) {
    console.error('❌ FATAL ERROR during submission:');
    console.error(error);
  }
}

testEmailDelivery();
