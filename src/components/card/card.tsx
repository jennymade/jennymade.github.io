import React from "react";

type CardProps = {
  role?: string;
  roleImg?: string;
  roleImgAlt?: string;
  roleClass?: string;
  desc?: string;
};

export class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="cardContainer">
        <div className="card" tabIndex={0}>
          <div className="front">
            <img
              className={this.props.roleClass}
              src={this.props.roleImg}
              alt={this.props.roleImgAlt}
            ></img>
            <p className="cardRole">{this.props.role}</p>
            <span className="flipInstruct">hover to flip card</span>
          </div>
          <div className="back">
            <ul>
              <li>{this.props.desc}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
