import React from "react";

// import TempJs from "../../assets/js/temp";  // Import works with error as document is not available on server
// import ButtonCss from "../../assets/css/button.css";  // Import will throw error as server does not understand css

const Button = () => {
  return (
    <>
      <button className="button">I am a button</button>
    </>
  );
}

export default Button;
