import Aboutus from "../components/home/aboutus/Aboutus";
import Hero from "../components/home/hero/Hero";
import Testemonials from "../components/home/testemonials/Testemonials";
import Services from "../components/home/services/Services";
import Contact from "../components/home/contact/Contact";

const Home = () => {
  return (
    <main className="w-screen min-h-screen  flex flex-col">
      <Hero />
      <Aboutus />
      <Services />
      <Testemonials />
      <Contact />
    </main>
  );
};

export default Home;
