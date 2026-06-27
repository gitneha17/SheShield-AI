function QuickActions() {
  const actions = [
    "Know my workplace rights",
    "Explain Domestic Violence Act",
    "Government schemes for women",
    "Draft a legal complaint",
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {actions.map((item) => (
        <button
          key={item}
          className="bg-white rounded-xl shadow hover:shadow-lg p-5 text-left hover:bg-pink-50 transition"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default QuickActions;