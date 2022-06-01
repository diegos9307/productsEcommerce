/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleChecked = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  const handleSubmitRegister = (e) => {
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      alert('Enviando Formulario');
      axios
        .post('http://localhost:5000/register', form)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    } else {
      return;
    }
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      alert('Enviando Formulario');
      axios
        .post('http://localhost:5000/login', form)
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err));
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleChecked,
    handleSubmitLogin,
    handleSubmitRegister
  };
};
