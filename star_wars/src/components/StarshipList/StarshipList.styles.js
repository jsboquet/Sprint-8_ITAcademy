import styled from "styled-components";

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ListedItem = styled.section`
  margin: 15px;
  padding: 10px 20px 10px 20px;
  width: 80%;
  max-width: 750px;
  display: flex;
  flex-flow: column;
  color: #939393;
  background-color: #151515;
  line-height: 0.01;
  transition: 0.3s;
  &:hover {
    background-color: #181818;
  }
`;
