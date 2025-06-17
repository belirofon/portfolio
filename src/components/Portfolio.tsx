import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Dojo Skins',
    description: 'Интернет-магазин для торговли скинами из Steam с системой торгов и обмена',
    image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['Vue', 'Nuxt', 'TypeScript', 'Nest.js', 'MongoDB'],
    link: 'http://skinsdojo.com/',
    isNDA: false,
  },
  {
    title: 'Умняшка School',
    description: 'Образовательная платформа для детей с интерактивными уроками и играми',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    link: 'https://umnyashka-school.ru/',
    isNDA: false,
  },
  {
    title: 'Mainu Games',
    description: 'Игровая платформа с мини-играми и системой достижений',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'TypeScript', 'WebGL', 'Node.js'],
    link: 'https://test.mainu-games.com/',
    isNDA: false,
  },
  {
    title: 'Portal',
    description: 'Корпоративный портал с единой системой аутентификации и управления доступом',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Redux/toolkit', 'TypeScript', 'Nest.js', 'PostgreSQL'],
    link: '#',
    isNDA: true,
  },
  {
    title: 'ServiceDesk',
    description: 'Система обработки заявок и управления IT-инфраструктурой',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'PHP', 'Bitrix', 'MySQL'],
    link: '#',
    isNDA: true,
  },
  {
    title: 'COWid-2021',
    description: 'Игровой проект для поднятия командного духа во время пандемии',
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'TypeScript'],
    link: 'https://github.com/belirofon/cowid-2021',
    isNDA: false,
  },
];

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="section-container" ref={ref}>
      <h2 className="section-title gradient-text">Портфолио</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-700 rounded-full text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.isNDA ? '#' : project.link}
                  target={project.isNDA ? '_self' : '_blank'}
                  rel={project.isNDA ? '' : 'noopener noreferrer'}
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  {project.isNDA ? "Под NDA" : "Посмотреть"}
                </a>
                <a
                  href={project.isNDA ? '#' : (project.title === 'COWid-2021' ? project.link : '#')}
                  target={project.isNDA || project.title !== 'COWid-2021' ? '_self' : '_blank'}
                  rel={project.isNDA || project.title !== 'COWid-2021' ? '' : 'noopener noreferrer'}
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Github size={16} />
                  {project.isNDA ? "Под NDA" : (project.title === 'COWid-2021' ? "Code" : "Приватный")}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;