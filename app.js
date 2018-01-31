var AlmondButter = () => (
  <li>Almond Butter</li>
);

var Apples = () => (
  <li>3 Granny Smith Apples, 3 Fuji Apples</li>
);

var GroceryList = () => (
  <ul>
    <AlmondButter />
    <Apples />
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));