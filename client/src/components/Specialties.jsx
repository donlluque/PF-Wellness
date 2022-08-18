import React from "react";
import deportologia from "../img/deportologia.jpg";
import kinesiologia from "../img/kine.jpg";
import osteopatia from "../img/osteo.jpg";
import quiropraxia from "../img/quiropraxia.jpg";
import reumatologia from "../img/reumato.jpg";
import terapiaDeDolor from "../img/terapiadedolor.jpeg";
import traumatologia from "../img/traumato.webp";

function Specialties() {
  return (
  <div>
    <div>Especialidades</div>
    <div>
      <h3>Deportologia</h3>
      <p>
        Si realizas actividad fisica o deportes, también contamos con un área especialmente dedicada a eso, <br></br>
        con excelentes profesionales especializados en<br></br> 
        distintas ramas de la misma:</p>
      <ul>
        <li>Esguinces</li>
        <li>Fracturas</li>
        <li>Hernias</li>
        <li>Ligamentos</li>
      </ul>
      <img alt="deportologia" src={deportologia}/>
    </div>

    <div>
      <h3>Kinesiologia y Fisioterapia</h3>
      <p>
        Para poder realizar tratamientos de recuperación de lesiones y procurar fortalecer el cuerpo, <br></br>
        contamos con excelentes licenciados dedicados a esta área,<br></br> 
        que a su vez se especializan en distintas ramas de la misma:</p>
      <ul>
        <li>Columna</li>
        <li>Lumbalgia</li>
        <li>Miembro Superior</li>
        <li>Neuralgia</li>
        <li>Respiratoria</li>
      </ul>
      <img alt="kineyfisio" src={kinesiologia}/>
    </div>

    <div>
      <h3>Osteopatia</h3>
      <p>
        Si lo que buscas es una medicina alternativa, nosotros contamos con la practica de la Osteopatía,<br></br>
        que enfatiza la manipulación física del tejido muscular y óseo.<br></br>
        Contamos con excelentes profesionales dedicados especificamente a esta área,<br></br> 
        que a su vez se especializan en distintas ramas de la misma:</p>
      <ul>
        <li>Miembro Inferior</li>
        <li>Miembro Superior</li>
      </ul>
      <img alt="osteopatia" src={osteopatia}/>
    </div>

    <div>
      <h3>Quiropraxia</h3>
      <p>
        Otro tipo de medicina alternativa con la que contamos es para tratar los trastornos mecánicos del sistema musculoesquelético<br></br> 
        y poder asi con su correccion mejorar tu salud, podes encontrar
        profesionales dedicados especificamente a esta área,<br></br> 
        que a su vez se especializan en distintas ramas de la misma:</p>
      <ul>
        <li>Cadera</li>
        <li>Cervicalgias</li>
        <li>Columna</li>
        <li>Dorsalgias</li>
        <li>Hombro</li>
      </ul>
      <img alt="quiropraxia" src={quiropraxia}/>
    </div>
    
    <div>
      <h3>Reumatologia</h3>
      <p>
        En el caso en que necesites un especialista en medicina interna que este capacitado para el diagnostico y<br></br> 
        tratamiento de enfermedades osteomusculares y afecciones autoinmunitarias sistémicas,
        habitualmente denominadas enfermedades reumáticas, contamos con excelentes profesionales dedicados a esta área,<br></br> 
        que a su vez se especializan en distintas ramas de la misma:</p>
      <ul>
        <li>Artritis</li>
        <li>Artrosis</li>
        <li>Reumatismo</li>
      </ul>
      <img alt="reumatologia" src={reumatologia}/>
    </div>
   
    <div>
      <h3>Terapia de Dolor</h3>
      <p>
        Si queres mejorar tu calidad de vida, debido a que sufris dolor crónico <br></br>
         esta rama interdisciplinaria de la medicina es la adecuada para vos.<br></br>
        Aqui vas a encontrar a los mejores profesionales especializados en:
      </p>
      <ul>
        <li>Columna</li>
        <li>Mano</li>
        <li>Pie</li>
      </ul>
      <img alt="terapia de dolor" src={terapiaDeDolor}/>
    </div>
   
    <div>
      <h3>Traumatología</h3>
      <p>
        En el caso en que quieras consultar con un médico por alguna lesión que sufriste en el aparato locomotor, <br></br>
        contamos con excelentes profesionales dedicados especificamente a esta área,<br></br>
         que a su vez se especializan en distintas ramas de la misma:</p>
      <ul>
        <li>Cadera</li>
        <li>Columna</li>
        <li>Hombro</li>
        <li>Pediatria</li>
        <li>Pie</li>
        <li>Rodilla</li>
      </ul>
      <img alt="traumatologia" src={traumatologia}/>
    </div>


  </div>
  );
}

export default Specialties;
