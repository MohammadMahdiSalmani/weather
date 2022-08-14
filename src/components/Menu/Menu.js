import { useState } from 'react'
import Setting from './Setting/Setting'
import Info from './Info/Info'

import './Menu.scss'
import settingImage from '../../img/setting.svg'
import infoImage from '../../img/info.svg'

const Menu = ({ data }) => {

    const [setting, setSetting] = useState(false)
    const toggleSetting = () => {
        setSetting(!setting)
        setInfo(false)
    }

    const [info, setInfo] = useState(false)
    const toggleInfo = () => {
        setInfo(!info)
        setSetting(false)
    }

    return (
        <nav className='row column-md-12 column-xs-12'>
            <img src={settingImage} alt='setting' className="column-md-1 column-xs-1 toggle-setting" onClick={toggleSetting} />
            <img src={infoImage} alt='info' className="column-md-1 column-xs-1 toggle-info" onClick={toggleInfo} />
            <Setting status={String(setting)}/>
            <Info status={String(info)} details={data} />
        </nav>
    )
}

export default Menu