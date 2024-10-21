import React, { useState } from "react";
import Button from "../components/Button/Button";
import registerImage from "../assets/register_image.png";
import logoImage from "../assets/logo.png";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import FeatherIcons from "feather-icons-react";
import Transitions from "../components/Transitions/Transitions";
// import toast from "react-hot-toast";
// import axios from "axios";
// import api from "../lib/axiosInstance";

function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(true);

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //const response = await api.get(`/error`);
    navigate("/login");
  }

  return (
    <Transitions className="flex flex-col items-center justify-between h-full bg-background-color">
      <div className="bg-white flex flex-col md:flex-row-reverse w-full h-full shadow-lg overflow-hidden relative">
        <div className="hidden md:flex w-[60%] bg-primary-color items-center justify-center">
          <div className="text-white flex flex-col items-center">
            <img src={registerImage} alt="" className="" />
          </div>
        </div>

        <div className="w-full h-full p-6 flex flex-col justify-between">
          <div className="h-auto flex flex-row gap-5  items-center">
            <img src={logoImage} alt="" className="w-16" />
            <h1 className="text-primary-color font-bold text-4xl">Cortex</h1>
          </div>
          <div className="md:w-1/2 mb-20 m-auto h-full w-full justify-center items-center flex flex-col">
            <h2 className="md:text-[2.4vw] text-[7.4vw] font-semibold text-dark-black mb-4 text-center">
              Seja bem-vindo ao Cortex
            </h2>
            <form
              className="w-full flex flex-col gap-5"
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleRegister(e)}
            >
              <Input.Root>
                <Input.Label label="Nome de Usuário" />
                <Input.Text
                  value={username}
                  placeholder="Marcos Relix"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Input.Root>
              <Input.Root>
                <Input.Label label="Email" />
                <Input.Text
                  value={email}
                  placeholder="cortex@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Input.Root>
              <Input.Root>
                <Input.Label label="Senha" />
                <div className="flex flex-col-reverse">
                  <Input.Text
                    value={password}
                    placeholder="*******"
                    type={showPassword ? "password" : "text"}
                    onChange={(e) => setPassword(e.target.value)}
                  >
                    <div
                      role="presentation"
                      onClick={() => setShowPassword(!showPassword)}
                      className="w-full flex justify-end cursor-pointer"
                    >
                      <FeatherIcons
                        icon={showPassword ? "eye-off" : "eye"}
                        size={24}
                        className="text-dark-grey absolute top-1/2 -translate-y-1/2 right-4"
                      />
                    </div>
                  </Input.Text>
                </div>
              </Input.Root>
              <Input.Root>
                <Input.Label label="Confirmação de senha" />
                <div className="flex flex-col-reverse">
                  <Input.Text
                    value={confirmationPassword}
                    placeholder="*******"
                    type={showConfirmationPassword ? "password" : "text"}
                    onChange={(e) => setConfirmationPassword(e.target.value)}
                  >
                    <div
                      role="presentation"
                      onClick={() => setShowConfirmationPassword(!showConfirmationPassword)}
                      className="w-full flex justify-end cursor-pointer"
                    >
                      <FeatherIcons
                        icon={showConfirmationPassword ? "eye-off" : "eye"}
                        size={24}
                        className="text-dark-grey absolute top-1/2 -translate-y-1/2 right-4"
                      />
                    </div>
                  </Input.Text>
                </div>
              </Input.Root>
              <Button type="submit" title="Continuar" />
            </form>
            <div className="text-center w-full justify-center flex mt-6">
              <div className="text-base font-medium text-primary-color">
                <span className="font-normal text-dark-black">Já possui uma conta?</span>{" "}
                <span
                  role="presentation"
                  onClick={() => navigate("/login")}
                  className="hover:brightness-95 cursor-pointer"
                >
                  Faça login aqui.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transitions>
  );
}

export default RegisterPage;