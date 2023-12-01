import React, { useState, useEffect } from "react";
import "../../styles/index.css";

function counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval); // this keeps it from speeding up
  }, [count]); // this thing is needed if not the page wont render on change

  return (
    <div>
      <div className="countDownBox">
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default counter;
