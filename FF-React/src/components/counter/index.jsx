import { useState } from "react";
import { Button } from "../button";
import styled from "@emotion/styled";

const CounterStyled = styled.div `
    padding: 16px;
    border-radius: 8px;
    background-color: #f1f1f1;
    h2 {
        margin: 0;
        margin-bottom: 16px;
    }
    .controls button:first-child {
        margin-right: 8px;
    }`;

export function Counter ({onClickButton, color}) {
    const [count, setCount] = useState(0);
    return (
        <CounterStyled>
            <h2 style={{color}}>Countador: {count}</h2>
            <button onClick={() => setCount(count + 1)} style={{marginRight:8}}>Aumentar</button>
            <button onClick={() => setCount(count - 1)}>Diminuir</button>
            <Button onClick={onClickButton}>Clique aqui</Button>
        </CounterStyled>
    );
}

