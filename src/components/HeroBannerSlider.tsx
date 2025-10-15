import { Wrench, Award, Users, Clock, Building2, ChevronLeft, ChevronRight, Sparkles, Zap, Star, ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function HeroBannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const serviceImages = [
    {
      id: 1,
      src: "/images/services/services-construction.jpg",
      title: "Construction",
      description: "SKY Wall – a highly capable Civil General Contractor has contributed immensely to the growth of the UAE by way of its projects in construction of villa, residential building, commercial and industrial projects."
    },
    {
      id: 2,
      src: "/images/services/services-mep-works.jpg",
      title: "MEP Works",
      description: "MEP team of MultiTech is an expert task force to reckon when your commercial, residential, industrial buildings or projects needs to attain 100% efficiency."
    },
    {
      id: 3,
      src: "/images/services/services-interiors.jpg",
      title: "Interiors",
      description: "Our designs offer unlimited solutions through a careful managing and planning approach. With a vast experienced team of designers, we create interior works in recognized hotels, offices, hospitals and more."
    },
    {
      id: 4,
      src: "/images/services/services-scaffolding.jpg",
      title: "Scaffolding",
      description: "Scaffolding is an integral part of all kind of construction projects and it has been used ever since the first structure is built, Scaffolding supports to get access to the structures at height during construction."
    },
    {
      id: 5,
      src: "/images/services/services-approval.jpg",
      title: "Authority Approvals and Coordination",
      description: "We obtain authority approvals and liaise with authorities during the various stages of the project execution."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % serviceImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [serviceImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % serviceImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + serviceImages.length) % serviceImages.length)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Simplified Background Elements for Mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mobile-optimized gradient orbs */}
        <div className="absolute -top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -left-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-tr from-secondary-400/15 to-primary-400/15 rounded-full blur-3xl animate-float animation-delay-400"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-tl from-primary-500/20 to-secondary-500/20 rounded-full blur-2xl animate-float animation-delay-600"></div>
        
        {/* Simplified geometric shapes - hidden on mobile */}
        <div className="hidden sm:block absolute top-20 left-10 w-4 h-4 bg-primary-500 rotate-45 animate-pulse"></div>
        <div className="hidden sm:block absolute top-40 right-20 w-6 h-6 bg-secondary-500 rounded-full animate-bounce animation-delay-200"></div>
        <div className="hidden sm:block absolute bottom-32 left-1/4 w-3 h-3 bg-primary-400 rotate-12 animate-pulse animation-delay-400"></div>
        
        {/* Floating Icons - hidden on mobile for performance */}
        <div className="hidden lg:block absolute top-1/4 right-1/4 text-primary-400/20 animate-float-slow">
          <Sparkles className="h-8 w-8" />
        </div>
        
        <div className="hidden lg:block absolute bottom-1/3 left-1/3 text-secondary-400/20 animate-float-reverse">
          <Zap className="h-6 w-6" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen relative z-10">
        {/* Left Side - Content */}
        <div className="relative flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-pattern-dots"></div>
          
          <div className="container-custom p-4 sm:p-6 lg:p-8 relative z-10">
            <div className="text-white max-w-2xl animate-fade-in-up">
              {/* Company Name */}
              <div className="mb-6 sm:mb-8 animate-fade-in-left">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 shadow-lg shadow-primary-500/25">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Established 2018</span>
                  <Star className="h-2 w-2 sm:h-3 sm:w-3 ml-1" />
                </div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-heading font-bold leading-tight mb-4">
                  <span className="bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
                    SKY WALL
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-400 bg-clip-text text-transparent">
                    CONTRACTING LLC
                  </span>
                </h1>
                
                <div className="flex items-center space-x-2 sm:space-x-4 mb-6">
                  <div className="w-12 sm:w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"></div>
                  <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-secondary-500 to-secondary-400 rounded-full"></div>
                  <div className="w-4 sm:w-6 h-1 bg-gradient-to-r from-primary-400 to-primary-300 rounded-full"></div>
                </div>
              </div>

              {/* Company Description */}
              <div className="mb-6 sm:mb-8 animate-fade-in-up animation-delay-200">
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-light">
                  SKY Wall Contracting is a renowned engineering contracting company specialized in 
                  construction, maintenance and rehabilitation works with a decade experience in the 
                  UAE market and excels in operations, maintenance, technical support services and 
                  project management with specialist engineers & multi skilled manpower in the UAE.
                </p>
              </div>

              {/* Features Chips - Responsive */}
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up animation-delay-300">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/20 to-primary-600/20 backdrop-blur-sm text-primary-200 px-3 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium border border-primary-400/30 hover:border-primary-400/50 transition-all duration-300">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary-500/20 to-secondary-600/20 backdrop-blur-sm text-secondary-200 px-3 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium border border-secondary-400/30 hover:border-secondary-400/50 transition-all duration-300">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Expert Team</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/20 to-primary-600/20 backdrop-blur-sm text-primary-200 px-3 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium border border-primary-400/30 hover:border-primary-400/50 transition-all duration-300">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>24/7 Support</span>
                </div>
              </div>

              {/* CTA Buttons - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 animate-fade-in-up animation-delay-400">
                <Link 
                  to="/services"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 px-4 py-3 sm:px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 group relative overflow-hidden text-sm sm:text-base"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Wrench className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">Our Services</span>
                  <ArrowRight className="h-3 w-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link 
                  to="/projects"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm text-white hover:from-white/20 hover:to-white/10 border-2 border-white/30 hover:border-white/50 px-4 py-3 sm:px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-white/10 group relative overflow-hidden text-sm sm:text-base"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Building2 className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">Our Projects</span>
                  <Play className="h-3 w-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
        </div>
      </div>

        {/* Right Side - Service Images Carousel - Hidden on Mobile */}
        <div className="hidden lg:block relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden">
          {/* Simplified Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-tr from-secondary-500/20 to-primary-500/20 rounded-full blur-xl animate-pulse animation-delay-400"></div>
          </div>
          
          <div className="absolute inset-0">
            {/* Carousel Container */}
            <div className="relative w-full h-full">
              {/* Service Images */}
              <div 
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {serviceImages.map((service) => (
                  <div key={service.id} className="w-full h-full flex-shrink-0 relative group">
                    <img
                      src={service.src}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="text-center animate-fade-in-up animation-delay-200">
                        <h3 className="font-bold text-3xl mb-3 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                          {service.title}
                        </h3>
                        <p className="text-lg text-gray-200 max-w-md mx-auto leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-500 backdrop-blur-md text-white p-2 rounded-full hover:bg-primary-600 transition-all duration-300 z-10 border border-primary-400 hover:border-primary-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
                    
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-500 backdrop-blur-md text-white p-2 rounded-full hover:bg-primary-600 transition-all duration-300 z-10 border border-primary-400 hover:border-primary-300"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Service Counter */}
              <div className="absolute top-8 right-8 bg-gradient-to-r from-secondary-500 to-secondary-600 backdrop-blur-md rounded-full px-3 py-1 text-sm font-semibold text-white border border-secondary-400 animate-fade-in animation-delay-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>{currentSlide + 1} / {serviceImages.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
