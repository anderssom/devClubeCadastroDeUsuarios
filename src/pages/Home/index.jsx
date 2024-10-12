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
          <input name='nome' type="text" />
          <input name='idade' type="number" />
          <input name='email' type="email" />
          <button type='button'>Cadastrar</button>
        </form>
        {users.map(user => (
          <div key={user.id} >
          <div>
            <p>Nome: {user.name} </p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
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
