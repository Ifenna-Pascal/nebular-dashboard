import React, { FC } from 'react'
import { IButton } from './type'

const Button:FC<IButton> = ({styles, children, ...props}) => {
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  )
}

export default Button