
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-[85vh] bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 flex items-center justify-center">

      <div className="text-center px-6">

        <h1 className="text-6xl font-extrabold text-gray-900">
          Your AI Companion for
          <span className="block text-pink-500 mt-2">
            Women's Rights & Safety
          </span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
          Learn your legal rights, explore government schemes,
          get workplace guidance, and receive emergency support —
          all in one intelligent platform.
        </p>

        <div className="mt-10 flex justify-center gap-5">
        <Link to="/chat">
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold">
          Start Chat
        </button>
      </Link>
  <Link to="/about">
  <button className="border border-pink-500 text-pink-500 hover:bg-pink-100 px-8 py-4 rounded-xl font-semibold">
    Learn More
  </button>
</Link>
        </div>

      </div>

    </section>
  );
}

export default Hero;