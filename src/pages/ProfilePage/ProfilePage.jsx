import React from 'react'
import { useSelector } from 'react-redux'

export default function ProfilePage() {
  const login = useSelector(store => store.login.userInput.login)
  return (
    <div>
      <h1>Ваш логин: {login}</h1>
    </div>
  )
}
