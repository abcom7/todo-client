import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleTodo = () => {
    const [todo, setTodo] = useState();
    const { id } =useParams();
    // console.log('details-page');
    const URL = (`http://localhost:2022/todos/`+id)
    useEffect(() => {
        axios(URL)
            .then(res => {
                setTodo(res.data)
            })
            .catch(err => console.error(err))
    }, [])
    return (
        <div className="App container d-flex justify-content-around flex-wrap mt-5">
            <div> <h1>{todo && todo.name}</h1></div>
            <div>{todo && 
                <div>
                 <h5>todo id: {todo.id}</h5>
                 {/* <h5>{todo.name}</h5> */}
                <h5>completed: {todo.completed}</h5>
                </div>
                }</div>
        </div>
    );
}
export default SingleTodo;









