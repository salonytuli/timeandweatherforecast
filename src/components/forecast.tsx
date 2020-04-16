import React, {useEffect, useState} from "react";
// @ts-ignore
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from "redux";
import {Card} from 'react-bootstrap';
import {AppState} from '../reducers/rootReducer';
import fetchCurrentTimeAndWeather from '../actions/location';
import {Location} from '../types';
import './forecast.css';

interface forecastProps {
    forecast: []
    fetchTimeAndWeather: (location: Location[]) => any;
}

//given array of inputs
const location: Location[] = [
    {
        locationName: "Australia/Brisbane",
        postalCode: "20003"
    },
    {
        locationName: "America/New_York",
        postalCode: "10001"
    }
];

const Forecast: React.FC<forecastProps> = React.memo((props: forecastProps) => {
    const [forecastData, setForecastData] = useState([]);

    useEffect(() => {
            props.fetchTimeAndWeather(location);
        },
        // eslint-disable-next-line
        []);

    useEffect(() => {
            const {forecast} = props;
            if (forecast.length > 0) {
                setForecastData([...props.forecast]);
            }
        },
        // eslint-disable-next-line
        [JSON.stringify(props.forecast)]);

    return (
        <div className="card-wrapper">
            {forecastData.map((data: any, index) => (
                <Card key={index}>
                    <Card.Body>
                        <Card.Title>{data.locationName}</Card.Title>
                        <Card.Text>Current Time: {data.currentTime}</Card.Text>
                        <Card.Text>Weather: {data.weather}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}, (prevProps: forecastProps, nextProps: forecastProps) => (
    JSON.stringify(prevProps.forecast) === JSON.stringify(nextProps.forecast)
));

const mapStateToProps = (state: AppState) => ({
    // @ts-ignore
    forecast: state.forecast.forecast
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchTimeAndWeather: bindActionCreators(fetchCurrentTimeAndWeather, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
