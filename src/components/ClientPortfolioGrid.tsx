import { clients } from '../data/client-data'

export function ClientPortfolioGrid() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
            <span className="text-xs sm:text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Partners</span>
            <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500" />
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-light text-dark-800 mb-3 sm:mb-4">
            <span className="font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Our Clients
            </span>
            <br />
            <span className="text-dark-800 font-bold">trust us with their projects</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We have worked with great people and ambitious firms. Their satisfaction 
            is what speaks about our work.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-md hover:shadow-lg lg:hover:shadow-xl transition-all duration-300 hover:-translate-y-1 lg:hover:-translate-y-2 border border-gray-100 group-hover:border-primary-200">
                <div className="aspect-square flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-8 sm:max-h-12 lg:max-h-16 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
