import React from "react";

const Signin = () => {
  return (
    <div className="auth-section">
      <h2>Sign In</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
};

export default Signin;
