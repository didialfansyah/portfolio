import styled from 'styled-components'

export const Heading = styled.h1`
    font-family: helvetica;
    font-weight: bold;
    font-size: 45px;
`;
export const Row = styled.div.attrs(props => ({
    className : 'row',
}))`
    margin-top: 30px;
`;
export const Cols = styled.div``;
export const Title = styled.a`
    font-family: helvetica;
    font-weight: bold;
    font-size: 26px;
    margin-bottom: 0px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        color: #17c0eb;
        text-decoration: none;
    }
`;