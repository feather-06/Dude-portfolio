'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Responsible AI Co-op',
    company: 'Bangor Savings Bank',
    period: 'Jan 2025 – Jun 2025',
    description: [
      'Led the bank’s first AI development + procurement governance framework aligned to NIST AI RMF, defining controls for bias, explainability, HITL approvals, and data lineage across 3 AI use cases and 6 teams.',
      'Authored reusable governance artifacts (policy, AI intake workflow, model + vendor risk checklist), reducing review cycle time by 35% and improving stakeholder clarity (internal CSAT +20%).',
      'Designed and executed the bank’s first AI hackathon (40+ participants, 8 teams) focused on NPS drivers like transparency, response time, and personalization — delivered 7 working prototypes and 2 pilot-ready concepts.',
    ],
    technologies: ['Responsible AI', 'NIST AI RMF', 'Governance', 'HITL', 'Risk', 'AI Procurement'],
  },
  {
    title: 'Student Ambassador (Khoury College of Computer Science)',
    company: 'Northeastern University',
    period: 'Nov 2024 – Present',
    description: [
      'Represent Khoury as a Student Ambassador, creating a tight feedback loop between students, faculty, advisors, and Student Life to improve electives, co-curriculars, and campus experience.',
      'Designed and facilitated focus groups + pulse surveys, analyzing qualitative/quantitative feedback to produce structured recommendations that informed 3 implemented initiatives.',
      'Streamlined student support operations by triaging academic/career/student-life requests and standardizing routing templates + FAQs, reducing resolution time by 40%.',
    ],
    technologies: ['Stakeholder Mgmt', 'Ops', 'Surveys', 'Process Improvement'],
  },
  {
    title: 'SDE Intern (Retail Health Insurance Team)',
    company: 'Acko General Insurance',
    period: 'Jan 2023 – Jun 2023',
    description: [
      'Engineered AWS Lambda-based data pipelines to ingest/transform/sync operational data into Amazon Honeycode using DynamoDB Streams, S3, and CloudWatch monitoring.',
      'Optimized pipeline execution with concurrent processing + EventBridge scheduling, reducing latency by 30% and cloud costs by 18%.',
      'Developed Java/Spring Boot services for regulated health insurance workflows (pricing, policy issuance, KYC verification, payment state handling).',
      'Implemented React/Next.js fixes and added Amplitude analytics instrumentation to track funnel metrics and reduce reconciliation work by 25%.',
    ],
    technologies: ['AWS Lambda', 'DynamoDB', 'S3', 'EventBridge', 'Java', 'Spring Boot', 'React', 'Next.js'],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 bg-white dark:bg-gray-900"
      aria-labelledby="experience-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white"
        >
          Experience
        </motion.h2>

        {/* ✅ Wider container (fixed) */}
        <div className="max-w-6xl xl:max-w-7xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.1, duration: 0.55, ease: 'easeOut' }}
                className="relative mb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-1/2 z-10" />

                {/* ✅ Wider + responsive card wrapper */}
                <div
                  className={`ml-12 w-[calc(100%-3rem)] md:ml-0 md:w-[min(46rem,calc(50%-1.25rem))] lg:w-[min(54rem,calc(50%-1.25rem))] ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 md:p-7 rounded-lg shadow-md dark:shadow-gray-800 border-l-4 border-primary-600">
                    <h3 className="text-xl md:text-2xl font-bold text-primary-900 dark:text-primary-400 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary-600 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-4">{exp.period}</p>

                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description.map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="text-primary-600 mr-2">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 text-primary-800 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
