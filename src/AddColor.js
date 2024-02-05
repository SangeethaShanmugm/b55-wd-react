import { useState } from "react";
import { ColorBox } from "./ColorBox";

function AddColor() {

  // const color = "skyblue"
  const [color, setColor] = useState("skyblue");

  // const colorList = ["orange", "crimson", "pink"]
  const [colorList, setColorList] = useState(["orange", "crimson", "pink"]);

  const styles = {
    backgroundColor: color
  };
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
  );
}
