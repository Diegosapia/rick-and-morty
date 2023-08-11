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
            <h1>   </h1>
          <img  className={style.imgAbout} src={cropimg} alt=''></img>
            <div className={style.parra}>
            <p className={style.p}> I am Diego Sapia, an Argentine from Buenos Aires, with a passion for the world of tech, technology, and engineering that has driven me since childhood. Throughout the years, I have dedicated myself to immersing in this field, working on real projects, and continuously expanding my knowledge. This journey has been incredibly rewarding and has led me to achieve significant personal and professional growth.

Having spent the last six years in England, I am now excited to take my professional career to new heights by exploring opportunities to learn and develop web applications using the latest technologies. Staying at the forefront of innovation is my priority, and I am eager to contribute to the ever-evolving tech landscape.

I am deeply committed to continuous growth and self-improvement. Hence, I actively seek out chances to acquire new skills and stay updated with the latest advancements in the tech industry. My ultimate goal is to make a positive impact through my work, contributing to the development of cutting-edge solutions that benefit users worldwide.

                    If you are interested in collaborating or considering me for any job opportunities, feel free to
                    contact me at{' '}
                    <a href="mailto:sdiegoss@gmail.com" target="_blank" rel="noopener noreferrer">
                        sdiegoss@gmail.com
                    </a>
                    . I am open to new connections and excited about potential collaborations and professional
                    engagements.
                </p>

            </div>
        </div>
    )
};

export default About;