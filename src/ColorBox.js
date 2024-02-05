export function ColorBox({ color }) {
  const styles = {
    width: "175px",
    height: "25px",
    backgroundColor: color
  };
  return (
    <div style={styles}></div>
  );
}
