import React from 'react'
import cl from './TextInput.module.css'

export default function TextInput({children,...props}) {
  return (
    <input className={cl.input} {...props}>{children}</input>
  )
}
