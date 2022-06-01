
import Nav from './components/Nav';
import Home from './components/Home';
import Todos from './components/Todos'
import SingleTodo from './components/SingleTodo'
import { BrowserRouter , Routes , Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

export const App = () => {
  return (
    <BrowserRouter className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todos/:id" element={<SingleTodo />} />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
