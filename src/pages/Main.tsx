import React from "react";
import { useQuery } from "react-query";
import Product from "../components/Product";
import { getProductList } from "../service/product/api";
import styled from "styled-components";
import { deleteCookie } from "utils/cookie";
import { useNavigate } from "react-router-dom";

const initialParams = {
  take: 20,
  skip: 0,
  orderByField: "",
  orderBySort: "",
};

const Main = () => {
  const { data, refetch } = useQuery(
    ["productList"],
    () => getProductList(initialParams),
    {
      refetchOnWindowFocus: false,
    }
  );

  const navigate = useNavigate();

  const logout = () => {
    deleteCookie("AccessToken");
    navigate("/");
  };

  return (
    <Container>
      <Header>
        <div>메인페이지</div>
        <button onClick={logout}>로그아웃</button>
      </Header>
      {data?.list.map((product) => (
        <Product key={`${product.id}`} product={product} refetch={refetch} />
      ))}
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
