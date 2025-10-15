export interface TeamMember {
  id: string
  name: string
  position: string
  image: string
  description?: string
  bio?: string
}

export interface Service {
  id: string
  title: string
  description: string
  image: string
  features: string[]
  icon?: string
}

export interface Project {
  id: string
  title: string
  client: string
  location: string
  images: string[]
  category: string
  status: string
  consultant: string
}

export interface Client {
  id: string
  name: string
  logo: string
  website?: string
}

export interface JobOpening {
  id: string
  title: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract'
  experience: string
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  workingHours: string
}

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}

export interface HeroSlide {
  id: string
  title: string
  description: string
  client: string
  location: string
  scope: string
  backgroundImage: string
}
