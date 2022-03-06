import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

const Field = styled.div`
    display:flex;
    margin-bottom: 1rem;
    align-items:center;
`
const Label = styled.label`
    flex: 0 0 100px;
`
const Select = styled.select`
    display:block;
    width:100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`
const InputRadio = styled.input`
    margin: 0 1rem;
`
const Button = styled.button`
    background-color:#00838f;
    font-size:16px;
    width:100%;
    padding:1rem;
    color: #FFFFFF;
    text-transform:uppercase;
    font-weight:bold;
    border:none;
    margin-top: 1rem;
    &:hover{
        background-color:#26C6DA;
        cursor:pointer;
    }
`
const Error = styled.div`
    background-color:red;
    color:white;
    padding:1rem;
    width:100%;
    text-align:center;
    margin-bottom: 1rem;
`
const typeInsurance = {
    asiatico: {
        type: "asiatico",
        percentage: 1.05
    },
    americano: {
        type: "americano",
        percentage: 1.15
    },
    europeo: {
        type: "europeo",
        percentage: 1.30
    }
}
const planPackage = {
    basic: {
        type: "basic",
        percentage: 1.20
    },
    premium: {
        type: "premium",
        percentage: 1.50
    }
}
const Form = ({ setReport, setIsReady }) => {
    const [error, setError] = useState(false)
    const [data, setData] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const { marca, year, plan } = data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
            setError(true)
            return
        }
        setError(false)
        let price = 2000
        let increment = 0

        increment = 3
        price -= (((new Date().getFullYear() - year) * increment) * price) / 100

        switch (marca) {
            case "asiatico":
                increment = typeInsurance[marca].percentage
                break;
            case "americano":
                increment = typeInsurance[marca].percentage

                break;
            case "europeo":
                increment = typeInsurance[marca].percentage

                break;

            default:
                break;
        }
        price *= increment

        switch (plan) {
            case "basic":
                increment = planPackage[plan].percentage
                break;
            case "premium":
                increment = planPackage[plan].percentage
                break;
            default:
                break;
        }

        price *= increment

        price = parseFloat(price).toFixed(2)
        setIsReady(true)

        setTimeout(() => {
            setIsReady(false)
            setReport({
                quotation: Number(price),
                info: data
            })
        }, 3000);


        setData({
            marca: '',
            year: '',
            plan: ''
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                {
                    error ? <Error>Todos los campos son obligatorios</Error> : null
                }
                <Field>
                    <Label>Marca</Label>
                    <Select name="marca" value={marca} onChange={handleChange}>
                        <option value="">-- Seleccionar --</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asicatico</option>
                    </Select>
                </Field>
                <Field>
                    <Label>Año</Label>
                    <Select name="year" value={year} onChange={handleChange}>
                        <option value="">-- Seleccionar --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </Select>
                </Field>
                <Field>
                    <Label>Plan</Label>
                    <InputRadio
                        type="radio"
                        name="plan"
                        value="basic"
                        ckecked={plan === "basic"}
                        onChange={handleChange}
                    /> Basico
                    <InputRadio
                        type="radio"
                        name="plan"
                        value="premium"
                        ckecked={plan === "premium"}
                        onChange={handleChange}
                    /> Premium
                </Field>
                <Button type="submit">Cotizar</Button>
            </form>
        </>
    )
}
Form.propTypes = {
    setReport: PropTypes.func.isRequired,
    setIsReady: PropTypes.func.isRequired
}
export { Form }

