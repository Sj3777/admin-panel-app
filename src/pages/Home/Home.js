import React from 'react'
import "./Home.css";
import Charts from '../../components/Charts/Charts';
import FeatureInfo from '../../components/featuredInfo/FeatureInfo';
const Home = () => {
    return (
        <div className="home">
            <FeatureInfo/>
            <Charts/>
        </div>
    )
}

export default Home
