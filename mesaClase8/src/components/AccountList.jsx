import { useState } from "react"
const AccountList = (props) => {
    return (
      <div className='flex'>
        {props.accounts.map((account) => {
          return (
            <div
              key={account.id}
              className='card'
              onClick={() => props.onClick(account)}
           
            >
            <ul>
              <ul>ID: 
              {account.id}
              </ul>
              <ul>Nombre:{account.nombre}</ul>
              <ul>Edad:{account.edad}</ul>
              <ul>Email:{account.email}</ul>
              </ul>
             
            </div>
          )
        })}
      </div>
    )
  }

export default AccountList




