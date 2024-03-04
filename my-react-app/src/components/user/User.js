import React from 'react'
import { useUserContextProvider } from '../../hooks/use-context/UserContext';

const User = () => {
  const {userData} = useUserContextProvider();
  return (
    <div>
      {userData.name} - {userData.emailAddress}
    </div>
  )
}

export default User
