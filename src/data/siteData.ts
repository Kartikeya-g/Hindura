import {
  WhatWeBuildItem,
  ServiceItem,
  ConstructionSystemItem,
  ProcessStage,
  WhyHinduraItem,
  SectorItem,
  PrefabTypology,
  LeadershipMember,
  ServiceDivision
} from '../types';

export const companyDetails = {
  name: 'Hindura Building Solutions Pvt. Ltd.',
  shortName: 'Hindura',
  headline: 'Innovation in every structure',
  positioningStatement:
    'Hindura Building Solutions Pvt. Ltd. is a full-spectrum real estate development advisory and construction consultancy headquartered in Indore, Madhya Pradesh, and established in 2024. We work at the confluence of land, design, and delivery — advising landowners, developers, and institutions, and where needed, building alongside them.',
  tagline: 'Real Estate Advisory · Construction Consultancy · Project Management',
  eyebrow: 'INDORE · INDIA · ESTABLISHED 2024',
  office: '102 Pukhraj Corporate, Navlakha, Indore, Madhya Pradesh',
  email: 'garvarihant@gmail.com',
  phonePrimary: '+91 98937-01528',
  phoneSecondary: '+91 88899-33365',
  website: 'https://hindura-final.vercel.app',
  footerStatement:
    'Hindura Building Solutions — Innovation in every structure. Real estate development advisory, construction consultancy and project management. Indore · India · Established 2024.',
  footerMotto: 'Advising landowners, developers, and institutions. Where needed, building alongside them.',
  established: '2024'
};

export const leadershipQuotes = {
  founders: {
    quote:
      "We started Hindura on a simple conviction: that India's next chapter of growth will be written outside its largest cities — and that it deserves the same rigour, and more heart, than the biggest names in the business bring to it.",
    authors: 'Garv Jain, Founder & CEO · Kushal Goyal, Co-Founder & COO',
    garvTitle: 'Garv Jain, Founding Partner',
    kushalTitle: 'Kushal Goyal, Co-Founding Partner, Business Development'
  },
  managingDirector: {
    quote:
      "Clients don't hire a consultant for a single service — they hire someone to be accountable for the outcome. That accountability is what Hindura is built to provide.",
    author: 'Shubham Jain, Managing Director',
    fullNote:
      "I joined Hindura after sixteen years of advising clients on land, real estate, and development decisions across Central India, and I have seen first-hand how often good projects stall — not for lack of vision, but because advisory, legal compliance, design, and execution live in different hands, answering to different incentives. Hindura was built to close that gap: one firm, one point of accountability, from the first land visit to a project's operational handover.\n\nAs Managing Director, my role is to make sure every client relationship carries that promise — that our recommendations are grounded in real due diligence, our timelines are realistic, and our sign-off means something."
  }
};

