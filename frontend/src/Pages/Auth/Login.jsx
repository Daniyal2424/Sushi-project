import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userService from "../../services/user.service";
import UserContext from "../../context/user";
import "./auth.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    userService
      .login(credentials)
      .then((res) => {
        setLoading(false);
        updateUser();
        navigate("/");
      })
      .catch((err) => {
        setCredentials({
          email: "",
          password: "",
        });
        setLoading(false);
      });
  };

  return (
    <div className="login_inner">
      <form className="login_form" onSubmit={submitForm}>
        <h1>Войти</h1>
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
          type="password"
          placeholder="Пароль"
          value={credentials.password}
          disabled={loading}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button disabled={loading} type="submit" className="login_btn">
          {loading ? "Загрузка..." : "Войти"}
        </button>
        <Link to="/register">Регистрация</Link>
      </form>
    </div>
  );
};

export default Login;
