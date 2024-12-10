import HeroSection from "./components/Hero";
import Section from "./components/Section";
import Footer from "./layout/Footer";
import { Hind } from "next/font/google";
import Uparrow from "./ui/Uparrow";
import Testimonials from "./components/Testinominals";
import Enrolled from "./components/Enrolled";
import Link from "next/link";

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
        <HeroSection />
        <Section />
        <Testimonials />
        <Enrolled />
        <Footer />
      </div>
      <div className="p-3 bg-blue-700 rounded-full fixed right-3 bottom-3">
        <Link href={"/"}>
          <Uparrow />
        </Link>
      </div>
    </>
  );
}
