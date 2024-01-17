import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../services/userService";
import ReactPaginate from "react-paginate";
import AddNewUser from "./AddNewUser";

const TableUssers = (prop) => {
  const [listUser, setListUser] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const [isShowModal, setIsShowModal] = useState(false);
  const handleClose = () => {
    setIsShowModal(false);
  };

  useEffect(() => {
    getAllUsers(1);
  }, []);

  const getAllUsers = async (page) => {
    let res = await fetchAllUser(page);
    // console.log(res)
    if (res && res.data) {
      setListUser(res.data);
      setTotalPage(res.total_pages);
    }
  };

  const handlePageClick = (event) => {
    console.log("check event:", event);

    getAllUsers(+event.selected + 1);
  };

  const updateNewUser = (user) => {
    setListUser([user,...listUser]);
  }

  return (
    <>
      <div className="mt-3 mb-3 d-flex justify-content-between">
        <span className="d-flex align-items-center list-users">
          List uses:{" "}
        </span>
        <button
          className="btn btn-success"
          onClick={() => setIsShowModal(true)}
        >
          Add new user
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={`user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPage}
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
      <AddNewUser 
      show={isShowModal} 
      handleClose={handleClose} 
      updateNewUser={updateNewUser}
      />
    </>
  );
};

export default TableUssers;
