


import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {fetchAllUser} from "../services/userService";
import ReactPaginate from 'react-paginate';



const TableUssers = (prop) => {

  const [listUser, setListUser] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getAllUsers();
  },[])

  const getAllUsers = async(page) => {
    let res = await fetchAllUser(page);
    if(res && res.data) {
      
      setListUser(res.data)
      setTotalPages(res.total_pages)
    }
  }

  const handlePageClick = (event) => {
    getAllUsers(+event.selected + 1)
  }

  return (
    <>
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          
        </tr>
      </thead>
      <tbody>
        {listUser && listUser.length>0 &&
        listUser.map((item, index) => {
          return (
            <tr key={`user-${index}`}>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
        </tr>
          )
        })
        }
        
        
        
      </tbody>
    </Table>
    <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
    

    
  )
}

export default TableUssers;