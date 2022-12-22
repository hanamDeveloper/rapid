import useChangeInput from "hooks/useChangeInput";
import React, { useCallback, useEffect, useState } from "react";
import { editProductList } from "service/product/api";
import { ProductModel } from "service/product/model";
import styled from "styled-components";
import EditModal from "./EditModal";
import { debounce } from "lodash";

type ProductPropsType = {
  product: ProductModel;
  refetch: () => void;
};

const Product = ({ product, refetch }: ProductPropsType) => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const { input, onChange, setInput } = useChangeInput(product.title);
  const {
    input: changeTitleInput,
    onChange: onChangeTitleInput,
    setInput: setTitleInput,
  } = useChangeInput(product.title);

  useEffect(() => {
    setTitleInput(product.title);
    setInput(product.title);
  }, [product]);

  const onClickEdit = useCallback(() => {
    setEditModalVisible(true);
  }, []);

  const onClickCancel = useCallback(() => {
    setEditModalVisible(false);
  }, []);

  const submitEditTitle = async (title: string, productId: number) => {
    const submitParams = {
      ...product,
      title,
    };
    await editProductList(submitParams, productId);
    refetch();
    setEditModalVisible(false);
  };

  const debounceFunction = useCallback(
    debounce(
      async (title: string, id: number) => await submitEditTitle(title, id),
      1000
    ),
    []
  );

  useEffect(() => {
    if (changeTitleInput !== product.title) {
      debounceFunction(changeTitleInput, product.id);
    }
  }, [changeTitleInput]);

  return (
    <Container>
      <img src={product.selectedThumbnailUrl} alt="이미지 썸네일" />
      <input
        className="content"
        value={changeTitleInput}
        onChange={onChangeTitleInput}
      ></input>
      <button className="edit_button" onClick={onClickEdit}>
        편집
      </button>

      {editModalVisible && (
        <EditModal
          visible={editModalVisible}
          onClickCancel={onClickCancel}
          onClickConfirm={submitEditTitle}
          onChange={(e) => onChange(e)}
          input={input}
          id={product.id}
        />
      )}
    </Container>
  );
};

export default React.memo(Product);

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  border-radius: 13px;
  margin-bottom: 1rem;
  padding: 0px 20px 0px 0px;
  box-sizing: border-box;
  box-shadow: 3px 3px 3px 3px #999;

  img {
    min-width: 100px;
    height: 100%;
    border-radius: 13px;
    background-size: cover;
  }

  .content {
    border: none;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
  .edit_button {
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100px;
  }
`;
