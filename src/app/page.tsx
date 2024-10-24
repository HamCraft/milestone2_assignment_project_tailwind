import Navbar from "@/app/components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
     <About />
    </div>
    <Contact/>
    <div className="mt-8">
     <Footer />
     </div>
  </main>
  );
};



export default Home;
