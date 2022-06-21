import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import Loader from './Loader';
import Message from './Message';

const initialForm = {
  email: '',
  password: ''
};

const validationsForm = (form) => {
  let errors = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.email.trim()) {
    errors.email = "El campo 'Correo' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Correo' es incorrecto";
  }

  if (!form.password.trim()) {
    errors.password = "El campo 'Contraseña' es requerido";
  }
  return errors;
};

const LoginForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    backAnswer,
    backError,
    handleChange,
    handleBlur,
    handleSubmitLogin
  } = useForm(initialForm, validationsForm);
  return (
    <div className="form__container">
      <div className="form__media">
        <h2 className="form__title-login">Inicia Sesión</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/5167/5167400.png" alt="Product" />
      </div>
      <form className="form__content-login" onSubmit={handleSubmitLogin}>
        <input
          type="email"
          name="email"
          placeholder="Escribe tu correo"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && (
          <p className="form__error">
            <i className="fa-solid fa-circle-exclamation"></i>
            {errors.email}
          </p>
        )}
        <input
          type="password"
          name="password"
          placeholder="Escribe tu contraseña"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.password}
          required
        />
        {errors.password && (
          <p className="form__error">
            <i className="fa-solid fa-circle-exclamation"></i>
            {errors.password}
          </p>
        )}
        <div className="form__button-login">
          <input type="submit" value="INICIAR SESIÓN" className="btn-login" />
          <div className="form__subtitle">
            <span>
              ¿No eres miembro?
              <Link to="/register"> Únete</Link>
            </span>
          </div>
        </div>
      </form>
      {loading && <Loader />}
      {response && <Message msg={backAnswer} bgColor="#198754" />}
      {backError && <Message msg={backAnswer} bgColor="#ff0000" />}
    </div>
  );
};

export default LoginForm;
