import { getAccessToken } from "service/login/api";
import useChangeInput from "../hooks/useChangeInput";

const Login = () => {
  const { input: id, onChange: onChangeId } = useChangeInput();
  const { input: pw, onChange: onChangePw } = useChangeInput();

  const login = async () => {
    await getAccessToken({ name: id, password: pw });
  };

  return (
    <>
      <input value={id} onChange={onChangeId} />
      <input value={pw} onChange={onChangePw} />
      <button onClick={login}>로그인</button>
    </>
  );
};

export default Login;
