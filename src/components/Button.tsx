import React from "react";

function Button() {
  return (
    <div>
      <button
        onClick={() => {
          alert(123);
        }}>
        test
      </button>
    </div>
  );
}

export default Button;
