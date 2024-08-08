import { useRef, useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    list.push(item);
    setList([...list]);
    // setItem("");
  };

  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div>
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((e, i) => (
              <tr key={i}>
                <td>{e}</td>
                <td>
                  <button
                    onClick={() => {
                      removeItem(i);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      <p>{list.length}</p>
      <p>{item}</p>
      <input onChange={(ev) => setItem(ev.target.value)} placeholder="Item" />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default App;
