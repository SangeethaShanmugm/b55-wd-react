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
      <NavBar />
      {/* <Counter /> */}
      {/* <AddColor /> */}
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



function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default App;
