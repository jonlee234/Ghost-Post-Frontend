import React, { useState } from "react";
import { Button } from "antd";

function Dislike(props) {
  const [isLoading, setIsLoading] = useState(false);

  async function handledislike(id) {
    id = props.id;
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    };
    setIsLoading(true);
    const response = await fetch(
      `http://localhost:8000/posts/${id}/downvote/`,
      requestOptions
    );

    setIsLoading(false);
    window.location.reload(false);
  }
  return (
    <div>
      {isLoading ? (
        <h1>Loading......</h1>
      ) : (
        <button type="submit" onClick={handledislike}>
          Downvote
        </button>
      )}
    </div>
  );
}

export default Dislike;
