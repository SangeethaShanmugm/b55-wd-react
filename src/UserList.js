import { Msg } from "./Msg";

export function UserList() {

  const user = [
    {
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
      name: "Ajay"
    },
    {
      pic: "https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Asha"
    }
  ];
  return (
    <div>
      {user.map((usr, index) => (
        <Msg key={index} pic={usr.pic} name={usr.name} />
      ))}
    </div>
  );
}
