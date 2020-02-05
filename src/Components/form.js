import React from 'react'

export default function form(props) {
    return (
        <div>
        <form onSubmit={props.getWeather}>
  
    <input type="text" name="city" placeholder="Enter City..." />
 
    <input type="text" name="country" placeholder="Enter Country..." />
  
  <input type="submit" value="Check Weather" />
</form>
        </div>
    )
}
