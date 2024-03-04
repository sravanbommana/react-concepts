import React from 'react'
import User from '../user/User'
import { useUserContext } from '../../hooks/use-context/UserContext'

const Home = () => {
  const { data, setData } = useUserContext();

  const changeUserName = () => {
    setData({
      name:"Raju",
      age:31
    })
  }
  return (
    <div>
      Welcome To Home
      <div><button onClick={changeUserName}>Change User Name</button></div>
        <User />
    </div>
  )
}

export default Home
