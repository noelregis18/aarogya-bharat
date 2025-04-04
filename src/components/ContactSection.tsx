import { useState } from "react";
import { Linkedin, Github, Twitter, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using FormSubmit service to send emails
      const formSubmitData = new FormData();
      formSubmitData.append("from_name", formData.name);
      formSubmitData.append("reply_to", formData.email);
      formSubmitData.append("message", formData.message);
      formSubmitData.append("to_email", "noel.regis04@gmail.com");
      
      const response = await fetch("https://formsubmit.co/noel.regis04@gmail.com", {
        method: "POST",
        body: formSubmitData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMapClick = () => {
    window.open("https://www.google.com/maps/place/Asansol,+West+Bengal", "_blank");
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70 dark:opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 section-transition">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always eager to learn and collaborate on new projects.
            Feel free to reach out to me 🙂
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-xl p-8 section-transition">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form action="https://formsubmit.co/noel.regis04@gmail.com" method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New message from Aarogya Bharat website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: "none" }} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={window.location.href} />
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={5}
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="section-transition">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-primary mr-4 h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:noel.regis04@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    noel.regis04@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-primary mr-4 h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a 
                    href="tel:+917319546900" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7319546900
                  </a>
                </div>
              </div>
              
              <div className="flex items-start cursor-pointer" onClick={handleMapClick}>
                <MapPin className="text-primary mr-4 h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    Asansol, West Bengal, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/noel-regis-aa07081b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background p-3 rounded-full hover:bg-primary/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                
                <a
                  href="https://github.com/noelregis18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background p-3 rounded-full hover:bg-primary/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                
                <a
                  href="https://x.com/NoelRegis8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background p-3 rounded-full hover:bg-primary/10 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                
                <a
                  href="http://topmate.io/noel_regis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background p-3 rounded-full hover:bg-primary/10 transition-colors"
                  aria-label="Topmate"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="h-6 w-6">
                    <path d="M19.4,7.3L19.1,7c0,0-0.1-0.1-0.1-0.1l-0.9-0.4c0,0-0.1,0-0.1-0.1l-1.4-0.3C12.7,4.1,8.1,6.9,8.1,6.9L6.5,8.1L4.8,10.5
                    l-0.3,2.9l0.2,1.8l0,0c0.2,1.1,0.6,2.1,1.2,3l0.8,1.2l1.7,1.8l1.3,0.8c0.1,0.1,0.3,0.1,0.4,0.2l1.5,0.6c1.8,0.6,3.8,0.5,5.5-0.1
                    l2.1-1l1.1-1.1c0,0,0,0,0,0c0.1-0.1,0.2-0.3,0.3-0.4l1.2-2.1c0.3-0.5,0.4-1.1,0.5-1.6l0.4-2.9L19.4,7.3z M12,17.7
                    c-3.1,0-5.7-2.5-5.7-5.7c0-3.1,2.5-5.7,5.7-5.7c3.1,0,5.7,2.5,5.7,5.7C17.7,15.2,15.1,17.7,12,17.7z"/>
                    <path d="M12,7.8c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2c2.3,0,4.2-1.9,4.2-4.2C16.2,9.7,14.3,7.8,12,7.8z M13.6,14.3h-3.1
                    v-0.9h1.1v-3.1h-1.1V9.5h2v3.9h1.1V14.3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
