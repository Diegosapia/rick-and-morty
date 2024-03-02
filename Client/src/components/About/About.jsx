import style from './About.module.css'
import cropimg from '../../essest/img/profile2.png'


const About = () => {



  return (
    <section className={style.conteinerAbout}>
      <aside className={style.imgText}>
        <img className={style.imgAbout} src={cropimg} alt='mi perfil'></img>
        <p>Diego Sapia</p>
      </aside>
      <div>

        <p className={style.parra}>
          I am a Software Developer from Buenos Aires, Argentina, with a fervent passion for the world of technology.
          Over the years, I have immersed myself in this field, engaging in real projects and continuously expanding my knowledge.
          This journey has been incredibly rewarding, fostering significant personal and professional growth.<p>Having spent the last six years in England,
            I am now eager to elevate my professional career to new heights by exploring opportunities to learn and develop web applications using the latest technologies.</p>
          Remaining at the forefront of innovation is my top priority, and I am enthusiastic about contributing to the ever-evolving tech landscape.
          Therefore, I actively seek out opportunities to acquire new skills and stay updated with the latest advancements in the tech industry.
          <p>
            My ultimate goal is to make a positive impact through my work, contributing to the development of cutting-edge solutions that benefit users worldwide.
            If you are interested in collaborating or considering me for any job opportunities, please feel free to contact me at {' '}
            I am deeply committed to continuous growth and self-improvement.
            <p>
              <a href="mailto:sdiegoss@gmail.com" target="_blank" rel="noopener noreferrer">
                sdiegoss@gmail.com
              </a>
            </p>
          </p>

          <p>
            I am open to new connections and excited about potential collaborations and professional
            engagements.
          </p>
        </p>

      </div>
    </section>
  )
};

export default About;