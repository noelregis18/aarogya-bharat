
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-darkBg to-darkBg/90 dark:from-darkBg dark:to-darkBg/80 z-0"></div>
      <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal/30 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 section-transition">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Revolutionizing Healthcare with <span className="gradient-text">Blockchain</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Aarogya Bharat utilizes Tezos blockchain technology to securely store and manage patients' medical histories in the cloud, enhancing security and efficiency through blockchain's immutable and decentralized features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-lg text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-6 rounded-lg text-lg">
              Learn More
            </Button>
          </div>
          
          <div className="mt-20 animate-bounce">
            <a href="#features" className="inline-flex items-center justify-center text-white/70 hover:text-white">
              <span className="mr-2">Explore Features</span>
              <ArrowDown size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
