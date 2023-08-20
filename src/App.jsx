import LandingPage from "./Pages/LandingPage/LandingPage";

import seta from "./Images/seta.png";

import "./app.css";

function App() {
  return (
    <>
      <LandingPage />
      <img src={seta} className="seta" />
    </>
  );
}

export default App;
