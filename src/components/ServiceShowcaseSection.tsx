import { ArrowRight} from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/service-offerings-data'


export function ServiceShowcaseSection() {

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
            <span className="text-xs sm:text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Expertise</span>
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-light text-dark-800 mb-3 sm:mb-4 animate-fade-in-up animation-delay-300">
            <span className="font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            <span className="text-dark-800 font-bold">Engineering Solutions</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            We provide inspired solutions and we do it with passion. Our goal is to add value 
            to your investment through architectural elegance and sound management plans.
          </p>
        </div>

        {/* Services Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8 animate-fade-in-up animation-delay-500">
          <div className="mb-4 lg:mb-0">
            <div className="text-xs font-semibold text-primary-600 tracking-wider uppercase mb-1 animate-fade-in-left animation-delay-600">
              / Services We Offer
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-dark-800 mb-1 sm:mb-2 animate-fade-in-left animation-delay-700">
              Certified Excellence
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl animate-fade-in-left animation-delay-800">
              From civil engineering to project management, we've got you covered.
            </p>
          </div>
          
          <div className="mt-3 sm:mt-4 lg:mt-0 animate-fade-in-right animation-delay-900">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-primary-500 hover:shadow-lg hover:shadow-primary-500/25 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-bold transition-shadow duration-300 text-sm sm:text-base"
            >
              <span>View All Services</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="relative animate-fade-in-up animation-delay-1000">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const delayClass = index === 0 ? 'animation-delay-100' : 
                                index === 1 ? 'animation-delay-200' : 
                                index === 2 ? 'animation-delay-300' : 'animation-delay-400'
              
              return (
                <div
                  key={service.id}
                  className={`relative rounded-2xl shadow-lg overflow-hidden border border-gray-100 min-h-[300px] sm:min-h-[400px] animate-fade-in-up ${delayClass}`}
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Arrow Button - Top Right */}
                  <div className="absolute top-4 right-4 z-20 animate-fade-in-up animation-delay-200">
                    <Link
                      to="/services"
                      className="inline-flex items-center justify-center w-10 h-10 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group/arrow"
                    >
                      <ArrowRight className="h-4 w-4 group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 p-2 h-full flex flex-col justify-end">
                    <div className="flex items-center space-x-3 mb-3 animate-fade-in-up animation-delay-300">
                      <span className="text-2xl font-bold text-primary-400">0{index + 1}</span>
                      <h3 className="text-xl font-heading font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                    
                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 mb-4 animate-fade-in-left animation-delay-400" />
                    
                    <p className="text-sm text-gray-200 leading-relaxed mb-4 line-clamp-2 animate-fade-in-up animation-delay-500">
                      {service.description}
                    </p>
                    
                    {/* Features Preview */}
                    <div className="flex flex-wrap gap-2 animate-fade-in-up animation-delay-600">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-secondary-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-secondary-400/50"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
          </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary-500/10 to-primary-500/10 rounded-full blur-xl" />
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
