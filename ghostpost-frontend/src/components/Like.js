import React, { useState } from "react";
import { Button } from "antd";

function Like(props) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleLike(id) {
    id = props.id;
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    };
    setIsLoading(true);
    const response = await fetch(
      `http://localhost:8000/posts/${id}/upvote/`,
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
        <button type="submit" onClick={handleLike}>
          Upvote
        </button>
      )}
    </div>
  );
}

export default Like;
