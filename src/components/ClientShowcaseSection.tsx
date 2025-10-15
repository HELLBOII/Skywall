import { ArrowRight, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { clients } from '../data/client-data'

export function ClientShowcaseSection() {
  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4 animate-fade-in-up animation-delay-200">
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
            <span className="text-xs sm:text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Partners</span>
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-light text-dark-800 mb-3 sm:mb-4 animate-fade-in-up animation-delay-300">
            <span className="font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Trusted
            </span>
            <br />
            <span className="text-dark-800 font-bold">by Industry Leaders</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            We have worked with great people and ambitious firms. Their satisfaction 
            is what speaks about our work.
          </p>
        </div>

        {/* Infinite Scroll Container - Mobile Optimized */}
        <div className="relative mb-8 sm:mb-12 animate-fade-in-up animation-delay-500 px-4 sm:px-6">
          {/* First Row - Left to Right */}
          <div className="overflow-hidden mb-4 sm:mb-8">
            <div className="flex space-x-4 sm:space-x-6 animate-scroll-left">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl shadow-lg border border-gray-200 flex items-center justify-center p-3 sm:p-4 bg-white"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="overflow-hidden">
            <div className="flex space-x-4 sm:space-x-6 animate-scroll-right">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl shadow-lg border border-gray-200 flex items-center justify-center p-3 sm:p-4 bg-white"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-in-up animation-delay-600">
          <Link
            to="/clients"
            className="group inline-flex items-center space-x-2 sm:space-x-3 bg-primary-500 hover:shadow-lg hover:shadow-primary-500/25 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base"
          >
            <Users className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
            <span>View All Clients</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
