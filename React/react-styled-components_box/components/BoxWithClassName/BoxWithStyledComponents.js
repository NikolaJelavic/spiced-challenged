import styled from "styled-components";

// export default function BoxWithStyledComponents({isBlack}) {
    
//     return <StyledBox isBlack={isBlack}></StyledBox>
// };

export default styled.div`
   width:200px;
   height:200px;
   background-color:${(props)=>(props.isBlack ? "black " : "green")};
    margin: 10px;
    
    &:hover{
    background-color:thistle;
  }
  `;
  


