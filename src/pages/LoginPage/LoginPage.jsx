import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../components/UI/TextInput/TextInput";
import { inpChange, isLoggedIn } from "../../store/loginSlice";
import cl from "./LoginPage.module.css";

export default function LoginPage() {
  const inputState = useSelector((store) => store.login.userInput);
  const dispatch = useDispatch();
  const passwordMatch = useSelector((store) => store.login.isLoggedIn)

  useEffect(() => {dispatch(isLoggedIn())},[inputState,dispatch])


  return (
    <div className={cl.wrapper}>
      <h1>Вход</h1>
      <form className={cl.loginForm}>
        <TextInput
          placeholder="Введите логин"
          value={inputState.login}
          onChange={(e) => dispatch(inpChange({ login: e.target.value }))}
        />
        <TextInput
          placeholder="Введите пароль"
          value={inputState.password}
          onChange={(e) => dispatch(inpChange({ password: e.target.value }))}
        />
        <button className={cl.loginForm_btn} disabled={!passwordMatch}>Войти</button>
      </form>
    </div>
  );
}
