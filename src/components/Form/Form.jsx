import style from './Form.module.css'
import rm from '../../essest/img/rm.png'
import { useState, useEffect } from 'react';
import validation from '../Validations/Validation'


const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});


    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    useEffect(() => {
        document.body.style.background = '#8971d0'; // Cambia el color del fondo al montar el componente
        return () => {
            document.body.style.background = ''; // Restaura el color del fondo al desmontar el componente
        };
    }, []);

    return (
        <div className={style.conteinerForm}>
            <form className={style.form} onSubmit={handleSubmit}>

                <img src={rm} alt='' className={style.formImg}></img>
                <label className={style.label} htmlFor='email'>Email
                    <input className={style.input} value={userData.email} type='email' placeholder='example@email.com' name='email'
                        autoComplete='on' onChange={handleChange} ></input>
                    {errors.email && <p style={{ color: 'red' }} >{errors.email}</p>}
                </label>

                <label className={style.label} htmlFor='password'>Password
                    <input className={style.input} value={userData.password} type='password' placeholder='Password' name='password'
                        autoComplete='on' onChange={handleChange} ></input>
                    {errors.password && <p style={{ color: 'red' }} >{errors.password}</p>}
                </label>

                <button className={style.submitButton}>SUBMIT</button>
            </form>

        </div>
    )

};


export default Form;