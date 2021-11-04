import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    imageUrl: "https://picsum.photos/id/237/200/300",
    name: `あああ${val}`,
    email: "12345@examaple.com",
    tel: "090-000-111",
    company: {
      name: "テスト株式会社"
    },
    url: "https://google.com"
  };
});
export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧ページです。</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
