import {
  Image,
  CalendarViewDay,
  Create,
  EventNote,
  Subscriptions,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import firebase from "firebase/compat/app";
import { db } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser)

  console.log(user)
//   useEffect(() => {
//     db.collection("postes")
//       .orderBy("timestamp", "desc")
//       .onSnapshot((snapshot) => {
//         setPosts(
//           snapshot.docs.map((doc) => ({
//             id: doc.id,
//             data: doc.data(),
//           }))
//         );
//       });
//   }, []);
//   const sendPost = (e) => {
//     e.preventDefault();
//     db.collection("postes").add({
//       name: "Nolonooojx",
//       description: "This is a test",
//       message: input,
//       photoUrl: "",
//       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//     });
//     setInput("");
//     console.log(posts);
//   };
    useEffect(() => {
      db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    }, []);

    const sendPost = (e) => {
      e.preventDefault();
      db.collection("posts").add({
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoURl || "",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("")
    };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={Image} color="#70b5f9" />
          <InputOption title="Video" Icon={Subscriptions} color="#E7A33E" />
          <InputOption title="Event" Icon={EventNote} color="#C0CBCD" />
          <InputOption
            title="Write Article"
            color="#7FC15E"
            Icon={CalendarViewDay}
          />
        </div>
      </div>
      {/* Post */}
      <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        );
      })}

      </FlipMove>
    </div>
  );
}

export default Feed;
