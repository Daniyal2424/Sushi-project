import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/user";
import userService from "../../services/user.service";
import "./auth.scss";

const Register = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    full_name: "",
  });
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    userService
      .register(credentials)
      .then((res) => {
        setLoading(false);
        updateUser();
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        setCredentials({
          email: "",
          password: "",
          full_name: "",
        });
        setLoading(false);
      });
  };

  return (
    <div className="register_inner">
      <form className="register_form" onSubmit={submitForm}>
        <h1> Регистрация</h1>
        <input
          type="text"
          placeholder="Имя"
          value={credentials.full_name}
          disabled={loading}
          onChange={(e) =>
            setCredentials({ ...credentials, full_name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Email"
          value={credentials.email}
          disabled={loading}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <input
          type="passsord"
          placeholder="Пароль"
          value={credentials.password}
          disabled={loading}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button type="submit" className="register_btn">
          Регистрация
        </button>
        <Link to="/login">Войти</Link>
      </form>
    </div>
  );
};

export default Register;
