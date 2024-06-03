import styled from "@emotion/styled";
import { Logo } from "../icons/Logo";
import { MessageIcon } from "../icons/MessageIcon";
import { MyPageIcon } from "../icons/MyPageIcon";
import { UserInfoProfile } from "./UserInfoProfile";
import { MenuItem } from "./MenuItem";

const Sidebar = () => {
  return (
    <SidebarStyle>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <UserInfoProfileWrapper>
        <UserInfoProfile imgUrl={"홍"} name="홍길동" email={"gildong@gmail.com"} />
      </UserInfoProfileWrapper>
      <MenuList>
        <MenuItem icon={<MessageIcon />} text="메시지 발송" />
        <MenuItem icon={<MyPageIcon />} text="마이페이지" />
      </MenuList>
    </SidebarStyle>
  );
};

export default Sidebar;

const SidebarStyle = styled.div`
  width: 250px;
  padding: 24px;
  border-right: 1px solid #dedede;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const LogoWrapper = styled.div`
  margin-bottom: 32px;
`;

const UserInfoProfileWrapper = styled.div`
  margin-bottom: 36px;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
