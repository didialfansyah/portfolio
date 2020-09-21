import React from 'react'
import PropTypes from 'prop-types'

const Images = (data) => {
    return (
        <img style={{border: '1px solid #ecf0f1'}} className="img-fluid" src={data.data.src} alt={data.data.alt}/>
    );
}

Images.propTypes = {
    data : PropTypes.object.isRequired
}

export default Images