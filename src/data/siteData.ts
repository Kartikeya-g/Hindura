import {
  WhatWeBuildItem,
  ServiceItem,
  ConstructionSystemItem,
  ProcessStage,
  WhyHinduraItem
} from '../types';

export const companyDetails = {
  name: 'Hindura Building Solutions Pvt. Ltd.',
  shortName: 'Hindura',
  tagline: 'Resort Construction · Prefabricated Construction · Hospitality Development',
  eyebrow: 'INDORE · INDIA · BUILDING FOR WHAT’S NEXT',
  office: '102 Pukhraj Corporate, Navlakha, Indore, Madhya Pradesh',
  email: 'garvarihant@gmail.com',
  phonePrimary: '+91 98937-01528',
  phoneSecondary: '+91 88899-33365',
  website: 'www.hinduraconstruction.com',
  footerStatement: 'Hindura Building Solutions — thoughtful construction for resorts, hotels, farmhouses and spaces built for what comes next.',
  footerMotto: 'Plan better. Build smarter. Create places people remember.'
};

export const whatWeBuildData: WhatWeBuildItem[] = [
  {
    id: 'resorts',
    title: 'Resorts',
    tagline: 'Nature-led retreats & destination stays',
    description: 'Nature-led retreats, destination stays and experience-driven hospitality spaces that integrate seamlessly into their landscape.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Eco-sensitive site planning', 'High guest-comfort envelopes', 'Experiential public & private zones']
  },
  {
    id: 'hotels-boutique',
    title: 'Hotels & Boutique Stays',
    tagline: 'Distinctive guest accommodation',
    description: 'Distinctive accommodation projects designed around guest experience, architectural character, and efficient execution.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Optimized operational circulation', 'Bespoke architectural facades', 'Rapid modular interior fit-outs']
  },
  {
    id: 'farmhouses-retreats',
    title: 'Farmhouses & Private Retreats',
    tagline: 'Character-rich country architecture',
    description: 'Comfortable, character-rich spaces that connect architecture with the surrounding landscape, delivering sanctuary and community.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Deep verandas & courtyard living', 'High thermal insulation', 'Low-maintenance external finishes']
  },
  {
    id: 'modular-prefab',
    title: 'Modular & Prefabricated Spaces',
    tagline: 'Factory-precision structural systems',
    description: 'Factory-fabricated structural and wall systems that support faster, higher-precision, and more controlled construction.',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Precision factory fabrication', 'Minimised on-site wet casting', 'Significant timeline compression']
  },
  {
    id: 'hospitality-extensions',
    title: 'Hospitality Extensions',
    tagline: 'Expansion villas, cottages & cabins',
    description: 'Additional villas, cottages, cabins and support spaces that can expand an existing property without disrupting ongoing guest operations.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Zero operational downtime', 'Plug-and-play assembly', 'Aesthetic matching with existing property']
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'discovery-consultation',
    number: '01',
    title: 'Project Discovery & Consultation',
    description: 'Understand the vision, site conditions, budget priorities and project goals before moving into execution.',
    category: 'Planning & Design',
    icon: 'Compass',
    details: ['Topographical & climatic site assessment', 'Feasibility analysis & budget framing', 'Hospitality brief clarification']
  },
  {
    id: 'design-coordination',
    number: '02',
    title: 'Design & Planning Coordination',
    description: 'Develop 2D/3D concepts, material direction and structural planning in coordination with the project requirements.',
    category: 'Planning & Design',
    icon: 'Layers',
    details: ['BIM & 3D modular coordination', 'Material palette selection', 'Structural & MEP integration']
  },
  {
    id: 'prefabricated-construction',
    number: '03',
    title: 'Prefabricated Construction',
    description: 'Use pre-made wall systems, insulated panels and steel-reinforced components to streamline construction.',
    category: 'Prefabrication & Fabrication',
    icon: 'Box',
    details: ['Engineered wall panels', 'Insulated panel modules', 'Steel-reinforced framing']
  },
  {
    id: 'manufacturing-fabrication',
    number: '04',
    title: 'Manufacturing & Fabrication',
    description: 'Coordinate fabrication of structural components, wall panels, trusses and selected interior elements off-site.',
    category: 'Prefabrication & Fabrication',
    icon: 'Factory',
    details: ['Off-site factory quality control', 'High precision CNC & weld work', 'Dry pre-assembly inspection']
  },
  {
    id: 'site-assembly-execution',
    number: '05',
    title: 'On-Site Assembly & Execution',
    description: 'Transport and assemble fabricated elements at site with a coordinated execution process.',
    category: 'Envelope & Execution',
    icon: 'Hammer',
    details: ['Streamlined logistics & transport', 'Rapid crane & manual assembly', 'Minimal environmental impact']
  },
  {
    id: 'roofing-envelope',
    number: '06',
    title: 'Roofing & Envelope Solutions',
    description: 'Metal roofing, shingles, thatch and reinforcement solutions selected according to the project’s design and requirements.',
    category: 'Envelope & Execution',
    icon: 'Shield',
    details: ['Standing seam metal roofing', 'Engineered synthetic & natural thatch', 'Architectural shingles & membranes']
  },
  {
    id: 'wall-insulation',
    number: '07',
    title: 'Wall & Thermal Insulation',
    description: 'Pre-made wall and EPS-based panel solutions designed to support faster installation and improved building performance.',
    category: 'Envelope & Execution',
    icon: 'Flame',
    details: ['High R-value thermal barrier', 'EPS & rockwool acoustic dampers', 'Condensation & moisture defense']
  },
  {
    id: 'facade-solutions',
    number: '08',
    title: 'Facade Solutions',
    description: 'Metal, wood and textured facade options that allow the exterior expression to match the project’s character.',
    category: 'Envelope & Execution',
    icon: 'Eye',
    details: ['Timber-look composite slats', 'Perforated & solid architectural metals', 'Textured lime & mineral coatings']
  },
  {
    id: 'hospitality-readiness',
    number: '09',
    title: 'Hospitality Readiness',
    description: 'Coordinate the final build toward a guest-ready hospitality environment, with attention to interiors and operational requirements.',
    category: 'Hospitality',
    icon: 'Sparkles',
    details: ['Interior detailing & fixtures', 'Operational snagging & testing', 'Seamless handover for launch']
  }
];

