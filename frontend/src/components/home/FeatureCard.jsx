function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300 border border-pink-100">

      <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <Icon className="text-pink-500 text-3xl" />
      </div>

      <h3 className="text-2xl font-bold text-gray-800">
        {title}
      </h3>

      <p className="text-gray-600 mt-4 leading-7">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;