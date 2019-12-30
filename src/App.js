import React from 'react';
import List from './List';
import './App.css';
class App extends React.Component {
  render() {
    const listsWithCards = this.props.store.lists
      .map(item => buildListObject(item, this.props.store.allCards));
      // build List components here
    const listArray = listsWithCards
      .map((list, i) => <List key={i} header={list.header} cards={list.cards} />)

    return (
      <div className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
        <div className='App-list'>
          {listArray}
        </div>
      </div>
    );
  }
}

function buildListObject(listItem, allCards) {
  let list = {};

  list.header = listItem.header;
  list.cards = listItem.cardIds.map(id => allCards[id]);
  
  return list;
}

export default App;
