import styled from 'styled-components';

export const DividerContainer = styled.div`
  display: flex;
  gap: 8px; /* equivalent to tw-gap-2 */
  align-items: center;
  width: 100%;
  ${props => props.className && props.className}
`;

export const Line = styled.span`
  flex: 1;
  height: 1px;
  background-color: rgba(55, 58, 65, 1);
`;
