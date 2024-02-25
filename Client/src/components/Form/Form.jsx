import style from './Form.module.css'
import { useState } from 'react';
import validation from '../Validations/Validation'
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';

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
    
    
    return (
        <div className={style.all}>
<section className={`${style.section} login-page`}>
            <aside className={style.right}>
            </aside>
        <article className={style.conteinerForm}>
            <form className={style.form} onSubmit={handleSubmit}>
              
                <label className={style.label} htmlFor='email'>Email
                    <input className={style.input}
                     value={userData.email} 
                     type='email' 
                     placeholder='example@email.com'
                     name='email'
                     autoComplete='on' onChange={handleChange}>
                    </input>
                    {errors.email && <p style={{ color: 'red' }} >{errors.email}</p>}
                </label>
                <label className={style.label} 
                htmlFor='password'>
                    Password
                    <input className={style.input} 
                    value={userData.password} 
                    type='password' 
                    placeholder='xxxxxx'
                    name='password'
                    autoComplete='on' onChange={handleChange}>                   
                    </input>
                    {errors.password && <p style={{ color: 'red' }} >{errors.password}</p>}
                </label>
                       <button className={style.submitButton}>
                        SUBMIT
                       </button>
            </form>
        </article>
        </section>
        <Footer />
        </div>
    )
};
Form.propTypes = {
    login: PropTypes.array.isRequired,
};

export default Form;