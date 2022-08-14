import './Details.scss'
import Wind from '../../img/wind.svg'
import Visibility from '../../img/visibility.svg'
import Humidity from '../../img/humidity.svg'

const Detail = ({ name, value }) => {

    return (
        <figure className='column column-md-4 column-xs-4'>
            <img src={name === 'Wind' ? Wind : name === 'Visibility' ? Visibility : Humidity} alt={name} className='column-md-5 column-xs-5' />
            <span>{value}</span>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default Detail