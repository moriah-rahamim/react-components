// GroceryListItem is now a class component
// For now, it does the same thing as a stateless functional component
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bold: false
    };
  }

  onGroceryListItemHover() {
    console.log('hovering');
    this.setState({
      bold: !this.state.bold
    });
  }

  // create one list item based on props.item
  render() {
    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onGroceryListItemHover.bind(this)} onMouseLeave={this.onGroceryListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}

// Now we dynamically create an array for all items regardless of number
var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>          // react auto-handles the array returned
      <GroceryListItem item={item} /> // by .map()  (?)
    )}
  </ul>
);

// Grocery items to add to list
let items = ['Almond Butter', '3 Granny Smith Apples', '3 Fuji Apples', 'brussels sprouts'];

// Render the GroceryList using our array of items
ReactDOM.render(<GroceryList items={items}/>, document.getElementById('app'));