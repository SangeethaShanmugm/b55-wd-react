import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  // let like = 10
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  console.log(like);

  return (
    <div>

      <IconButton aria-label="likeBtn" color="primary"
        onClick={() => setLike(like + 1)}>
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton aria-label="dislikeBtn" color="error"
        onClick={() => setDislike(dislike + 1)}>
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>



      {/* <button onClick={() => {
        setLike(like + 1);
        // console.log(like)
      }}>👍 {like}</button>
      <button onClick={() => {
        setDislike(dislike + 1);
      }}>👎 {dislike}</button> */}
    </div>
  );
}
