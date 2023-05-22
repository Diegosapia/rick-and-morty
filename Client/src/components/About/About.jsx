import style from './About.module.css'
import cropimg from '../../essest/img/cropimg.png'
import { useEffect } from 'react';





const About = () => {
    
    useEffect(() => {
        document.body.style.background = 'black'; // Cambia el color del fondo al montar el componente
        return () => {
          document.body.style.background = ''; // Restaura el color del fondo al desmontar el componente
        };
      }, []);
    
    return (
        <div className={style.conteinerAbout}>
            <h1> Bienvenidos a mi About. </h1>
            <img  className={style.imgAbout} src={cropimg} alt=''></img>
        </div>
    )
};

export default About;