export const sectorsData: SectorItem[] = [
  {
    id: 'hospitality',
    number: '01',
    title: 'Hospitality',
    tagline: 'Heritage, boutique, resort destinations & farm stays',
    description:
      "Heritage properties, boutique hotels, resort destinations, and farm stays — with a particular focus on India's emerging Tier-II and Tier-III markets.",
    scope:
      'Feasibility, positioning, and brand and operator advisory for hotels and resorts. PMC. Farm stay and agro-tourism development.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Feasibility & market positioning studies',
      'Brand and operator selection advisory',
      'Project Management Consultancy (PMC)',
      'Farm stay and agro-tourism development'
    ]
  },
  {
    id: 'industrial',
    number: '02',
    title: 'Industrial',
    tagline: 'Warehousing, logistics & light-industrial facilities',
    description:
      'Warehousing, logistics, and light-industrial facilities designed around functional efficiency and regulatory compliance.',
    scope:
      'Land identification and permissible-use due diligence for industrial sites with statutory approvals and subsidies. Pre-leasing. Project management through construction and handover.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Land identification & permissible-use diligence',
      'Statutory approvals, TCP & government subsidies',
      'Industrial pre-leasing & tenant coordination',
      'Project management through construction & handover'
    ]
  },
  {
    id: 'residential',
    number: '03',
    title: 'Residential',
    tagline: 'Individual residences & master-planned communities',
    description:
      'Homes and communities built around how people actually want to live — from individual residences to planned layouts.',
    scope:
      'Master-planning and layout advisory for residential land. Design coordination from concept to execution.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Master-planning & layout advisory for residential land',
      'RERA compliance & statutory liaisoning',
      'Architectural design coordination',
      'PMC from ground-breaking to handover'
    ]
  },
  {
    id: 'mixed-use',
    number: '04',
    title: 'Mixed-Use Development',
    tagline: 'Integrated living, retail, commercial & leisure',
    description:
      'Integrated spaces where living, working, retail, and leisure are planned to coexist with intent, rather than compete for space.',
    scope:
      'Feasibility and market study for multi-use land parcels. Planning and development advisory across use classes. Coordinated design and project management across the full development.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Feasibility & market study for multi-use land parcels',
      'Planning and development advisory across asset classes',
      'Integrated commercial, retail & residential planning',
      'Coordinated design and project management'
    ]
  },
  {
    id: 'medical-wellness',
    number: '05',
    title: 'Medical & Wellness',
    tagline: 'Environments planned & built to support healing',
    description:
      'Environments planned and built to support healing and wellbeing — from wellness retreats to the infrastructure around integrated medical facilities. Hindura plans, designs, and delivers these environments; we are not a medical service provider.',
    scope:
      'Planning and design of wellness retreats and healing-led destinations. Infrastructure planning and PMC. Coordination with medical and wellness operators on facility requirements.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Planning and design of wellness retreats & destinations',
      'Infrastructure planning & PMC oversight',
      'Operator coordination for medical/wellness facility specs',
      'Biophilic & healing-led spatial planning'
    ]
  },
  {
    id: 'agro-tourism',
    number: '06',
    title: 'Agro-Tourism & Nature Stays',
    tagline: 'Farm stays, agro-resorts & rural destination assets',
    description:
      'Experiential farm stays and rural tourism asset planning and construction, blending pastoral landscapes with high-comfort hospitality infrastructure.',
    scope:
      'Agricultural land permissible-use diligence, agro-tourism master-planning, prefab cottage deployment, and rural leisure infrastructure.',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Farm stay & agro-tourism asset planning',
      'Permissible-use diligence on rural parcels',
      'Balinese- & Goan-influenced prefab cottages',
      'Visitor experience & low-impact infrastructure'
    ]
  }
];

export const howWeWorkStages: ProcessStage[] = [
  {
    step: '01',
    title: 'Land & Legal Diligence',
    description:
      'Land identification, permissible-use assessment, statutory approvals, title scrutiny, and RERA compliance advisory.',
    focus: 'Site intelligence, permissible-use audit, RERA compliance, subsidies'
  },
  {
    step: '02',
    title: 'Feasibility & Planning',
    description:
      'Use-case comparison, demand assessment, financial feasibility modeling, and layout master-planning for highest-and-best use.',
    focus: 'Market study, absorption analysis, financial feasibility, DPR/TCP'
  },
  {
    step: '03',
    title: 'Design & Coordination',
    description:
      'Architectural planning coordinated end-to-end with structural engineering, GIS inputs, BIM, and modular prefabrication.',
    focus: 'Architectural planning, engineering coordination, material palettes, MEP'
  },
  {
    step: '04',
    title: 'Delivery & PMC',
    description:
      'Project Management Consultancy (PMC), supervision and delivery oversight through construction with off-site fabrication and rapid assembly.',
    focus: 'On-site PMC supervision, factory quality control, timeline & cost audit'
  },
  {
    step: '05',
    title: 'Operations & Asset Support',
    description:
      'Facility management, operational upkeep, asset management oversight, leasing advisory, and brand/operator matching.',
    focus: 'Leasing advisory, brand/operator selection, facility management'
  }
];

