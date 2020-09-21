import React from 'react'
import PropTypes from 'prop-types'

import {Wrapp, Content} from '../about/about.style'
import {Heading, Row, Cols, Title} from './experience.style'
import Images from '../../components/images/images'

const Experience = ({data}) => {
    return (
        <Wrapp id={data.id}>
            <Heading>My Experience</Heading>
            {
                data.content.map((show) => (
                    <Row key={show.title}>
                        <Cols className="col-md-5">
                            <Images
                                data = {
                                    {
                                        src : show.src,
                                        alt : show.alt
                                    }
                                }
                            />
                        </Cols>
                        <Cols className="col-md-7">
                            <Title href={show.url}>{show.title}</Title>
                            <Content>{show.isi}</Content>
                        </Cols>
                    </Row>
                ))
            }
        </Wrapp>
    )
}

Experience.propTypes = {
    data : PropTypes.object.isRequired
}
export default Experience