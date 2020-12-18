import { render } from '@testing-library/react'
import React from 'react'
import './styles/Welcome.css'

function Welcome (props){
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}</h1>
                <p>Lets workout to get some gains!</p>
            </div>
        </div>
    )
}

export default Welcome