function Pogress({ index, noQuestion, maxPoints, points, answer }) {
  return (
    <header className="progress">
      <progress max={noQuestion} value={index + Number(answer !== null)} />
      {/* {answer} */}
      <p>
        Questions{" "}
        <strong>
          {index + 1} / {noQuestion}
        </strong>
      </p>
      <p>
        <strong>
          {points} / {maxPoints}
        </strong>
      </p>
    </header>
  );
}

export default Pogress;
