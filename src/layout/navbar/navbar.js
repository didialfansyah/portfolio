import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import ProfileIMages from '../../images/profile.jpg';
import {WrapNav, Profile, Img, ListGroup} from './navbar.style';

const ListItem = styled(NavLink)`
    width: 100%;
    border: none;
    border-radius: 0px;
    background: none;
    text-align: center;
    color: #17c0eb;
`;

function Navbar({data}) {
    return(
        <WrapNav>
            <Profile>
                <Img src={ProfileIMages} alt="Profile Images"></Img>
            </Profile>
            <ListGroup id="list-example" className='list-group'>
                {
                    data['list'].map((show) => (
                        //<ListItem key={show.id} href={show.id}>{show.name}</ListItem>
                        <ListItem activeClassName="active" className="list-group-item list-group-item-action" key={show.id} to={show.id}>{show.name}</ListItem>
                    ))
                }
            </ListGroup>
        </WrapNav>
        
    );
}

export default Navbar;