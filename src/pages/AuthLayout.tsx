import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  //TODO : 로그인 안되어있으면 login 페이지 이동
  //TODO : 로그인 되어있으면 service 페이지 이동
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
