import styled from "@emotion/styled";

export const ProgressItem = styled.div`
  padding: 24px;
  border: 1px solid #f0f0f0;
`;

export const ProgressItemTitle = styled.div`
  font-weight: bold;
  margin: 16px 0;
`;

export const ProgressItemDesc = styled.div``;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  border: 1px solid #f0f0f0;
  @media (max-width: 780px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;
