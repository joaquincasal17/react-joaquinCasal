import React from 'react'

const Users = ({users}) => {
  return (
    <>
    <ul>
      {users.map((user) =>(
        <li key={user.id}>
          <p>{user.name}</p>
        </li>
      ))}        
    </ul>
    </>
  )
}

export default Users
