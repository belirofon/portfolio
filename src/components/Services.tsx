import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, GitBranch, Terminal, Database } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Веб-разработка',
    description: 'Создание современных веб-приложений с использованием React/Next.js/Vue и TypeScript',
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: 'Backend Разработка',
    description: 'Разработка серверной части на Node.js и Nest.js',
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'База Данных',
    description: 'Проектирование и оптимизация баз данных PostgreSQL',
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: 'Тестовые Задания',
    description: 'Выполнение тестовых заданий уровня junior в своем стеке технологий',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section-container bg-gray-800" ref={ref}>
      <h2 className="section-title gradient-text">Услуги</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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