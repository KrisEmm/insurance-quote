import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

const Message = styled.p`
    background-color:rgb(127,224,237);
    margin-top:2rem;
    padding: 1rem;
    text-align:center;
`
const ContainerTotal = styled.div`
   text-align:center;
   padding:0.5rem;
   border: 1px solid #26C6DA;
   background-color: rgb(127,224,237);
   margin-top: 1rem;
   position:relative; 
`
const Total = styled.p`
    color:#00838F;
    padding:1rem;
    margin:0;
    text-align:center;
    text-transform:uppercase;
`
const Result = ({ quotation }) => {
    return (
        <>
            {quotation === 0
                ? <Message>Elige marca, año y tipo de seguro</Message>
                : (
                    <ContainerTotal>
                        <Total>Total es: <span>${quotation}</span></Total>
                    </ContainerTotal>
                )
            }

        </>
    )
}
Result.propTypes = {
    quotation: PropTypes.number.isRequired
}
export { Result };

