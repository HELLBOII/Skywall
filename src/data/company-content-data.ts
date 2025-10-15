import { Service, TeamMember } from '../types'

// Company Information extracted from PPT
export const companyInfo = {
  name: 'SKY WALL CONTRACTING LLC',
  arabicName: 'سكاي وول للمقاولات ذ.م.م',
  address: 'P.O. Box: 66792, Al Karama - Dubai, UAE',
  phone: '04-2655 428',
  email: 'info@skywallcontracting.com',
  website: 'www.skywallcontracting.com',
  website2: 'www.rgestate.com'
}

// Health & Safety Policy from PPT
export const healthSafetyPolicy = {
  title: 'HEALTH & SAFETY POLICY',
  content: `We State that, SKY Wall Contracting LLC holds Health and Safety as core business value and is committed to creating zero incidents and injuries, where leadership passion and commitment are present at all levels, working safely enhances quality, improves productivity and generates value. Attitude and behavior replace static as a measures of success of people and enabled to make choices about their own and their neighbor's safety and to challenge the environment in which they work. Good safety behavior is admired, respected and recognized across the organization. We have a well-trained and fully competent workforce who actively contributes to the safe planning of their work.

We take pride in everyone returning home safely everyday.

The company recognizes the importance of discharging all is statutory obligations and duties. Our minimum health and safety obligations are required by relevant legislation and authoritative guidance. SKY Wall Contracting will take appropriate steps to meet and, in many cases, enhance these requirements.

SKY Wall Contracting LLC fully endorse this policy. They will ensure that the documents of Health Safety and Environment Management System is maintained, containing the arrangement and organizational details of how these requirements will be achieved. The management system is periodically reviewed to ensure it remains legally compliant achievable relevant and credible.

Continual improvement will be achieved by effective implementation of the above. Everyone working for SKY Wall Contracting LLC is required to support and promote this policy with the requirement and duties contained in the SMS –Safety Management System.`
}

// Quality Policy from PPT
export const qualityPolicy = {
  title: 'QUALITY POLICY',
  content: `SKY Wall Contracting LLC is committed to the delivery of Quality Products and Services. The objectives of our Quality Policy which forms part of our vision will be,

To be the company's first choice for all stakeholders to challenge and change the image of construction worldwide to be lean and agile in adopting work processes to complete with the world leading business.

The Board of Directors of SKY Wall Contracting LLC are committed to ensure that this Policy is implemented safely and in line with legislation, regulations, codes of practice and the requirements.

Continual improvement shall be achieved through the implementation of the transformation team, business improvement, teams business objectives, audit, analysis of data, corrective and preventive actions and Management reviews.`
}

// Manpower Strength from PPT
export const manpowerStrength = {
  title: 'MANPOWER STRENGTH',
  positions: [
    { role: 'Senior Project Manager (Unlimited License Engineer)', count: 2 },
    { role: 'Construction Manager', count: 2 },
    { role: 'Procurement Manager', count: 2 },
    { role: 'PRO', count: 1 },
    { role: 'General Foreman', count: 5 },
    { role: 'Charge in Hand', count: 10 },
    { role: 'Mason', count: 20 },
    { role: 'Steel Fixture', count: 40 },
    { role: 'Carpenter', count: 30 },
    { role: 'Electrician', count: 10 },
    { role: 'Plumber', count: 10 },
    { role: 'A/C Technician', count: 10 }
  ]
}

// Team Members from PPT
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Mr. Pandiyan Murugan',
    position: 'Civil Procurement Coordinator',
    image: '/images/team/pandiyan-murugan.png',
    bio: 'Experienced civil procurement coordinator with expertise in construction materials and project coordination.'
  },
  {
    id: '2',
    name: 'Ms. Kiruthika Murthi',
    position: 'MEP Procurement Coordinator',
    image: '/images/team/kiruthika-murthi.png',
    bio: 'Specialized in MEP procurement coordination with extensive knowledge in mechanical, electrical, and plumbing systems.'
  },
  {
    id: '3',
    name: 'Ms. Padmavathy M',
    position: 'HR & Admin',
    image: '/images/team/padmavathy-m.jpg',
    bio: 'Human resources and administration professional ensuring smooth operations and employee management.'
  },
  {
    id: '4',
    name: 'Ms. Nandhini Kanthasamy',
    position: 'Accountant',
    image: '/images/team/nandhini-kanthasamy.jpeg',
    bio: 'Financial management specialist handling accounting operations and financial reporting.'
  }
]

