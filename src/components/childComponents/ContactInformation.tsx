import { Card, CardContent, TextField, Button } from "@mui/material";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInformation() {
  return (
    <Card className="mb-6   ">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-primary mb-4">
          Contact Information
        </h3>

        <div className="flex items-start mb-4 hover:translate-x-1 transition-transform duration-200">
          <div className="text-primary mr-4 mt-1">
            {FaEnvelope({ className: "text-xl" })}
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Email</h4>
            <p className="text-gray-700">arjun.web@outlook.com</p>
          </div>
        </div>

        <div className="flex items-start mb-4 hover:translate-x-1 transition-transform duration-200">
          <div className="text-primary mr-4 mt-1">
            {FaPhone({ className: "text-xl" })}
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Phone</h4>
            <p className="text-gray-700">+358 XX XXXX XXX</p>
          </div>
        </div>

        <div className="flex items-start mb-4 hover:translate-x-1 transition-transform duration-200">
          <div className="text-primary mr-4 mt-1">
            {FaMapMarkerAlt({ className: "text-xl" })}
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Location</h4>
            <p className="text-gray-700">Finland</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
