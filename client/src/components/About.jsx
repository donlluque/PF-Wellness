import React from "react";
import img1 from "../assets/depositphotos_230692850-stock-photo-man-having-chiropractic-arm-adjustment.jpg";
import img2 from "../assets/csc-instalaciones-gimnasios-768x446.jpg";
import img3 from "../assets/depositphotos_41256383-stock-photo-patient-being-assisted-by-physical.jpg";

function About() {
  return( 
  <div>
    <h1>Sobre nosotros</h1>
    <div>
    <h2>¿Quiénes somos?</h2>
    <p>Wellness es un Centro Especializado en rehabilitación física que nace con la idea de brindar 
      un servicio donde se priorice el bienestar. Nuestra trayectoria, forjada en la excelencia, es 
      la que hoy nos permite realizar tratamientos efectivos con la mejor calidad de atención.</p>
      <img src={img1} alt="img" width="200px" height="250px"/>
      </div>
    <div>
      <h2>¿Por qué nosotros?</h2>
      <div>
        <img src={img2} alt="img" width="200px" height="250px"/>
        <p>Contamos con la más alta tecnología para acompañar de manera óptima su tratamiento.</p>
      </div>
      <div>
        <img src={img3} alt="img" width="200px" height="250px"/>
        <p>Contribuimos a mejorar la vida de las personas mediante la calidad humana y profesionales altamente capacitados.</p>
      </div>
    </div>
   <h3>Nuestra misión es brindar una atención médica de primer nivel y lograr la satisfacción total de nuestros pacientes.</h3>
  </div>
  );
}

export default About;
