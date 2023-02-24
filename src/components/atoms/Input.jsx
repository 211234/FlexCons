import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px #FF7F32;
`;

function Input({type, placeholder}){
    return(
        <StyledInput type={type} placeholder={placeholder}/>
    )
}

export default Input;
