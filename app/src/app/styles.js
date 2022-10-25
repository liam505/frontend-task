/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  max-width: 935px;
  margin: 16px auto;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: row;
  height: 55vh;
  @media (max-width: 500px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const ImageContainer = styled.div`
  order: 1;
  flex: 1 0 60%;
  align-self: flex-start;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-height: 707px) {
    justify-content: center;
  }
`;

export const SidePanel = styled.div`
  order: 2;
  flex: 1 0 40%;
  align-self: flex-start;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SidePanelDivider = styled.hr`
  margin: 0.5rem 0;
  border: solid 0.1px lightgrey;
  width: 90%;
`;
