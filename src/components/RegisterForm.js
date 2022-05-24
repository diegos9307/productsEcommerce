/* eslint-disable no-unused-vars */
import { useForm } from '../hooks/useForm';

const initialForm = {
  name: '',
  email: '',
  password: '',
  confirmpassword: '',
  terminos: false
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Correo' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Correo' es incorrecto";
  }

  if (!form.password.trim()) {
    errors.password = "El campo 'Contraseña' es requerido";
  } else if (!regexPassword.test(form.password.trim())) {
    errors.password =
      'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito y al menos una mayúscula.';
  }

  if (!form.confirmpassword.trim()) {
    errors.confirmpassword = "El campo 'Confirmar contraseña' es requerido";
  } else if (form.password !== form.confirmpassword) {
    errors.confirmpassword = 'Las contraseñas no coinden';
  }

  if (!form.terminos) {
    errors.terminos = "El campo 'Terminos' es requerido";
  }
  return errors;
};

const RegisterForm = () => {
  const { form, errors, loading, response, handleChange, handleBlur, handleSubmit, handleChecked } =
    useForm(initialForm, validationsForm);
  return (
    <div className="form__container">
      <div className="form__media">
        <h2 className="form__title">Crea tu cuenta</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/476/476863.png" alt="Product" />
      </div>
      <form className="form__content" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && (
          <p className="form__error">
            <i className="fa-solid fa-circle-exclamation"></i> {errors.name}
          </p>
        )}
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
          placeholder="Escribe una contraseña válida"
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
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirma tu contraseña"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.confirmpassword}
          required
        />
        {errors.confirmpassword && (
          <p className="form__error">
            <i className="fa-solid fa-circle-exclamation"></i>
            {errors.confirmpassword}
          </p>
        )}
        <label html="terminos">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          name="terminos"
          onBlur={handleBlur}
          onChange={handleChecked}
          value={form.terminos}
          required
        />
        {errors.terminos && (
          <p className="form__error">
            <i className="fa-solid fa-circle-exclamation"></i>
            {errors.terminos}
          </p>
        )}
        <div className="form__button">
          <input type="submit" value="Únete" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
