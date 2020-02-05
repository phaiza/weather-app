import React from 'react'

export default function weather(props) {
    console.log(props);
    return (
       
        <div>
            <ul>
                { props.weatherProps.city && <li>City: {props.weatherProps.city} </li> }
                { props.weatherProps.city && <li>Country: {props.weatherProps.country} </li> }
                { props.weatherProps.city && <li>Temperature: {props.weatherProps.temperature} </li> }
                { props.weatherProps.city && <li>Humidity: {props.weatherProps.humidity} </li> }
                { props.weatherProps.city && <li>Conditions: {props.weatherProps.conditions} </li> }
            </ul>
            { props.weatherProps.error &&<p>{props.weatherProps.error}</p>}
        </div>
        
    )
}
