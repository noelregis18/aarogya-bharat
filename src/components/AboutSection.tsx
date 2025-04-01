
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="section-transition">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Aarogya Bharat</span>
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Aarogya Bharat is a cutting-edge healthcare platform that leverages the power of Tezos blockchain technology to securely store and manage patients' medical histories in the cloud.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Our mission is to revolutionize medical record-keeping with enhanced security and efficiency through blockchain's immutable and decentralized features.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 h-6 w-6 flex-shrink-0" />
                <p>Eliminate the need for physical medical records</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 h-6 w-6 flex-shrink-0" />
                <p>Access your medical history seamlessly when visiting any hospital</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 h-6 w-6 flex-shrink-0" />
                <p>View medical reports, diagnoses, and lab results from any location</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 h-6 w-6 flex-shrink-0" />
                <p>Ensure privacy and control over sensitive health information</p>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary/90 text-white mt-8">
              Learn More About Our Technology
            </Button>
          </div>
          
          <div className="relative section-transition">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full opacity-30 blur-3xl -z-10"></div>
            <div className="glass-card rounded-xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-primary/10 to-transparent p-1">
                <div className="bg-card rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4">How Tezos Blockchain Powers Aarogya Bharat</h3>
                  <p className="mb-4">Tezos blockchain provides a secure, transparent, and immutable foundation for storing sensitive medical data:</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      <span>Smart contracts for secure access control</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      <span>End-to-end encryption of all medical records</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      <span>Decentralized storage prevents single points of failure</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      <span>Immutable audit trail of all record access</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      <span>Energy-efficient proof-of-stake consensus</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
