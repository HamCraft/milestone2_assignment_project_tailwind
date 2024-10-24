import React from 'react';
import Image from 'next/image'; 

const About = () => {
  return (
    <section id="about" className="min-h-screen text-white py-16">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-400">
            Full Stack Developer
          </p>
        </div>

        {/* About Content */}
        <div className="lg:flex lg:items-start lg:space-x-12">
          {/* Left: Image or Visual */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <Image
              src="/ahmed.jpg" 
              alt="Ahmed Yaqoob Dhedhi"
              className="rounded-lg shadow-lg w-full"
              width={100}
              height={100}
            />
          </div>

          {/* Right: About Details */}
          <div className="lg:w-2/3">
            <h3 className="text-4xl font-semibold mb-4">Who Am I?</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I&apos;m an 18-year-old Full Stack Developer with expertise in modern web technologies like JavaScript, TypeScript, React, Next.js, and Tailwind CSS. Passionate about building dynamic, responsive, and user-centric applications, I strive to continuously improve my skills and stay updated with the latest trends in web development. My goal is to create innovative digital solutions that deliver seamless user experiences.
            </p>

            {/* Skills Section */}
            <h3 className="text-4xl font-semibold mb-4">Skills</h3>

            {/* Skills List with Images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Skill Item */}
              <div className="text-center">
                <Image
                  src="/html-icon.png" 
                  alt="HTML"
                  width={100} 
                  height={100}
                  className="mx-auto"
                />
                <span className="bg-gray-800 py-2 px-4 rounded mt-2 block">HTML</span>
              </div>
              <div className="text-center">
                <Image
                  src="/css-icon.png" 
                  alt="CSS"
                  width={100} 
                  height={100}
                  className="mx-auto"
                />
                <span className="bg-gray-800 py-2 px-4 rounded mt-2 block">CSS</span>
              </div>


              <div className="text-center">
                <Image
                  src="/JavaScript-icon.png" 
                  alt="JavaScript"
                  width={100} 
                  height={90}
                  className="mx-auto"
                />
                <span className="bg-gray-800 py-2 px-4 rounded mt-2 block">JavaScript</span>
              </div>

             

              <div className="text-center">
                <Image
                  src="/typescript-logo.png"
                  alt="TypeScript"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <span className="bg-gray-800 py-2 px-4 rounded mt-2 block">TypeScript</span>
              </div>

              <div className="text-center">
                <Image
                  src="/tailwind-icon.png" 
                  alt="Tailwind CSS"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <span className="bg-gray-800 py-2 px-4 rounded mt-2 block">Tailwind CSS</span>
              </div>

              <div className="text-center">
                <Image
                  src="/react-icon.png" 
                  alt="React"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <span className="bg-gray-800 py-2 px-4 rounded mt-2 block">React</span>
              </div>

              <div className="text-center">
                <Image
                  src="/nextjs-icon.png" 
                  alt="Next.js"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <span className="bg-gray-800 py-2 px-4 rounded mt-2 block">Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
