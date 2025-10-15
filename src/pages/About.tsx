import { TeamMembersSection } from '../components/TeamMembersSection'
import { CompanyPolicySection } from '../components/CompanyPolicySection'
import { 
  Building2, 
  Users, 
  Award, 
  Shield, 
  Lightbulb, 
  CheckCircle, 
  Wrench,
  Hammer
} from 'lucide-react'

export function About() {
  return (
    <div className="pt-20">
      {/* Company Introduction Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
                  <span className="text-xs sm:text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Story</span>
                  <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500" />
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-dark-800 mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    SKY Wall Contracting LLC
                  </span>
                </h2>
                
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  SKY Wall Contracting is a renowned engineering contracting company specialized in construction, 
                  maintenance and rehabilitation works with a decade experience in the UAE market and excels in 
                  operations, maintenance, technical support services and project management.
                </p>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Established in 2012 at Dubai, United Arab Emirates. Our strength is to provide a complete set 
                  of services under one roof with well-qualified and highly experienced managers, engineers and 
                  multi skilled workers.
                </p>
                
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <div className="flex items-center space-x-2 text-primary-600">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base font-medium">Established 2012</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary-600">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base font-medium">Decade Experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary-600">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base font-medium">Complete Solutions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - About Us Image */}
            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-sm">
                <img
                  src="/images/about-us.jpg"
                  alt="About Sky Wall Contracting"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
              <span className="text-xs sm:text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Foundation</span>
              <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-dark-800 mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Values</span>
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              Our values define the way we work: Quality, Safety, Operational Excellence, Innovation, 
              Transparency, Team effort and building healthy relationship between project parties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: Shield, title: "Quality", description: "Committed to delivering excellence in every project" },
              { icon: Shield, title: "Safety", description: "Zero incidents and injuries is our core business value" },
              { icon: Award, title: "Excellence", description: "Operational excellence in all our services" },
              { icon: Lightbulb, title: "Innovation", description: "State-of-the-art technology for future buildings" },
              { icon: Users, title: "Teamwork", description: "Building healthy relationships with all parties" },
              { icon: CheckCircle, title: "Transparency", description: "Open communication and honest practices" }
            ].map((value, index) => (
              <div
                key={value.title}
                className="bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 rounded-lg sm:rounded-xl shadow-sm">
                    <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-800">{value.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
              <span className="text-xs sm:text-sm font-semibold text-primary-600 tracking-wider uppercase">What We Do</span>
              <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-dark-800 mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Main Verticals</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { 
                icon: Building2, 
                title: "Main Contracting Works", 
                description: "Complete construction solutions from planning to delivery",
                color: "from-slate-100 via-blue-50 to-indigo-100",
                iconColor: "text-slate-600"
              },
              { 
                icon: Wrench, 
                title: "Sub Contracting Works (MEP)", 
                description: "Mechanical, Electrical, and Plumbing expertise",
                color: "from-violet-100 via-purple-50 to-fuchsia-100",
                iconColor: "text-violet-600"
              },
              { 
                icon: Hammer, 
                title: "Labour Supply", 
                description: "Civil and MEP skilled workforce solutions",
                color: "from-rose-100 via-pink-50 to-red-100",
                iconColor: "text-rose-600"
              }
            ].map((service, index) => (
              <div
                key={service.title}
                className="bg-gradient-to-br from-purple-50 via-pink-50/50 to-rose-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 sm:p-4 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-sm`}>
                  <service.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${service.iconColor}`} />
                </div>
                
                <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-800 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Policies Section */}
      <CompanyPolicySection />

      {/* Team Section */}
      <TeamMembersSection />
    </div>
  )
}
