import React from 'react'
import { useContext } from 'react'
import { dataContext,funContext } from './Email_Provider'

function Child() {
  const {name}=useContext(dataContext)
  
  const sum=useContext(funContext)
  
  const {setName}=useContext(dataContext)
 setName("sameer")
  return (
      <>{name}  <br />  {sum(3,4)}</> )
}

export default Child