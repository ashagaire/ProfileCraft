import Olkiluoto from "../assets/NuclearPowerPlant.jpg";
import ScrewConveyor from "../assets/ScrewConveyor.jpg";
import HandPowerTricycle from "../assets/HandPoweredTricycle.jpg";
import Automation from "../assets/automation.jpg";
import Pneumatic from "../assets/thesis.png";

interface ProjectsProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string | null;
}

export const projects: ProjectsProps[] = [
  {
    id: 1,
    title: "Nuclear Plant Documentation",
    description:
      "Developed and implemented a structured approach to technical documentation for nuclear power plant equipment and systems.",
    image: Olkiluoto,
    tags: ["Technical Writing", "Documentation", "Process Improvement", "KKS"],
    url: null,
  },
  {
    id: 2,
    title: "Pneumatic Bicycle",
    description:
      "Designed and implemented a pneumatic system for reciprocating motion in a bicycle, along with an assistive transmission system.",
    image: Pneumatic,
    tags: ["SolidWorks", "Pneumatics", "Physics", "3D Modeling"],
    url: "https://drive.proton.me/urls/330ZYXR5XR#lJZ6BEIrr3Wf",
  },
  {
    id: 3,
    title: "Screw Conveyor Design",
    description:
      "Led a project to design and model a screw conveyor, including engineering specifications, strength calculations, and 3D modeling.",
    image: ScrewConveyor,
    tags: ["SolidWorks", "Engineering", "Calculations", "Project Management"],
    url: "https://drive.proton.me/urls/F45FSDHFMG#jxkrUpEtuPVs",
  },
  {
    id: 4,
    title: "Hand-Powered Tri-Cycle",
    description:
      "Designed and constructed a hand-powered tricycle, from concept generation and selection to 3D modeling and fabrication.",
    image: HandPowerTricycle,
    tags: ["Design", "Fabrication", "3D Modeling", "Assembly"],
    url: null,
  },
  {
    id: 5,
    title: "Automation & Robotics",
    description:
      "Worked with pneumatics, PLC programming, Festo MPS stations, and ROBOT programming to optimize industrial automation processes.",
    image: Automation,
    tags: ["PLC", "Pneumatics", "Robotics", "Automation"],
    url: null,
  },
];
