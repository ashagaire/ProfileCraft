import { FaCertificate } from "react-icons/fa";
import { competencies, certificates } from "../data/Skills";
import { Card, CardContent } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional skillset spans mechanical engineering, design, and
            technical documentation.
          </p>
        </div>

        <div className="grid grid-cols-1  gap-12">
          <div>
            <h3 className="text-xl font-bold text-primary mb-6">
              Professional Competencies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {competencies.map((comp, index) => (
                <Card key={index} className="bg-white ">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      {comp.icon({ className: "text-2xl text-primary mr-3" })}
                      <h4 className="font-medium text-gray-800">
                        {comp.title}
                      </h4>
                      {comp.title === "3D Modeling" && (
                        <a
                          href="https://1drv.ms/b/c/3cd3ee4c6c17f4cd/EcPF5VNNIKlBtC6-OjxayeEBwWvoDv6TRtzEhH4EN_tWNQ?e=plPIGb"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="preview-link"
                        >
                          <LaunchIcon
                            fontSize="small"
                            color="warning"
                            className="pl-1 ml-2"
                          />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{comp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Certifications
              </h3>
              <ul className="space-y-2">
                {certificates.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    {FaCertificate({ className: "text-yellow-500 mr-2" })}
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
