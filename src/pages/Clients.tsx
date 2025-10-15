import { ClientPortfolioGrid } from '../components/ClientPortfolioGrid'
import { ClientLogoShowcase } from '../components/ClientLogoShowcase'

export function Clients() {
  return (
    <div className="pt-20">

      {/* Clients Grid */}
      <ClientPortfolioGrid />

      {/* PPT Client Logos */}
      <ClientLogoShowcase />
    </div>
  )
}
