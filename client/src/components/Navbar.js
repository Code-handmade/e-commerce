import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
  border-bottom: 2px solid teal;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content:flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
`;

function Navbar({ login, userLogin }) {
  const history = useHistory();
  const loginHandler = (e) => {
    e.preventDefault();
    userLogin(true);
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    Swal.fire({
      title: ":(",
      text: "Are you sure to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        userLogin(false);
        history.push("/login");
      }
    });
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color:"gray", fontSize:16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Handmade Store</Logo>
        </Center>
        <Right>
          
          <MenuItem>
          {login ? (
            <button
              onClick={(e) => logoutHandler(e)}
              className="btn btn-sm btn-outline-danger"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={(e) => loginHandler(e)}
              className="btn btn-outline-success"
              type="submit"
            >
              Login
            </button>
          )}
          </MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined/>
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
