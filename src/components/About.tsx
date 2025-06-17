import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Database } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title gradient-text">Обо мне</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Опытный full-stack разработчик с глубоким пониманием современных веб-технологий. 
              Специализируюсь на создании масштабируемых корпоративных решений и внутренних веб-сервисов.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <Code2 className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <h3 className="text-lg font-semibold mb-1">Frontend</h3>
                <p className="text-sm text-gray-400">React, Vue, Nuxt</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <Server className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <h3 className="text-lg font-semibold mb-1">Backend</h3>
                <p className="text-sm text-gray-400">Node.js, Laravel</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <Database className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <h3 className="text-lg font-semibold mb-1">Database</h3>
                <p className="text-sm text-gray-400">PostgreSQL, MySQL</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Рабочий процесс"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;