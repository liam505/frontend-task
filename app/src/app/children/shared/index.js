import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
`;

export const FlexCol = styled(FlexRow)`
  flex-direction: column;
`;

export const PlainP = styled.p`
  margin: 0;
`;

export const BoldP = styled(PlainP)`
  font-weight: bold;
`;

export const LinkLikeText = styled.span`
  color: #0f346e;
`;
