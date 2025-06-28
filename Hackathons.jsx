import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, Award, Target, Code } from 'lucide-react';

const Hackathons = () => {
  const hackathonStats = [
    {
      number: '6',
      label: 'Hackathons Won',
      icon: <Trophy className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      number: '1450+',
      label: 'Participants Beaten',
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '15+',
      label: 'Technologies Used',
      icon: <Code className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '100%',
      label: 'Success Rate',
      icon: <Target className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const hackathonWins = [
    {
      name: 'KJ Somaiya College Hackathon',
      position: '1st Place',
      date: 'March 2024',
      category: 'Blockchain Innovation',
      participants: 200,
      description: 'Built a decentralized supply chain tracking system using Solidity and React.js, focused on ensuring transparency in fund usage and real-time tree monitoring.',
      technologies: ['Blockchain', 'Solidity', 'React.js', 'Web3']
    },
    {
      name: 'Atharva College Tech Fest',
      position: 'Winner',
      date: 'February 2024',
      category: 'Web Development',
      participants: 150,
      description: 'Created an AI-powered document collaboration platform using React.js, TailwindCSS, and advanced text analysis.',
      technologies: ['React.js', 'TailwindCSS', 'AI/ML', 'NLP']
    },
    {
      name: 'S.I.W.S Innovation Challenge',
      position: '2nd Place',
      date: 'January 2024',
      category: 'Social Impact',
      participants: 500,
      description: 'Developed a comprehensive solution for social impact using IoT and geolocation APIs to optimize plantation outcomes and survival rates.',
      technologies: ['IoT', 'Geolocation', 'Firebase', 'React.js']
    },
    {
      name: 'Vidyalankar College CodeFest',
      position: '1st Place',
      date: 'November 2023',
      category: 'FinTech',
      participants: 180,
      description: 'Implemented secure user authentication with Google Firebase, enabling 100% uptime for login and registration processes.',
      technologies: ['Firebase', 'Authentication', 'Security', 'React.js']
    },
    {
      name: 'V-HACK 2023',
      position: 'Winner',
      date: 'September 2023',
      category: 'UI/UX Innovation',
      participants: 120,
      description: 'Built a fully performant event platform using Next.js, TypeScript, TailwindCSS, and JavaScript for Unplug by the Beach startup.',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'JavaScript']
    },
    {
      name: 'HACKDECK 2024',
      position: '1st Place',
      date: 'August 2023',
      category: 'Open Innovation',
      participants: 300,
      description: 'Deployed with Vercel for fast global access, helping streamline event execution and contributing to professional brand presence.',
      technologies: ['Vercel', 'Deployment', 'Performance', 'Optimization']
    }
  ];

  return (
    <section id="hackathons" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6 shadow-lg">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Hackathon <span className="text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text">Victories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            6 hackathon wins showcasing innovation, technical excellence, and problem-solving skills across various domains.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {hackathonStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg mb-4 shadow-lg`}>
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathon Wins */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathonWins.map((hackathon, index) => (
            <motion.div
              key={hackathon.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${
                    hackathon.position.includes('1st') ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                    hackathon.position.includes('Winner') ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                    'bg-gradient-to-r from-blue-500 to-cyan-500'
                  } text-white mr-3 shadow-lg`}>
                    {hackathon.position.includes('1st') || hackathon.position.includes('Winner') ? 
                      <Trophy className="w-5 h-5" /> : 
                      <Award className="w-5 h-5" />
                    }
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      hackathon.position.includes('1st') ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                      hackathon.position.includes('Winner') ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                      'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {hackathon.position}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {hackathon.name}
              </h3>
              
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3 space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {hackathon.date}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {hackathon.participants} participants
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                  {hackathon.category}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {hackathon.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {hackathon.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/10 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300 rounded text-xs font-medium border border-white/20 dark:border-gray-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Innovate Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              With a proven track record of winning hackathons and building innovative solutions, 
              I'm ready to bring that same energy and expertise to your next project.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white/20 hover:border-white/40"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Trophy className="w-5 h-5 mr-2" />
              Let's Build Something Amazing
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;

