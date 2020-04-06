import React, { useState, useEffect } from "react";

function UseEffectEXP1() {
  const [name, setname] = useState("");

  useEffect(() => {
    console.log("useEffect");

    setname("adi");

    document.title = "Use Effect EXP1";
  }, []);

  return (
    <div>
      <div>Use Effect EXP1</div>

      <div>{name}</div>
    </div>
  );
}

export default UseEffectEXP1;
