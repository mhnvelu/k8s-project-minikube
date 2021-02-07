import React from "react";
import { Link } from "react-router-dom";

function OtherPageComponent() {
  return (
    <div>
      On some othe page!
      <Link to="/">Go Back To Home</Link>
    </div>
  );
}

export default OtherPageComponent;
