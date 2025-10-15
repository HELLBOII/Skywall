import { teamMembers } from '../data/team-members-data'

export function TeamMembersSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
            <span className="text-xs sm:text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Team</span>
            <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500" />
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-light text-dark-800 mb-3 sm:mb-4">
            <span className="font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Meet the best team
            </span>
            <br />
            <span className="text-dark-800 font-bold">that makes it happen for you</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We are constantly growing, learning, and improving and our partners are steadily increasing.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl mb-2 sm:mb-3 lg:mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-200">
                <div className="aspect-[3/4] relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </div>
              
              <h3 className="text-sm sm:text-base lg:text-lg font-heading font-medium text-dark-800 mb-1 group-hover:text-primary-500 transition-colors duration-200">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
