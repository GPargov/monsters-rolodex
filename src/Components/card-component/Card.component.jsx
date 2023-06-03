import { Component } from "react";
import SingleCard from "../single-card-component/single-card.component";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <SingleCard monster={monster} />
          );
        })}
      </div>
    );
  }
}

export default Card;
