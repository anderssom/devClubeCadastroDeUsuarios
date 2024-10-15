import { useEffect, useState,  useRef } from 'react';
import './styles.css'
import Trash from '../../assets/trash.svg';
import api  from '../../services/api';

function Home() {
const [users, setUsers] =  useState([]);
//salva os inputs
const inputName  = useRef('');
const inputAge = useRef('');
const inputEmail = useRef('');

//lista users
  async function getUsers() {
    const usersFromApi = await api.get('/users');

    setUsers(usersFromApi.data);
    
  }
  //pega os inputs e cria novos users
  async function creatUsers() {
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    });
    getUsers()
  }
  //deletar users
  async function deleteUsers(id) {
    await api.get(`/users/${id}`);

    getUsers()
    
  }
  useEffect(() => {
    getUsers()
    }, []);

  return (
  
      <div  className="container">
        <form>
          <h1>Cadastro de Usuarios</h1>
          <input placeholder='Digite seu nome' name='nome' type="text" ref={inputName}/>
          <input placeholder='Digite sua idade' name='idade' type="number" ref={inputAge}/>
          <input placeholder='Digite seu E-mail' name='email' type="email" ref={inputEmail}/>
          <button type='button' onClick={creatUsers} >Cadastrar</button>
        </form>

        {users.map(user => (
          <div key={user.id} className='card' >
          <div>
            <p>Nome: <span>{user.name} </span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={ () => deleteUsers(user.idS)}>
            <img src={Trash}/>
          </button>
        </div>

        ))}
        
      </div>
      
  )
}

export default Home
