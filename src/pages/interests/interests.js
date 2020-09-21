import React from 'react'

import {Wrapp, Content} from '../about/about.style'
import {Heading} from '../experience/experience.style'

const Interests = () => {
    return (
        <Wrapp id="interests">
            <Heading style={{marginBottom:'20px'}}>INTERESTS</Heading>
            <Content  style={{marginBottom:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus nunc et eros euismod, viverra congue elit tristique. Nullam cursus augue eget ex blandit rhoncus. In hac habitasse platea dictumst. Nam mi felis, varius ut est id, interdum ultrices nisl. Fusce fermentum ac velit vel blandit. Duis condimentum tellus elit, interdum semper tellus pellentesque nec. Fusce accumsan id sem sed mollis. Proin vestibulum dui quis finibus commodo. Integer et quam condimentum, tempor ante vel, auctor justo. Proin vitae commodo ipsum. Nam efficitur metus at pharetra maximus. Integer vel tellus vitae arcu placerat aliquam. Aliquam diam purus, fringilla nec suscipit a, suscipit sit amet magna. Suspendisse volutpat suscipit justo vel euismod.</Content>
            <Content>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla dignissim arcu nec finibus feugiat. Quisque ligula nulla, vehicula in dolor sit amet, varius pharetra ipsum. </Content>
        </Wrapp>
    )
}

export default Interests