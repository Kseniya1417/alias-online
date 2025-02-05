import styled from "styled-components";

const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row' };
  align-items: ${props => props.align || 'center' };
  justify-content: ${props => props.justify || 'stretch' };
  margin: ${props => props.margin || '0' };  
  background: #ffffff;  
  min-height: ${props => props.height || 'auto' };  
`

const FlexContainer = (props) => {
  return <StyledFlexContainer {...props} />
};

export default FlexContainer;