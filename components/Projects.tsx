'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import TextReveal from './TextReveal'
import MagneticButton from './MagneticButton'

const projects = [
  {
    id: 1,
    title: 'Real-Time Analytics Platform',
    description: 'Built a scalable real-time analytics platform processing millions of events per day. Implemented using Apache Kafka, Spark Streaming, and React for visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['Python', 'Apache Kafka', 'Spark', 'React', 'PostgreSQL'],
    category: 'Data Engineering',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Data Pipeline',
    description: 'Designed and implemented an ETL pipeline for processing e-commerce transactions. Reduced processing time by 50% and improved data quality through automated validation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['Python', 'Airflow', 'Snowflake', 'dbt', 'AWS'],
    category: 'Data Engineering',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Cloud Infrastructure Dashboard',
    description: 'Developed a comprehensive dashboard for monitoring cloud infrastructure. Features real-time metrics, cost analysis, and automated alerting.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'],
    category: 'Full Stack',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Machine Learning Pipeline',
    description: 'Created an end-to-end ML pipeline for predictive analytics. Includes data preprocessing, model training, and deployment with automated retraining.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    technologies: ['Python', 'TensorFlow', 'Kubernetes', 'MLflow', 'FastAPI'],
    category: 'Data Engineering',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'API Gateway & Microservices',
    description: 'Architected and implemented a microservices-based API gateway handling 1M+ requests daily. Features include rate limiting, authentication, and load balancing.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    technologies: ['Go', 'Kubernetes', 'Redis', 'GraphQL', 'Docker'],
    category: 'Backend',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Data Warehouse Migration',
    description: 'Led migration from on-premise data warehouse to cloud-based solution. Improved query performance by 3x and reduced costs by 40%.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['Snowflake', 'Python', 'dbt', 'Airflow', 'AWS'],
    category: 'Data Engineering',
    link: '#',
    github: '#',
  },
]

const categories = ['All', 'Data Engineering', 'Full Stack', 'Backend']

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <TextReveal direction="down" className="text-center mb-8 md:mb-12">
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white glitch"
          >
            Featured Projects
          </h2>
        </TextReveal>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
          role="tablist"
          aria-label="Project categories"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
              }`}
              role="tab"
              aria-selected={selectedCategory === category}
              aria-controls="projects-grid"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          id="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="tabpanel"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-gray-800 overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <motion.div 
                className="relative h-48 overflow-hidden shimmer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600"></div>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <span className="text-white text-4xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </span>
                </motion.div>
                <div className="absolute top-4 right-4">
                  <motion.span 
                    className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-primary-600 dark:text-primary-400 rounded-full text-xs font-semibold"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {project.category}
                  </motion.span>
                </div>
              </motion.div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  <MagneticButton strength={0.2}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded transition-colors"
                      aria-label={`View ${project.title} project`}
                    >
                      View Project
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        whileHover={{ x: 3 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </motion.svg>
                    </a>
                  </MagneticButton>
                  <MagneticButton strength={0.2}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium text-sm flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      GitHub
                      <motion.svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </motion.svg>
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

