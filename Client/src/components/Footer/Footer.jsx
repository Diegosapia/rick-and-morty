
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <article className={`${style.Footer} login-page-footer`}>
            <div className={style.actions}>
				<h3>
					<span className='decorator line' />
					ANY PROBLEM?
					<span className='decorator line' />
				</h3>
				<div className={style.btnActions}>
					<button type='button'>Solicitar soporte</button>
					<button type='button'>Resetear contraseña</button>
				</div>
			</div>
            <p> <strong>Rick</strong> & <strong>Morty</strong> Cards by <strong>Diego Sapia</strong></p>   
        </article>
    )
}
export default Footer;