import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import { companyInfo } from '../data/company-content-data'

export function Contact() {
  return (
    <div className="pt-20">
      {/* Contact Content */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
              <span className="text-xs sm:text-sm font-semibold text-primary-600 tracking-wider uppercase">Get in Touch</span>
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-light text-dark-800 mb-3 sm:mb-4">
              <span className="font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Contact Us
              </span>
              <br />
              <span className="text-dark-800 font-bold">we'd love to hear from you</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Ready to start your next project? Get in touch with our team of experts 
              and let's discuss how we can help bring your vision to life.
            </p>
          </div>

          {/* Company Address Details */}
          <div className="mb-8 animate-fade-in-up animation-delay-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-gray-600 text-sm">{companyInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <div className="p-2 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
                  <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">{companyInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
                <div className="p-2 bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg">
                  <Mail className="h-5 w-5 text-purple-600 flex-shrink-0" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">{companyInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
                <div className="p-2 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg">
                  <Globe className="h-5 w-5 text-orange-600 flex-shrink-0" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Website</p>
                  <p className="text-gray-600">{companyInfo.website}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mb-8 animate-fade-in-up animation-delay-400">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe 
                src="https://maps.google.com/maps?q=Al%20Karama%20-%20Dubai%2C%20UAE&#038;t=m&#038;z=10&#038;output=embed&#038;iwloc=near" 
                title="Al Karama - Dubai, UAE" 
                aria-label="Al Karama - Dubai, UAE"
                className="w-full h-96 border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
