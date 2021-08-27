import React from 'react'
import "./FeatureInfo.css"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
const FeatureInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">
                    Revanue
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2000</span>
                    <span className="featuredMoneyRate">-11.56% <ArrowDownwardIcon className="featuredIcon negative"/> </span>
                </div>
                <span className="featuredSub">Comapared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    Profit
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2000</span>
                    <span className="featuredMoneyRate">-11.56% <ArrowDownwardIcon className="featuredIcon"/> </span>
                </div>
                <span className="featuredSub">Comapared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    Sales
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2000</span>
                    <span className="featuredMoneyRate">-11.56% <ArrowDownwardIcon /> </span>
                </div>
                <span className="featuredSub">Comapared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    Cost
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2000</span>
                    <span className="featuredMoneyRate">-11.56% <ArrowDownwardIcon /> </span>
                </div>
                <span className="featuredSub">Comapared to last month</span>
            </div>
        </div>
    )
}

export default FeatureInfo
