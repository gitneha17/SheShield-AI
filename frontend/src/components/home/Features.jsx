import FeatureCard from "./FeatureCard";
import { features } from "../../data/features";
import SectionTitle from "../common/SectionTitle";

function Features() {
  return (
    <section className="bg-pink-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-gray-900">
          What SheShield AI Can Do
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-16">
          AI-powered assistance for Indian women's legal awareness and empowerment.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

export default Features;