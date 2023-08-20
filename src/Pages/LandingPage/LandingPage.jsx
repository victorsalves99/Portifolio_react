// improtação de css
import "./LandingPage.css";
// importação de imagens
import html5 from "../../Images/Html5.png";
import css3 from "../../Images/Css3.png";
import javaScript from "../../Images/JavaScript.png";
import nodejs from "../../Images/Node-js.png";
import react from "../../Images/React.png";
import express from "../../Images/Express.png";
import git from "../../Images/Git.png";
import Perfil from "../../Images/jovem.png";
import insta from "../../Images/insta.png";
import github from "../../Images/github.png";
import linkedin from "../../Images/linkedin.png";

const LandingPage = () => {
  return (
    <section className="Landing_page">
      <h1 className="title">Victor Santana Alves</h1>
      <div className="container_content">
        <div className="description">
          <h2 className="title_description">FULL STACK DEVELOPER</h2>
          <p className="content_description">
            Com 24 anos, sou apaixonado por tecnologia e sempre atento às
            últimas tendências. Animais de estimação têm um lugar especial no
            meu coração, e não dispenso uma boa xícara de café para começar o
            dia. Adoro fazer novas amizades e estou sempre em busca de aventuras
            e experiências diferentes para aproveitar a vida ao máximo!
          </p>
          <div className="technology">
            <img src={html5} className="image_description" />
            <img src={css3} className="image_description" />
            <img src={javaScript} className="image_description" />
            <img src={nodejs} className="image_description" />
            <img src={react} className="image_description" />
            <img src={express} className="image_description" />
            <img src={git} className="image_description" />
          </div>
          <button className="btn_description">Contacte - Me</button>
        </div>
        <div className="image">
          <div className="triangle">
          <img src={Perfil} className="perfil_description" />
          </div>
          <div className="social_network">
            <a href="#" target="_black">
              <img src={insta} />
            </a>
            <a href="#" target="_black">
              <img src={github} />
            </a>
            <a href="#" target="_black">
              <img src={linkedin} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
