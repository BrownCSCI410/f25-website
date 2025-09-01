import React from 'react';
import ReactFlipCard from 'reactjs-flip-card'
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
    const styles = {
      card: {
        width: '300px',
        height: '300px',
        margin: '12.5px',
        borderRadius: '10px'
      },
      frontImage: {
          width: '300px',
          height: '300px',
          borderRadius: '10px'

      },
      backImage: {
        width: '300px',
        height: '300px',
        backgroundColor: 'rgb(31, 44, 74)',
        borderRadius: '10px'

      },
    };

    return (
      <div className="card-staff">
        <ReactFlipCard
          containerStyle={styles.card}
          frontComponent={<img style={styles.frontImage} src={this.props.image} alt="Staff"></img>}
          backComponent={<img style={styles.backImage} src={this.props.pvzImage} alt="PvZ Character"></img>}
          // backStyle={{ width: '300', height: '300' }}

        />
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


