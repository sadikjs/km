import "./signupStyle.css";
import { Link } from "react-router";
 function Signup() {
  return (
    <div className="register">
      <span className="registerTitle">Sign up</span>
      <form className="registerForm" onSubmit="">
        <label>Name</label>
        <input
          type="text"
          className="registerInput"
          name="name"
          placeholder="Enter your name..."
          required
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          name="email"
          placeholder="Enter your email..."
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="registerInput"
          placeholder="Enter your password..."
          required
        />
        <button className="registerButton" type="submit">
          Login
        </button>
      </form>
      <div className="mt-4 text-center text-sm">
        Do have an account?{" "}
        <p>
          <Link to="/sign-in" className="underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Signup