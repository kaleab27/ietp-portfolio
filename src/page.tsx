import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronDown,
  Leaf,
  Calendar,
  ChevronUp,
  Circle,
  Download,
  X,
  ExternalLink,
} from "lucide-react";

import circuit from "./assets/circuit.png";
import proto1 from "./assets/proto1.jpeg";
import proto2 from "./assets/proto2.jpeg";
import photo1 from "./assets/photo1.jpeg";
import photo2 from "./assets/photo2.jpeg";
import photo3 from "./assets/photo3.jpeg";
import proto3 from "./assets/proto3.jpg";
import proto4 from "./assets/proto4.jpg";
import final1 from "./assets/final1.jpg";
import final2 from "./assets/final2.jpg";
import photo6 from "./assets/photo6.jpeg";
import mainPDF from "./assets/main.pdf";

import TeamSection from "./teams";

export default function Page() {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedPhases, setExpandedPhases] = useState<number[]>([0]);

  const togglePhase = (index: number) => {
    setExpandedPhases((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = mainPDF;
    link.download = "AgriFusion-Project-Paper.pdf"; // Name that will be used for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openDialog = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setSelectedPhase(index);
  };

  const closeDialog = () => {
    setSelectedPhase(null);
  };

  const timelineData = [
    {
      week: "Week 0-1",
      title: "Project Initiation",
      date: "October 11-21, 2024",
      items: [
        {
          text: "Team formation and Advisor Assignment (Oct 11)",
          completed: true,
        },
        { text: "IETP Guideline release (Oct 14)", completed: true },
        { text: "Team and advisor announcement (Oct 14)", completed: true },
        {
          text: "Orientation - Introduction to IETP (Oct 17)",
          completed: true,
        },
        { text: "Group meet with Advisor (Oct 18)", completed: true },
        {
          text: "Training/Visiting in Mechanical Workshop (Oct 18, 21)",
          completed: true,
        },
        {
          text: "IETP Lecture 1: Team Dynamics and Communication (Oct 21)",
          completed: true,
        },
      ],
      progress: 100,
      notes: {
        overview:
          "Initial phase focused on team formation and project scope definition.",
        keyActivities: [
          "Team formation and role assignments across disciplines",
          "Project scope introduction and alignment",
          "Initial workshop visits and training sessions",
        ],
        teamContributions: [
          "Software & Electrical: Designed Portfolio and Led discussions on sensor integration",
          "Mechanical & Chemical: Explored hydroponic layer materials",
          "Civil & Architecture: Focused on structural design feasibility",
        ],
        outcomes: [
          "Aligned team objectives",
          "Established interdisciplinary collaboration framework",
          "Completed initial training requirements",
        ],
      },
      images: [],
    },
    {
      week: "Week 2-3",
      title: "Project Planning",
      date: "October 25 - November 1, 2024",
      items: [
        {
          text: "Submit project ideas to advisor [Form A] (Oct 25)",
          completed: true,
        },
        { text: "Group meet with Advisor (Oct 25)", completed: true },
        { text: "IETP Lecture 2: Design Process (Oct 28)", completed: true },
        { text: "Project idea selection [Form B] (Nov 1)", completed: true },
        { text: "Group meet with Advisor (Nov 1)", completed: true },
      ],
      progress: 100,
      notes: {
        overview:
          "Planning phase established core system design and component allocation.",
        systemDesign: [
          "One temperature sensor and fan per hydroponic layer",
          "One temperature and moisture sensor for soil farm",
          "Two pumps: periodic (hydroponic) and moisture-triggered (soil farm)",
        ],
        teamContributions: [
          "Electrical, ElectroMechanical & Mechanical: Developed pump and fan control logic",
          "Civil & Architecture: Assessed sustainability and layout",
          "Software: Initiated dashboard design for system control",
          "Mining and Chemical: Did research on the nutrients to be used",
          "Environmental: Did research on water container/reservoir components",
        ],
        outcomes: [
          "Completed system architecture design",
          "Established component requirements",
          "Defined control logic framework",
          "Outlined the required minerals to be used for specific plants",
          "Defined the specif type and size of the reservoir to be used and its placement",
        ],
      },
      images: [proto1, proto2],
    },
    {
      week: "Week 4-5",
      title: "Project Simulation and Development",
      date: "November 4-15, 2024",
      items: [
        {
          text: "IETP Lecture 3: Project Methodology (Nov 4)",
          completed: true,
        },
        { text: "Group meet with Advisor (Nov 8)", completed: true },
        {
          text: "IETP Lecture 4: Fabrication Process and Lab Safety (Nov 11)",
          completed: true,
        },
        { text: "Submission of project proposal (Nov 15)", completed: true },
        { text: "Group meet with Advisor (Nov 15)", completed: true },
      ],
      progress: 100,
      notes: {
        overview:
          "Development phase focused on Simulation and Individual System Development.",
        keyActivities: [
          "Simulated the Electrical and Electromechanical component of the system",
          "Finished Dashboard Design",
        ],
        teamContributions: [
          "Mechanical: Hardware assembly and integration",
          "Software: Control logic and dashboard development",
          "Architecture & Civil: Layout optimization and structural support",
        ],
        outcomes: [
          "Functional monitoring system",
          "Integrated hardware-software interface",
          "Optimized maintenance layout",
        ],
      },
      images: [circuit, proto3, proto4],
    },
    {
      week: "Week 6-10",
      title: "Implementation Phase",
      date: "November 22 - December 20, 2024",
      items: [
        { text: "Group meet with Advisor (Nov 22)", completed: true },
        { text: "BoM and procurement plan (Nov 29)", completed: true },
        { text: "Group meet with Advisor (Nov 29)", completed: true },
        { text: "Submission of progress report (Dec 6)", completed: true },
        { text: "Group meet with Advisor (Dec 6, 13, 20)", completed: true },
      ],
      progress: 100,
      notes: {
        overview: "Full system implementation and integration phase.",
        implementation: [
          "Hardware assembly and integration complete",
          "Sensor and control system deployment",
          "Real-time monitoring system activation",
        ],
        systemComponents: [
          "Temperature sensors and fans in hydroponic layers",
          "Temperature and moisture sensors in soil farm",
          "Integrated pump control system",
          "Real-time data pipeline",
        ],
        teamOutcomes: [
          "Software: Completed data pipeline and control interface",
          "Civil & Architecture: Optimized system layout",
          "Environmental & Mining: Verified system adaptability",
          "Chemical: Confirmed sensor functionality under controlled conditions",
        ],
      },
      images: [photo1, photo2, photo3],
    },
    {
      week: "Week 11-15",
      title: "Evaluation and Completion",
      date: "December 27, 2024 - January 15, 2025",
      items: [
        {
          text: "Evaluation of prototype fabrication (Dec 27)",
          completed: true,
        },
        { text: "Poster evaluation (Jan 1)", completed: true },
        { text: "Prototype demonstration (Jan 1)", completed: true },
        {
          text: "Group and individual oral presentation (Jan 1)",
          completed: true,
        },
        { text: "Peer evaluation (Jan 3)", completed: true },
        { text: "e-portfolio evaluation (Jan 3)", completed: true },
        { text: "Final report submission (Jan 3)", completed: true },
        { text: "Innovation Exhibition Day (Jan 15)", completed: false },
      ],
      progress: 90,
      notes: {
        overview:
          "Final testing, calibration, and presentation preparation phase.",
        technicalActivities: [
          "Performance threshold optimization",
          "Real-world condition testing",
        ],
        teamContributions: [
          "Electrical & Chemical: Fine-tuned system thresholds",
          "Software: Finalized monitoring dashboard",
          "Mechanical & Environmental: Durability verification",
          "Architecture & Civil: Presentation setup preparation",
        ],
        deliverables: [
          "Prototype demonstration preparation",
          "Documentation completion",
          "Exhibition materials preparation",
          "Final system optimization",
        ],
      },
      images: [final1, final2, photo6],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-green-600" />
          <span className="text-2xl font-bold text-gray-800">AgriFusion</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#timeline" className="text-gray-600 hover:text-green-600">
            Timeline & Progress
          </a>
          <a href="#team" className="text-gray-600 hover:text-green-600">
            Team
          </a>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <ChevronDown
            className={`h-6 w-6 text-gray-600 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#timeline" className="text-gray-600 hover:text-green-600">
              Timeline & Progress
            </a>
            <a href="#team" className="text-gray-600 hover:text-green-600">
              Team
            </a>
          </nav>
        </div>
      )}

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AgriFusion: Soil and Hydroponic Farm Monitoring Hub
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A Multidisciplinary Research Project for Sustainable Agriculture
            through combined soil and hydroponic farming monitoring systems
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={handleDownload}
              className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Paper
            </button>
          </motion.div>
        </section>

        <section id="timeline" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Project Timeline & Progress
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="space-y-6">
                {timelineData.map((phase, index) => (
                  <motion.div
                    key={index}
                    className="bg-green-50 rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className="p-6 cursor-pointer"
                      onClick={() => togglePhase(index)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            {phase.title}
                          </h3>
                          <p className="text-green-600 font-medium">
                            {phase.week}
                          </p>
                        </div>
                        <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                          <Calendar className="h-5 w-5 mr-2" />
                          {phase.date}
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">
                            Progress
                          </span>
                          <span className="text-sm font-medium text-green-600">
                            {phase.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-green-600 h-2.5 rounded-full transition-all duration-500"
                            style={{ width: `${phase.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        {expandedPhases.includes(index) ? (
                          <ChevronUp className="h-5 w-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-600" />
                        )}
                      </div>
                    </div>
                    <AnimatePresence>
                      {expandedPhases.includes(index) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ul className="space-y-2 p-6 pt-0">
                            {phase.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start">
                                {item.completed ? (
                                  <Check className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                ) : (
                                  <Circle className="h-5 w-5 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                                )}
                                <span
                                  className={`text-gray-600 ${
                                    item.completed ? "" : "text-gray-400"
                                  }`}
                                >
                                  {item.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="flex items-center ml-6 pb-4">
                      <button
                        onClick={(e) => openDialog(e, index)}
                        className="text-green-600 hover:text-green-700 font-medium flex items-center"
                      >
                        Progress Note
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <TeamSection />
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; 2024 AgriFusion Project. AASTU Integrated Team Project
            Program.
          </p>
        </div>
      </footer>
      {selectedPhase !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-screen-xl w-11/12 h-5/6 overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {timelineData[selectedPhase].title}
                </h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeDialog();
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                <p className="text-lg font-semibold text-gray-800">
                  {timelineData[selectedPhase].notes.overview}
                </p>

                {Object.entries(timelineData[selectedPhase].notes).map(
                  ([key, value]) => {
                    if (key === "overview") return null;
                    return (
                      <div key={key} className="space-y-2">
                        <h4 className="text-md font-semibold text-gray-700 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {Array.isArray(value) &&
                            value.map((item, index) => (
                              <li key={index} className="text-gray-600">
                                {item}
                              </li>
                            ))}
                        </ul>
                      </div>
                    );
                  }
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {timelineData[selectedPhase].images.map((src, index) => (
                  <div key={index}>
                    <img
                      src={src}
                      alt={`Phase ${selectedPhase + 1} image ${index + 1}`}
                      className="rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
