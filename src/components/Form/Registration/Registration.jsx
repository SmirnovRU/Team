import React from "react";
import axios from "axios";
import { Input } from "../../Input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../../Button/Button";
import { Modal } from "../../Modal/Modal";
import { Loader } from "../../Loader/Loader";
import styles from "./registration.module.css";
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";
import { addUserToken } from "../../../store/Token/action";
import { useDispatch, useSelector } from "react-redux";

export const Registration = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    async function fetchData() {
      try {
        setPending(true);
        const responce = await axios.post("https://reqres.in/api/register", {
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

  const password = watch("password");

  return (
    <>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          navigate={"navigate"}
        >
          <h1>Поздравляем, Вы успешно зарегистрировались!</h1>
        </Modal>
      )}

      {pending && <Loader />}

      {errorMsg && (
        <Modal>
          <ErrorMessage message={errorMsg} />
        </Modal>
      )}

      <h1 className={styles.title}>Регистрация</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("name", {
            required: { value: true, message: "field name is required" },
            minLength: {
              value: 2,
              message: "min length is 2",
            },
          })}
          id="name"
          title="Имя"
          placeholder="Артур"
          error={errors.name?.message}
          disabled={pending}
        />
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

        <Input
          {...register("password_check", {
            validate: (value) =>
              value === password || "The passwords do not match",
          })}
          id="password_check"
          type="password"
          title="Подтвердите пароль"
          placeholder="******"
          error={errors.password_check?.message}
          disabled={pending}
        />

        <Button className={"class"}>Зарегистрироваться</Button>
      </form>
    </>
  );
};
