import { useState, useEffect } from "react";
import { Card, CardContent, TextField, Button } from "@mui/material";
import { Slide } from "@mui/material";
import SocialMedia from "./childComponents/SocialMedia";
import { useInView } from "react-intersection-observer";
import ContactForm from "./childComponents/ContactForm";
import ContactInformation from "./childComponents/ContactInformation";

export default function ContactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
              <ContactInformation />

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
              <ContactForm />
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}
