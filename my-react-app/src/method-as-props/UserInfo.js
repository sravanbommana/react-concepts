import React from 'react'

const UserInfo = ({changeHandler}) => {
  return (
    <div>
      <button onClick={changeHandler}>Show User Details</button>
    </div>
  )
}

export default UserInfo
