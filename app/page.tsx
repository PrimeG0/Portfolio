"use client";
import Image from "next/image";
import profilePic from './images/profilepic.png';
import Grainient from "./components/GrainientProps";
import Shuffle from "./components/ShuffleProps";
import ScrambledText from "./components/ScrambledTextProps";
import Navbar from "./components/Navbar";
import PixelTrail from "./components/PixelTrail";
import dynamic from 'next/dynamic';
import DecryptedText from "./components/DecryptedText";
import ProfileCard from "@/components/ProfileCard";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollVelocity from "./components/ScrollVelocity";
import Scroll from "./components/Scroll";
import MagicBento from "./components/MagicBento";
import Waves from "@/components/Waves";
import Footer from "./components/Footer";
import Link from 'next/link';





gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const PixelTrail = dynamic(() => import('./components/PixelTrail'), { ssr: false });



  useGSAP(() => {
    // GSAP code goes here
    gsap.fromTo(".About-me-txt",
      { opacity: 0, x: -100 }, // From
      {
        opacity: 1, x: 0,
        scrollTrigger: {
          trigger: ".About-me-txt",
          start: "top",

        }
      } // To
    );
    gsap.fromTo(".profile",
      { opacity: 0, x: 100 }, // From
      {
        opacity: 1, x: 0,
        scrollTrigger: {
          trigger: ".profile",
          start: "top",

        }
      } // To
    );
  });

  return (

    <>



      <div style={{ width: '100%', height: '100%', zIndex: "1" }} className="body">

        <Grainient
          color1="#f2e3f2"
          color2="#c0b4f4"
          color3="#cac1e6"
          timeSpeed={1.45}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
        <div className="absolute h-[10%] inset-0 flex flex-col items-center m-10px z-600 top-5 ">
          <Navbar />
        </div>

        <div>

        </div>
        <div id='home' className="absolute inset-0 flex flex-col items-center justify-center z-500 ">

          <div className="text-black hero-txt cursor-pointer ">
            <ScrambledText
              className="hero-txt  text-left max-w-90% z-99 text-black text-[10rem]"
              radius={200}
              duration={0.5}
              speed={0.5}
              scrambleChars=".:"
            >
              PrimeG
            </ScrambledText>

          </div>
           
          <div className="text-[1.5rem] m-[1rem] w-[50%] text-center text-black">
            <DecryptedText
            text="Transform ideas into impactful digital experiences that captivate your audience and fuel business growth."
            animateOn="view"
            revealDirection="start"
            sequential
            useOriginalCharsOnly={false}
            className="z-900 "
          />
          </div>
          <div className="m-[1rem]">
            <button className="cursor-pointer p-[10px]  md:font-bold rounded-[50px] backdrop-blur-[30px] mx-[1rem] border border-white/40  shadow-md z-800"><ScrambledText
              className="text-centre max-w-90% z-99  text-black text-[1.5rem]"
              radius={200}
              duration={0.5}
              speed={0.5}
              scrambleChars="SERVICES"
            >
              Our Services
            </ScrambledText></button>
            <Link href="#footer" >
            <button className="cursor-pointer p-[10px] mx-[1rem] md:font-bold rounded-[50px] backdrop-blur-[30px] border border-white/40  shadow-md z-800"><ScrambledText
              className="text-centre max-w-90% z-99  text-black text-[1.5rem]"
              radius={200}
              duration={0.5}
              speed={0.5}
              scrambleChars="SERVICES"
            >
              Get in Touch
            </ScrambledText></button></Link>
          </div>



        </div>
        
        <div>


          <div id='about' className="inset-1px  z-10 flex items-center justify-center  m-[2rem]">

            <div>
              
              <div  className="About-me-txt text-6xl m-[5rem] z-50 font-bold ">
                <DecryptedText
                  text="Hi Im PrimeG"
                  animateOn="view"
                  revealDirection="start"
                  sequential
                  useOriginalCharsOnly={false}
                />
                <div className="about-me w-[100%] text-left  z-99 text-black text-[2.5rem]">
                  <ScrambledText

                    radius={200}
                    duration={0.5}
                    speed={0.5}
                    scrambleChars=".:"
                  >
                    I'm a Web Designer and Developer who turns complex ideas into clean, functional digital experiences. I build for the web with a focus on speed, usability, and modern aesthetics

                  </ScrambledText>
                  
                </div>
              </div>
            </div>
            <div className=" profile  z-100  pointer-events-auto  m-[5rem]">
              <ProfileCard
                name="PrimeG"
                title="Web Designer"
                handle="Prime"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/profilepic.png"
                showUserInfo
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowColor="hsla(345, 100%, 70%, 0.6)"
                iconUrl="/hh"
                behindGlowEnabled
                innerGradient="linear-gradient(145deg,hsla(345, 40%, 45%, 0.55) 0%,hsla(298, 60%, 70%, 0.27) 100%)"
              />
            </div>

          </div>

        </div>

      </div>

      <div className="relative h-100vh overflow-hidden">
        <div className="">
          <Waves
            lineColor="#f7e8f7"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            waveSpeedX={0.0125}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>
        <Scroll />
        <div id="projects" className="About-me-txt myproject items-center justify-center w-[100vw] h-[100vh] text-8xl m-[5rem] z-50 font-bold ">

          <DecryptedText
            text="My Projects →"
            animateOn="view"
            revealDirection="start"
            sequential
            useOriginalCharsOnly={false}
            className="z-900"
          />
          <div className="w-[100vw] -m-[0px]">
            <MagicBento />
          </div>
          

        </div>
<div className="relative my-[5rem]">
 <ScrollVelocity
          texts={['Code Design Work Repeat']}
          velocity={100}
          className="custom-scroll-text"
        />
</div>
       

      </div>
      <div id='footer'></div>
     <Footer  />

      {/*} <div className="-z-[-10] w-[100%] h-[100%] pointer-events-auto absolute" >
        <PixelTrail
          gridSize={50}
          trailSize={0.1}
          maxAge={200}
          interpolate={5}
          color="#f1effb"
          gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
          gooeyEnabled
          gooStrength={2}
          
        />
      </div>*/}


    </>

  );
}
