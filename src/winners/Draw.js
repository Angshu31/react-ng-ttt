import React from "react";

function Draw() {
  return (
    <div className="draw">
      <h1>Draw / Tie</h1>

      <h3>A Tie is defeat</h3>
      <h3>I thought you could win.</h3>

      <button style={{ padding: "0 10px" }}>
        <h3 onClick={() => window.location.reload()}>
          Crush Angular this time
        </h3>
      </button>
    </div>
  );
}

export default Draw;
