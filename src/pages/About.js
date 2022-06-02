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
            tecnología. Creó que estamos viviendo una revolución digital y quiero hacer parte de
            está.
            <br /> Me gustaría aprender sobre blockchain y web 3.0, luego de afianzar mis
            conocimientos como desarrollador full stack ese sería el paso siguiente. En mi tiempo
            libre me gusta compartir con mi familia y amigos, salir a comer algo rico, leer, hacer
            ejercicio salir y caminar para interactuar con la naturaleza.
          </p>
          <p className="aboutInfo__item">
            <i className="fa-solid fa-code"></i>En este programa pude entender de manera práctica
            como es el uso de Gitflow.
          </p>
          <p className="aboutInfo__item">
            <i className="fa-solid fa-code"></i>En este proyecto pude usar react router de manera
            práctica, entender mucho mejor el uso de los hooks y principalmente context.
          </p>
          <p className="aboutInfo__item">
            <i className="fa-solid fa-code"></i>En este proyecto aprendí a hacer un sitio web full
            stack entendiendo como se conecta el front-end en react con el back-end usando node.js.
          </p>
          <h3 className="aboutInfo__subtitle">Contacto</h3>
          <div className="aboutInfo__subcontent">
            <a
              href="mailto:diegos9307@gmail.com"
              className="aboutInfo__link"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-solid fa-envelope"></i> diegos9307@gmail.com
            </a>
            <a
              href="https://github.com/diegos9307"
              className="aboutInfo__link"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
