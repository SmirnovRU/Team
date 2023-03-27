import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Input } from "../../Input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../../Button/Button";
import { Modal } from "../../Modal/Modal";
import { Loader } from "../../Loader/Loader";
import { addUserToken } from "../../../store/Token/action";
import styles from "../Registration/registration.module.css";
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";

export const Login = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    async function fetchData() {
      try {
        setPending(true);
        const responce = await axios.post("https://reqres.in/api/login", {
          email: data.email,
          password: data.password,
        });
        if (responce.data.token) {
          dispatch(addUserToken(responce.data.token));
          localStorage.setItem("token", JSON.stringify(responce.data.token));
          setShowModal(true);
        }
        setPending(false);
      } catch (e) {
        setErrorMsg(e.message);
        setPending(false);
      }
    }
    fetchData();
  };

  return (
    <>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          navigate={"navigate"}
        >
          <h1>Поздравляем, Вы успешно авторизовались!</h1>
        </Modal>
      )}

      {errorMsg && (
        <Modal>
          <ErrorMessage message={errorMsg} />
        </Modal>
      )}

      {pending && <Loader />}

      <h1 className={styles.title}>Вход</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email", {
            required: { value: true, message: "field email is required" },
            minLength: {
              value: 3,
              message: "min length is 3",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          id="email"
          title="Электронная почта"
          placeholder="example@mail.ru"
          error={errors.email?.message}
          disabled={pending}
        />
        <Input
          {...register("password", {
            required: { value: true, message: "field password is required" },
            minLength: {
              value: 5,
              message: "min length is 5",
            },
          })}
          id="password"
          type="password"
          title="Пароль"
          placeholder="******"
          error={errors.password?.message}
          disabled={pending}
        />

        <Button className={"class"} type="submit">
          Войти
        </Button>
      </form>
    </>
  );
};
