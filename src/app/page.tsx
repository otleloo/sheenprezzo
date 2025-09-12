import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import VideosSection from "@/components/VideosSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <VideosSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
