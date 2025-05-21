import { Card, CardContent, TextField, Button } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqaqnbjn");
  const [emailError, setEmailError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message Sent Successfully!");
    } else if (state.errors && Object.keys(state.errors).length > 0) {
      toast.error("Message Failed To Send!");
    }
  }, [state.succeeded, state.errors]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    handleSubmit(e);
  };

  return (
    <>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-primary mb-6">
            Send Me a Message
          </h3>

          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="form-group">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <TextField
                  type="text"
                  variant="outlined"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  error={!!emailError}
                  helperText={emailError || " "}
                  className="w-full"
                />
              </div>
            </div>

            <div className="form-group mb-6">
              <label htmlFor="subject" className="block text-gray-700 mb-2">
                Subject
              </label>
              <TextField
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full"
              />
            </div>

            <div className="form-group mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message *
              </label>
              <TextField
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={3}
                className="w-full"
                placeholder="Your Message"
                required
              />
            </div>

            <Button
              variant="contained"
              color="primary"
              className="custom-button"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
    </>
  );
}
