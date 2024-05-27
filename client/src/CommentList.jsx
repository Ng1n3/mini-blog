import axios from "axios";
import { useEffect, useState } from "react";

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `http://localhost:4001/posts/${postId}/comments`
      );

      setComments(res.data);
    }

    fetchData();
  }, []);
  const renderedComment = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComment}</ul>;
}

export default CommentList;