export const serviceDivisions: ServiceDivision[] = [
  {
    id: 'advisory-planning',
    title: 'Advisory & Planning',
    summary:
      'Navigating land intelligence, compliance, feasibility, and development strategy to establish strong project foundations.',
    services: [
      {
        name: 'Land Intelligence',
        description: 'Site identification, land due diligence, and permissible-use assessment.'
      },
      {
        name: 'Legal & Compliance Advisory',
        description: 'Statutory approvals, RERA compliance, TCP coordination, and government liaisoning.'
      },
      {
        name: 'Feasibility & Market Study',
        description: 'Use-case comparison, demand assessment, absorption analysis, and financial feasibility.'
      },
      {
        name: 'Planning & Development Advisory',
        description: 'Master-planning, layout design, and DPR/TCP coordination.'
      }
    ]
  },
  {
    id: 'design-construction',
    title: 'Design & Construction',
    summary:
      'Translating strategic masterplans into high-precision, character-rich built environments through modern construction methods.',
    services: [
      {
        name: 'Design Coordination',
        description: 'Architectural planning coordinated end-to-end with engineering and GIS inputs.'
      },
      {
        name: 'Modular & Prefabricated Homes',
        description: 'Balinese- and Goan-influenced prefab typologies for faster, lighter-footprint construction.'
      },
      {
        name: 'Convention, Sports & Entertainment',
        description: 'Planning and delivery of large-format recreational and entertainment infrastructure.'
      },
      {
        name: 'Agro-Tourism Development',
        description: 'Farm stay and rural tourism asset planning and specialized construction.'
      },
      {
        name: 'Project Management Consultancy (PMC)',
        description: 'Full-spectrum supervision and delivery oversight through all construction stages.'
      }
    ]
  },
  {
    id: 'project-asset-management',
    title: 'Project & Asset Management',
    summary:
      'Protecting capital and ensuring operational longevity through dedicated PMC, facility maintenance, and asset oversight.',
    services: [
      {
        name: 'Project Management Consultancy (PMC)',
        description: 'End-to-end on-site engineering supervision, contractor control, quality assurance, and timeline enforcement.'
      },
      {
        name: 'Asset Management',
        description: 'Ongoing performance and value oversight of completed real estate and hospitality assets.'
      },
      {
        name: 'Facility Management',
        description: 'Operational upkeep, preventive maintenance, and management of built facilities.'
      }
    ]
  },
  {
    id: 'leasing-operator-advisory',
    title: 'Leasing & Operator Advisory',
    summary:
      'Unlocking commercial performance by connecting developed properties with leading operational brands and leasing partners.',
    services: [
      {
        name: 'Leasing & Operator Advisory',
        description: 'Commercial leasing and operator advisory for hotels, hostels, and long-stay residences.'
      },
      {
        name: 'Brand & Management Selection',
        description: 'Matching real estate assets with the right operating brand or management partner.'
      }
    ]
  }
];

export const prefabTypologiesData: PrefabTypology[] = [
  {
    id: 'prefabtech-cottage',
    number: '01',
    name: 'PrefabTech Cottage',
    tagline: 'Compact, modular guest cottage',
    description:
      'Compact, modular guest cottage, ideal for clustered farm-stay layouts and boutique resort clusters.',
    bestFor: 'Clustered farm stays, boutique resort cottages, eco-tourism chalets',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Factory-engineered steel & panel modules',
      'Rapid dry interlocking joint assembly',
      'Balinese- & Goan-influenced aesthetic options',
      'High thermal & acoustic insulation'
    ]
  },
  {
    id: 'skypod-glamping',
    number: '02',
    name: 'SkyPod Glamping Unit',
    tagline: 'Elevated pod-style accommodation',
    description:
      'Elevated pod-style unit purpose-built for glamping sites, hillside slopes, and panoramic viewpoints.',
    bestFor: 'Hillside destinations, cliffside viewpoints, luxury glamping',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Panoramic curved viewing glass frontage',
      'Elevated stilt mounting for minimal ground touch',
      'Prefabricated luxury ensuite bathroom',
      'Zero wet-casting on sensitive terrain'
    ]
  },
  {
    id: 'containerstay-unit',
    number: '03',
    name: 'ContainerStay Unit',
    tagline: 'Repurposed, modular container stay',
    description:
      'Repurposed, modular container-based stay for fast-turnaround projects and scalable property extensions.',
    bestFor: 'Fast-turnaround projects, adventure retreats, scalable resort expansion',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Heavy-gauge Corten steel structural strength',
      'Turnkey factory-fitted MEP & electrical conduits',
      'Modern timber & architectural metal cladding',
      'Compressed 30-day site delivery timeline'
    ]
  },
  {
    id: 'canopy-treehouse',
    number: '04',
    name: 'Canopy Treehouse',
    tagline: 'Elevated, structure-supported treehouse',
    description:
      'Elevated, structure-supported treehouse for canopy and forest settings that immerses guests in nature.',
    bestFor: 'Forest reserves, coffee/tea plantation stays, jungle lodges',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Independent engineered structural steel pylons',
      'Zero biological impact on living tree trunks',
      '360° elevated canopy viewing decks',
      'Weather-sealed engineered timber & thatch roof'
    ]
  },
  {
    id: 'ecotent',
    number: '05',
    name: 'EcoTent',
    tagline: 'Lightweight tensile accommodation',
    description:
      'Lightweight tensile or tented accommodation for immersive, minimal-footprint stays in sensitive ecological terrain.',
    bestFor: 'Wilderness camps, lakeside retreats, desert destinations',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Architectural PVDF UV-resistant tensile membrane',
      'High-grade thermal barrier double-roof layer',
      'Elevated composite timber plinth deck',
      '100% reversible, leave-no-trace footprint'
    ]
  }
];

