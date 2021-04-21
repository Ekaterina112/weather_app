import React from "react";
import styled from 'styled-components'


export function InputCustom({type, placeholder, name}) {

    return <div>
        <StyledInput type={type} placeholder={placeholder} name={name} autoComplete={'off'}/>
    </div>

}

const StyledInput = styled.input`
  color: #7c7d7e;
  font-size: 16px;
  border: 0 none;
  border-bottom: 1px solid #ebebec;
  margin:10px 0;
  font-family: 'Poppins', sans-serif;
  outline:none;
  width: 100%
`