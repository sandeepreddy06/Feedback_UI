import React from 'react'
import Cards from '../components/shared/Cards'
import { Link } from 'react-router-dom'

function About() {
    return (
        <Cards>
        <div className='about'>
            <h1>About Project</h1>
            <p>This is a React application to provide feedback for a product or service</p>
            <p>Version: 1.0.0</p>
            <p>
                <Link to='/'>Back to Home</Link>
            </p>
        </div>
        </Cards>
    )
}

export default About