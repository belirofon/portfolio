import React, { Suspense, useState } from 'react';
import LoadingAnimation from './components/LoadingAnimation';
import Header from './components/Header';
import Hero from './components/Hero';

const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Services = React.lazy(() => import('./components/Services'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-gray-900 text-white">
      {isLoading && <LoadingAnimation onComplete={() => setIsLoading(false)} />}
      <Header />
      <main className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Hero />
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-purple-400 border-t-transparent" />
          </div>
        }>
          <About />
          <Skills />
          <Portfolio />
          <Services />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;