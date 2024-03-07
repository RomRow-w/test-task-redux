
import React from 'react'
import TextInput from '../../components/UI/TextInput/TextInput'
import cl from './LoginPage.module.css'

export default function LoginPage() {
  return (
    <div className={cl.wrapper}>
        <h1>Вход</h1>
        <form className={cl.loginForm}>
          <TextInput placeholder='Введите логин'/>
          <TextInput placeholder='Введите пароль'/>
          <button className={cl.loginForm_btn}>Войти</button>
        </form>
    </div>
  )
}
