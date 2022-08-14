import './Info.scss'

const Info = ({ status, details }) => {

    const unix_timestamp = [details.sys.sunrise, details.sys.sunset]
    const date = [new Date(unix_timestamp[0] * 1000), new Date(unix_timestamp[1] * 1000)]
    const hours = [date[0].getHours(), date[1].getHours()]
    const minutes = ["0" + date[0].getMinutes(), "0" + date[1].getMinutes()]
    const formattedTime = [hours[0] + ':' + minutes[0].substr(-2), hours[1] + ':' + minutes[1].substr(-2)]


    return (
        <div className={`column column-md-12 column-xs-12 info ${status}`}>
            <ul className='column column-md-10 column-xs-10'>
                <li className='column column-md-8 column-xs-8'>
                    <h2>Sunrise</h2>
                    <label>{formattedTime[0]}</label>
                </li>

                <li className='column column-md-8 column-xs-8'>
                    <h2>Sunset</h2>
                    <label>{formattedTime[1]}</label>
                </li>

                <li className='column column-md-8 column-xs-8'>
                    <h2>Clouds</h2>
                    <label>{details.clouds.all}%</label>
                </li>

                <li className='column column-md-8 column-xs-8'>
                    <h2>Wind</h2>
                    <label>{details.wind.speed}meter/sec</label>
                    <label>{details.wind.deg}deg</label>
                </li>
            </ul>
        </div>
    )
}

export default Info