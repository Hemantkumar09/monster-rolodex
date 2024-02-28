import { Component } from "react";
import "./cardlist.style.css";

class CardList extends Component {
  render() {
    //console.log("render from cardlist");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div className="card-container" key={id}>
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
        ;
      </div>
    );
  }
}

export default CardList;
