import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithubAlt,
    faFacebook,
    faTwitter,
    faInstagramSquare
  } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types'

import {Wrapp, Heading, Fill, Number, Content, List, Item} from './about.style';

function About({data}) {
    return (
        <Wrapp id={data.id}>
            <Heading><Fill>{data.first}</Fill> {data.last}</Heading>
            <Number>{data.number} <Fill>{data.email}</Fill></Number>
            <Content>{data.content}</Content>
            <List>
                <Item><FontAwesomeIcon icon={faFacebook} /></Item>
                <Item><FontAwesomeIcon icon={faTwitter} /></Item>
                <Item><FontAwesomeIcon icon={faGithubAlt} /></Item>
                <Item><FontAwesomeIcon icon={faInstagramSquare} /></Item>
            </List>
        </Wrapp>
    );
}

About.propTypes = {
    data : PropTypes.object.isRequired
}


export default About;