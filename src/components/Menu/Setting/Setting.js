import './Setting.scss'

const Setting = ({ status }) => {
    return (
        <div className={`column column-md-12 column-xs-12 setting ${status}`}>
            <div className='column column-md-12 column-xs-12'>
                <h2>APIs</h2>
                <ul className='column column-md-10 column-xs-10'>
                    <li className='row column-md-8 column-xs-8'>ipgeolocation.io</li>
                    <li className='row column-md-8 column-xs-8'>openweathermap.org</li>
                </ul>
            </div>

            <div className='column column-md-12 column-xs-12'>
                <ul className='column column-md-10 column-xs-10'>
                    <li className='row column-md-10 column-xs-10' status='back'><a href='https://msas-mohammad.ir' className='column-md-12 column-xs-12'>Back to Home</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Setting