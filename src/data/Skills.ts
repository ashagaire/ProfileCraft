import {
  FaDraftingCompass,
  FaCalculator,
  FaCubes,
  FaRobot,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface SkillProps {
  name: string;
  percentage: number;
}

interface CompetencyProps {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

export const skills: SkillProps[] = [
  { name: "SolidWorks", percentage: 90 },
  { name: "MATLAB", percentage: 85 },
  { name: "FluidSIM (PLC Programming)", percentage: 80 },
  { name: "MS Excel", percentage: 95 },
  { name: "CIROS Robotics", percentage: 75 },
  { name: "Blender", percentage: 70 },
];

export const competencies: CompetencyProps[] = [
  {
    id: 1,
    icon: FaDraftingCompass,
    title: "Mechanical Design",
    description: "Experience in designing mechanical systems and components.",
  },
  {
    id: 2,
    icon: FaCalculator,
    title: "Engineering Calculations",
    description: "Proficient in stress, strength, and physics calculations.",
  },
  {
    id: 3,
    icon: FaCubes,
    title: "3D Modeling",
    description:
      "Skilled in creating detailed 3D models and engineering drawings.",
  },
  {
    id: 4,
    icon: FaRobot,
    title: `Automation `,
    description: "Experience with PLC programming and industrial automation.",
  },
  {
    id: 5,
    icon: FaFileAlt,
    title: "Technical Documentation",
    description:
      "Extensive experience in preparing and managing technical documentation.",
  },
  {
    id: 6,
    icon: FaUsers,
    title: "Project Management",
    description:
      "Experience leading technical projects and coordinating teams.",
  },
];

export const certificates = [
  "SOLIDWORKS® CSWA Certified",
  "Finnish work permit",
  "Occupational safety card",
];
