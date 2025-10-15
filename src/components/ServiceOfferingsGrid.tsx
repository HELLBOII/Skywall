import { services } from '../data/service-offerings-data'
import { InteractiveTooltip } from './InteractiveTooltip'

export function ServiceOfferingsGrid() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
            <span className="text-xs sm:text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Expertise</span>
            <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500" />
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-light text-dark-800 mb-3 sm:mb-4">
            <span className="font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Our Services
            </span>
            <br />
            <span className="text-dark-800 font-bold">are mainly divided into:</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We provide comprehensive engineering solutions with passion and expertise. 
            Our goal is to add value to your investment through architectural elegance and sound management plans.
          </p>
        </div>

        {/* Optimized Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Simplified Card Design */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-200"
                    loading="lazy"
                  />
                  
                  {/* Simplified Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Service Number */}
                  <div className="absolute top-3 left-3 w-6 h-6 sm:w-7 sm:h-7 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-heading font-semibold text-dark-800 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Simplified Features List */}
                  <div className="space-y-1">
                    {service.features.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                        <span className="text-xs text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optimized Services Breakdown Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 animate-fade-in-up animation-delay-200">
          {/* Simplified Header */}
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
              <span className="text-xs sm:text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Expertise</span>
              <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500" />
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-light text-dark-800 mb-3 sm:mb-4">
              <span className="font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Our Services
              </span>
              <br />
              <span className="text-dark-800 font-bold">are mainly divided into:</span>
            </h2>
          </div>

          {/* Optimized Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Civil Construction Work */}
            <div className="group animate-fade-in-up h-full" style={{ animationDelay: '0.05s' }}>
              <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-100 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-full overflow-hidden flex-shrink-0">
                  <img
                    src="/images/services/services-construction.jpg"
                    alt="Civil Construction Work"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Title Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4">
                    <div className="flex flex-col space-y-2 sm:space-y-3">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="bg-white/90 px-2 sm:px-3 py-1 rounded-full">
                          <span className="text-xs font-semibold text-primary-600">01</span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-heading font-bold text-white">
                          Civil Construction Work
                        </h4>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <InteractiveTooltip content="Residential" position="top">
                          <div className="flex items-center justify-center bg-orange-500 px-1 sm:px-2 py-1 rounded-full cursor-help">
                            <span className="text-white text-xs text-center">Residential</span>
                          </div>
                        </InteractiveTooltip>
                        <InteractiveTooltip content="Commercial" position="top">
                          <div className="flex items-center justify-center bg-orange-500 px-1 sm:px-2 py-1 rounded-full cursor-help">
                            <span className="text-white text-xs text-center">Commercial</span>
                          </div>
                        </InteractiveTooltip>
                        <InteractiveTooltip content="Villa" position="top">
                          <div className="flex items-center justify-center bg-orange-500 px-1 sm:px-2 py-1 rounded-full cursor-help">
                            <span className="text-white text-xs text-center">Villa</span>
                          </div>
                        </InteractiveTooltip>
                        <InteractiveTooltip content="Industrial" position="top">
                          <div className="flex items-center justify-center bg-orange-500 px-1 sm:px-2 py-1 rounded-full cursor-help">
                            <span className="text-white text-xs text-center">Industrial</span>
                          </div>
                        </InteractiveTooltip>
                        <InteractiveTooltip content="Core and shell" position="top">
                          <div className="flex items-center justify-center bg-orange-500 px-1 sm:px-2 py-1 rounded-full cursor-help">
                            <span className="text-white text-xs text-center">Core and shell</span>
                          </div>
                        </InteractiveTooltip>
                        <InteractiveTooltip content="MEP works" position="top">
                          <div className="flex items-center justify-center bg-orange-500 px-1 sm:px-2 py-1 rounded-full cursor-help">
                            <span className="text-white text-xs text-center">MEP works</span>
                          </div>
                        </InteractiveTooltip>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                
            {/* MEP Works */}
            <div className="group animate-fade-in-up h-full" style={{ animationDelay: '0.1s' }}>
              <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-100 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-full overflow-hidden flex-shrink-0">
                  <img
                    src="/images/services/services-mep-works.jpg"
                    alt="MEP Works"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Title Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4">
                    <div className="flex flex-col space-y-2 sm:space-y-3">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="bg-white/90 px-2 sm:px-3 py-1 rounded-full">
                          <span className="text-xs font-semibold text-primary-600">02</span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-heading font-bold text-white">
                          MEP Works
                        </h4>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        <InteractiveTooltip content="Mechanical Works" position="top">
                          <div className="flex items-center justify-center bg-orange-500 px-1 sm:px-2 py-1 rounded-full cursor-help">
                            <span className="text-white text-xs text-center">Mechanical Works</span>
                          </div>
                        </InteractiveTooltip>
                        <InteractiveTooltip content="Electrical Works" position="top">
                          <div className="flex items-center justify-center bg-orange-500 px-1 sm:px-2 py-1 rounded-full cursor-help">
                            <span className="text-white text-xs text-center">Electrical Works</span>
                          </div>
                        </InteractiveTooltip>
                        <InteractiveTooltip content="Plumbing Works" position="top">
                          <div className="flex items-center justify-center bg-orange-500 px-1 sm:px-2 py-1 rounded-full cursor-help">
                            <span className="text-white text-xs text-center">Plumbing Works</span>
                          </div>
                        </InteractiveTooltip>
                        <InteractiveTooltip content="Fire Fighting" position="top">
                          <div className="flex items-center justify-center bg-orange-500 px-1 sm:px-2 py-1 rounded-full cursor-help">
                            <span className="text-white text-xs text-center">Fire Fighting</span>
                          </div>
                        </InteractiveTooltip>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                  
            {/* Interior Works */}
            <div className="group animate-fade-in-up h-full" style={{ animationDelay: '0.15s' }}>
              <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-100 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-full overflow-hidden flex-shrink-0">
                  <img
                    src="/images/services/services-interiors.jpg"
                    alt="Interior Works"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Title Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4">
                    <div className="flex flex-col space-y-2 sm:space-y-3">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="bg-white/90 px-2 sm:px-3 py-1 rounded-full">
                          <span className="text-xs font-semibold text-primary-600">03</span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-heading font-bold text-white">
                          Interior Works
                        </h4>
                      </div>
                      <div className="space-y-1">
                        <div className="flex gap-1">
                          <InteractiveTooltip content="Civil & Carpentry" position="top">
                            <div className="flex items-center justify-center bg-orange-500 px-1 py-1 rounded-full flex-1 cursor-help">
                              <span className="text-white text-xs text-center">Civil & Carpentry</span>
                            </div>
                          </InteractiveTooltip>
                          <InteractiveTooltip content="Electrical & Lighting" position="top">
                            <div className="flex items-center justify-center bg-orange-500 px-1 py-1 rounded-full flex-1 cursor-help">
                              <span className="text-white text-xs text-center">Electrical & Lighting</span>
                            </div>
                          </InteractiveTooltip>
                          <InteractiveTooltip content="Testing & Quality" position="top">
                            <div className="flex items-center justify-center bg-orange-500 px-1 py-1 rounded-full flex-1 min-w-0 cursor-help">
                              <span className="text-white text-xs text-center truncate">Testing & Quality</span>
                            </div>
                          </InteractiveTooltip>
                        </div>
                        <div className="flex gap-1">
                          <InteractiveTooltip content="Decorative & Finishing" position="top">
                            <div className="flex items-center justify-center bg-orange-500 px-1 py-1 rounded-full flex-1 min-w-0 cursor-help">
                              <span className="text-white text-xs text-center truncate">Decorative & Finishing</span>
                            </div>
                          </InteractiveTooltip>
                          <InteractiveTooltip content="Furnishing & Fit-out" position="top">
                            <div className="flex items-center justify-center bg-orange-500 px-1 py-1 rounded-full flex-1 min-w-0 cursor-help">
                              <span className="text-white text-xs text-center truncate">Furnishing & Fit-out</span>
                            </div>
                          </InteractiveTooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
