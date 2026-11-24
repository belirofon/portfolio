import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'SkinsDojo — gaming e-commerce',
    description:
      'Problem: checkout full of critical bugs, no dynamic filtering. Action: fixed 100+ critical bugs, built dynamic frontend filtering, hardened the NestJS backend. Result: stable checkout shipping to real users.',
    image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['Vue', 'Nuxt', 'TypeScript', 'Nest.js'],
    link: 'http://skinsdojo.com/',
    codeLink: null as string | null,
  },
  {
    title: 'AI Writing Workspace',
    description:
      'Problem: fiction authors juggle editor, notes and chatbots with no link between them. Action: built a fullstack app — Tiptap editor, world knowledge base, relationship graph, analytics — plus LLM features with provider abstraction, rate limiting and human-in-the-loop approval. Result: working MVP, production-grade LLM integration.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Go', 'PostgreSQL', 'OpenRouter'],
    link: null as string | null,
    codeLink: 'https://github.com/belirofon/vue2-to-vue3-migration-playbook',
  },
  {
    title: 'League of Predictors — GameFi predictions',
    description:
      'Problem: sports-prediction GameFi needed web presence and a Telegram mini app with real-money mechanics. Action: started as fullstack (incl. Flutter tweaks for the TMA), then frontend — website, graphics; backend mentored by the tech lead. Payments via Telegram Stars and crypto, tradable IEO token behind the scenes.',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['Vue', 'Flutter', 'C# (basic)', 'Telegram Stars', 'Crypto'],
    link: 'https://lop.cx',
    codeLink: null as string | null,
  },
  {
    title: 'Vue 2 → Vue 3 migration playbook',
    description:
      'Open-source guide from a real high-load migration: strict TypeScript, Composition API, Pinia — module by module, without stopping production.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['Vue 3', 'TypeScript', 'Pinia', 'Vite'],
    link: null as string | null,
    codeLink: 'https://github.com/belirofon/vue2-to-vue3-migration-playbook',
  },
];

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="section-container" ref={ref}>
      <h2 className="section-title gradient-text">Selected work</h2>
      <p className="text-center text-gray-400 mb-8">Problem → action → result. No NDA wallpaper.</p>
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
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
