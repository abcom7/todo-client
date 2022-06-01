import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [id, setId] = useState(1);
    const URL = "http://localhost:2022/todos?id"+id
    
    useEffect(() => {
        axios(URL)
            .then(res => {
                setTodos(res.data)
            })
            .catch(err => console.error(err))
    }, [id])
    return (
        <div className="App container d-flex justify-content-around flex-wrap mt-5">
            {todos ? todos.map(todo => {
                return <div key={todo.id} className="card" style={{ width: "18rem" }}>
                   <Link to={`/todos/${todo.id}`}>
                    <div className="card-body">
                    {/* <h5 className="card-title">{todo.id}</h5> */}
                        <h5 className="card-title">{todo.name}</h5>
                        {/* <p className="card-text">{todo.completed}</p> */}
                       
                    </div>
                    </Link>
                </div>
            })
                :
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
        </div>
    );
}
export default Todos;









