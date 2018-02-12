
import apiKey from '../apiKey'
import React, { Component } from 'react';
import axios from 'axios';
import "./Body.css"

export default class Body extends Component {
    constructor(props) {
        super(props)
        this.cityName = '';
        this.zip = '';
        this.state = {
            inputTxt: '',
            weather: {},
            placeToDisplay: [{ main: ' '}],

        }

        this.viewLocation = this.viewLocation.bind(this);
        this.addLocation = this.addLocation.bind(this);
    }


    viewLocation() {

        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName},${this.state.zip}&appid=${apiKey}`)
            .then((res) => {
                console.log("weath info", res.data)
                this.setState({ weather: res.data }
                )
            }
            )

    }

    addLocation() {


        axios.post(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName},${this.state.zip}&appid=${apiKey}`)
            .then((res) => {
                let placeToDisplay = this.state.placeToDisplay
                placeToDisplay.push(res.data)
                this.setState({ placeToDisplay:placeToDisplay}

                )
            }
            )
    }

    saveToBackend() {
        axios.post(`http://localhost:3030/api/hello`, {hey:"heyyyy"})
        .then((res) => console.log(res)).catch((err) => console.log(err))
    }
    


    handleCity(e) {
        var cityName = e.target.value
        this.setState({ cityName })
        //console.log(e.target.value)
    }

    handleZip(e) {
        var zip = e.target.value
        this.setState({ zip })  
        //console.log(e.target.value)
    }


    render() {

       var x = this.state.cityName + ":" + this.state.placeToDisplay.map ( place => place.main.temp) + "kelvin"
       this.saveToBackend()
        console.log(this.state)
        return (
            <div className='text' >
                <button onClick={() => { this.viewLocation() } }> View Weather </button>
                <input onChange={(e) => this.handleZip(e)} />
                <input onChange={(e) => this.handleCity(e)} />
                <button onClick={() => { this.addLocation()}}> Add City </button>
                {JSON.stringify(this.state.weather)}
              {x}
            </div>

        )
    }
}