import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/reducers/userReducer';


export default function UserList() {
    const users = useSelector(store=> store.userReducer.users)
    const dispatch = useDispatch()
    console.log(users);
  return (
    <>
     <button onClick={()=>dispatch(fetchUsers())}>Show Users</button>
     <ul>
        {users?.map((el)=><li key={el.id}>{el.name}</li>)}
     </ul>
    </>
    
  )
}
