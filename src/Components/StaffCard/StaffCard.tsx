import React from 'react';
import FlippableImage from './FlippableImage/FlippableImage';
// import { createRoot } from 'react-dom/client';


interface StaffCardProps {
  name: string;
  cslogin?: string;
  pronouns: string;
  blurb: string;
  favCharacter: string;
  image: string;
  hometown: string;
  pvzImage: string;
}

export class StaffCard extends React.Component<StaffCardProps> {
  render() {
    return (
      <div className="card-staff">
        {<FlippableImage frontImage={this.props.image} backImage={this.props.pvzImage}></FlippableImage>}
        <p className="staff-name">
          {this.props.name} {this.props.cslogin ? `(${this.props.cslogin})` : ''}
        </p>
        <p className="pronouns">{this.props.pronouns}</p>
        <p>{this.props.blurb}</p>
        <p>Hometown: {this.props.hometown}</p>
        <p>Favorite PvZ Character: {this.props.favCharacter}</p>
      </div>
    );
  }
}


