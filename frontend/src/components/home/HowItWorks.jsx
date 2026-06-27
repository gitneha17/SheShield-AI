import { FaQuestionCircle, FaRobot, FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";

const steps = [
  {
    icon: FaQuestionCircle,
    title: "Ask",
    description: "Type your legal question or upload a legal document.",
  },
  {
    icon: FaRobot,
    title: "AI Understands",
    description: "IBM Granite analyzes your request and understands the context.",
  },
  {
    icon: FaCheckCircle,
    title: "Receive Guidance",
    description: "Get easy-to-understand explanations and suggested next steps.",
  },
];

function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="How SheShield AI Works"
          subtitle="Three simple steps to access legal guidance."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="bg-pink-50 rounded-2xl p-8 text-center shadow hover:shadow-lg transition"
              >
                <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center mx-auto">
                  <Icon className="text-white text-3xl" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;