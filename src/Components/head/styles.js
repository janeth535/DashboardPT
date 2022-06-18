import styled from "styled-components";

export const HeadContainer = styled.div`
  width: 100%;
  padding: 0.6rem 0;
  margin: 1rem 0;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeadLeft = styled.div`
  display: flex;
  flex: 3;
  margin: 0 0.6rem;

  h1 {
    font-weight: 500;
    font-size: 1.6rem;
  }
`;

export const HeadRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin: 0 0.6rem;

  h4,
  span {
    margin: 0 0.6rem;
    font-weight: 100;
  }

  span {
    color: #777;
  }
`;
