import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Btn from "../../Btn/Btn";

function Home() {
  return (
    <div>
      <section className="section-1">
        <div>
          <h1 className="title" data-aos="fade-right">
            Bienvenido a Samsung Shop
          </h1>
        </div>
        <div>
          <h3 className="cellphone" data-aos="fade-up">
            Ultimas novedades del mercado
          </h3>
          <div className="img-container">
            <img
              src="https://img.global.news.samsung.com/latin/wp-content/uploads/2022/02/Samsung_Galaxy-S22-Ultra-1-e1644591253242.jpg"
              alt="Fotografía de tres Samsung S22 Ultra"
              className="img-1"
              data-aos="fade-up-right"
            />
            <img
              src="https://i.blogs.es/43078d/2-047_family_galaxy_zfold4_phantomblack_beige_hi-copia/1366_2000.jpeg"
              alt=""
              className="img-2"
              data-aos="zoom-out-up"
            />
            <img
              src="https://images.samsung.com/my/smartphones/galaxy-s22/buy/S22_plus_Carousel_GroupKV_MO.jpg"
              alt=""
              className="img-3"
              data-aos="fade-up-left"
            />
          </div>
          <div className="conocer-mas-container">
            <a href="#section-2" className="conocer-mas-btn">
              Conocer las ultimas novedades
            </a>
          </div>
        </div>
      </section>
      <section className="section-2" id="section-2"></section>
      <section className="section-3">
        <div className="cellphone-description-1">
          <h3
            className="cellphone-title-1"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Apariencia de Note
          </h3>
          <p
            className="cellphone-description"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            Conocé el Galaxy s22 Ultra, con el poder del Note. El marco Pulido,
            delgado y audaz, rodea la forma extruida para lograr una simetría
            elegante. Y la cámara lineal, acentuada por anillos de lentes
            espejados, parece flotar en su lugar.
          </p>
        </div>
        <div className="cellphone-description-container">
          <h3
            className="cellphone-title-2"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            El primer Galaxy S con S Pen integrado
          </h3>
          <p
            className="cellphone-description-2"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            El S Pen se adapta directamente en la S por primera vez. Expulsalo
            desde la parte inferior del smartphone para escribir, hacer un
            dibujo o controlar tu smartphone. La latencia mejorada en Samsung
            Notes hace que cada pincelada se sienta tan natural como la tinta en
            papel, y podés convertir esas ideas escritas apresuradamente en
            texto legible.
          </p>
        </div>
       
          <Link to="/products/1">
            <Btn/>
          </Link>
        
      </section>
    </div>
  );
}

export default Home;
