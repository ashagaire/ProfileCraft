interface ExperienceProps {
  id: number;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export const experiences: ExperienceProps[] = [
  {
    id: 1,
    title: "Design Handover Engineer",
    company: "Olkiluoto Nuclear Power Plant, Kaiku HR, AREVA N.P",
    period: "Apr 2020 - Dec 2024",
    responsibilities: [
      "Prepared and structured technical documentation packages according to equipment, WBS and Plant St. code (KKS)",
      "Communicated with client (TVO), resolving their comments regarding final documentation packages",
      "Communicated with engineering departments, suppliers to resolve document's metadata related issues",
      "Participated in bi-weekly meeting with client (TVO), summarizing meeting, preparing MOM",
      "Prepared instructions files, trained new team members",
    ],
  },
  {
    id: 2,
    title: "Bachelor's Thesis Project",
    company: "Bicycle driven by pneumatic cylinder",
    period: "Nov 2018 - Jan 2019",
    responsibilities: [
      "Designed pneumatic system for reciprocating motion",
      "Designed and modelled assistive transmission system",
      "Conducted bicycle physics calculations",
    ],
  },
  {
    id: 3,
    title: "Academic Project Lead",
    company: "Design and modelling of Screw conveyor, Saimaa University",
    period: "Sep 2018 - Dec 2018",
    responsibilities: [
      "Led project planning and team coordination",
      "Developed engineering specifications",
      "Performed strength, bearing lifetime calculations",
      "Created 3D models and engineering drawings",
    ],
  },
];
