import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import HomePage from "./home/HomePage.jsx"
import AboutPage from "./about/About.jsx";
import ResearchPage from "./Research/Research.jsx";
import SignUp from "./sign-up/Signup.jsx";
import SignIn from "./sign-in/Signin.jsx";
import { Provider } from 'react-redux';
import store from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
        </Route>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
    </Provider>
  )
}

export default App
