import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

export default function Login() {
  const navigate = useNavigate();

  {
    /* Funcion de peticion */
  }
  const authLogin = async (dataUser) => {
    const RUTA = `https://equipo-s21-18-m-webapp.onrender.com/auth/login`;
    try {
      const { data } = await axios.post(RUTA, dataUser);
      localStorage.setItem("jwt", data.access_token);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const [error, setError] = useState({
    state: false,
    msg: "",
  });

  // Controlar si la peticion aun esta en proceso.
  const [loading, setLoading] = useState(false);

  // Controlar si la peticion fue correcta.
  const [successMessage, setSuccessMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

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

      setSuccessMessage("¡Registro exitoso! Redirigiendo...");
      setTimeout(() => setSuccessMessage(""), 3000);

      // Redirigir después de 3 segundos
      setTimeout(() => {
        navigate("/");
        setLoading(false);
      }, 3000);
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
        msg: "Error desconocido: " + error.message,
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
            disabled={loading}
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
            type={showPassword ? "text" : "password"}
            disabled={loading}
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
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&¿\-_#"¡\/+;:=<>^´°|¬])([A-Za-z\d$@$!%*?&¿\-_#"¡\/+;:=<>^´°|¬]){8,15}$/,
                message: `Debe contener almenos una mayuscula, minuscula, número, caract. especial '$@$!%*?&'¿-_#"¡/+;:=<>^´°|¬`,
              },
            })}
          />
          {errors.password && (
            <span className="block text-xs text-red-600">
              {errors.password.message}
            </span>
          )}

          {/* Error Message */}

          {error.state && (
            <span className="mt-2 block text-xs text-red-600">{error.msg}</span>
          )}

          {/* Mensaje de éxito */}
          {successMessage && (
            <span className="mt-2 text-xs text-green-600">
              {successMessage}
            </span>
          )}

          {/* Spinner de carga */}

          <button
            disabled={loading || successMessage}
            className={`bg-primary my-4 flex items-center justify-center gap-2 rounded-[6px] px-4 py-2 text-sm font-medium text-white ${
              loading || successMessage
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
          >
            {loading ? <Spinner className="h-5 w-5" /> : "Ingresar"}
          </button>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="show-password"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label
              htmlFor="show-password"
              className="ml-2 text-sm text-gray-600"
            >
              Mostrar contraseña
            </label>
          </div>
        </form>
      </section>
    </>
  );
}
