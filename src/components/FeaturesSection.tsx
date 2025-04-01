
import { Database, Lock, Globe, Clock, Building, UserPlus } from "lucide-react";

const features = [
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Secure Medical Records",
    description: "Store your complete medical history securely on the Tezos blockchain with end-to-end encryption."
  },
  {
    icon: <Lock className="h-10 w-10 text-primary" />,
    title: "Patient-Controlled Access",
    description: "You decide who can access your medical information with robust permission controls."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Universal Accessibility",
    description: "Access your medical records from anywhere in the world, at any time."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Real-time Updates",
    description: "Medical records are updated in real-time, ensuring healthcare providers have the latest information."
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Hospital Integration",
    description: "Seamlessly integrates with hospital systems for efficient healthcare delivery."
  },
  {
    icon: <UserPlus className="h-10 w-10 text-primary" />,
    title: "Specialist Consultation",
    description: "Share specific records with specialists for remote consultations and second opinions."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 section-transition">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Features</span> of Aarogya Bharat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging blockchain technology to transform healthcare record management
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 section-transition"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
