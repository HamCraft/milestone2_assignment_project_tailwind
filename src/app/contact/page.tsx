import Navbar from "@/app/Navbar";
import Link from 'next/link';
import Image from 'next/image';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="grid place-content-center h-screen text-center">
        <h1 className="text-aqua text-3xl">Contact Us</h1> 
        <p className="font-bold text-crimson">This page contains our contact details.</p> 
        <div className="flex justify-center items-center space-x-8 mt-6">
        <Link href="https://github.com/HamCraft" legacyBehavior>
          <a target="_blank" >
            <Image 
              src="/github-logo.png" 
              alt="GitHub" 
              width={243} 
              height={243} 
              className="hover:opacity-75"
            />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/ahmed-yaqoob-dhedhi" legacyBehavior>
          <a target="_blank" >
            <Image 
              src="/linkedin-logo.png" 
              alt="LinkedIn" 
              width={243} 
              height={243} 
              className="hover:opacity-75"
            />
          </a>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