export const processStagesData: ProcessStage[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'We start with your vision, site conditions, project goals and the experience you want to create.',
    focus: 'Site brief, topology, budget, experiential goals'
  },
  {
    step: '02',
    title: 'Design & Plan',
    description: 'We translate the idea into concepts, material palettes, layouts and a practical construction direction.',
    focus: '2D/3D layouts, structural engineering, modular mapping'
  },
  {
    step: '03',
    title: 'Fabricate',
    description: 'Where appropriate, structural components, wall systems and selected elements are prepared off-site for controlled execution.',
    focus: 'Off-site factory fabrication, precision QA, panel assembly'
  },
  {
    step: '04',
    title: 'Assemble',
    description: 'Fabricated elements are transported to site and assembled with a coordinated execution approach.',
    focus: 'Rapid site erection, structural coupling, envelope weather-seal'
  },
  {
    step: '05',
    title: 'Finish & Handover',
    description: 'The project moves through finishing and final coordination toward a usable, guest-ready space.',
    focus: 'Facades, roofing finishes, interior coordination, commissioning'
  },
  {
    step: '06',
    title: 'Hospitality Integration',
    description: 'For hospitality projects, we can help align the built environment with the intended operating model and brand direction.',
    focus: 'Operational flow, guest experience alignment, post-handover support'
  }
];

export const whyHinduraData: WhyHinduraItem[] = [
  {
    title: 'Prefabrication-Led Thinking',
    tagline: 'Controlled execution off-site',
    description: 'Move selected construction activities off-site to improve coordination and reduce unnecessary on-site delays and environmental impact.',
    icon: 'Cpu'
  },
  {
    title: 'Design-to-Build Mindset',
    tagline: 'Unified architectural intent',
    description: 'Keep design intent connected to materials, fabrication and execution instead of treating them as separate, fragmented stages.',
    icon: 'PenTool'
  },
  {
    title: 'Built for Hospitality',
    tagline: 'Experiential spaces first',
    description: 'Understand that resorts, hotels, and retreats need to work as seamless sensory experiences as well as high-performance physical structures.',
    icon: 'Hotel'
  },
  {
    title: 'Material Flexibility',
    tagline: 'Tailored structural systems',
    description: 'Work across steel-reinforced systems, pre-made walls, insulated panels, metal roofing, shingles, thatch and architectural facade finishes.',
    icon: 'Grid'
  },
  {
    title: 'Young, Ambitious Team',
    tagline: 'Fresh energy & high ownership',
    description: 'Bring a fresh perspective, high ownership, modern technology adoption, and a genuine willingness to solve unusual project challenges.',
    icon: 'Users'
  },
  {
    title: 'End-to-End Coordination',
    tagline: 'Single point of responsibility',
    description: 'Create a single line of responsibility across planning, fabrication, assembly, and handover wherever the project requires it.',
    icon: 'CheckCircle2'
  }
];

