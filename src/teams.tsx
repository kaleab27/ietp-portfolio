import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "TEBAREK SHEMSU ARAB",
      department: "Software Engineering",
      id: "ETS1526/14",
    },
    {
      name: "NATNAEL HIRUY GETNET",
      department: "Electrical and Computer Engineering",
      id: "ETS1244/14",
    },
    {
      name: "KALEAB TADESSE MESHESHA",
      department: "Electrical and Computer Engineering",
      id: "ETS0848/14",
    },
    {
      name: "TEWOBSTIYA EYASU GEBREEGZIHABHER",
      department: "Electromechanical Engineering",
      id: "ETS1225/13",
    },
    {
      name: "KALEAB TSEGAYE SEIFU",
      department: "Civil Engineering",
      id: "ETS0850/14",
    },
    {
      name: "ABEY BEKALU SHIFERAW",
      department: "Architecture",
      id: "ETS0083/14",
    },
    {
      name: "BINIAM GEBREMICHAEL TILAHUN",
      department: "Mechanical Engineering",
      id: "ETS0347/14",
    },
    {
      name: "ZELALEM TAMIRU AYALEW",
      department: "Chemical Engineering",
      id: "ETS1795/14",
    },
    {
      name: "BAZEN ABEBE GEBREWUBET",
      department: "Environmental Engineering",
      id: "ETS0252/14",
    },
    {
      name: "BIRUH GIRMA AGA",
      department: "Mining Engineering",
      id: "ETS0367/14",
    },
  ];

  return (
    <section id="team" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Project Team
        </h2>

        {/* Advisor Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <motion.div
            className="bg-white rounded-lg p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Project Advisor
            </h3>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-green-600">
                Ethel Cherotaw
              </p>
              <p className="text-gray-600">
                Department: Electrical and Computer Engineering
              </p>
              <div className="flex items-center gap-6 mt-4 text-gray-600">
                {/* <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>966001092</span>
                </div> */}
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Block-64</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>ethel.cherotaw@aastu.edu.et</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-green-600 font-medium mb-1">
                {member.department}
              </p>
              <p className="text-gray-500 text-sm">{member.id}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
