import React from 'react';

class App extends React.Component {
  render() {
    const listsWithCards = this.props.store.lists
      .map(item => buildListObject(item, this.props.store.allCards));

    console.log(listsWithCards);
    return (
      <div className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
        <div className='App-list'>

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