export const constructionSystemsData: ConstructionSystemItem[] = [
  {
    id: 'premade-walls',
    name: 'Pre-Made Wall Systems',
    tag: 'Structural Speed & Precision',
    category: 'Structural Wall Matrix',
    coreMetric: '3x Speed vs Wet Masonry',
    description: 'Steel-reinforced wall components designed for quick installation without conventional wet casting at every stage.',
    advantages: [
      'Eliminates prolonged on-site curing delays and weather stoppages',
      'Consistent factory dimensional tolerances for perfect architectural alignments',
      'Pre-molded conduit channels for seamless MEP and electrical routing',
      'Significantly lowers foundation load on sensitive terrain'
    ],
    specs: [
      { label: 'Structural Matrix', value: 'Reinforced Cold-Formed Steel & Micro-Concrete' },
      { label: 'Assembly Method', value: '100% Dry Interlocking Joint System' },
      { label: 'MEP Integration', value: 'Factory-Fitted Conduit Channels' },
      { label: 'Seismic & Wind Rating', value: 'High Ductility Zone IV/V Compliant' }
    ],
    application: 'Resort chalets, multi-room hotel pods, countryside farmhouses',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'eps-panels',
    name: 'EPS Panels',
    tag: 'Thermal & Acoustic Performance',
    category: 'Insulated Core Architecture',
    coreMetric: 'Up to 40% HVAC Load Reduction',
    description: 'Lightweight insulated panel solutions that support faster construction and improved building thermal performance.',
    advantages: [
      'Dramatic reduction in seasonal heating and cooling operational energy',
      'Superior acoustic dampening ensuring tranquil guest suites',
      'Closed-cell hydrophobic structure with zero water absorption or mold risk',
      'Ultralight weight enabling flat-pack transport to remote nature sites'
    ],
    specs: [
      { label: 'Core Material', value: 'High-Density Flame-Retardant EPS' },
      { label: 'Thermal Resistance', value: 'Custom Assemblies R-16 to R-24' },
      { label: 'Acoustic Rating', value: 'STC 48+ Sound Dampening' },
      { label: 'Moisture Permeability', value: 'Impervious Closed-Cell Matrix' }
    ],
    application: 'Hillside retreats, forest camps, climate-extreme destinations',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'insulated-wall-systems',
    name: 'Insulated Wall Systems',
    tag: 'Composite Envelopes',
    category: 'High-Performance Composite Skin',
    coreMetric: 'All-Weather Climate Defense',
    description: 'Panel-based construction options including EPS and other insulated assemblies tailored depending on project requirements.',
    advantages: [
      'Engineered for extreme temperature swings between day and night',
      'Direct compatibility with natural stone, timber slat, and metallic finishes',
      'Non-combustible composite core providing superior guest fire safety',
      'Zero on-site curing water required, protecting ecological soil stability'
    ],
    specs: [
      { label: 'Composite Structure', value: 'Multi-Layer Structural Insulated Panel (SIP)' },
      { label: 'Finish Versatility', value: 'Textured Lime, Timber Slat, Metal Panel' },
      { label: 'Fire Resistance', value: 'Class-A Fire Retardant Specification' },
      { label: 'Site Water Usage', value: 'Zero On-Site Water Curing' }
    ],
    application: 'Luxury private retreats, boutique destination hotels, wellness spas',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'roofing-solutions',
    name: 'Roofing Solutions',
    tag: 'Weatherproofing & Architectural Form',
    category: 'Engineered Weather-Shield',
    coreMetric: '150+ km/h Wind & Monsoon Resistance',
    description: 'Metal roofing, shingles, and natural or synthetic thatch solutions, with reinforcement where required by the design.',
    advantages: [
      'Monsoon-tested double-lock standing seam metal profiles',
      'Engineered synthetic & treated natural thatch for authentic vernacular looks',
      'Integrated radiant barrier foils reflecting up to 95% of solar heat gain',
      'Sealed acoustic sub-layers preventing interior rain noise transfer'
    ],
    specs: [
      { label: 'Profile Options', value: 'Standing Seam Metal, Shingle, Synthetic Thatch' },
      { label: 'Thermal Barrier', value: 'Dual Radiant Foil Insulation Underlay' },
      { label: 'Waterproofing', value: 'Self-Adhering High-Temp Waterproof Membrane' },
      { label: 'Wind Load Rating', value: 'Engineered for Coastal & High-Altitude Speeds' }
    ],
    application: 'Lakeside villas, tropical getaways, forest geodesic domes',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'facade-systems',
    name: 'Architectural Facades',
    tag: 'Identity & Weather Protection',
    category: 'Architectural Expression & Cladding',
    coreMetric: 'Zero-Maintenance Exterior Life',
    description: 'Metal, timber-inspired, and textured finish options that allow the exterior expression to match the project’s character.',
    advantages: [
      'UV-stabilized, rot-proof timber-look composite slats with zero oiling required',
      'Sleek architectural metal panels with architectural powder-coat durability',
      'Mineral textured coatings echoing local stone and clay aesthetics',
      'Integrated rear air cavity creating an active rainscreen moisture barrier'
    ],
    specs: [
      { label: 'Material Palettes', value: 'Timber Composite, Architectural Zinc/Alu, Mineral Plaster' },
      { label: 'Ventilation System', value: 'Rainscreen Cavity for Breathable Walls' },
      { label: 'UV & Weather Life', value: '20+ Year Color Fastness & Rot Resistance' },
      { label: 'Architectural Flexibility', value: 'Custom Geometric & Vernacular Patterns' }
    ],
    application: 'Resort frontages, luxury villa exteriors, modular clubhouses',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  }
];

