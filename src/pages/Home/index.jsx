import { useEffect, useState } from 'react';
import './styles.css'
import Trash from '../../assets/trash.svg';
import api  from '../../services/api';

function Home() {
const [users, setUsers] =  useState([]);

  async function getUsers() {
    const usersFromApi = await api.get('/users')
    console.log(usersFromApi)
    setUsers(usersFromApi.data);
    
  }
  useEffect(() => {
    getUsers()
    }, []);

  return (
  
      <div  className="container">
        <form>
          <h1>Cadastro de Usuarios</h1>
          <input placeholder='Digite seu nome' name='nome' type="text" />
          <input placeholder='Digite sua idade' name='idade' type="number" />
          <input placeholder='Digite seu E-mail' name='email' type="email" />
          <button type='button'>Cadastrar</button>
        </form>
        {users.map(user => (
          <div key={user.id} className='card' >
          <div>
            <p>Nome: <span>{user.name} </span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash}/>
          </button>
        </div>

        ))}
        
      </div>
      
  )
}

export default Home
