import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

export default function Login() {
  {
    /* Funcion de peticion */
  }
  const authLogin = async (dataUser) => {
    const RUTA = `https://equipo-s21-18-m-webapp.onrender.com/auth/login`;
    try {
      const { data } = await axios.post(RUTA, dataUser);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const [error, setError] = useState({
    state: false,
    msg: "",
  });

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const body = {
      email: data.email,
      password: data.password,
    };

    try {
      setLoading(true);
      const rta = await authLogin(body);
      console.log(rta);
    } catch (error) {
      setLoading(false);
      handleError(error);
      setTimeout(() => {
        resetError();
      }, 3000);
    } finally {
      setLoading(false);
    }
  });

  const handleError = (error) => {
    if (error.detail) {
      if (error.detail.password) {
        const rta = error.detail.password;
        setError({
          state: true,
          msg: rta,
        });
      } else {
        setError({
          state: true,
          msg: "algo salio mal,intentalo mas tarde",
        });
      }
    } else {
      setError({
        state: true,
        msg: error.message,
      });
    }
  };

  const resetError = () => {
    setError({
      state: false,
      msg: "",
    });
  };

  return (
    <>
      <section className="font-inter w-full">
        <form
          onSubmit={onSubmit}
          className="mx-auto flex w-[350px] flex-col py-14"
          noValidate
        >
          <h1 className="text-center text-2xl leading-8 font-semibold tracking-tight">
            Bienvenido
          </h1>
          <p className="mt-2 mb-6 text-center text-sm leading-5 text-[#737373]">
            Ingresa tus datos para acceder a tu cuenta
          </p>
          <label className="py-2 text-sm leading-none font-medium">
            Correo
          </label>
          <input
            type="text"
            id="email"
            className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm"
            placeholder="m@ejemplo.com"
            {...register("email", {
              required: {
                value: true,
                message: "El correo es requerido",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message:
                  "Correo no válido. Debe ser formato 'ejemplo@mail.com'",
              },
            })}
          />
          {errors.email && (
            <span className="block text-xs text-red-600">
              {errors.email.message}
            </span>
          )}

          <label className="py-2 text-sm leading-none font-medium">
            Contraseña
          </label>
          <input
            id="password"
            className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm"
            {...register("password", {
              required: {
                value: true,
                message: "La contraseña es requerida",
              },
              minLength: {
                value: 8,
                message: "Debe tener almenos 8 caracteres",
              },
              maxLength: {
                value: 15,
                message: "Debe tener como maximo 15 caracteres",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
                message:
                  "Debe contener almenos una mayuscula, minuscula, número, caract. especial '$@$!%*?&'",
              },
            })}
          />
          {errors.password && (
            <span className="block text-xs text-red-600">
              {errors.password.message}
            </span>
          )}

          {loading ? (
            <Spinner />
          ) : (
            <button
              disabled={loading}
              className="bg-primary my-4 cursor-pointer rounded-[6px] px-4 py-2 text-sm font-medium text-white"
            >
              Ingresar
            </button>
          )}
        </form>
      </section>
    </>
  );
}
