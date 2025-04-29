//import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";

// props --> input to the component -- ummutable which means unchanged
// state --> like local variables inside function -- mutable
// { items: [], heading: string}
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

//destructing way ---but i can put (props: {name:string})
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //items = [];

  //let selectedIndex = 0;  this one what i want to replace with something react can see it
  //Hook  ---- function help you tab into build in featurs in react
  //  tells react that this data/state may change over time
  // return an array with two elements
  //useState is the tool React gives you to create and manage that "memory" inside a component.
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0]  variable
  //   arr[1]  updater function

  //event handler for build in mouseevent
  //const handleClick = (event: MouseEvent) => console.log();

  const getMessage = () => {
    return items.length === 0 ? <p> no iteam found </p> : null;
  };

  // in return, it have to be (html tags) or other react components
  // so we put map in { }
  return (
    <>
      <h1> ss </h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
