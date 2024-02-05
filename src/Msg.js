function Msg({ pic, name }) {
  // const pic = profile
  return (
    <div>
      <img style={{ width: "150px", height: "150px" }} src={pic} alt="profile" />
      <h1>{name}</h1>
    </div>
  );
}
