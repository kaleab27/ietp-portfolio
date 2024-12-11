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
} from "lucide-react";

import TeamSection from "./teams";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedPhases, setExpandedPhases] = useState<number[]>([0]);

  const togglePhase = (index: number) => {
    setExpandedPhases((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleDownload = () => {
    // In a real application, this would trigger the download of the paper
    alert("Downloading paper...");
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
        { text: "Project idea selection [Form B] (Nov 1)", completed: false },
        { text: "Group meet with Advisor (Nov 1)", completed: false },
      ],
      progress: 75,
    },
    {
      week: "Week 4-5",
      title: "Project Development",
      date: "November 4-15, 2024",
      items: [
        {
          text: "IETP Lecture 3: Project Methodology (Nov 4)",
          completed: false,
        },
        { text: "Group meet with Advisor (Nov 8)", completed: false },
        {
          text: "IETP Lecture 4: Fabrication Process and Lab Safety (Nov 11)",
          completed: false,
        },
        { text: "Submission of project proposal (Nov 15)", completed: false },
        { text: "Group meet with Advisor (Nov 15)", completed: false },
      ],
      progress: 25,
    },
    {
      week: "Week 6-10",
      title: "Implementation Phase",
      date: "November 22 - December 20, 2024",
      items: [
        { text: "Group meet with Advisor (Nov 22)", completed: false },
        { text: "BoM and procurement plan (Nov 29)", completed: false },
        { text: "Group meet with Advisor (Nov 29)", completed: false },
        { text: "Submission of progress report (Dec 6)", completed: false },
        { text: "Group meet with Advisor (Dec 6, 13, 20)", completed: false },
      ],
      progress: 0,
    },
    {
      week: "Week 11-15",
      title: "Evaluation and Completion",
      date: "December 27, 2024 - January 15, 2025",
      items: [
        {
          text: "Evaluation of prototype fabrication (Dec 27)",
          completed: false,
        },
        { text: "Poster evaluation (Jan 1)", completed: false },
        { text: "Prototype demonstration (Jan 1)", completed: false },
        {
          text: "Group and individual oral presentation (Jan 1)",
          completed: false,
        },
        { text: "Peer evaluation (Jan 3)", completed: false },
        { text: "e-portfolio evaluation (Jan 3)", completed: false },
        { text: "Final report submission (Jan 3)", completed: false },
        { text: "Innovation Exhibition Day (Jan 15)", completed: false },
      ],
      progress: 0,
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
    </div>
  );
}