// Updated Services with PPT content
export const services: Service[] = [
  {
    id: '1',
    title: 'Construction',
    description: 'SKY Wall – a highly capable Civil General Contractor has contributed immensely to the growth of the UAE by way of its projects in construction of villa, residential building, commercial and industrial projects.',
    image: '/images/services/services-construction.jpg',
    features: [
      'Residential Construction',
      'Commercial Buildings',
      'Villa Construction',
      'Industrial Projects',
      'Core and Shell Works',
      'MEP Integration'
    ],
    icon: 'Building'
  },
  {
    id: '2',
    title: 'MEP Works',
    description: 'MEP team of MultiTech is an expert task force to reckon when your commercial, residential, industrial buildings or projects needs to attain 100% efficiency. We are one of the leading development contractors who take care right from planning, execution and delivery of your projects.',
    image: '/images/services/services-mep-works.png',
    features: [
      'Mechanical Works',
      'Electrical Works',
      'Plumbing Works',
      'Fire Fighting Systems',
      'Testing & Commissioning',
      '100% Efficiency Solutions'
    ],
    icon: 'Zap'
  },
  {
    id: '3',
    title: 'Interiors',
    description: 'Our designs offer unlimited solutions through a careful managing and planning approach. With a vast experienced team of designers, we create interior works in recognized hotels, offices, hospitals and more. Our services consist of supplying and installing soft and hard furniture in addition to soft furnishing, curtains, wall paper and accessories.',
    image: '/images/services/services-interiors.jpg',
    features: [
      'Civil & Carpentry Works',
      'Electrical & Lighting Works',
      'Decorative & Finishing Works',
      'Furnishing & Fit-out Works',
      'Testing & Quality Control',
      'Hotel & Office Interiors'
    ],
    icon: 'Palette'
  },
  {
    id: '4',
    title: 'Scaffolding',
    description: 'Scaffolding is an integral part of all kind of construction projects and it has been used ever since the first structure is built, Scaffolding supports to get access to the structures at height during construction. We are having highly skilled, well trained and certified scaffolders having wider experiences on all kind of scaffolding works.',
    image: '/images/services/services-scaffolding.jpg',
    features: [
      'Certified Scaffolders',
      'Height Access Solutions',
      'Construction Support',
      'Safety Compliance',
      'All Types of Scaffolding',
      'Professional Installation'
    ],
    icon: 'Shield'
  }
]

// Additional PPT Images for various sections
export const pptImages = {
  companyLogo: '/images/skywall-logo.png',
  companyLogoTransparent: '/images/skywall-logo-transparent.png',
  companyLogoWhite: '/images/skywall-logo-white.png',
  teamPhotos: [
    '/images/team/team-member-1.jpg',
    '/images/team/team-member-2.jpg',
    '/images/team/team-member-3.jpg',
    '/images/team/team-member-4.jpg',
    '/images/team/team-member-5.jpg',
    '/images/team/team-member-6.jpg',
    '/images/team/team-member-7.jpg',
    '/images/team/team-member-8.jpg',
    '/images/team/team-member-9.jpg',
    '/images/team/team-member-10.jpg',
    '/images/team/team-member-11.jpg',
    '/images/team/team-member-12.jpg',
    '/images/team/team-member-13.jpg',
    '/images/team/team-member-14.jpg',
    '/images/team/team-member-15.jpg'
  ],
  projectImages: [
    '/images/projects/jaddaf-water-1.jpg',
    '/images/projects/jaddaf-water-2.jpg',
    '/images/projects/jaddaf-water-3.jpg',
    '/images/projects/jaddaf-water-4.jpg',
    '/images/projects/jaddaf-water-5.jpg',
    '/images/projects/jaddaf-water-6.jpg',
    '/images/projects/jaddaf-water-7.jpg',
    '/images/projects/jaddaf-water-8.jpg',
    '/images/projects/dip-warehouse-1.jpg',
    '/images/projects/dip-warehouse-2.jpg',
    '/images/projects/dip-warehouse-3.jpg',
    '/images/projects/dip-warehouse-4.jpg',
    '/images/projects/dip-warehouse-5.jpg',
    '/images/projects/hotel-dip-1.jpg',
    '/images/projects/hotel-dip-2.jpg',
    '/images/projects/al-awir-villa-1.jpg',
    '/images/projects/labour-camp-1.jpg',
    '/images/projects/labour-camp-2.jpg',
    '/images/projects/labour-camp-3.jpg',
    '/images/projects/dic-warehouse-1.jpg',
    '/images/projects/dic-warehouse-2.jpg',
    '/images/projects/al-awir-compound-1.jpg',
    '/images/projects/osr-mall-1.jpg',
    '/images/projects/rb53-1.jpg',
    '/images/projects/rb53-2.jpg',
    '/images/projects/rb53-3.jpg',
    '/images/projects/rb53-4.jpg',
    '/images/projects/rc58-1.jpg',
    '/images/projects/rc58-2.jpg',
    '/images/projects/rc11-1.jpg',
    '/images/projects/rc11-2.jpg',
    '/images/projects/al-barsha-villa-1.jpg',
    '/images/projects/al-barsha-villa-2.jpg',
    '/images/projects/al-barsha-villa-3.jpg',
    '/images/projects/al-barsha-villa-4.jpg',
    '/images/projects/al-barsha-villa-5.jpg',
    '/images/projects/nad-al-sheba-1.jpg',
    '/images/projects/nad-al-sheba-2.jpg',
    '/images/projects/nad-al-sheba-3.jpg',
    '/images/projects/nad-al-sheba-4.jpg',
    '/images/projects/nad-al-sheba-5.jpg',
    '/images/projects/wadi-al-safa-1.jpg',
    '/images/projects/al-satwa-1.jpg',
    '/images/projects/samara-villas-1.jpg',
    '/images/projects/samara-villas-2.jpg',
    '/images/projects/samara-villas-3.jpg'
  ],
  serviceImages: [
    '/images/services/services-construction.jpg',
    '/images/services/services-mep-works.jpg',
    '/images/services/services-interiors.jpg',
    '/images/services/services-scaffolding.jpg'
  ],
  clientLogos: [
    '/images/clients/client-logo-1.png',
    '/images/clients/client-logo-2.png',
    '/images/clients/client-logo-3.png',
    '/images/clients/client-logo-4.png',
    '/images/clients/client-logo-5.png',
    '/images/clients/client-logo-6.png',
    '/images/clients/client-logo-7.png',
    '/images/clients/client-logo-8.png'
  ]
}
