import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { imageUrl, name } = props;
  return (
    <SContainer>
      <SImage height={160} width={160} src={imageUrl} alt="プロフィール" />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
