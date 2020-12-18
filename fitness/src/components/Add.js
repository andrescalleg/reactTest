import { render } from '@testing-library/react'
import React from 'react'
import addImg from '../images/add.png'
import './styles/Add.css'
import {Link} from 'react-router-dom'

class Add extends React.Component{


    render(){
        return(
            <Link to="/exercise/new">
                <img src = {addImg} className = 'Add-Format'/>
            </Link>
        )
    }
}

export default Add