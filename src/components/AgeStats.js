import React, { Component } from 'react';
import partyPopper from '../assets/party-popper.jpg';

class AgeStats extends Component {
  timeSince(date) {
    let today = new Date().getTime();
    let other_date = new Date(date).getTime();
    let difference = Math.abs(today - other_date);

    let days = Math.floor(difference / (1000*3600*24));
    let years = Math.floor(days/365);
    days -= years*365;
    let months = Math.floor(days/31);
    days -= months*31;

    if(!isNaN(years)) {
    return `${years} years, ${months} months, and ${days} days`
    }
    else{
    return `Enter a valid date of birth`

    }
  }

  render() {
     let result;
     console.log(this.props.newDate);
     if(isNaN(this.props.newDate)) {
      //return `${years} years, ${months} months, and ${days} days`
      result = <h4>Congrats on {this.timeSince(this.props.date)}!</h4>;
      }
      else{
        result = this.timeSince(this.props.date)
  
      }
    return (
      <div>
        <h3>{this.props.date}</h3>
        {result}
        <img src={partyPopper} alt="party-popper" className="party-popper" />
      </div>
    )
  }
}

export default AgeStats;