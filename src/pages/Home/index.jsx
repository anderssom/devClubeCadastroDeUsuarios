import './styles.css'
import Trash from '../../assets/trash.svg';

function Home() {

  const users = [
    { id: 1,
      name: 'John Doe', 
      age: 33, 
      email: 'john@example.com'
    },
    { id: 2,
      name: 'ze Doe', 
      age: 33, 
      email: 'ze@example.com'
    }
  ]

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
