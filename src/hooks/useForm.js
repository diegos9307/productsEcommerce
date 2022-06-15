/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { client } from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [backError, setBackError] = useState(null);
  const [backAnswer, setBackAnswer] = useState(null);

  const navigation = useNavigate();

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
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      client
        .post('/register', form)
        .then((response) => {
          console.log(response);
          setLoading(false);
          setResponse(true);
          setBackAnswer(response.data.message);
          setTimeout(() => {
            setResponse(false);
            setForm(initialForm);
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setBackError(true);
          setBackAnswer(err.response.data.error);
          setTimeout(() => {
            setBackError(false);
            setForm(initialForm);
          }, 3000);
        });
    } else {
      return;
    }
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      client
        .post('/login', form)
        .then((response) => {
          setLoading(false);
          setResponse(true);
          setBackAnswer('Login exitoso');
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', true);
          setTimeout(() => navigation('/home'), 3000);
        })
        .catch((err) => {
          setLoading(false);
          setBackError(true);
          setBackAnswer(err.response.data.error);
          setTimeout(() => {
            setBackError(false);
            setForm(initialForm);
          }, 3000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    backAnswer,
    backError,
    handleChange,
    handleBlur,
    handleChecked,
    handleSubmitLogin,
    handleSubmitRegister
  };
};