export const whatWeBuildData: WhatWeBuildItem[] = [
  {
    id: 'resorts',
    title: 'Resorts',
    tagline: 'Nature-led retreats & destination stays',
    description:
      'Nature-led retreats, destination stays and experience-driven hospitality spaces that integrate seamlessly into their landscape.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Eco-sensitive site planning', 'High guest-comfort envelopes', 'Experiential public & private zones']
  },
  {
    id: 'hotels-boutique',
    title: 'Hotels & Boutique Stays',
    tagline: 'Distinctive guest accommodation',
    description:
      'Distinctive accommodation projects designed around guest experience, architectural character, and efficient execution.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Optimized operational circulation', 'Bespoke architectural facades', 'Rapid modular interior fit-outs']
  },
  {
    id: 'farmhouses-retreats',
    title: 'Farmhouses & Private Retreats',
    tagline: 'Character-rich country architecture',
    description:
      'Comfortable, character-rich spaces that connect architecture with the surrounding landscape, delivering sanctuary and community.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Deep verandas & courtyard living', 'High thermal insulation', 'Low-maintenance external finishes']
  },
  {
    id: 'modular-prefab',
    title: 'Modular & Prefabricated Spaces',
    tagline: 'Factory-precision structural systems',
    description:
      'Factory-fabricated structural and wall systems that support faster, higher-precision, and more controlled construction.',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Precision factory fabrication', 'Minimised on-site wet casting', 'Significant timeline compression']
  },
  {
    id: 'hospitality-extensions',
    title: 'Hospitality Extensions',
    tagline: 'Expansion villas, cottages & cabins',
    description:
      'Additional villas, cottages, cabins and support spaces that can expand an existing property without disrupting ongoing guest operations.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Zero operational downtime', 'Plug-and-play assembly', 'Aesthetic matching with existing property']
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'advisory-planning',
    number: '01',
    title: 'Advisory & Planning',
    description:
      'Land intelligence, legal and compliance advisory, feasibility and market study, and planning and development advisory.',
    category: 'Planning & Design',
    icon: 'Compass',
    details: [
      'Site identification, land due diligence & permissible use',
      'Statutory approvals, RERA compliance & liaisoning',
      'Use-case comparison & financial feasibility studies',
      'Master-planning, layout & DPR/TCP coordination'
    ]
  },
  {
    id: 'design-construction',
    number: '02',
    title: 'Design & Construction',
    description:
      'Design coordination, modular and prefabricated homes, convention, sports and entertainment infrastructure, and agro-tourism development.',
    category: 'Prefabrication & Fabrication',
    icon: 'Layers',
    details: [
      'End-to-end architectural & engineering coordination',
      'Balinese- & Goan-influenced prefab typologies',
      'Convention, sports & entertainment infrastructure',
      'Farm stay & agro-tourism asset development'
    ]
  },
  {
    id: 'project-asset-management',
    number: '03',
    title: 'Project & Asset Management',
    description:
      'Comprehensive Project Management Consultancy (PMC), asset management, and facility management for built assets.',
    category: 'Envelope & Execution',
    icon: 'Shield',
    details: [
      'Supervision & delivery oversight through construction (PMC)',
      'Ongoing performance & value oversight of completed assets',
      'Operational upkeep & preventive facility management',
      'Quality assurance & cost compliance auditing'
    ]
  },
  {
    id: 'leasing-operator-advisory',
    number: '04',
    title: 'Leasing & Operator Advisory',
    description:
      'Leasing and operator advisory for hotels, hostels, and long-stay residences, and brand and management selection.',
    category: 'Hospitality',
    icon: 'Sparkles',
    details: [
      'Commercial leasing & operator advisory for stays',
      'Matching assets with the right operating brand partner',
      'Contract negotiation & management selection',
      'Operational launch & revenue readiness alignment'
    ]
  }
];

