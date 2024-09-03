import AboutSection from "@/components/Home/AboutSection";
import BlogSection from "@/components/Home/BlogSection";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-40">
      <HeroSection />
      <BlogSection />
      <AboutSection />
    </main>
  );
}
