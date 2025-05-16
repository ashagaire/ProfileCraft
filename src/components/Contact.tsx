import { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Input,
  Button,
} from "@mui/material";
import { Slide } from "@mui/material";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
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
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
            <div className="md:w-1/3 ">
              <Card className="mb-6 shadow-lg hover:shadow-xl ">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Contact Information
                  </h3>

                  <div className="flex items-start mb-4 hover:translate-x-1 transition-transform duration-200">
                    <div className="text-primary mr-4 mt-1">
                      {FaEnvelope({ className: "text-2xl" })}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-700">arjun.paudel@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-4 hover:translate-x-1 transition-transform duration-200">
                    <div className="text-primary mr-4 mt-1">
                      {FaPhone({ className: "text-2xl" })}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-700">+358 XX XXXX XXX</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-4 hover:translate-x-1 transition-transform duration-200">
                    <div className="text-primary mr-4 mt-1">
                      {FaMapMarkerAlt({ className: "text-2xl" })}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Location</h4>
                      <p className="text-gray-700">Finland</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl ">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Connect
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 hover:scale-110 transition-transform text-xl"
                    >
                      {FaLinkedin({ className: "text-2xl" })}
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 hover:scale-110 transition-transform text-xl"
                    >
                      {FaGithub({ className: "text-2xl" })}
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 hover:scale-110 transition-transform text-xl"
                    >
                      {FaTwitter({ className: "text-2xl" })}
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 hover:scale-110 transition-transform text-xl"
                    >
                      {FaInstagram({ className: "text-2xl" })}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Slide>
          <Slide direction="left" in={inView} timeout={1000}>
            <div className="md:w-2/3 ">
              <Card className="shadow-lg hover:shadow-xl ">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-6">
                    Send Me a Message
                  </h3>

                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 mb-2"
                        >
                          Name
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                          placeholder="Your Name"
                          className={formErrors.name ? "border-red-500" : ""}
                          required
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 mb-2"
                        >
                          Email
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                          placeholder="Your Email"
                          className={formErrors.email ? "border-red-500" : ""}
                          required
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 mb-2"
                      >
                        Subject
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        //   onChange={handleChange}
                        //   onBlur={handleBlur}
                        placeholder="Subject"
                        className={formErrors.subject ? "border-red-500" : ""}
                        required
                      />
                      {formErrors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.subject}
                        </p>
                      )}
                    </div>

                    <div className="mb-6">
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
                        //   onChange={handleChange}
                        //   onBlur={handleBlur}
                        rows={5}
                        placeholder="Your Message"
                        className={formErrors.message ? "border-red-500" : ""}
                        required
                      />
                      {formErrors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      variant="contained"
                      color="primary"
                      className="custom-button"
                      type="submit"
                      disabled={
                        isSubmitting || Object.keys(formErrors).length > 0
                      }
                    >
                      <span
                        className={`flex items-center justify-center transition-all duration-300 ${
                          isSubmitting ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                      {isSubmitting && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        </span>
                      )}
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
