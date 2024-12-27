import { Hind } from "next/font/google";

import Enrolled from "@/components/Enrolled";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Testimonials from "@/components/Testinominals";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";

const hindMysuru = Hind({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
  variable: "--font-hind-mysuru",
});
export default function Home() {
  return (
    <>
      <div className={hindMysuru.className}>
        <Navbar />
        <Hero />
        <Section />
        <Testimonials />
        <Enrolled />
        <Footer />
      </div>
    </>
  );
}
