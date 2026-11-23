import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Rocket, Bot } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Vue 2 → Vue 3 migration',
    description:
      'Strict TypeScript, Composition API, Pinia. Zero-downtime migration of production apps — currently leading one on a high-load platform.',
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Fullstack MVP in 4–6 weeks',
    description:
      'React or Vue frontend, Node.js/NestJS API, PostgreSQL. From requirements to deployed production: architecture, CI/CD, docs included.',
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: 'AI features that work',
    description:
      'LLM integrations with provider abstraction, RAG, structured extraction and human-in-the-loop review. No vibe-coded demos — production-grade AI.',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section-container bg-gray-800" ref={ref}>
      <h2 className="section-title gradient-text">Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-purple-400 mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
