import React from 'react';
import Card from './Card';
import './List.css';

class List extends React.Component {
  render() {
  const cardArray = this.props.cards
    .map((card, i) => <Card key={i} title={card.title} content={card.content} />)

    return (
      <section className="List">
      <header className="List-header">
        <h2>{this.props.header}</h2>
      </header>
      <div className="List-cards">
        {cardArray}          
        <button type="button" className="List-add-button">
            + Add Random Card
        </button>
      </div>
    </section>
    )
  }
}

export default List