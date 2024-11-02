import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Определим тип данных формы
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Определим состояния статуса отправки
type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  // Настроим хук useInView с нужными параметрами
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Настроим состояния для данных формы и статуса отправки
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  // Обработчик отправки формы с типизацией для события
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: process.env.REACT_APP_EMAILJS_NOTIFICATION_EMAIL,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  // Обработчик изменения полей формы с типизацией для события
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-container bg-gray-800" ref={ref}>
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Имя
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
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
                id="email"
                value={formData.email}
                onChange={handleChange}
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
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                placeholder="Ваше сообщение..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {status === 'sending' ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  <span>Отправка...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Отправить</span>
                </>
              )}
            </button>
            {status === 'success' && (
              <p className="text-green-400 text-center">Сообщение успешно отправлено!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center">Ошибка при отправке. Попробуйте позже.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
