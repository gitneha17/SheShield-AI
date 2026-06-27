import MainLayout from "../components/layout/MainLayout";
import {
  FaBalanceScale,
  FaBriefcase,
  FaHome,
  FaUserShield,
  FaPhoneAlt,
  FaGavel,
} from "react-icons/fa";

function Rights() {
  const rights = [
    {
      title: "Right Against Domestic Violence",
      icon: <FaHome className="text-pink-600 text-3xl" />,
      description:
        "Protection under the Protection of Women from Domestic Violence Act, 2005.",
    },
    {
      title: "Right Against Workplace Harassment",
      icon: <FaBriefcase className="text-pink-600 text-3xl" />,
      description:
        "Protection under the Sexual Harassment of Women at Workplace Act, 2013.",
    },
    {
      title: "Right to Equal Pay",
      icon: <FaBalanceScale className="text-pink-600 text-3xl" />,
      description:
        "Women are entitled to equal pay for equal work without discrimination.",
    },
    {
      title: "Right to Report Cyber Crime",
      icon: <FaUserShield className="text-pink-600 text-3xl" />,
      description:
        "Women can report cyber stalking, online abuse and fraud to cyber authorities.",
    },
    {
      title: "Right to Free Legal Aid",
      icon: <FaGavel className="text-pink-600 text-3xl" />,
      description:
        "Women can receive free legal aid under the Legal Services Authorities Act.",
    },
    {
      title: "Right to Emergency Assistance",
      icon: <FaPhoneAlt className="text-pink-600 text-3xl" />,
      description:
        "Immediate help is available through helplines such as 181 and 112.",
    },
  ];

  return (
    <MainLayout>
      <div className="bg-pink-50 min-h-screen py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-pink-600 mb-3">
            Women's Legal Rights in India
          </h1>

          <p className="text-center text-gray-600 mb-12">
            Learn about important rights that protect and empower women in India.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
              >
                <div className="mb-5">
                  {right.icon}
                </div>

                <h2 className="text-xl font-bold mb-4">
                  {right.title}
                </h2>

                <p className="text-gray-600">
                  {right.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-pink-600 mb-6">
              ⚖️ Remember
            </h2>

            <ul className="space-y-4 text-gray-700 text-lg">
              <li>✅ Every woman has the right to safety and dignity.</li>
              <li>✅ Violence and harassment are punishable offences.</li>
              <li>✅ You have the right to seek legal and police assistance.</li>
              <li>✅ Save evidence whenever possible.</li>
              <li>✅ Never hesitate to ask for help.</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Rights;