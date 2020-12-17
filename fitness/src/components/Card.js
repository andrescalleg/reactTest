import React from 'react'
import exerciseImg from '../images/logo192.png'
import circleImg from '../images/circles.png'
import './styles/Card.css'

class Card extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            img: exerciseImg
        }
    }

    componentDidMount(){
        setTimeout( () => {
            this.setState({
                img: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
            })
        },5000)
    }
    render(){
        return (
            <div className="card mx-auto Fitness-Card"
            style = {{
                    backgroundImage: `url(${circleImg}), linear-gradient(to right,${this.props.leftColor} ,${this.props.rightColor} )`
                }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src= {this.state.img} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{this.props.title}</h1>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}

export default Card
