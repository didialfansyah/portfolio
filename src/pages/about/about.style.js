import styled from 'styled-components';

export const Wrapp = styled.div.attrs(props => ({
    className : 'container',
}))`
    min-height : 500px;
    margin-top : 100px;
    padding-bottom: 100px;
`;
export const Heading = styled.h1`
    font-family: helvetica;
    font-weight: bold;
    font-size: 55px;
`;
export const Fill = styled.span`
    color : #17c0eb;
`;
export const Number = styled.div`
    font-size: 18px;
    font-weight: bold;
    font-family: helvetica;
    margin-bottom:20px;
`;
export const Content = styled.div`
    text-align: justify;
`;
export const List = styled.ul`
    list-style: none;
    padding: 0;
`;
export const Item = styled.li`
    display: inline-block;
    padding: 10px 10px;
    font-size: 28px;
    transition: all 0.5s ease;
    &:first-child {
        padding-left: 0px;
    }
    &:hover {
        color: #17c0eb;
    }
`;