import MainLayout from "../components/layout/MainLayout";
import {
  FaShieldAlt,
  FaRobot,
  FaGavel,
  FaHeart,
} from "react-icons/fa";

function About() {
  return (
    <MainLayout>
      <div className="bg-pink-50 min-h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-pink-600 mb-4">
              About SheShield AI
            </h1>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Empowering women through technology by providing
              instant legal guidance, emergency support, and
              awareness about women's rights and government
              schemes in India.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl shadow-lg p-10 mb-12">
            <div className="flex items-center gap-4 mb-5">
              <FaHeart
                className="text-pink-600"
                size={35}
              />

              <h2 className="text-3xl font-bold">
                Our Mission
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-8">
              Many women do not know their legal rights or
              where to seek help during emergencies.
              SheShield AI was built to bridge this gap by
              providing simple, accessible and instant
              information related to women's safety and
              legal rights.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <FaRobot
                className="mx-auto text-pink-600 mb-4"
                size={45}
              />

              <h3 className="text-2xl font-bold mb-3">
                AI Assistant
              </h3>

              <p className="text-gray-600">
                Get instant guidance regarding domestic
                violence, cybercrime, workplace harassment
                and legal rights.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <FaGavel
                className="mx-auto text-pink-600 mb-4"
                size={45}
              />

              <h3 className="text-2xl font-bold mb-3">
                Legal Awareness
              </h3>

              <p className="text-gray-600">
                Learn about important laws and government
                schemes created for women in India.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <FaShieldAlt
                className="mx-auto text-pink-600 mb-4"
                size={45}
              />

              <h3 className="text-2xl font-bold mb-3">
                Emergency Support
              </h3>

              <p className="text-gray-600">
                Access emergency helpline numbers quickly
                during critical situations.
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-white rounded-3xl shadow-lg p-10 mt-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Technologies Used
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-pink-100 px-5 py-3 rounded-full font-semibold">
                React.js
              </span>

              <span className="bg-pink-100 px-5 py-3 rounded-full font-semibold">
                Node.js
              </span>

              <span className="bg-pink-100 px-5 py-3 rounded-full font-semibold">
                Express.js
              </span>

              <span className="bg-pink-100 px-5 py-3 rounded-full font-semibold">
                MongoDB
              </span>

              <span className="bg-pink-100 px-5 py-3 rounded-full font-semibold">
                Groq AI
              </span>

              <span className="bg-pink-100 px-5 py-3 rounded-full font-semibold">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;