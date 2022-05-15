import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Divider,
  TextField,
  Typography,
} from "@material-ui/core";

import styles from "./AuthDialog.module.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { MainForm } from "./forms/Main";
import { LoginForm } from "./forms/Login";
import { RegisterForm } from "./forms/Register";

interface AuthDialogProps {
  onClose: () => void;
  visible: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = React.useState<"main" | "login" | "register">(
    "main"
  );
  return (
    <Dialog
      open={visible}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth="xs"
      fullWidth
    >
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === "main" ? (
                "Войти"
              ) : (
                <p
                  onClick={() => setFormType("main")}
                  className={styles.backTitle}
                >
                  <ArrowBackIcon /> К авторизации
                </p>
              )}
            </Typography>
            {formType === "main" && (
              <MainForm onLogin={() => setFormType("login")} />
            )}
            {formType === "login" && (
              <LoginForm onRegister={() => setFormType("register")} />
            )}
            {formType === "register" && (
              <RegisterForm
                onRegister={() => setFormType("register")}
                onLogin={() => setFormType("login")}
              />
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
