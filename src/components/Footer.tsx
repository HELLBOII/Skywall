import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Our Clients', href: '/clients' },
  { name: 'Contact Us', href: '/contact' },
]

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100085893777747', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/winner_holistic/', icon: Instagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/winnerholisticconsultants/', icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="bg-primary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-3 py-8 sm:py-12 lg:py-16">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6 animate-fade-in-up">
                    <div className="flex justify-center md:justify-start">
                      <img
                        src="https://i0.wp.com/www.skywallcontracting.com/wp-content/uploads/2022/09/cropped-sky-wall.png?fit=800%2C213&ssl=1"
                        alt="Sky Wall Contracting LLC"
                        className="h-12 sm:h-14 lg:h-16 w-auto"
                      />
                    </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-center md:text-left max-w-md mx-auto md:mx-0">
              Sky Wall Contracting LLC delivers comprehensive construction services including 
              Civil & Structural Engineering, Mechanical & Electrical Engineering, Fire Protection 
              & Life Safety Engineering, and complete project management.
            </p>
            
                    {/* Social Links */}
                    <div className="flex items-center justify-center md:justify-start space-x-3 sm:space-x-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 sm:p-3 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                          aria-label={`Follow us on ${social.name}`}
                        >
                          <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                        </a>
                      ))}
                    </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up animation-delay-200">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-dark-800 mb-4 sm:mb-6 text-center md:text-left">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className="group flex items-center justify-center md:justify-start text-gray-600 hover:text-primary-600 transition-colors duration-300 w-fit mx-auto md:mx-0"
                            >
                              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                              <span className="font-medium text-sm sm:text-base">{item.name}</span>
                            </Link>
                          </li>
                        ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up animation-delay-400">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-dark-800 mb-4 sm:mb-6 text-center md:text-left">Contact Details</h3>
               <div className="space-y-2 sm:space-y-3">
                 <a
                   href="tel:+97142655428"
                   className="flex items-center space-x-3 p-2 sm:p-3 hover:bg-white/50 rounded-lg transition-colors duration-300"
                 >
                   <div className="p-1.5 sm:p-2 bg-primary-500 rounded-lg flex-shrink-0">
                     <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                   </div>
                   <div className="min-w-0">
                     <p className="text-gray-600 text-xs sm:text-sm font-medium">Phone</p>
                     <p className="text-dark-800 font-bold text-sm sm:text-base lg:whitespace-nowrap">+971 4 2655428</p>
                   </div>
                 </a>
                 
                 <a
                   href="mailto:info@skywallcontracting.com"
                   className="flex items-center space-x-3 p-2 sm:p-3 hover:bg-white/50 rounded-lg transition-colors duration-300"
                 >
                   <div className="p-1.5 sm:p-2 bg-blue-500 rounded-lg flex-shrink-0">
                     <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                   </div>
                   <div className="min-w-0">
                     <p className="text-gray-600 text-xs sm:text-sm font-medium">Email</p>
                     <p className="text-dark-800 font-bold text-sm sm:text-base break-all lg:break-normal lg:whitespace-nowrap">info@skywallcontracting.com</p>
                   </div>
                 </a>
                 
                 <div className="flex items-center space-x-3 p-2 sm:p-3">
                   <div className="p-1.5 sm:p-2 bg-green-500 rounded-lg flex-shrink-0">
                     <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                   </div>
                   <div className="min-w-0">
                     <p className="text-gray-600 text-xs sm:text-sm font-medium">Address</p>
                     <p className="text-dark-800 font-bold text-sm sm:text-base lg:whitespace-nowrap">Al Karama - Dubai, UAE</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
