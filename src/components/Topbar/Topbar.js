import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';

import "./Topbar.css"


function Topbar () {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Adminal</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <PersonIcon />
                    </div>
                    <div className="topbarIconsContainer">
                        <span className="topIconBadge">7</span>
                        <SettingsIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
