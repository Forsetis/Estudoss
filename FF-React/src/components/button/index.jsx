import styled from '@emotion/styled';

    const StyledButton  = styled.button `
    border: solid 1px #444;
    background-color: #fff;
    border-radius: 4px;
    padding: 0 16px;
    min-height: 30px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 200ms;
    &:hover {
        background-color: #000;
        color: #fff;
        }
    }
`;

export function Button (props) {
    return <StyledButton onClick={props}>{props.children}</StyledButton>
};