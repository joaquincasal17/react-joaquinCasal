import React, { useEffect, useState } from 'react'
import FetchUser from './FetchUser'
import Users from './Users'

const ListaUsers = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState (true)

    useEffect (() =>{
      const getUsers = async() => {
        const data =  await FetchUser()
        setUsers(data)
        setLoading(false)
      }  
      getUsers()
    }, [])

  return (
    <div>
    <div>
      <h1>lista de usuarios</h1>
      {loading ? <p>cargando datos</p> : <Users users={users}/>}
    </div>

    </div>
  )
}

export default ListaUsers
