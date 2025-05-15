import { Card, CardContent, Button } from "@mui/material";
import { ArrowRightIcon } from "lucide-react";
import { projects } from "../data/ProjectsItems";
import { Slide } from "@mui/material";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section id="projects" className="py-16 bg-gray-100" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Projects</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing my mechanical engineering projects, from concept to
            execution.
          </p>
        </div>
        <Slide direction="up" in={inView} timeout={1000}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="project-card overflow-hidden shadow-lg hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 "
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Button
                        key={idx}
                        size="small"
                        className="custom-button-tags"
                        variant="outlined"
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium inline-flex items-center group"
                  >
                    View Project
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </Slide>
      </div>
    </section>
  );
}
