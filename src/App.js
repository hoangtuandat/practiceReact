
import './App.scss';
import Header from './component/Header';
import TableUssers from './component/TableUser';
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Container>
        <TableUssers/>
      </Container>
      
    </div>
  );
}

export default App;
