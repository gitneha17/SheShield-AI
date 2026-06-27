import MainLayout from "../components/layout/MainLayout";
import {
  FaPiggyBank,
  FaFemale,
  FaHandsHelping,
  FaHome,
  FaGraduationCap,
  FaHeart,
} from "react-icons/fa";

function Schemes() {
  const schemes = [
    {
      title: "Sukanya Samriddhi Yojana",
      icon: <FaPiggyBank className="text-pink-600 text-3xl" />,
      description:
        "A savings scheme for the financial security and future education of girl children.",
    },
    {
      title: "Beti Bachao Beti Padhao",
      icon: <FaFemale className="text-pink-600 text-3xl" />,
      description:
        "A government initiative to improve the welfare, education and protection of girls.",
    },
    {
      title: "One Stop Centre Scheme",
      icon: <FaHandsHelping className="text-pink-600 text-3xl" />,
      description:
        "Provides legal, medical and psychological support to women facing violence.",
    },
    {
      title: "Working Women Hostel Scheme",
      icon: <FaHome className="text-pink-600 text-3xl" />,
      description:
        "Provides safe and affordable accommodation for working women.",
    },
    {
      title: "Mahila Shakti Kendra",
      icon: <FaGraduationCap className="text-pink-600 text-3xl" />,
      description:
        "Empowers rural women through skill development and community participation.",
    },
    {
      title: "Ujjawala Scheme",
      icon: <FaHeart className="text-pink-600 text-3xl" />,
      description:
        "Supports prevention, rescue and rehabilitation of women and children affected by trafficking.",
    },
  ];

  return (
    <MainLayout>
      <div className="bg-pink-50 min-h-screen py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-pink-600 mb-3">
            Government Schemes For Women
          </h1>

          <p className="text-center text-gray-600 mb-12">
            Explore important government schemes that support women's safety,
            education, financial independence and empowerment.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schemes.map((scheme, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="mb-5">
                  {scheme.icon}
                </div>

                <h2 className="text-xl font-bold mb-4">
                  {scheme.title}
                </h2>

                <p className="text-gray-600">
                  {scheme.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-pink-600 mb-6">
              🌸 Why These Schemes Matter
            </h2>

            <ul className="space-y-4 text-gray-700 text-lg">
              <li>✅ Promote women's education and financial security.</li>
              <li>✅ Support victims of violence and trafficking.</li>
              <li>✅ Encourage women's empowerment and self-reliance.</li>
              <li>✅ Provide safe accommodation and legal assistance.</li>
              <li>✅ Help create equal opportunities for women in society.</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Schemes;