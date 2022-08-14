import './Temperature.scss'
import sun from '../../img/sun.svg'
import cloud from '../../img/cloud.svg'
import cloudSun from '../../img/cloud-sun.svg'
import cloudRain from '../../img/cloud-rain.svg'
import cloudSnow from '../../img/cloud-snow.svg'
import cloudLightning from '../../img/cloud-lightning.svg'
import unknown from '../../img/unknown.svg'

const Temperature = ({ data }) => {
    const weather = data.weather[0].main

    return (
        <div className='column column-md-12 column-xs-12 temperature'>
            <img src={weather === 'Clouds' ? cloud : weather === 'Rain' ? cloudRain :  weather === 'Snow' ? cloudSnow : weather === 'Clear' ? sun : weather === 'Thunderstorm' ? cloudLightning : unknown} alt='Weather' className="row column-md-4 column-xs-4" />

            <strong className='row column-md-10 column-xs-10'>{data.weather[0].description}</strong>

            <div className='column column-md-12 column-xs-12'>
                <strong className='temp'>{Math.round(data.main.temp)}<span className='celsius'>&#8451;</span></strong>
            </div>
        </div>
    )
}

export default Temperature