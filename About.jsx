import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Users } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: 'UI/UX Lead',
      organization: 'Google Developer Student Clubs (GDSC)',
      period: 'June 2024 - May 2025',
      location: 'FR.CRCE',
      description: 'Leading UI/UX initiatives and mentoring fellow developers in design principles and user experience optimization.',
      icon: <Users className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'UI/UX Junior Associate',
      organization: 'Google Developer Student Clubs (GDSC)',
      period: 'June 2023 - May 2024',
      location: 'FR.CRCE',
      description: 'Contributed to design projects and gained hands-on experience in user interface design and development workflows.',
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const education = {
    degree: 'Bachelor of Engineering',
    field: 'Computer Engineering',
    institution: 'Father Conceicao Rodrigues College Of Engineering',
    period: 'June 2022 - May 2026',
    location: 'Mumbai'
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate full-stack developer and UI/UX leader with expertise in modern web technologies and blockchain development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="text-4xl mr-3">👋</span>
                Hello! I'm Siddhant
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I'm a Computer Engineering student with a passion for creating innovative web solutions 
                  and leading design initiatives. As a UI/UX Lead at Google Developer Student Clubs, I've 
                  had the opportunity to mentor fellow developers and contribute to impactful projects.
                </p>
                <p>
                  My journey in tech has been marked by consistent success in hackathons, where I've 
                  demonstrated my ability to build solutions under pressure and work effectively in teams. 
                  I specialize in full-stack development with a strong focus on user experience and 
                  modern design principles.
                </p>
                <p>
                  Beyond coding, I'm passionate about blockchain technology, having worked on several 
                  decentralized applications and smart contracts. I believe in the power of technology 
                  to solve real-world problems and create positive social impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3 shadow-lg">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                Education & Experience
              </h3>

              {/* Education Card */}
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/10 dark:border-gray-600/20 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-200"
              >
                <div className="flex items-start">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3 shadow-lg">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {education.degree}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {education.field}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      📅 {education.period}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      🏛️ {education.institution}, {education.location}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Experience Cards */}
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/10 dark:border-gray-600/20 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
                >
                  <div className="flex items-start">
                    <div className={`p-2 bg-gradient-to-r ${exp.color} rounded-lg mr-3 shadow-lg`}>
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {exp.organization}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        📅 {exp.period}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        📍 {exp.location}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

