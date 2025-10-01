import Link from 'next/link'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  location: string
  imageSrc: string
  alt: string
  description: string
}

interface ProjectGridProps {
  projects: Project[]
  title?: string
  description?: string
  columns?: 2 | 3
  showAll?: boolean
  limit?: number
}

export function ProjectGrid({ 
  projects, 
  title, 
  description, 
  columns = 3, 
  showAll = false,
  limit 
}: ProjectGridProps) {
  const displayProjects = limit ? projects.slice(0, limit) : projects

  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }

  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {(title || description) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6 text-balance">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-xl text-charcoal/80 leading-relaxed max-w-3xl mx-auto text-balance">
                {description}
              </p>
            )}
          </div>
        )}

        <div className={`grid ${gridClasses[columns]} gap-8 lg:gap-12`}>
          {displayProjects.map((project, index) => (
            <article 
              key={project.id} 
              className="group slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Link href="/portfolio" className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-french-gray/10 mb-6">
                  <Image
                    src={project.imageSrc}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm tracking-wide uppercase text-deep-green font-medium">
                      Custom Kitchen
                    </span>
                    <span className="text-sm text-charcoal/60">
                      {project.location}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl font-semibold text-charcoal group-hover:text-deep-green transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-charcoal/80 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {showAll && (
          <div className="text-center mt-16">
            <Link href="/portfolio" className="btn-ghost">
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
