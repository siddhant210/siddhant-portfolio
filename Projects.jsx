import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Play, Shield, TreePine, FileText, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectAnalytics from './ProjectAnalytics';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const projects = [
    {
      title: "Tree-Transparency",
      description: "A blockchain-enabled tree plantation tracking platform using React.js, JavaScript, Tailwind CSS, Firebase, and Solidity. Features IoT integration for remote growth tracking, geolocation APIs for tree mapping, and data-driven species selection algorithms.",
      longDescription: "Developed a comprehensive blockchain solution focused on ensuring transparency in fund usage and real-time tree monitoring. Integrated IoT (ESP32) for remote growth tracking, geolocation APIs for precise tree mapping, and implemented data-driven species selection algorithms to optimize plantation outcomes and survival rates. Achieved 100% uptime for login and registration processes with zero security breaches through secure user authentication with Google Firebase.",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Firebase", "Solidity", "IoT (ESP32)", "Geolocation APIs"],
      category: "Blockchain & IoT",
      icon: <TreePine className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-600",
      demoUrl: "#",
      githubUrl: "#",
      features: [
        "Blockchain transparency for fund tracking",
        "IoT-enabled remote monitoring",
        "Real-time growth analytics",
        "Species selection algorithms",
        "100% uptime authentication"
      ]
    },
    {
      title: "DocCrypt",
      description: "A secure, tamper-resistant document collaboration platform built with React.js, Tailwind CSS, IPFS, and Aptos Blockchain. Features decentralized storage, ownership tracking, and an AI-powered document chatbot for intelligent queries.",
      longDescription: "Built a cutting-edge document collaboration platform that ensures end-to-end privacy and zero data breaches through cryptographic signatures, blockchain-backed metadata, and content hashing. Developed an AI-powered Document Chatbot using NLP and advanced text analysis to assist users with intelligent, real-time document queries. Implemented decentralized storage with IPFS and Aptos Blockchain for immutable audit trails and global document accessibility.",
      technologies: ["React.js", "Tailwind CSS", "IPFS", "Aptos Blockchain", "NLP", "Cryptography"],
      category: "Blockchain & AI",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-600",
      demoUrl: "#",
      githubUrl: "#",
      features: [
        "Decentralized document storage",
        "AI-powered document chatbot",
        "Cryptographic signatures",
        "Immutable audit trails",
        "Global accessibility"
      ]
    },
    {
      title: "Unplug - GDSC Event Website",
      description: "A fully responsive and performant event platform built with Next.js, TypeScript, Tailwind CSS, and JavaScript. Designed for 'Unplug by the Beach', a startup launchpad event hosted by Google Developer Student Clubs.",
      longDescription: "Developed a comprehensive event management platform featuring core frontend functionality for registration, event showcase, and speaker highlights. Ensured seamless onboarding experience for hundreds of attendees including industry experts and startup founders. Deployed with Vercel for fast global access, contributing to streamlined event execution and professional brand presence. The website helped establish the event's credibility and facilitated smooth registration processes.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "Vercel"],
      category: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600",
      demoUrl: "#",
      githubUrl: "#",
      features: [
        "Responsive event registration",
        "Speaker showcase system",
        "Real-time event updates",
        "Professional branding",
        "Global CDN deployment"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Innovative solutions combining cutting-edge technologies to solve real-world problems and create meaningful impact.
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectAnalytics key={project.title} projectName={project.title}>
                <motion.div
                  variants={cardVariants}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center text-white`}>
                      {project.icon}
                    </div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white`}
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="border-gray-300 dark:border-gray-600"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>

                {/* Project Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    <div className="relative backdrop-blur-lg bg-white/10 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                            {project.icon}
                          </div>
                          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            {project.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Interactive Demo Available
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-center space-x-4">
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              </ProjectAnalytics>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="backdrop-blur-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-200/20 dark:border-blue-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                More Projects Coming Soon! 🚀
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm constantly working on new projects and exploring emerging technologies. 
                Check out my GitHub for the latest updates and contributions.
              </p>
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                onClick={() => window.open('#', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                View All Projects
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

