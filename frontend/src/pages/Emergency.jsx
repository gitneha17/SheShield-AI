import MainLayout from "../components/layout/MainLayout";
import {
  FaPhoneAlt,
  FaShieldAlt,
  FaUserShield,
  FaHospital,
} from "react-icons/fa";

function Emergency() {
  const helplines = [
    {
      title: "Women's Helpline",
      number: "181",
      icon: <FaShieldAlt className="text-pink-600 text-3xl" />,
      description:
        "24×7 support for women facing violence or harassment.",
    },
    {
      title: "Emergency Response",
      number: "112",
      icon: <FaPhoneAlt className="text-pink-600 text-3xl" />,
      description:
        "National emergency number for immediate assistance.",
    },
    {
      title: "Cyber Crime Helpline",
      number: "1930",
      icon: <FaUserShield className="text-pink-600 text-3xl" />,
      description:
        "Report online fraud, cyber bullying and cyber crimes.",
    },
    {
      title: "Ambulance",
      number: "108",
      icon: <FaHospital className="text-pink-600 text-3xl" />,
      description:
        "Medical emergency and ambulance services.",
    },
  ];

  return (
    <MainLayout>
      <div className="bg-pink-50 min-h-screen py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-pink-600 mb-3">
            Emergency Help & Helplines
          </h1>

          <p className="text-center text-gray-600 mb-12">
            If you or someone you know is in danger, contact these
            emergency services immediately.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {helplines.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
              >
                <div className="mb-4">{item.icon}</div>

                <h2 className="text-2xl font-bold mb-2">
                  {item.title}
                </h2>

                <p className="text-gray-600 mb-5">
                  {item.description}
                </p>

                <p className="text-4xl font-bold text-pink-600 mb-6">
                  {item.number}
                </p>

                <a
                  href={`tel:${item.number}`}
                  className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
                >
                  Call Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
  <h2 className="text-3xl font-bold text-pink-600 mb-6">
    ⚠️ What To Do In An Emergency
  </h2>

  <ul className="space-y-4 text-gray-700 text-lg">
    <li>✅ Move to a safe place immediately.</li>
    <li>✅ Call 112 or 181 for immediate help.</li>
    <li>✅ Inform a trusted friend or family member.</li>
    <li>✅ Save evidence such as messages, photos or recordings.</li>
    <li>✅ File a complaint at the nearest police station if necessary.</li>
    <li>✅ Seek medical assistance if you are injured.</li>
  </ul>
</div>

<div className="mt-10 text-center text-gray-600">
  <p>
    💡 In life-threatening situations, do not wait.
    Contact emergency services immediately.
  </p>
</div>
    </MainLayout>
  );
}

export default Emergency;