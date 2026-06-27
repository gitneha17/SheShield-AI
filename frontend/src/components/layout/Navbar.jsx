import { FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-pink-500 text-white p-3 rounded-full">
            <FaShieldAlt size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-pink-500">
              SheShield AI
            </h1>
            <p className="text-xs text-gray-500">
              Women's Safety & Rights
            </p>
          </div>
        </div>

        {/* Navigation */}
      <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

  <li>
    <Link
      to="/"
      className="hover:text-pink-500 transition"
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      to="/rights"
      className="hover:text-pink-500 transition"
    >
      Rights
    </Link>
  </li>

  <li>
    <Link
      to="/schemes"
      className="hover:text-pink-500 transition"
    >
      Schemes
    </Link>
  </li>

  <li>
    <Link
      to="/emergency"
      className="hover:text-pink-500 transition"
    >
      Emergency
    </Link>
  </li>

  <li>
    <Link
      to="/about"
      className="hover:text-pink-500 transition"
    >
      About
    </Link>
  </li>

</ul>
        {/* CTA Button */}
    <Link to="/chat">
      <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg transition">
        Start Chat
      </button>
    </Link>
      </div>
    </nav>
  );
}

export default Navbar;