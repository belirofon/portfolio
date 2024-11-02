import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 65 },
  { name: 'Vue', level: 60 },
  { name: 'TypeScript', level: 80},
  { name: 'Node.js', level: 70 },
  { name: 'Nest.js', level: 70 },
  { name: 'PostgreSQL', level: 60 },
  { name: 'MongoDB', level: 50 },
  { name: 'Docker', level: 75 },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section-container bg-gray-800" ref={ref}>
      <h2 className="section-title gradient-text">Навыки</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 p-4 rounded-lg"
          >
            <div className="flex justify-between mb-2">
              <span className="text-white font-medium">{skill.name}</span>
              <span className="text-purple-400">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full bg-gradient-to-r from-purple-400 to-pink-600"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;