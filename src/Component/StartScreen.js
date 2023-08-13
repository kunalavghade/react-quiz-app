function StartScreen({ noQestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to React Quize</h2>
      <h3>{noQestions} questions to test your React mastery</h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        Let's Start'
      </button>
    </div>
  );
}

export default StartScreen;
