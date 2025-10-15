import { healthSafetyPolicy, qualityPolicy } from '../data/company-content-data'
import { Shield, Award, CheckCircle } from 'lucide-react'

export function CompanyPolicySection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
            <span className="text-xs sm:text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Commitment</span>
            <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-dark-800 mb-4 sm:mb-6">
            Company <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Policies</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            Our commitment to excellence through comprehensive policies that guide our operations and ensure the highest standards.
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Health & Safety Policy */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col animate-fade-in-up">
            {/* Policy Header */}
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 rounded-lg sm:rounded-xl shadow-sm">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-gray-800">{healthSafetyPolicy.title}</h3>
                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mt-1 sm:mt-2"></div>
              </div>
            </div>

            {/* Policy Content */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              {healthSafetyPolicy.content.split('\n\n').slice(0, 3).map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Bottom Section - Key Points and Signature */}
            <div className="mt-auto">
              {/* Key Points */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center text-xs sm:text-sm">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-600 mr-2" />
                  Key Commitments
                </h4>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li className="flex items-start">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    Zero incidents and injuries as core business value
                  </li>
                  <li className="flex items-start">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    Well-trained and fully competent workforce
                  </li>
                  <li className="flex items-start">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    Continual improvement through effective implementation
                  </li>
                </ul>
              </div>

              {/* Signature */}
              <div className="flex items-center space-x-2 sm:space-x-3 pt-3 sm:pt-4 border-t border-gray-200">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
                  <img 
                    src="/images/team/team-member-4.jpg" 
                    alt="Managing Director" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Managing Director</p>
                  <p className="font-semibold text-gray-900 text-xs sm:text-sm">SKY Wall Contracting LLC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Policy */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col animate-fade-in-up animation-delay-200">
            {/* Policy Header */}
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 rounded-lg sm:rounded-xl shadow-sm">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-gray-800">{qualityPolicy.title}</h3>
                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-1 sm:mt-2"></div>
              </div>
            </div>

            {/* Policy Content */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              {qualityPolicy.content.split('\n\n').slice(0, 3).map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Bottom Section - Key Points and Signature */}
            <div className="mt-auto">
              {/* Key Points */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center text-xs sm:text-sm">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 mr-2" />
                  Quality Objectives
                </h4>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li className="flex items-start">
                    <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    First choice for all stakeholders
                  </li>
                  <li className="flex items-start">
                    <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    Lean and agile work processes
                  </li>
                  <li className="flex items-start">
                    <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    Continual improvement through transformation
                  </li>
                </ul>
              </div>

              {/* Signature */}
              <div className="flex items-center space-x-2 sm:space-x-3 pt-3 sm:pt-4 border-t border-gray-200">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
                  <img 
                    src="/images/team/team-member-4.jpg" 
                    alt="General Manager" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-600">General Manager</p>
                  <p className="font-semibold text-gray-900 text-xs sm:text-sm">SKY Wall Contracting LLC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
