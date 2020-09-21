import React from 'react'
import PropTypes from 'prop-types'

import {Wrapp, Content, Fill} from '../about/about.style'
import {Heading, Row, Cols, Title} from '../experience/experience.style'

const Education = ({data}) => {
    return (
        <Wrapp id={data.id}>
            <Heading>EDUCATION</Heading>
            {
                data.education.map((show) => (
                    <Row key={show.title}>
                        <Cols className='col-md-8'>
                            <Title>{show.title}</Title>
                            <Content>{show.jurusan}</Content>
                        </Cols>
                        <Cols className="col-md-4" style={{textAlign: "right"}}><Fill>{show.tanggal}</Fill></Cols>
                    </Row>
                ))
            }
        </Wrapp>
    );
}

Education.propTypes = {
    data : PropTypes.object.isRequired
}

export default Education;