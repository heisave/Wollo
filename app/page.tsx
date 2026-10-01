import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Analytics } from "@/components/sections/Analytics";
import { Integrations } from "@/components/sections/Integrations";
import { Statement } from "@/components/sections/Statement";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";

/**
 * Landing page for the "wollo" social media management platform.
 * The whole site lives on a white rounded card over the gray shell,
 * mirroring the presentation frame of the original shot.
 */
export default function Home() {
  return (
    <div className="min-h-screen py-0 md:py-6">
      <div className="mx-auto max-w-[1440px] rounded-none bg-paper shadow-xl md:rounded-[28px] [overflow-x:clip]">
        <Navbar />
        <main>
          <Hero />
          <Analytics />
          <Integrations />
          <Statement />
          <Stats />
          <Testimonials />
          <Faq />
          <CtaBanner />
        </main>
        <Footer />
      </div>
    </div>
  );
}
