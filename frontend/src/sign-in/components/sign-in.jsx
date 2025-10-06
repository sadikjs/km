import "./sign-in.css";
import { Link } from "react-router";
export default function Signin() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <p>
          <Link to="/sign-up" className="underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}