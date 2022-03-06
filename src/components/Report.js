import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

const ContainerReport = styled.div`
    padding:1rem;
    text-align:center;
    background-color: #00838F;
    color:#FFFFFF;
    margin-top:1rem;
`
const toCapitalize = (text) => {
    return text.charAt(0).toUpperCase().concat(text.slice(1))
}

const Report = ({ info }) => {
    const { marca, year, plan } = info;
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") return null;
    return (
        <>
            <ContainerReport>
                <h2>Resumen de Cotizacion</h2>
                <div>
                    <p>Plan: {toCapitalize(plan)}</p>
                    <p>Marca: {toCapitalize(marca)}</p>
                    <p>Modelo: {year}</p>
                </div>
            </ContainerReport>
        </>
    )
}
Report.propTypes = {
    info: PropTypes.object.isRequired
}
export { Report };

