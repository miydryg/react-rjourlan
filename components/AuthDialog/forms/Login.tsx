import React from "react";
import { Button, TextField } from "@material-ui/core";

interface LoginFormProps {
  onRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onRegister }) => {
  return (
    <div>
      <form>
        <TextField
          className="mb-20"
          size="small"
          label="Эл. почта"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          size="small"
          label="Пароль"
          type="password"
          variant="outlined"
          fullWidth
          required
        />
        <div className="d-flex align-center justify-between">
          <Button color="primary" className="mt-30" variant="contained">
            Войти
          </Button>
          <Button
            onClick={onRegister}
            color="primary"
            className="mt-30 "
            variant="outlined"
          >
            Регестрация
          </Button>
        </div>
      </form>
    </div>
  );
};
