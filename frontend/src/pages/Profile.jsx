import avatar from "/avatar.jpg";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { decodeToken } from "../utils/decodeToken";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const decoded = decodeToken(); // Llamamos a la función para obtener los datos decodificados

    if (decoded) {
      setUser(decoded); // Si los datos fueron decodificados correctamente, los guardamos en el estado
      console.log(decoded);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  {
    /* Funcion de peticion */
  }
  const authProfile = async (dataUser) => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      navigate("/login");
      return;
    }

    const RUTA = `https://equipo-s21-18-m-webapp.onrender.com/profiles`;
    try {
      console.log("token:",token); // Asegúrate de que el token esté disponible
      console.log(dataUser);
      const response = await axios.post(RUTA, dataUser, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error en la solicitud:", error);
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (!user) {
      setError({ state: true, msg: "Error: usuario no encontrado." });
      return;
    }

    const body = {
      fullname: data.name,
      age: Number(data.age),
      weight: Number(data.weight),
      height: Number(data.height),
      goals: data.objetive,
      level: data.nivelActividad,
      user_id: user.id,
    };

    try {
      setLoading(true);
      const rta = await authProfile(body);
      console.log(rta);
      setSuccessMessage("¡Registro de datos exitoso! Redirigiendo...");
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
      <section className="mx-auto flex max-w-[50%] flex-col">
        <h1 className="my-2 mt-8 text-3xl font-bold">Editar perfil</h1>
        <span className="text-[13px] text-[#4B5563]">
          Actualiza tu información personal
        </span>

        <div className="my-8 flex h-[216px] w-full items-center justify-center bg-[#E5E7EB]">
          <img
            className="h-32 w-32 rounded-full ring-2 ring-gray-100"
            src={avatar}
          />
        </div>

        <form onSubmit={onSubmit} className="flex flex-col" noValidate>
          <h2 className="my-4 text-xl font-semibold">Información personal</h2>
          <label className="py-2 text-sm leading-none font-medium text-[#374151]">
            Nombre
          </label>
          <input
            className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm"
            id="name"
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "El nombre es requerido",
              },
              minLength: {
                value: 2,
                message: "El nombre debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 30,
                message: "El nombre debe tener como maximo 30 caracteres",
              },
              pattern: {
                value: /^[a-zA-Z\sÁáÉéÍíÓóÚúÑñ]{2,30}$/,
                message: "El nombre solo debe contener letras",
              },
            })}
          />
          {errors.name && (
            <span className="block text-xs text-red-600">
              {errors.name.message}
            </span>
          )}

          <label className="py-2 text-sm leading-none font-medium text-[#374151]">
            Edad
          </label>
          <input
            id="age"
            className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm"
            type="number"
            {...register("age", {
              required: {
                value: true,
                message: "La edad es requerida",
              },
              pattern: {
                value: /^\d+$/,
                message: "La edad solo debe contener numeros",
              },
            })}
          />
          {errors.age && (
            <span className="block text-xs text-red-600">
              {errors.age.message}
            </span>
          )}

          <label className="py-2 text-sm leading-none font-medium text-[#374151]">
            Peso
          </label>
          <input
            id="weight"
            className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm"
            type="number"
            {...register("weight", {
              required: {
                value: true,
                message: "El peso es requerido",
              },
              pattern: {
                value: /^\d+$/,
                message: "El peso solo debe contener numeros",
              },
            })}
          />
          {errors.weight && (
            <span className="block text-xs text-red-600">
              {errors.weight.message}
            </span>
          )}

          <label className="py-2 text-sm leading-none font-medium text-[#374151]">
            Altura
          </label>
          <input
            id="height"
            className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm"
            type="number"
            {...register("height", {
              required: {
                value: true,
                message: "La altura es requerida",
              },
              pattern: {
                value: /^\d+$/,
                message: "La altura solo debe contener numeros",
              },
            })}
          />
          {errors.height && (
            <span className="block text-xs text-red-600">
              {errors.height.message}
            </span>
          )}

          <label className="my-4 mb-1 py-2 text-sm leading-none font-medium text-[#374151]">
            Nivel de actividad física
          </label>

          <div className="flex flex-col gap-4">
            {/* Sedentario */}
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center"
                htmlFor="sedentario"
              >
                <input
                  name="nivelActividad"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 transition-all checked:border-slate-400"
                  id="sedentario"
                  value="sedentario"
                  defaultChecked
                  {...register("nivelActividad", {
                    required: "Selecciona un nivel de actividad",
                  })}
                />
                <span className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-slate-800 opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></span>
              </label>
              <label
                className="ml-2 cursor-pointer text-sm text-slate-600"
                htmlFor="sedentario"
              >
                <div>
                  <p className="font-medium">Sedentario</p>
                  <p className="text-slate-500">Poco o nada de ejercicio.</p>
                </div>
              </label>
            </div>

            {/* Ligeramente Activo */}
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center"
                htmlFor="ligeramente_activo"
              >
                <input
                  name="nivelActividad"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 transition-all checked:border-slate-400"
                  id="ligeramente_activo"
                  value="ligeramente_activo"
                  {...register("nivelActividad", {
                    required: "Selecciona un nivel de actividad",
                  })}
                />
                <span className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-slate-800 opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></span>
              </label>
              <label
                className="ml-2 cursor-pointer text-sm text-slate-600"
                htmlFor="ligeramente_activo"
              >
                <div>
                  <p className="font-medium">Ligeramente Activo</p>
                  <p className="text-slate-500">
                    Ejercicio 1-2 días a la semana.
                  </p>
                </div>
              </label>
            </div>

            {/* Moderadamente Activo */}
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center"
                htmlFor="moderadamente_activo"
              >
                <input
                  name="nivelActividad"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 transition-all checked:border-slate-400"
                  id="moderadamente_activo"
                  value="moderadamente_activo"
                  {...register("nivelActividad", {
                    required: "Selecciona un nivel de actividad",
                  })}
                />
                <span className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-slate-800 opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></span>
              </label>
              <label
                className="ml-2 cursor-pointer text-sm text-slate-600"
                htmlFor="moderadamente_activo"
              >
                <div>
                  <p className="font-medium">Moderadamente Activo</p>
                  <p className="text-slate-500">
                    Ejercicio 3-5 días a la semana.
                  </p>
                </div>
              </label>
            </div>

            {/* Muy Activo */}
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center"
                htmlFor="muy_activo"
              >
                <input
                  name="nivelActividad"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 transition-all checked:border-slate-400"
                  id="muy_activo"
                  value="muy_activo"
                  {...register("nivelActividad", {
                    required: "Selecciona un nivel de actividad",
                  })}
                />
                <span className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-slate-800 opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></span>
              </label>
              <label
                className="ml-2 cursor-pointer text-sm text-slate-600"
                htmlFor="muy_activo"
              >
                <div>
                  <p className="font-medium">Muy Activo</p>
                  <p className="text-slate-500">
                    Ejercicio 6-7 días a la semana.
                  </p>
                </div>
              </label>
            </div>
          </div>

          <label className="my-4 mb-2 py-2 text-sm leading-none font-medium text-[#374151]">
            Objetivo
          </label>

          <div className="flex flex-col gap-4">
            {/* Definición */}
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center"
                htmlFor="definicion"
              >
                <input
                  name="objetive"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-200 bg-slate-100 transition-all checked:border-slate-300"
                  id="definicion"
                  defaultChecked
                  value="Definición"
                  {...register("objetive", {
                    required: "Selecciona un objetivo",
                  })}
                />
                <span className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-slate-800 opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></span>
              </label>
              <label
                className="ml-2 cursor-pointer text-sm text-slate-600"
                htmlFor="definicion"
              >
                Definición
              </label>
            </div>

            {/* Volumen */}
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center"
                htmlFor="volumen"
              >
                <input
                  name="objetive"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-200 bg-slate-100 transition-all checked:border-slate-300"
                  id="volumen"
                  value="Volumen"
                  {...register("objetive", {
                    required: "Selecciona un objetivo",
                  })}
                />
                <span className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-slate-800 opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></span>
              </label>
              <label
                className="ml-2 cursor-pointer text-sm text-slate-600"
                htmlFor="volumen"
              >
                Volumen
              </label>
            </div>
          </div>

          <div className="my-12 flex justify-center gap-4">
            <button className="h-[2.25rem] w-[300px] cursor-pointer content-center rounded-[6px] bg-[#F3F4F6] px-3 text-[#4B5563] transition duration-700">
              Cancelar
            </button>
            <button
              className={`bg-primary flex h-[2.25rem] w-[300px] cursor-pointer items-center justify-center rounded-[6px] px-3 text-white ${loading ? "cursor-not-allowed opacity-50" : ""}`}
              disabled={loading} // Deshabilita el botón cuando `loading` es true
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <Spinner className="h-6 w-6" /> {/* Tamaño del Spinner */}
                </div>
              ) : (
                <span>Guardar Cambios</span>
              )}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
