import React from "react";
import { Typography, IconButton, MenuItem, Menu } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreHorizOutlined";

import styles from "./Comment.module.scss";

interface CommentPostProps {
  user: {
    fullname: string;
  };
  text: string;
  createdAt: string;
}

export const Comment: React.FC<CommentPostProps> = ({
  user,
  text,
  createdAt,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img
          src="https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Avatar"
        />
        <b>Master Oogway</b>
        <span>{createdAt}</span>
      </div>
      <Typography className={styles.text}>
        Суперджет это ад адский, два раза летала и оба раза прощалась с жизнью.
        Трясёт хуже, чем в копейке
      </Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        elevation={2}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};
