import Navbar from "@/app/Navbar";
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="grid place-content-center h-screen text-center">
      <h1 className='text-5xl font-extrabold text-white'>Ahmed Yaqoob Dhedhi</h1>
      <div className="flex justify-center items-center mb-6">
      <Image 
        src="/ahmed.jpg" 
        alt="Ahmed Yaqoob Dhedhi" 
        width={150} 
        height={150} 
        className="rounded-full border-4 border-white shadow-lg mt-10 justify-center place-items-center items-center justify-items-center"
      />
      </div>
        <h1 className="text-aqua text-4xl mb-4">Welcome to My Portfolio Website</h1> 
        <p className="font-bold text-crimson text-lg"> Here, you can explore my projects, learn about my skills, 
        and discover my journey in the world of web development.</p> 
      </div>
    </>
  );
};

export default Home;
