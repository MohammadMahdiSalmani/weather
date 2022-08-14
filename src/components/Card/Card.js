import Detail from '../Details/Details'
import Location from '../Location/Location'
import Menu from '../Menu/Menu'
import Temperature from '../Temperature/Temperature'

import './Card.scss'
import cloudy from '../../img/cloudy.gif'

const Card = ({ information }) => {
    console.log(information)

    return (
        <div className='row column-md-4 column-xs-11 card-container'>
            <img src={cloudy} alt='background' className='column-md-12 column-xs-12 background' />

            <div className='column column-md-12 column-xs-12 card'>
                <Menu data={information} />

                <Location data={information} />

                <Temperature data={information} />

                <div className='row column-md-12 column-xs-12'>
                    <Detail name="Humidity" value={information.main.humidity + '%'} />
                    <Detail name="Wind" value={information.wind.speed + 'MPS'} />
                    <Detail name="Visibility" value={information.visibility + "m"} />
                </div>
            </div>
        </div>
    )
}

export default Card