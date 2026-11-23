import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const groups = [
  {
    title: 'Core',
    items: ['Vue 3', 'React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Proficient',
    items: ['Next.js', 'Nuxt', 'Pinia / Vuex', 'Redux Toolkit', 'Redis', 'CI/CD', 'Tailwind CSS'],
  },
  {
    title: 'AI-assisted delivery',
    items: ['OpenRouter', 'Claude Code', 'RAG pipelines', 'Prompt versioning', 'Human-in-the-loop review'],
  },
  {
    title: 'Familiar',
    items: ['Go', 'MongoDB', 'GraphQL', 'RabbitMQ', 'Playwright / Vitest'],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section-container bg-gray-800" ref={ref}>
      <h2 className="section-title gradient-text">Stack</h2>
      <p className="text-center text-gray-400 mb-8">What I ship with — no percentage bars, just honesty.</p>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-lg font-semibold text-purple-400 mb-4">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-200">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
