import { HeroBannerSlider } from '../components/HeroBannerSlider'
import { ServiceShowcaseSection } from '../components/ServiceShowcaseSection'
import { ClientShowcaseSection } from '../components/ClientShowcaseSection'
import { CompanyIntroSection } from '../components/CompanyIntroSection'

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroBannerSlider />

      {/* Intro Section */}
      <CompanyIntroSection />

      {/* Services Section */}
      <ServiceShowcaseSection />

      {/* Clients Section */}
      <ClientShowcaseSection />
    </div>
  )
}
