import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Александр Петров',
    position: 'CEO, TechStart',
    content: 'Николай проявил себя как высококвалифицированный специалист. Его работа над нашим корпоративным порталом превзошла все ожидания.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Елена Соколова',
    position: 'CTO, DataFlow',
    content: 'Отличное понимание современных технологий и архитектурных решений. Николай успешно реализовал сложный проект, связанный с автоматизацией рабочих процессов.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Михаил Волков',
    position: 'Product Manager, InnoSoft',
    content: 'Профессиональный подход к работе и отличные коммуникативные навыки. Проект был выполнен в срок и с высоким качеством.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="section-container" ref={ref}>
      <h2 className="section-title gradient-text">Отзывы</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-gray-300">{testimonial.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;