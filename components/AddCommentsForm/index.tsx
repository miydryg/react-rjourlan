import React from "react";
import { Button, Input } from "@material-ui/core";
import styles from "./AddCommentsForm.module.scss";

interface AddCommentsFormProps {}

export const AddCommentsForm: React.FC<AddCommentsFormProps> = () => {
  const [clicked, setClicked] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const onAddMessage = () => {
    setMessage("");
    setClicked(false);
  };
  return (
    <div className={styles.form}>
      <Input
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        onFocus={() => setClicked(true)}
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать коментарий"
        fullWidth
        multiline
        minRows={clicked ? 5 : 1}
      />
      {clicked && (
        <Button
          onClick={onAddMessage}
          className={styles.addButton}
          variant="contained"
          color="primary"
        >
          Опубликовать
        </Button>
      )}
    </div>
  );
};
