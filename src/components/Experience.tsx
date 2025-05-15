import { experiences } from "../data/ExperienceItems";
import { Card, CardContent, Button } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto ">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="relative pl-4 md:pl-12 ">
          {experiences.map((exp) => (
            <div key={exp.id} className=" ">
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="filled" color="warning" />
                    <TimelineConnector sx={{ backgroundColor: "#e5e7eb" }} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card
                      className="ml-2 md:ml-4"
                      sx={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "#e5e7eb",
                      }}
                    >
                      <CardContent>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-primary">
                              {exp.title}
                            </h3>
                            <p className="text-gray-700">{exp.company}</p>
                          </div>
                          <div className="mt-2 md:mt-0 md:text-right">
                            <Button
                              variant="contained"
                              size="small"
                              className="custom-button-badge text-sm px-3 py-1"
                            >
                              {exp.period}
                            </Button>
                          </div>
                        </div>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
