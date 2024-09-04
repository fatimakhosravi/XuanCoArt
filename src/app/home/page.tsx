import AboutSection from "@/components/Home/AboutSection";
import BlogSection from "@/components/Home/BlogSection";
import HeroSection from "@/components/Home/HeroSection";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-24">
      <HeroSection />
      <BlogSection />
      <AboutSection />
    </main>
  );
};
export default HomePage;
