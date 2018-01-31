// create one list item based on props.item
var GroceryListItem = (props) => (
  <li>{props.item}</li>
);

// so far need to hard-code number of items; how to update dynamically
// based on length of array inputted?
var GroceryList = (props) => (
  <ul>
    <GroceryListItem item={props.items[0]}/>
    <GroceryListItem item={props.items[1]}/>
    <GroceryListItem item={props.items[2]}/>
  </ul>
);

// Grocery items to add to list
let items = ['Almond Butter', '3 Granny Smith Apples', '3 Fuji Apples'];

// Render the GroceryList using our array of items
ReactDOM.render(<GroceryList items={items}/>, document.getElementById('app'));