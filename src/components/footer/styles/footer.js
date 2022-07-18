import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  background: #484663;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  color: #fff;
  font-family: sans-serif;
`;

export const Links = styled.a`
  color: #f1f;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #ff9c00;
    transition: 0.2s ease-in-out;
  }
`;

export const Title = styled.p`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
`;
