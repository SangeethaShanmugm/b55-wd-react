import { useState } from "react";
import "./App.css";
import { Counter } from "./Counter";
import profile from "./profile1.jpeg"

function App() {
  //JS starts

  const people = ["Asha", "Ajay", "Akhilesh"]//Array of strings

  const user = [
    {
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
      name: "Ajay"
    },
    {
      pic: "https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Asha"
    }
  ]
  //JS ends
  //JSX starts
  return (
    <div className="App">
      {/* <Counter /> */}
      <AddColor />
    </div>
  );
  //JSX ends
}

function AddColor() {

  // const color = "skyblue"
  const [color, setColor] = useState("skyblue")

  // const colorList = ["orange", "crimson", "pink"]
  const [colorList, setColorList] = useState(["orange", "crimson", "pink"])

  const styles = {
    backgroundColor: color
  }
  return (
    <div className="add-color">
      <div>
        <input style={styles} type="text"
          onChange={(event) => setColor(event.target.value)} />
        {/* copy colorList and add new color */}
        <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}

    </div>
  )
}

function ColorBox({ color }) {
  const styles = {
    width: "175px",
    height: "25px",
    backgroundColor: color
  }
  return (
    <div style={styles}></div>
  )
}



export default App;
