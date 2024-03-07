import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export default function ProfilePage() {
  const state = useSelector(store => store.login);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isLoggedIn) navigate('/')
  },[state,navigate])


  return (
    <div>
      <h1>Ваш логин: {state.userInput.login}</h1>
    </div>
  )
} 
