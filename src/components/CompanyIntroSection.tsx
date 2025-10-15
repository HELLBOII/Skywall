import { ArrowRight, Award, Building2, Calendar, Star, Target, Eye, Lightbulb, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CompanyIntroSection() {
  const cardsData = [
    {
      id: 'goal',
      title: 'Our Goal',
      subtitle: 'Customer Satisfaction',
      icon: Target,
      gradient: 'from-primary-500 to-secondary-500',
      iconBg: 'bg-primary-50',
      iconColor: 'text-primary-600',
      borderColor: 'border-primary-200',
      titleColor: 'text-primary-800',
      description: 'We are committed to delivering exceptional value and exceeding customer expectations in every project we undertake.'
    },
    {
      id: 'values',
      title: 'Values',
      subtitle: 'Our Foundation',
      icon: Heart,
      gradient: 'from-blue-500 to-indigo-500',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      titleColor: 'text-blue-800',
      description: 'Quality, Safety, Operational Excellence, Innovation, Transparency, Team effort and building healthy relationship between project parties.'
    },
    {
      id: 'vision',
      title: 'Vision',
      subtitle: 'Our Future',
      icon: Eye,
      gradient: 'from-green-500 to-emerald-500',
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200',
      titleColor: 'text-green-800',
      description: 'Providing exemplary services, the best quality personnel and total commitments to the requirement of our client on establishing working relationship between us.'
    },
    {
      id: 'mission',
      title: 'Mission',
      subtitle: 'Our Purpose',
      icon: Lightbulb,
      gradient: 'from-purple-500 to-violet-500',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      titleColor: 'text-purple-800',
      description: 'Providing excellent quality of skilled services with the needs of our business partners by creating healthy atmosphere and generate more business opportunities.'
    }
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5" />
      
      <div className="px-2 container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-left">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center space-x-2 sm:space-x-3 animate-fade-in-left animation-delay-200">
                        <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
                        <span className="text-xs sm:text-sm font-semibold text-primary-600 tracking-wider uppercase">
                          Since 2018
                        </span>
                        <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500" />
                      </div>
                      
                      <div className="space-y-2 animate-fade-in-up animation-delay-300">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-light text-gray-700">
                          Building Dreams Into
                        </h2>
                        
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-800 leading-tight">
                          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            Reality With Excellence
                          </span>
                          <br />
                          <span className="text-dark-800">& Innovation In UAE</span>
                        </h1>
                      </div>
                    </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg animate-fade-in-up animation-delay-400">
              Sky Wall Contracting LLC delivers comprehensive construction services including 
              Civil & Structural Engineering, Mechanical & Electrical Engineering, Fire Protection 
              & Life Safety Engineering, and complete project management – all provided in-house.
            </p>

            {/* Stats - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 py-4 sm:py-6 animate-fade-in-up animation-delay-500">
              <div className="flex items-center justify-start space-x-3 group p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-200/30 hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300">
                  <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold text-primary-700">50+</div>
                  <div className="text-xs sm:text-sm text-primary-600 font-medium">Projects</div>
                </div>
              </div>
              <div className="flex items-center justify-start space-x-3 group p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-secondary-50 to-secondary-100/50 border border-secondary-200/30 hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full group-hover:from-secondary-600 group-hover:to-secondary-700 transition-all duration-300">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold text-secondary-700">6+</div>
                  <div className="text-xs sm:text-sm text-secondary-600 font-medium">Years</div>
                </div>
              </div>
              <div className="flex items-center justify-start space-x-3 group p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-200/30 hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold text-primary-700">100%</div>
                  <div className="text-xs sm:text-sm text-primary-600 font-medium">Quality</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up animation-delay-600">
              <Link
                to="/about"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-4 py-3 sm:px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 group text-sm sm:text-base"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white px-4 py-3 sm:px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg shadow-md group text-sm sm:text-base"
              >
                <span>Get Quote</span>
                <Award className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Cards Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 animate-fade-in-up animation-delay-200">
            {cardsData.map((card, index) => {
              const IconComponent = card.icon
              const delayClass = index === 0 ? 'animation-delay-100' : 
                                index === 1 ? 'animation-delay-200' : 
                                index === 2 ? 'animation-delay-300' : 'animation-delay-400'
              
              return (
                <div
                  key={card.id}
                  className={`group p-3 sm:p-4 rounded-2xl ${card.iconBg} border ${card.borderColor} hover:shadow-lg transition-all duration-300 animate-fade-in-up ${delayClass}`}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                    <div className={`p-2 ${card.iconBg} rounded-full border ${card.borderColor} group-hover:shadow-md transition-all duration-300`}>
                      <IconComponent className={`h-4 w-4 sm:h-5 sm:w-5 ${card.iconColor}`} />
                    </div>
                    <h3 className={`text-lg sm:text-2xl font-bold ${card.titleColor}`}>
                      {card.title}
                    </h3>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <p className={`text-sm sm:text-base font-medium ${card.iconColor}`}>
                      {card.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
