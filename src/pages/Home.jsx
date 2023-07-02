import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Stats from '../sections/Stats';
import Testimonials from '../sections/Testimonials';
import CallToAction from '../sections/CallToAction';
import Blog from '../sections/Blog';
import Header from '../sections/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className='py-40 scroll-mt-20'>
        <Hero />
        <Features />
        <Stats />
        <Testimonials />
        <CallToAction />
        <Blog />
      </main>
    </>
  );
};

export default Home;
