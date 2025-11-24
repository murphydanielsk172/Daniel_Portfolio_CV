import {
  c,
  python,
  systemverilog,
  cpp,
  labview,
  vivado,
  cadence,
  proteus,
  linux,
  raspberrypi,
  arduino,
  esp32,
  weatherpedia,
  termpw,
  mhft,
  mathwork,
  gateautomation,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "MATLAB", icon: mathwork },
  { title: "Python", icon: python },
  { title: "SystemVerilog", icon: systemverilog },
];

export const technologies = [
  { name: "LabVIEW", icon: labview },
  { name: "Vivado", icon: vivado, decalScale: 0.7},
  { name: "Cadence OrCAD / Virtuoso", icon: cadence, decalScale: 0.5 },
  { name: "Proteus", icon: proteus, decalScale: 0.7 },
  { name: "Linux", icon: linux },
  { name: "Raspberry Pi", icon: raspberrypi },
  { name: "Arduino", icon: arduino },
  { name: "ESP32", icon: esp32 },
];

export const experiences = [
  {
    title: "Gate Automation & Security Systems Technician",
    company_name: "No Shorts Automation",
    icon: gateautomation,
    iconBg: "#161329",
    date: "Summer 2019 – Summer 2025",
    points: [
      "Install and service gate automation, CCTV, alarms, access control, intercoms, and fog deterrent systems across residential, school, industrial, and business sites.",
      "Deliver full-stack field work: plan device layouts, design custom integration systems, route power/data, wire and configure control panels and access devices, pull and terminate cabling, and program controllers for site-specific requirements.",
      "Diagnose and resolve electrical and digital faults (moisture ingress, network drops, misconfigured panels), applying electronics troubleshooting to restore reliable operation.",
      "Commission systems through calibration, verification, and client walkthroughs, documenting handover details and demonstrating safe operation.",
      "Coordinate with electricians and other trades, assisting with supervised electrical tasks (e.g., general electrical, consumer units, lighting, etc) while keeping installations safe and compliant with site standards and safety practices.",
    ],
  },
];

export const projects = [
  {
    name: "IoT-Enabled Bicycle Speedometer (3rd-Year Project)",
    description:
      "Developed an IoT-connected bicycle speedometer for real-time speed tracking and journey distance visualization. Designed an interactive interface to display live data and evaluated a mechanical reed switch versus an electronic hall-effect sensor for accurate speed measurement.",
    image: weatherpedia,
  },
  {
    name: "Mars Rover AI and Machine Learning Navigation System",
    description:
      "Built a depth-camera navigation system using a CNN USB accelerator for real-time obstacle detection and avoidance. Implemented multi-sensor fusion with filtering and PID control to improve pose estimation and waypoint navigation while contributing to the ERC rover project within a multidisciplinary team.",
    image: termpw,
  },
  {
    name: "Rover Mk2 (Ongoing)",
    description:
      "Current iteration focused on analyzing the original rover, addressing issues, and enhancing performance while experimenting with new concepts and design improvements.",
    image: mhft,
  },
];
