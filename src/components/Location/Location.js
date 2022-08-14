import './Location.scss'

const Location = ({ data }) => {
    const today = new Date()
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = weekday[today.getDay()] + ', ' + today.getDate() + ' ' + month[today.getMonth()] + ' ' + today.getFullYear();
    const time = today.getHours() + ':' + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes()


    const refreshPage = () => {
        window.location.reload(true)
    }

    return (
        <div className='row column-md-12 column-xs-12'>
            <div className='row column-md-12 column-xs-12 location'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 256 256" className='column-md-1 column-xs-1'><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="104" r="32" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
                <h1 className='title'>{data.name}, {data.sys.country}</h1>
            </div>

            <div className='column column-md-12 column-xs-12 local-time'>
                <h2 className='date'>{date}</h2>
                <div className='row column-md-8 column-xs-8'>
                    <h2 className='time'>{time}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 256 256" className='column-md-1 column-xs-1' onClick={refreshPage}><rect width="256" height="256" fill="none"></rect><path d="M232.2,51.7v48a8,8,0,0,1-8,8h-48a8,8,0,0,1-5.7-13.6l18.4-18.4-4.3-4.3a80,80,0,1,0,0,113.2,7.9,7.9,0,0,1,11.3,0,8,8,0,0,1,0,11.3,96,96,0,1,1,0-135.8l4.3,4.3,18.3-18.3a8,8,0,0,1,8.7-1.8A8.2,8.2,0,0,1,232.2,51.7Z"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default Location