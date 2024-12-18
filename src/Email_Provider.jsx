import React ,{Children, createContext, useState}from 'react'

const dataContext=createContext(null)
const funContext=createContext(null)

function Email_Provider({children}) {
   const[name,setName]=useState('hello kadir')
  const sayHello=(a,b)=>a+b
  return <dataContext.Provider value={{name ,setName}} >
    <funContext.Provider value={sayHello} > 
        {children}
        </funContext.Provider>
   
  </dataContext.Provider>
}

export default Email_Provider

export {dataContext,funContext}