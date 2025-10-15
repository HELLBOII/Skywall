import { useState } from 'react'
import { X, MapPin, Grid3X3, CheckCircle, Clock, User } from 'lucide-react'
import { projects, projectCategories } from '../data/project-portfolio-data'

export function ProjectPortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.status === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'All':
        return <Grid3X3 className="h-4 w-4" />
      case 'Completed':
        return <CheckCircle className="h-4 w-4" />
      case 'Ongoing':
        return <Clock className="h-4 w-4" />
      default:
        return <Grid3X3 className="h-4 w-4" />
    }
  }

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
            <span className="text-xs sm:text-sm font-semibold text-primary-600 tracking-wider uppercase">Our Work</span>
            <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500" />
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-light text-dark-800 mb-3 sm:mb-4">
            <span className="font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Our Projects
            </span>
            <br />
            <span className="text-dark-800 font-bold">delivering excellence across UAE</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of completed projects across industrial, commercial, residential, 
            and infrastructure sectors. Each project showcases our commitment to quality and innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up animation-delay-200">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {getCategoryIcon(category)}
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openProjectModal(project)}
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg lg:hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className={`text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center space-x-1 ${
                      project.status === 'Completed' 
                        ? 'bg-primary-500' 
                        : 'bg-secondary-500'
                    }`}>
                      {project.status === 'Completed' ? (
                        <CheckCircle className="h-3 w-3" />
                      ) : (
                        <Clock className="h-3 w-3" />
                      )}
                      <span>{project.status}</span>
                    </span>
                  </div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <h3 className="text-lg sm:text-xl font-heading font-medium text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl max-w-6xl w-full max-h-[98vh] sm:max-h-[95vh] overflow-hidden mx-2 sm:mx-0">
              {/* Header with Project Info and Close Button */}
              <div className="relative p-3 sm:p-4 lg:p-6 border-b border-gray-200">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 bg-white/90 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                
                {/* Project Info in Header */}
                <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4 pr-10 sm:pr-12 lg:pr-16">
                  <img
                    src={selectedProject.images[0]}
                    alt={selectedProject.title}
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover rounded-lg flex-shrink-0 mx-auto sm:mx-0"
                  />
                  <div className="flex-1 text-center sm:text-left w-full">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start mb-3 sm:mb-2 space-y-2 sm:space-y-0 sm:space-x-2">
                      <h3 className="text-base sm:text-lg lg:text-xl font-heading font-medium text-dark-800 leading-tight break-words">
                        {selectedProject.title}
                      </h3>
                      <div className={`inline-flex items-center space-x-1 px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                        selectedProject.status === 'Completed' 
                          ? 'bg-primary-500 text-white' 
                          : 'bg-secondary-500 text-white'
                      }`}>
                        {selectedProject.status === 'Completed' ? (
                          <CheckCircle className="h-3 w-3" />
                        ) : (
                          <Clock className="h-3 w-3" />
                        )}
                        <span>{selectedProject.status}</span>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2 sm:space-y-1 sm:flex-row sm:items-center sm:space-x-3 lg:space-x-4 text-gray-600 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="break-words">{selectedProject.location}</span>
                      </div>
                      {selectedProject.client && selectedProject.client !== '' && (
                        <div className="flex items-center space-x-1 min-w-0">
                          <User className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{selectedProject.client}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-4 lg:p-6 overflow-y-auto max-h-[calc(98vh-140px)] sm:max-h-[calc(95vh-120px)]">
                {/* Project Images Gallery */}
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                    {selectedProject.images.map((image, index) => (
                      <div key={index} className="group cursor-pointer">
                        <img
                          src={image}
                          alt={`${selectedProject.title} - Image ${index + 1}`}
                          className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
