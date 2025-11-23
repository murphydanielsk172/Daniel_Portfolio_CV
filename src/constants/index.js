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
  payloadmaster,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
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
  { name: "Vivado", icon: vivado },
  { name: "Cadence OrCAD / Virtuoso", icon: cadence },
  { name: "Proteus", icon: proteus },
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
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/danielmurphy/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/danielmurphy/portfolio",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/danielmurphy/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/danielmurphy/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/danielmurphy/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/danielmurphy/Image_to_Pencil_Sketch_App",
  },
];
