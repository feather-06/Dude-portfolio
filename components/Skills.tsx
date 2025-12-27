'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TextReveal from './TextReveal'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'Go'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'GraphQL', 'Microservices'],
  },
  {
    title: 'Data & Analytics',
    skills: ['Apache Spark', 'Pandas', 'NumPy', 'Airflow', 'dbt', 'Snowflake'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Git'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'BigQuery'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
  })

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
      id="skills"
      ref={ref}
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <TextReveal direction="up" className="text-center mb-12 md:mb-16">
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white glitch"
          >
            Skills & Technologies
          </h2>
        </TextReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateZ: 2,
                boxShadow: '0 20px 40px rgba(14, 165, 233, 0.2)'
              }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md dark:shadow-gray-800 hover:shadow-xl transition-all duration-300 tilt-3d"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-900 dark:text-primary-400">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * idx }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium cursor-default"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

