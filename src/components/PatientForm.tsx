
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface PatientFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PatientForm = ({ isOpen, onClose }: PatientFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    allergies: "",
    medicalHistory: "",
    contactNumber: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store in localStorage for now (in a real app, this would be encrypted and stored on the blockchain)
    const existingPatients = JSON.parse(localStorage.getItem("patients") || "[]");
    existingPatients.push({
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem("patients", JSON.stringify(existingPatients));
    
    toast({
      title: "Patient details saved!",
      description: "Your medical information has been securely stored.",
    });
    
    // Reset form and close dialog
    setFormData({
      name: "",
      age: "",
      gender: "",
      bloodGroup: "",
      allergies: "",
      medicalHistory: "",
      contactNumber: "",
      email: "",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Patient Registration</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-2">Full Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label htmlFor="age" className="block mb-2">Age</label>
              <Input
                id="age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                placeholder="25"
                required
              />
            </div>
            
            <div>
              <label htmlFor="gender" className="block mb-2">Gender</label>
              <Input
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Male/Female/Other"
                required
              />
            </div>
            
            <div>
              <label htmlFor="bloodGroup" className="block mb-2">Blood Group</label>
              <Input
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                placeholder="A+, B-, O+, etc."
                required
              />
            </div>
            
            <div>
              <label htmlFor="contactNumber" className="block mb-2">Contact Number</label>
              <Input
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Your phone number"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2">Email Address</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="allergies" className="block mb-2">Allergies (if any)</label>
            <Input
              id="allergies"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              placeholder="List any allergies you have"
            />
          </div>
          
          <div>
            <label htmlFor="medicalHistory" className="block mb-2">Brief Medical History</label>
            <Textarea
              id="medicalHistory"
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
              placeholder="Any significant medical conditions, surgeries, or ongoing treatments"
              rows={4}
            />
          </div>
          
          <div className="border-t pt-4 flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit">Save Patient Information</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PatientForm;
