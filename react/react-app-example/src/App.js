import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import { Container } from 'react-bootstrap';
import Index from './pages/Index';
import Employees from './pages/employees/Index';
import NewEmployee from './pages/employees/New';

function App() {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path='/' element={<Index/>} exact/>
          <Route path='/employees' element={<Employees/>} exact/>
          <Route path='/employees/new' element={<NewEmployee/>} exact/>
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
