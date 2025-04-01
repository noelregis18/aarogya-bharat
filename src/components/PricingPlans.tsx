
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingPlansProps {
  isOpen: boolean;
  onClose: () => void;
}

const PricingPlans = ({ isOpen, onClose }: PricingPlansProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">Aarogya Bharat Storage Plans</DialogTitle>
          <p className="text-muted-foreground">Choose a plan that works for your medical data needs</p>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {/* Basic Plan */}
          <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">Basic Plan</CardTitle>
              <CardDescription>For individual patients</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">₹99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>5GB Secure Storage</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Basic Health Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Medical History Tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Standard Support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe Now</Button>
            </CardFooter>
          </Card>
          
          {/* Standard Plan */}
          <Card className="border-2 border-primary scale-105 shadow-lg">
            <CardHeader>
              <div className="py-1 px-3 bg-primary text-primary-foreground rounded-full text-xs font-medium w-fit mb-2">
                POPULAR
              </div>
              <CardTitle className="text-xl">Standard Plan</CardTitle>
              <CardDescription>For families and active users</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">₹249</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>15GB Secure Storage</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Advanced Health Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Family Health Profiles</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Secure Document Sharing</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe Now</Button>
            </CardFooter>
          </Card>
          
          {/* Premium Plan */}
          <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">Premium Plan</CardTitle>
              <CardDescription>For hospitals and clinics</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">₹599</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>50GB Secure Storage</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Premium Health Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Multi-Provider Access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>24/7 Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>API Access for Integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Custom Analytics Dashboard</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe Now</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          All plans include blockchain-secured storage, end-to-end encryption, and HIPAA-compliant data management.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingPlans;
