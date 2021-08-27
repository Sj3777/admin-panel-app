import React from 'react'
import HouseIcon from '@material-ui/icons/House';
import BarChartIcon from '@material-ui/icons/BarChart';
import BallotIcon from '@material-ui/icons/Ballot';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import "./Sidebar.css"
function Sidebar () {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <HouseIcon className="sidebarIcon" />
                            Dashboard
                        </li>
                        <li className="sidebarListItem">
                            <BarChartIcon className="sidebarIcon" />
                            Analysis
                        </li>
                        <li className="sidebarListItem">
                            <BlurOnIcon className="sidebarIcon" />
                            Explore
                        </li>
                        <li className="sidebarListItem">
                            <BallotIcon className="sidebarIcon" />
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <SupervisedUserCircleIcon className="sidebarIcon" />
                            Profiles
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Quick Menu
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <HouseIcon className="sidebarIcon" />
                            Dashboard
                        </li>
                        <li className="sidebarListItem">
                            <BarChartIcon className="sidebarIcon" />
                            Analysis
                        </li>
                        <li className="sidebarListItem">
                            <BlurOnIcon className="sidebarIcon" />
                            Explore
                        </li>
                        <li className="sidebarListItem">
                            <BallotIcon className="sidebarIcon" />
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <SupervisedUserCircleIcon className="sidebarIcon" />
                            Profiles
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
