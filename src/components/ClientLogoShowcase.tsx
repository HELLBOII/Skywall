export function ClientLogoShowcase() {
  // Consultant images from team members
  const consultantImages = [
    '/images/clients/client-logo-7.png',
    '/images/clients/client-logo-13.png',
    '/images/clients/client-logo-8.png',
    '/images/clients/client-logo-14.png',
    '/images/clients/client-logo-15.png',
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
            <span className="text-xs sm:text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Team</span>
            <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500" />
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-light text-dark-800 mb-3 sm:mb-4">
            <span className="font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Trusted Consultants
            </span>
            <br />
            <span className="text-dark-800 font-bold">bring expertise to every project</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Our team of experienced professionals and consultants who bring expertise to every project
          </p>
        </div>

        {/* Consultant Logos Infinite Scroll */}
        <div className="relative mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up animation-delay-200">
          <div className="overflow-hidden">
            <div className="flex space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 animate-scroll-left">
              {[...consultantImages, ...consultantImages, ...consultantImages].map((image, index) => (
                <div
                  key={`consultant-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-6 shadow-sm hover:shadow-md lg:hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className="flex items-center justify-center">
                      <img
                        src={image}
                        alt={`Consultant ${(index % consultantImages.length) + 1}`}
                        className="max-h-16 sm:max-h-18 md:max-h-20 lg:max-h-20 max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}