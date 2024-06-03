import styled from "@emotion/styled";

type MenuItemProps = {
  icon: React.ReactNode;
  text: string;
};
export const MenuItem = ({ icon, text }: MenuItemProps) => {
  return (
    <MenuItemStyle>
      <IconWrapper>{icon}</IconWrapper>
      <Text>{text}</Text>
    </MenuItemStyle>
  );
};

const MenuItemStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 12px;
  gap: 8px;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #676976;
  text-align: center;
`;
