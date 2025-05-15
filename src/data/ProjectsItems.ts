interface ProjectsProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
}

export const projects: ProjectsProps[] = [
  {
    id: 1,
    title: "Pneumatic Bicycle",
    description:
      "Designed and implemented a pneumatic system for reciprocating motion in a bicycle, along with an assistive transmission system.",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    tags: ["SolidWorks", "Pneumatics", "Physics", "3D Modeling"],
    url: "https://drive.proton.me/urls/330ZYXR5XR#lJZ6BEIrr3Wf",
  },
  {
    id: 2,
    title: "Screw Conveyor Design",
    description:
      "Led a project to design and model a screw conveyor, including engineering specifications, strength calculations, and 3D modeling.",
    image:
      "https://pixabay.com/get/g4691bb93ac6cf1fa973e1d837e67cf0339c1201cead79771f18d7371453c9f355411bb9f53954898495f8475276a0542735ac16ada767cf21d7d5a4fe069e212_1280.jpg",
    tags: ["SolidWorks", "Engineering", "Calculations", "Project Management"],
    url: "https://drive.proton.me/urls/F45FSDHFMG#jxkrUpEtuPVs",
  },
  {
    id: 3,
    title: "Hand-Powered Tri-Cycle",
    description:
      "Designed and constructed a hand-powered tricycle, from concept generation and selection to 3D modeling and fabrication.",
    image:
      "https://pixabay.com/get/gb117e0a0cbe5539a505878e1ed8aa38f9b6334c1f2fad0e574beb61ded9a71dfcf000da1b5b9ef66d598b95d1f778c2a753aa6818302c24dcd8d15ded574c57f_1280.jpg",
    tags: ["Design", "Fabrication", "3D Modeling", "Assembly"],
    url: "https://drive.proton.me/urls/330ZYXR5XR#lJZ6BEIrr3Wf",
  },
  {
    id: 4,
    title: "Automation Laboratory",
    description:
      "Worked with pneumatics, PLC programming, Festo MPS stations, and ROBOT programming to optimize industrial automation processes.",
    image:
      "https://pixabay.com/get/g9263ba9f98c278a323ea199bff89a462e0c110f1be188cff490c383bb9a9d746fceea4063477c0a178992dca4927aea58482630c6ec9d9096c28bb3ae9a65eb3_1280.jpg",
    tags: ["PLC", "Pneumatics", "Robotics", "Automation"],
    url: "https://drive.proton.me/urls/330ZYXR5XR#lJZ6BEIrr3Wf",
  },
  {
    id: 5,
    title: "Nuclear Plant Documentation",
    description:
      "Developed and implemented a structured approach to technical documentation for nuclear power plant equipment and systems.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    tags: ["Technical Writing", "Documentation", "Process Improvement", "KKS"],
    url: "https://drive.proton.me/urls/330ZYXR5XR#lJZ6BEIrr3Wf",
  },
];
