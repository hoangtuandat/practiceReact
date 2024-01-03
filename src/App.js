
import { useState } from 'react';
import './App.scss';
import AddNewUser from './component/AddNewUser';
import Header from './component/Header';
import TableUssers from './component/TableUser';
import Container from "react-bootstrap/Container";

function App() {
  const [isShowModal, setIsShowModal] = useState(false)
  const handleClose = () => {
    setIsShowModal(false)
  }
  return (
    <div className='app-container'>
      <Header/>
      <Container>
        <div className='mt-3 mb-3 d-flex justify-content-between'>
          <span className='d-flex align-items-center list-users'>List uses: </span>
          <button className='btn btn-success' onClick={() => setIsShowModal(true)}>Add new user</button>
        </div>
        
        <TableUssers/>
      </Container>
      <AddNewUser
      show = {isShowModal}
      handleClose = {handleClose}
      />
    </div>
  );
}

export default App;
