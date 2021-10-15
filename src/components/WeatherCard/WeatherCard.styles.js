import styled, { css } from 'styled-components';

export const Card = styled.div`
  background-color: #ededed;
  width: 250px;
  height: 350px;

  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border-radius: 16px;
`;

export const RegularText = styled.p`
  color: grey;
  font-size: 1.4rem;
  margin: 5px 5px 5px 0;

  ${({ description }) =>
    description &&
    css`
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
    `}
`;

export const Temperature = styled.h1`
  color: black;
  font-size: 3rem;
  margin: 15px 0;
`;

export const Country = styled.div`
  height: 15px;
  color: white;
  font-size: 0.6rem;
  font-weight: bold;
  text-transform: uppercase;

  background-color: orange;
  border-radius: 25px;
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoBox = styled.div`
  width: 100%;
  display: flex;
`;
