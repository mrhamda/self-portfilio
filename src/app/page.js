"use client"

import { AboutMe } from "@/components/AboutMe";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { RecentProjects } from "@/components/RecentProjects";
import { SideNavbar } from "@/components/SideNavbar";
import { Context } from "@/contexts/context";
import { useContext, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { activeSidebar, setActiveSidebar } = useContext(Context)

  useEffect(() => {
    gsap.utils.toArray(".fromLeft").forEach((box) => {
      gsap.fromTo(
        box,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.utils.toArray(".fromRight").forEach((box) => {
      gsap.fromTo(
        box,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.utils.toArray(".fromUp").forEach((box) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.utils.toArray(".fadeIn").forEach((box) => {
      gsap.fromTo(
        box,
        { opacity: 0 },
        {
          opacity: 1,

          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.utils.toArray(".scaleOut").forEach((box) => {
      gsap.fromTo(
        box,
        { opacity: 0, scale: 0.75 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>

      <div className="overflow-hidden">
        <div style={{ position: 'relative' }}>
          {/* Overlay */}
          {activeSidebar && (
            <div onClick={() => {
              setActiveSidebar(!activeSidebar)
            }}
              style={{

                backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black
              }}

              className={`z-10 h-[100vh] w-[100vw] left-0 top-0 fixed `}
            />
          )}


          <div className={`${activeSidebar ? "pointer-events-none" : "pointer-events-auto"}`}>


            <Navbar />
            <Header />
            <AboutMe />

            <RecentProjects />

            <Footer />

          </div>

        </div>

        <SideNavbar />
      </div>





    </>


  )

}
