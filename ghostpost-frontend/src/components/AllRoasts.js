import { useState, useEffect } from "react";
import Dislike from "./Dislike";
import Like from "./Like";

function AllRoasts() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/posts/all_roasts")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Highest Voted</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h1>{item.post_type}</h1>
              <p>{item.body}</p>
              <p>Upvotes: {item.upvotes}</p>
              <p>Downvotes: {item.downvotes}</p>
              <p>Total Votes: {item.overall_votes}</p>
              <p>Post Time: {item.post_date}</p>
              <Like id={item.id}>Like</Like>
              <Dislike id={item.id}>Dislike</Dislike>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AllRoasts;
