
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold gradient-text">Aarogya Bharat</span>
            <p className="text-sm text-muted-foreground mt-2">
              Revolutionizing healthcare with blockchain technology
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-muted-foreground flex items-center">
              Made with <Heart className="h-4 w-4 text-primary mx-1" /> by Noel Regis
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {currentYear} Aarogya Bharat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
