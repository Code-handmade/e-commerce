import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { ModalOrder } from "../../components";
import { API_URL } from "../../utils/constants";
import { AddBoxOutlined, ShoppingCartOutlined } from "@material-ui/icons";
// import { Button } from "@material-ui/core";
import { Add, CardTravelOutlined, Remove } from "@material-ui/icons";
import styled from "styled-components";



//style
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterTotal = styled.div`
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.div`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;
const ButtonCount = styled.button`
  padding: 5px;
  border: none;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

//logical


function Details({ login }) {

  const params = useParams();
//    console.log(params);
const [product, setProduct] = useState({});
const [count, setCount] = useState(0);

function decrementCount(){
  if(count>0){
    return(setCount(prevCount=>prevCount-1))
  }
}
function incrementCount(){
  if(count<product.prod_stock){
    return(setCount(prevCount=>prevCount+1))
  }
 
}

const id_product = +params.id;
useEffect(() => {
  getProductById();
}, []);
//GET product BY id 
const getProductById = async () => {
  try {
    let result = await axios({
      method: "GET",
      url: API_URL + `products/${id_product}`,
    });
    setProduct(result.data);
  } catch (error) {
    console.log(error);
  }
};

// axios post line Items

const [line, setLine] = useState({
  lite_qty:"",
  lite_status:"pending",
  productId:id_product,
  shopId:"",
  orderId:""
})

const submitHandler = e =>{
  console.log(line);
  e.preventDefault()
  postLineItem()
}

const postLineItem = async () => {
  try {
    let result = await axios({
      method: "POST",
      url: API_URL + `lineitems/add`,
      data:line
    });
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
};

// const [openModal, setOpenModal] = useState(false);
let total = product.prod_price*count
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.prod_name} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.prod_name}</Title>
          <Desc>{product.prod_desc}</Desc>
          <Price>Rp.{product.prod_price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Total</FilterTitle>
              <FilterTotal/>{total}
            </Filter>
            <Filter>
              <FilterTitle>Stock</FilterTitle>
              <FilterSize>
                <FilterSizeOption>{product.prod_stock}</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <CardTravelOutlined />
              <ButtonCount onClick={decrementCount}>-</ButtonCount>
              <Amount onChange={(e)=> setLine({...line, count:e.target.value})}>{count}</Amount>
              <ButtonCount onClick={incrementCount}>+</ButtonCount>
            </AmountContainer>
            <Link to={`/cart/${id_product}`}>
            <Button >
              ORDER
            </Button>
            </Link>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Details;
