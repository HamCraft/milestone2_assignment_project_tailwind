import Navbar from "@/app/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="grid place-content-center h-screen text-center "> 
        
        <h1 className="text-aqua text-3xl">About Us</h1> 
        <p className="font-bold text-crimson">I&apos;m a passionate software engineer with experience in building dynamic and responsive web applications. 
          I love exploring new technologies and continuously improving my skills. 
          Here, you can learn more about my journey, work, and aspirations.</p> 
      </div>
    </>
  );
};

export default About;
