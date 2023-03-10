import React from "react";
import { useState, useEffect } from "react";

function VirtualDomDemo() {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const html = (
    <div>
      <h3>JavaScript:</h3>
      <form>
        <input type="text" />
      </form>
      <span>Time: {date}</span>
    </div>
  );
  console.log("Virtual DOM", html);
  return html;
}

export default VirtualDomDemo;
