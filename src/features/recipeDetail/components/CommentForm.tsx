import { css } from "@emotion/css";
import { Button, TextField } from "@mui/material";
import { useComment } from "../hooks/useComment";
import { useParams } from "react-router-dom";
import { useState } from "react";

function CommentForm () {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  if (!id) return null;

  const { comments, addComment } = useComment(id);

  function handleAddComment () {
    addComment({
      time: new Date().getTime(),
      name,
      message,
    })
    setName('');
    setMessage('');
  }

  return (
    <div className={styles.container}>
      <h2>Add Comment</h2>
      <div className={styles.inputs}>
        <TextField value={name} label="Name" onChange={(e) => setName(e.target.value)} />
        <TextField value={message} label="Comment" onChange={(e) => setMessage(e.target.value)} />
      </div>
      <Button onClick={handleAddComment} className={styles.btnAddComment} variant="outlined">
        Add Comment
      </Button>
      <h2>Comments</h2>
      {comments.map((item) => {
        return (
          <div className={styles.commentContainer} key={item.time}>
            <div className={styles.commentName}>{item.name}</div>
            <div>{item.message}</div>
          </div>
        )
      })}
      {comments.length === 0 && (
        <div className={styles.commentName}>Comment is empty</div>
      )}
    </div>
  )
}

const styles = {
  container: css({
    paddingBottom: 16
  }),
  inputs: css({
    display: 'flex',
    gap: 8,
    marginBottom: 8,
  }),
  btnAddComment: css({
    marginTop: 8
  }),
  commentContainer: css({
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
    boxShadow: '0px 0px 4px 1px rgba(0,0,0,0.75)',
  }),
  commentName: css({
    fontWeight: 700
  })
}

export default CommentForm;