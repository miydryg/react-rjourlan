import React from "react";
import { Button, TextField } from "@material-ui/core";

interface RegisterFormProps {
  onRegister: () => void;
  onLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onRegister,
  onLogin,
}) => {
  return (
    <div>
      <form>
        <TextField
          className="mb-20"
          size="small"
          label="Name"
          variant="outlined"
          fullWidth
          required
        />
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
            Зарегестрироваться
          </Button>
          <Button
            onClick={onLogin}
            color="primary"
            className="mt-30 "
            variant="text"
          >
            Войти
          </Button>
        </div>
      </form>
    </div>
  );
};
