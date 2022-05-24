import NavigationBar from '../components/NavigationBar';
import fotoPerfil from '../assets/img/Foto-perfil.jpeg';
const About = () => {
  return (
    <div>
      <NavigationBar />
      <div className="aboutInfo">
        <h2 className="aboutInfo__title">Diego A. Suaza R.</h2>
        <img src={fotoPerfil} alt="foto-perfil" className="aboutInfo__media" />
        <div className="aboutInfo__body">
          <p className="aboutInfo__item">
            Desarrollador Web Full Stack, Ingeniero Mecánico. Disfruto trabajar en equipo y resolver
            problemas para ayudar a las organizaciones a superar sus desafíos a través de la
            tecnología.
          </p>
          <ul className="aboutInfo__item">
            <li>En este programa pude entender de manera practica como es el uso de Gitflow.</li>
            <li>
              En este proyecto pude usar react router de manera practica, entender mucho mejor el
              uso de los hooks y principalmente context
            </li>
            <li>
              En este proyecto aprendi a hacer un sitio web full stack entendiendo como se conecta
              el front-end en react con el back-end usando node.js
            </li>
          </ul>
          <div className="aboutInfo__link">
            <a href="mailto:diegos9307@gmail.com">
              <i className="fa-solid fa-envelope"></i> diegos9307@gmail.com
            </a>
          </div>
          <div className="aboutInfo__link">
            <a href="https://github.com/diegos9307">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
