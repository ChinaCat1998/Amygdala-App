const tips = [
  "Take a break and breathe deeply for 5 minutes.",
  "Go for a walk and enjoy nature.",
  "Write down something you're grateful for.",
  "Spend 10 minutes reading a book.",
  "Practice mindfulness or meditation.",
  "Connect with a friend or loved one.",
  "Listen to your favorite music.",
  "Exercise for at least 20 minutes.",
  "Get a good night's sleep.",
  "Stay hydrated and eat nutritious meals."
];

const MentalHealthTips = () => {
  return (
    <div className="mental-health-tips">
      <h2>Mental Health Tips</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default MentalHealthTips;