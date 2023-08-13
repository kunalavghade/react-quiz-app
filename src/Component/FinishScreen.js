function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points * 100) / maxPoints;
  let emoji;
  if (percentage === 100) emoji = "💰";
  if (percentage >= 80 && percentage < 100) emoji = "😀";
  if (percentage >= 50 && percentage < 80) emoji = "😀";
  if (percentage >= 0 && percentage < 50) emoji = "😓";

  return (
    <>
      <p className="result">
        <strong>{emoji}</strong> You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore : {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