export const hinduraLiving = {
  headline: 'Better places. Better ways to live.',
  paragraph1: 'Hindura Living is our vision for hospitality and residential environments that feel connected to nature, comfort and community. It is about creating spaces that do more than look good—spaces that support slower mornings, shared experiences and a stronger connection with the setting around them.',
  paragraph2: 'From natural materials and thoughtful layouts to wellness-oriented environments and community spaces, the idea is simple: build places people genuinely want to spend time in.'
};

export const aboutHinduraContent = {
  headline: 'A new generation of construction, built around a clear vision.',
  lead: 'Hindura Building Solutions Pvt. Ltd. is an Indore-based construction company focused on luxury prefabricated construction for resorts, hotels, farmhouses and modular spaces. Our work brings together project understanding, design coordination, fabrication and site execution to create practical, distinctive built environments.',
  narrative: 'We are at the beginning of our journey, and that is part of our advantage. We are building Hindura with a mindset of curiosity, craftsmanship and continuous improvement—looking at how modern construction methods can make hospitality projects more efficient without taking away the character that makes a place special.',
  vision: 'To become a trusted construction partner for India’s next generation of resorts, retreats and hospitality destinations.',
  mission: 'To make thoughtful hospitality construction more accessible through better planning, prefabrication, disciplined execution and design-led thinking.'
};

export const foundersStory = {
  headline: 'Driven by ambition, shaped by precision.',
  subheadline: 'The Story of Hindura',
  storyParagraphs: [
    'Hindura was founded in Indore, Madhya Pradesh, by Garv Jain and Kushal Goyal with a shared conviction: modern hospitality projects shouldn’t be bogged down by traditional, slow, and unpredictable on-site construction.',
    'Having observed the acute pain points in conventional resort development—uncontrolled timelines, severe ecological disruption on sensitive natural sites, escalating budgets, and fragmented contractor accountability—they set out to build a modern development partner that bridges architectural vision with factory precision.',
    'By establishing an integrated workflow connecting 3D design coordination, off-site dry fabrication, and rapid on-site assembly, Garv and Kushal created Hindura to deliver high-character hospitality destinations faster and with uncompromising craftsmanship.'
  ],
  leadership: [
    {
      name: 'Garv Jain',
      role: 'Chief Executive Officer & Co-Founder',
      focus: 'Vision, Strategic Growth & Client Partnerships',
      bio: 'Leading Hindura’s overarching vision, business strategy, and client partnerships. Garv focuses on scaling luxury prefabricated hospitality across India and ensuring every project is built around an unforgettable guest experience.',
      image: '/founder.jpg',
      location: 'Indore, India'
    },
    {
      name: 'Kushal Goyal',
      role: 'Co-Founder & Head of Execution',
      focus: 'Prefabrication Systems, Engineering & Site Delivery',
      bio: 'Championing Hindura’s prefabrication engineering, factory fabrication standards, and rapid on-site assembly logistics. Kushal ensures structural components meet exacting tolerances on time and within budget.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80',
      location: 'Indore, India'
    }
  ]
};
