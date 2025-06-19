import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Github, Linkedin, Send, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    // Here you would typically handle the form submission
    // For example, using fetch or your preferred method
    
    // Show success modal
    setIsModalOpen(true);
    
    // Reset form
    form.reset();
  };

  return (
    <section id="contact" className="section-container bg-gray-800 relative" ref={ref}>
      <h2 className="section-title gradient-text">Контакты</h2>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Свяжитесь со мной</h3>
            <div className="space-y-4">
              <a
                href="mailto:n.sannikov1988@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>n.sannikov1988@gmail.com</span>
              </a>
              <a
                href="https://t.me/nick_sann88"
                className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-telegram w-5 h-5">
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22 11 13 2 9l20-7" />
                </svg>
                <span>@nick_sann88</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Россия</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/belirofon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/nick-sannikov88/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Имя
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                placeholder="Ваше имя"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Сообщение
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                placeholder="Ваше сообщение..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Отправить</span>
            </button>
          </form>

        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 p-6 rounded-xl max-w-md w-full relative border border-purple-500"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Сообщение отправлено!</h3>
                <p className="text-gray-300">Спасибо за ваше сообщение. Я свяжусь с вами в ближайшее время.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
