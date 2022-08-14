import { Component } from 'react'

import Card from './components/Card/Card'
import './App.scss'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://api.ipgeolocation.io/ipgeo?apiKey=10d0d1498112424595d44e4c535d8dc3')
            .then(res => res.json())
            .then(json => {
                const latitude = json.latitude
                const longitude = json.longitude

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=887f280c4f4fb737072068bdab70bcf5`)
                    .then((res) => res.json())
                    .then(json => {
                        this.setState({
                            isLoaded: true,
                            data: json
                        })
                    })
            })
    }


    render() {

        const { isLoaded, data } = this.state

        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <>
                    <Card information={data} />
                </>
            )
        }
    }
}


export default App