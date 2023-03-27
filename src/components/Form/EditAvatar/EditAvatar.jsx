import React from "react";
import axios from "axios";
import { Input } from "../../Input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../../Button/Button";
import styles from "./editavatar.module.css";
import { Loader } from "../../Loader/Loader";
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";
import { Modal } from "../../Modal/Modal";

export const EditAvatar = (props) => {
  const [pending, setPending] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    async function fetchData() {
      try {
        setPending(true);
        const responce = await axios.put(
          `https://reqres.in/api/users/${props.user.id}`,
          {
            avatar: data.avatar,
          }
        );
        if (responce.data.avatar) {
          props.setUser({ ...props.user, avatar: responce.data.avatar });
          props.setEdititorAvatar(false);
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
    <div className={styles.form}>
      {pending && <Loader />}

      {errorMsg && (
        <Modal>
          <ErrorMessage message={errorMsg} />
        </Modal>
      )}
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>Изменение аватара</h1>
          <div className={styles.btn__box}>
            <Button onClick={() => props.setEdititorAvatar(false)}>x</Button>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("avatar", {
              required: {
                value: true,
                message: "field avatar is required",
              },
              minLength: {
                value: 2,
                message: "min length is 2",
              },
            })}
            id="avatar"
            title="Новый аватар"
            placeholder="https://reqres.in/img/faces/1-image.jpg"
            error={errors.avatar?.message}
            disabled={pending}
          />
          <Button type="submit" className={"class"}>
            Изменить
          </Button>
        </form>
      </div>
    </div>
  );
};
