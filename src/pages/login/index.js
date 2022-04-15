import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../assets/img/logo.jpg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const disabledButton = !username || !password;

  const navigate = useNavigate();

  const onLogin = () => {
    toast("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "success",
    });
    localStorage.setItem("token", "test");
    navigate("/");
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div>
        <div className="h-80 w-80">
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex flex-col gap-8 w-full">
          <TextField
            required
            value={username}
            id="outlined-required"
            label="Tài khoản"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Mật khẩu"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ fontWeight: "bold" }}
            disabled={disabledButton}
            onClick={onLogin}
          >
            Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
