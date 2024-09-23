import React from "react";
import "./styles.css";
import canasto from "../../assets/img/canasto_2B.jpeg";
import torneoOpen from "../../assets/img/torneos/pablodrive.jpeg";
import whatsapp from '../../assets/img/contacto-iconos/icono-de-whatsapp.png'
import pelota from '../../assets/img/pelota.png'

const DarkCard = () => {
  return (
    <section className="dark" id="nosotros">
      <div className="container py-4">
        <h1 className="h1 text-center text-white" id="pageHeaderTitle">
          NOSOTROS
        </h1>

        <article className="postcard dark blue" data-aos="fade-up">
          <a className="postcard__img_link" href="#">
            <img className="postcard__img" src={canasto} alt="Image Title" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title blue">
              <div style={{display: "flex", alignItems:'center', gap: '10px' }}>
                <img width={30} height={25} src={pelota} alt="" />
                <a href="#">Clases de Padel</a>

              </div>
            </h1>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Sumate a nuestras clases de pádel, aprenderás los fundamentos del
              juego, incluyendo técnicas básicas, tacticas, estrategias y
              situaciones de juego. Nuestro profesor Pablo Cuellar te guiará a
              través de ejercicios prácticos y entretenidos para que puedas
              mejorar tus habilidades y disfrutar de éste gran deporte.
            </div>
            <div style={{display: 'flex' , justifyContent: 'flex-start' , alignItems: 'center' }}>
              <img width={50}  src={whatsapp} alt="whatsapp" />
            <span>+54 9 11 3141-0570</span>
            </div>
            
          </div>
        </article>
        <article className="postcard dark green" data-aos="fade-up">
          <a className="postcard__img_link" href="#">
            {/* <img className="postcard__img" src="https://yt3.googleusercontent.com/ytc/AIdro_kfdbLTR_JeR76tZSHS7A3U0tAgGESIMYhu33mEEus41A=s900-c-k-c0x00ffffff-no-rj" alt="Image Title" /> */}
            <img
              className="postcard__img"
              src="https://www.mainpost.de/storage/image/7/5/5/4/10354557_default_1BRS4E_LcpN6v.jpg"
              alt="Image Title"
            />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title green">
            <div style={{display: "flex", alignItems:'center', gap: '10px' }}>
                <img width={30} height={25} src={pelota} alt="" />
                <a href="#">Torneos Americanos</a>

              </div>
             
            </h1>
            <div className="postcard__subtitle small">
              {/* <time dateTime="2020-05-25 12:00:00">
                              <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                          </time> */}
            </div>
            <div className="postcard__bar"></div>

            <p>
              ¡No te pierdas la oportunidad de competir contra otros jugadores
              y demostrar tus habilidades!
            </p>

            <p className="postcard__preview-txt">
              Formato: Es un torneo corto que comienza y termina el mismo día.
              Tiene como característica principal que sus partidos se disputan a
              un solo set con punto de oro. Se juega en zonas de 3 a 4 parejas
              donde se enfrentan entre si, terminada esta fase, se prosigue a la
              fase de eliminación (16vos, 8vos, 4tos, semi y la final). En
              nuestros torneos todas las parejas tienen 3 partidos asegurados.
            </p>
            <p>Premios: Efectivo e indumentaria deportiva</p>

            
          </div>
        </article>
        <article className="postcard dark yellow" data-aos="fade-up">
          <a className="postcard__img_link" href="#">
            {/* <img className="postcard__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmXaU8zNkIBOKNSiNaWW1Kjpx-jfOJDs9LU112B0tTlv7mIsbWj3VxBht8YiWQrprfYg&usqp=CAU" alt="Image Title" /> */}
            {/* <img
              className="postcard__img"
              src="https://padelmagazine.fr/wp-content/uploads/2019/02/terrains-padel-indoor.jpg.webp"
              alt="Image Title"
            /> */}
            <img className="postcard__img" alt="Image Title" src={torneoOpen} />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title yellow">
            <div style={{display: "flex", alignItems:'center', gap: '10px' }}>
                <img width={30} height={25} src={pelota} alt="" />
                <a href="#">Torneos Open</a>

              </div>
            
            </h1>
            <div className="postcard__subtitle small"></div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              <p>
                ¡Unite a nuestra emocionante competencia de pádel y demostrá tus
                habilidades en la cancha!{" "}
              </p>

              <p>
                Formato: Partidos al mejor de 3 set con modalidad de punto de
                oro, se realizan 4 zonas de 3 parejas donde se enfrentan entre
                sí; los primeros de cada zona pasan directo a 4tos de final,
                2dos y 3ros a 8vos de final. Días y horarios de los partidos a
                coordinar. duración 3 meses.
              </p>
              <p>Premios: Paletas e indumentaria deportiva</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default DarkCard;
