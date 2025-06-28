import { motion } from 'framer-motion';
import { Code, Database, Palette, Globe, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'TailwindCSS', 'Material-UI'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: ['Node.js', 'Express.js', 'Django', 'Spring Boot', 'REST APIs'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: ['Firebase', 'MongoDB', 'MySQL', 'PostgreSQL'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Design',
      icon: <Palette className="w-6 h-6" />,
      skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Prototyping'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Tools',
      icon: <Smartphone className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'Postman', 'Babel', 'Webpack', 'VS Code'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Technical <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 text-center border border-white/10 dark:border-gray-600/20 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Blockchain Development', 'Smart Contracts', 'Web3', 'Solidity',
                'DevOps', 'Docker', 'AWS', 'CI/CD', 'Agile Methodology',
                'Team Leadership', 'Project Management', 'Technical Writing'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-blue-300/30 dark:border-blue-600/30 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 backdrop-blur-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

