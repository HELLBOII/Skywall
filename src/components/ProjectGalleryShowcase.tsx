import { pptImages } from '../data/company-content-data'

export function ProjectGalleryShowcase() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing our completed projects and ongoing construction work
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pptImages.projectImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Project {index + 1}</h3>
                  <p className="text-sm opacity-90">Construction Work</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
