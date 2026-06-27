function WelcomeScreen({ onQuestionClick }) {
  const questions = [
    "Know my workplace rights",
    "Explain Domestic Violence Act",
    "Government schemes for women",
    "Draft a legal complaint",
  ];

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(question)}
            className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition text-3xl font-medium"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WelcomeScreen;