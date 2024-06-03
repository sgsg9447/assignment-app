import styled from "@emotion/styled";

type UserInfoProfileProps = {
  imgUrl: string;
  name: string;
  email: string;
};

export const UserInfoProfile = ({ imgUrl, name, email }: UserInfoProfileProps) => {
  return (
    <UserInfoProfileGroup>
      <UserInfoProfileImg>{imgUrl}</UserInfoProfileImg>
      <UserInfoProfileData>
        <UserInfoProfileName>{name}</UserInfoProfileName>
        <UserInfoProfileEmail>{email}</UserInfoProfileEmail>
      </UserInfoProfileData>
    </UserInfoProfileGroup>
  );
};

const UserInfoProfileGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #f2f6ff;
  padding: 8px 32px 8px 8px;
  border-radius: 8px;
`;

const UserInfoProfileImg = styled.div`
  background-color: #5a66ff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fefdfc;
  font-size: 18px;
  font-weight: 600;
`;
const UserInfoProfileData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 16px;
  font-weight: 600;
`;
const UserInfoProfileName = styled.div``;
const UserInfoProfileEmail = styled.div`
  color: #757986;
  font-size: 12px;
  font-weight: 500;
`;
