import React from "react";
import axios from "axios";
import { HeaderLayout } from "../../components/HeaderLayout/HeaderLayout";
import { Button } from "../../components/Button/Button";
import { Loader } from "../../components/Loader/Loader";
import { useParams, useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { deleteUserToken } from "../../store/Token/action";
import { usersDataDelete } from "../../store/UserData/action";
import { useDispatch } from "react-redux";
import styles from "./teammember.module.css";
import { EditAvatar } from "../../components/Form/EditAvatar/EditAvatar";
import { ButtonMobile } from "../../components/Button/ButtonMobile/ButtonMobile";

export const TeamMember = () => {
  const [user, setUser] = React.useState({});
  const [pending, setPending] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [editorAvatar, setEdititorAvatar] = React.useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchData() {
      try {
        setPending(true);
        const responce = await axios.get(
          `https://reqres.in/api/users/${params.id}`
        );
        if (responce.data.data) {
          setUser(responce.data.data);
        }
        setPending(false);
      } catch (e) {
        setErrorMsg(e.message);
        setPending(false);
      }
    }
    fetchData();
  }, []);

  const deleteUserData = () => {
    dispatch(deleteUserToken());
    dispatch(usersDataDelete());
    localStorage.clear();
    navigate("/team");
  };

  const editAvatar = () => {
    setEdititorAvatar(!editorAvatar);
  };

  return (
    <div>
      {errorMsg && (
        <Modal>
          <ErrorMessage message={errorMsg} />
        </Modal>
      )}

      {pending && <Loader />}

      <HeaderLayout>
        <div className={styles.wrapper}>
          <div>
            <div
              onClick={() => {
                navigate("/team");
              }}
              className={styles.button}
            >
              <Button mobile={"mobile"}>Назад</Button>
              <ButtonMobile>
                <svg
                  width="7"
                  height="15"
                  viewBox="0 0 7 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83749 14.0013C5.68809 14.0018 5.54048 13.9688 5.4055 13.9048C5.27052 13.8407 5.15161 13.7473 5.05749 13.6313L0.227488 7.63125C0.0804062 7.45232 0 7.22788 0 6.99625C0 6.76463 0.0804062 6.54018 0.227488 6.36125L5.22749 0.361252C5.39723 0.157036 5.64114 0.0286112 5.90556 0.0042315C6.16999 -0.0201482 6.43327 0.0615137 6.63749 0.231252C6.8417 0.400991 6.97013 0.644902 6.99451 0.909329C7.01889 1.17375 6.93723 1.43704 6.76749 1.64125L2.29749 7.00125L6.61749 12.3613C6.73977 12.508 6.81745 12.6868 6.84133 12.8763C6.86521 13.0659 6.83429 13.2583 6.75223 13.4308C6.67018 13.6034 6.54042 13.7488 6.37831 13.8499C6.2162 13.9509 6.02852 14.0035 5.83749 14.0013Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </ButtonMobile>
            </div>
          </div>

          <div className={styles.user__container}>
            <div>
              <img
                onClick={editAvatar}
                className={styles.user__avatar}
                src={user.avatar}
              />
            </div>
            {editorAvatar ? (
              <EditAvatar
                setEdititorAvatar={setEdititorAvatar}
                user={user}
                setUser={setUser}
              />
            ) : (
              <div>
                <h2 className={styles.user__title}>
                  {user.first_name}
                  <span> </span>
                  {user.last_name}
                </h2>
                <h5 className={styles.user__content}>Партнер</h5>
              </div>
            )}
          </div>
          <div onClick={deleteUserData} className={styles.button}>
            <Button mobile={"mobile"}>Выход</Button>
            <ButtonMobile>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="matrix(-1 0 0 1 18 3)"
                >
                  <path d="m10.595 10.5 2.905-3-2.905-3" />
                  <path d="m13.5 7.5h-9" />
                  <path d="m10.5.5-8 .00224609c-1.1043501.00087167-1.9994384.89621131-2 2.00056153v9.99438478c.0005616 1.1043502.8956499 1.9996898 2 2.0005615l8 .0022461" />
                </g>
              </svg>
            </ButtonMobile>
          </div>
        </div>
      </HeaderLayout>
      <div className={styles.container}>
        <div className={styles.box}>
          <p className={styles.text}>
            Клиенты видят в нем эксперта по вопросам разработки комплексных
            решений финансовых продуктов, включая такие аспекты, как
            организационная структура, процессы, аналитика и ИТ-компоненты. Он
            помогает клиентам лучше понимать структуру рисков их бизнеса,
            улучшать процессы за счет применения новейших технологий и
            увеличивать продажи, используя самые современные аналитические
            инструменты.
          </p>
          <p className={styles.text}>
            В работе с клиентами недостаточно просто решить конкретную проблему
            или помочь справиться с трудностями. Не менее важно уделять внимание
            обмену знаниями: "Один из самых позитивных моментов — это осознание
            того, что ты помог клиенту перейти на совершенно новый уровень
            компетентности, уверенность в том, что после окончания проекта у
            клиента есть все необходимое, чтобы дальше развиваться
            самостоятельно".
          </p>
          <p className={styles.text}>
            Помимо разнообразных проектов для клиентов финансового сектора,
            Сорин ведет активную предпринимательскую деятельность. Он является
            совладельцем сети клиник эстетической медицины в Швейцарии,
            предлагающей инновационный подход к красоте, а также инвестором
            других бизнес-проектов.
          </p>
        </div>
        <div className={styles.contact__info}>
          <div className={styles.contact__box}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.55399 5.24003L6.17099 1.33503C5.78099 0.88503 5.06599 0.88703 4.61299 1.34103L1.83099 4.12803C1.00299 4.95703 0.765988 6.18803 1.24499 7.17503C4.10661 13.1 8.88503 17.8851 14.806 20.755C15.792 21.234 17.022 20.997 17.85 20.168L20.658 17.355C21.113 16.9 21.114 16.181 20.66 15.791L16.74 12.426C16.33 12.074 15.693 12.12 15.282 12.532L13.918 13.898C13.8482 13.9712 13.7562 14.0195 13.6563 14.0354C13.5564 14.0513 13.4541 14.0339 13.365 13.986C11.1354 12.7021 9.28598 10.8503 8.00499 8.61903C7.95702 8.52978 7.93964 8.42726 7.95554 8.32719C7.97144 8.22711 8.01972 8.13502 8.09299 8.06503L9.45299 6.70403C9.86499 6.29003 9.90999 5.65003 9.55399 5.23903V5.24003Z"
                stroke="#512689"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className={styles.contact__text}>+7 (954) 333-44-55</p>
          </div>
          <div className={styles.contact__box}>
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 0.5H2C1.60218 0.5 1.22064 0.658035 0.93934 0.93934C0.658035 1.22064 0.5 1.60218 0.5 2V14C0.5 14.3978 0.658035 14.7794 0.93934 15.0607C1.22064 15.342 1.60218 15.5 2 15.5H20C20.3978 15.5 20.7794 15.342 21.0607 15.0607C21.342 14.7794 21.5 14.3978 21.5 14V2C21.5 1.60218 21.342 1.22064 21.0607 0.93934C20.7794 0.658035 20.3978 0.5 20 0.5ZM18.35 2L11 7.085L3.65 2H18.35ZM2 14V2.6825L10.5725 8.615C10.698 8.7021 10.8472 8.74877 11 8.74877C11.1528 8.74877 11.302 8.7021 11.4275 8.615L20 2.6825V14H2Z"
                fill="#512689"
              />
            </svg>
            <p className={styles.contact__text}>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