export const processStagesData: ProcessStage[] = howWeWorkStages;

export const whyHinduraData: WhyHinduraItem[] = [
  {
    title: 'Full-Spectrum Capability',
    tagline: 'Land, design & delivery under one roof',
    description:
      'We bring land intelligence, legal compliance, architectural coordination, and construction execution together so you never have to coordinate competing consultants.',
    icon: 'Cpu'
  },
  {
    title: 'Tier-II & III India Focus',
    tagline: 'Built for emerging growth corridors',
    description:
      "We believe India's next chapter of growth is being written outside the mega-cities. We bring world-class rigour and deep local insight to Central India's key markets.",
    icon: 'Compass'
  },
  {
    title: 'Accountability for Outcomes',
    tagline: 'Single point of responsibility',
    description:
      "Clients don't hire a consultant for a single service — they hire someone to be accountable for the outcome. Hindura is built to provide that accountability.",
    icon: 'CheckCircle2'
  },
  {
    title: 'Prefabrication Specialism',
    tagline: 'Off-site precision & rapid assembly',
    description:
      'From compact cottages to elevated pods, our modular typologies compress timelines, eliminate weather delays, and reduce environmental impact.',
    icon: 'Layers'
  },
  {
    title: 'Experienced Leadership',
    tagline: '16+ years in Central India development',
    description:
      'Our team pairs over a decade and a half of seasoned land and real estate advisory expertise with young, agile innovation and design-led thinking.',
    icon: 'Users'
  },
  {
    title: 'Operational Readiness',
    tagline: 'Built to run profitably from day one',
    description:
      'We connect physical construction with brand and operator advisory, ensuring hospitality and commercial spaces operate efficiently post-handover.',
    icon: 'Hotel'
  }
];

