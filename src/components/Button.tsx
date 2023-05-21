import React, { useEffect, useState } from "react";

function Button() {
  const [a, setA] = useState("test");
  useEffect(() => {
    setTimeout(() => {
      setA("tototo");
    }, 3000);
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          alert(123);
        }}>
        {a}
      </button>
    </div>
  );
}

export default Button;
