import styled from "styled-components";

type EditModalPropsType = {
  visible: boolean;
  onClickCancel: () => void;
  onClickConfirm: (title: string, id: number) => void;
  onChange: (e: any) => void;
  input: string;
  id: number;
};

const EditModal = ({
  visible,
  onClickCancel,
  onClickConfirm,
  onChange,
  id,
  input,
}: EditModalPropsType) => {
  return (
    <Container visible={visible}>
      <div>
        <h3>수정</h3>
        <input value={input} onChange={onChange} />
      </div>
      <div className="button_wrapper">
        <Button onClick={onClickCancel}>취소</Button>
        <Button onClick={() => onClickConfirm(input, id)}>수정</Button>
      </div>
    </Container>
  );
};

export default EditModal;

const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  flex-direction: column;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  top: calc(50% - 250px);
  left: calc(50% - 25%);
  width: 50%;
  height: 500px;
  background: white;
  padding: 0px 20px 20px 20px;
  justify-content: space-between;

  h3 {
    text-align: center;
    font-size: 2rem;
    margin: 0px;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    height: 50px;
    font-size: 2rem;
    border-radius: 14px;
    border: none;
    box-shadow: 1px 1px 3px 3px #eeeeee;
  }

  .button_wrapper {
    display: flex;
    justify-content: space-between;
    height: 100px;
    width: 100%;
  }
`;

const Button = styled.button`
  width: 100%;
  & + & {
    margin-left: 30px;
  }
  font-size: 2rem;
`;