export const constructionSystemsData: ConstructionSystemItem[] = [
  {
    id: 'premade-walls',
    name: 'Pre-Made Wall Systems',
    tag: 'Structural Speed & Precision',
    category: 'Structural Wall Matrix',
    coreMetric: '3x Speed vs Wet Masonry',
    description:
      'Steel-reinforced wall components designed for quick installation without conventional wet casting at every stage.',
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
    description:
      'Lightweight insulated panel solutions that support faster construction and improved building thermal performance.',
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
    description:
      'Panel-based construction options including EPS and other insulated assemblies tailored depending on project requirements.',
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
    description:
      'Metal roofing, shingles, and natural or synthetic thatch solutions, with reinforcement where required by the design.',
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
    description:
      'Metal, timber-inspired, and textured finish options that allow the exterior expression to match the project’s character.',
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
  paragraph1:
    'Hindura Living is our vision for hospitality and residential environments that feel connected to nature, comfort and community. It is about creating spaces that do more than look good—spaces that support slower mornings, shared experiences and a stronger connection with the setting around them.',
  paragraph2:
    'From natural materials and thoughtful layouts to wellness-oriented environments and community spaces, the idea is simple: build places people genuinely want to spend time in.'
};

export const aboutHinduraContent = {
  headline: 'Innovation in every structure. Grounded in real accountability.',
  whoWeAre:
    'Hindura Building Solutions Pvt. Ltd. is a full-spectrum real estate development advisory and construction consultancy headquartered in Indore, Madhya Pradesh, and established in 2024. We work at the confluence of land, design, and delivery — advising landowners, developers, and institutions, and where needed, building alongside them.',
  whyFounded:
    'Hindura Building Solutions was founded in Indore because we believe Tier-II and Tier-III India is where the built environment can still be shaped thoughtfully — before land, capital, and ambition outrun good judgment. Our own backgrounds sit at the intersection of land, design, and delivery, and Hindura exists to bring those disciplines together under one roof, for clients who would otherwise have to assemble them one consultant at a time.',
  lead:
    'Hindura Building Solutions Pvt. Ltd. is a full-spectrum real estate development advisory and construction consultancy headquartered in Indore, Madhya Pradesh, and established in 2024. We work at the confluence of land, design, and delivery — advising landowners, developers, and institutions, and where needed, building alongside them.',
  narrative:
    'We accompany projects from the earliest idea to full operational maturity. Engage us for a single mandate, or for the full journey. Across Central India and emerging markets, we bring institutional rigour, transparent due diligence, and dedicated PMC under one accountable roof.',
  vision:
    "To shape India's next chapter of growth outside its largest cities with thoughtful, rigorous built environments.",
  mission:
    'To unify land diligence, legal compliance, design coordination, and construction delivery under a single point of accountability.'
};

export const leadershipTeam: LeadershipMember[] = [
  {
    name: 'Shubham Jain',
    role: 'Managing Director',
    titleBadge: 'Managing Director',
    focus: 'Strategic Governance, Land Intelligence & Institutional Accountability',
    bio: 'With sixteen years of advising clients on land, real estate, and development decisions across Central India, Shubham brings deep market authority to Hindura. He ensures every client engagement is anchored in rigorous due diligence, realistic execution timelines, and uncompromised sign-off integrity.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
    location: 'Indore, India',
    quote:
      "Clients don't hire a consultant for a single service — they hire someone to be accountable for the outcome. That accountability is what Hindura is built to provide."
  },
  {
    name: 'Garv Jain',
    role: 'Founder & CEO',
    titleBadge: 'Founding Partner',
    focus: 'Vision, Strategic Growth & Client Partnerships',
    bio: "Leading Hindura's overarching vision and client partnerships. Garv focuses on scaling thoughtful real estate development and modern prefabricated construction across India's Tier-II and Tier-III markets, ensuring every project delivers enduring architectural character.",
    image: '/founder.jpg',
    location: 'Indore, India',
    quote:
      "We started Hindura on a simple conviction: that India's next chapter of growth will be written outside its largest cities — and that it deserves the same rigour, and more heart, than the biggest names in the business bring to it."
  },
  {
    name: 'Kushal Goyal',
    role: 'Co-Founder & COO',
    titleBadge: 'Co-Founding Partner, Business Development',
    focus: 'Execution, Prefabrication Systems & Site Delivery',
    bio: "Championing Hindura's engineering systems, factory fabrication partnerships, and business development. Kushal directs the end-to-end execution pipeline from 3D BIM coordination to rapid on-site assembly, ensuring structural precision on time and within budget.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80',
    location: 'Indore, India',
    quote:
      'Bringing advisory, legal compliance, design, and execution under one roof closes the gap that stalls so many good projects in India today.'
  }
];

export const foundersStory = {
  headline: 'Driven by ambition, shaped by precision.',
  subheadline: 'The Story of Hindura',
  storyParagraphs: [
    'Hindura was founded in Indore, Madhya Pradesh, because we believe Tier-II and Tier-III India is where the built environment can still be shaped thoughtfully — before land, capital, and ambition outrun good judgment.',
    'Our backgrounds sit at the intersection of land, design, and delivery, and Hindura exists to bring those disciplines together under one roof, for clients who would otherwise have to assemble them one consultant at a time.',
    'From our headquarters in Indore, we accompany projects from the earliest idea to full operational maturity — advising landowners, developers, and institutions, and where needed, building alongside them.'
  ],
  leadership: leadershipTeam
};
