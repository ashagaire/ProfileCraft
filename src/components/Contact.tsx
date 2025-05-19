import { useState, useEffect } from "react";
import { Card, CardContent, TextField, Button } from "@mui/material";
import { Slide } from "@mui/material";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";
import SocialMedia from "./SocialMedia";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xqaqnbjn");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
  }, [state.succeeded]);

  return (
    <section id="contact" className="py-16 bg-gray-100" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center  ">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to contact me for professional inquiries, collaborations,
            or questions about my work.
          </p>
        </div>

        <div className="container flex flex-col md:flex-row gap-8">
          <Slide direction="right" in={inView} timeout={1000}>
            <div className="md:w-1/3">
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

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Connect
                  </h3>
                  <SocialMedia textCss="text-primary hover:text-primary/80" />
                </CardContent>
              </Card>
            </div>
          </Slide>
          <Slide direction="left" in={inView} timeout={1000}>
            <div className="md:w-2/3 ">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-6">
                    Send Me a Message
                  </h3>

                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="form-group">
                        <label
                          htmlFor="name"
                          className="block text-gray-700 mb-2"
                        >
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
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="email"
                          className="block text-gray-700 mb-2"
                        >
                          Email
                        </label>
                        <TextField
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                        />
                      </div>
                    </div>

                    <div className="form-group mb-6">
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 mb-2"
                      >
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
                      <label
                        htmlFor="message"
                        className="block text-gray-700 mb-2"
                      >
                        Message
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
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}
