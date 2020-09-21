import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {Wrapp, Content} from '../about/about.style'
import {Heading} from '../experience/experience.style'

const Progress = styled.div.attrs(props => ({
    className : 'progress'
}))`
    border-radius : 0px;
    background : #2c3e50;
    height: 20px;
`;

const Bar = styled.div.attrs(props => ({
    className : 'progress-bar'
}))`
    background : #17c0eb;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 20px;
`;
const Item = styled.li`
    margin-top: 20px
`;
const Skills = ({data}) => {
    return (
        <Wrapp id={data.id}>
            <Heading>SKILLS</Heading>
            <Content>My Programming Languages and skills</Content>
            <Content>
                <List>
                    {
                        data.skill.map((show) => (
                            <Item key={show.title}>
                                <Progress>
                                    <Bar role="progressbar" style={{width: `${show.val}%`}} aria-valuenow={show.val} aria-valuemin="0" aria-valuemax="100">{show.title}</Bar>
                                </Progress>
                            </Item>
                        ))
                    }
                </List>
            </Content>
        </Wrapp>
    );
}

Skills.propTypes = {
    data : PropTypes.object.isRequired
}

export default Skills