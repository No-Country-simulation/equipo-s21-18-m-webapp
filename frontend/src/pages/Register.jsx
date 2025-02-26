import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Register() {
  
  const [error,setError]= useState({
    state:false,
    msg:''
  })

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      setLoading(true);
    } catch (error) {}
  });

  return (
    <>
      <div className="w-full font-inter">
        <form onSubmit={onSubmit} className="w-[350px] flex flex-col mx-auto py-14" noValidate>
          <h1 className="text-2xl leading-8 font-semibold tracking-tight text-center">Create an account</h1>
          <p className="text-sm text-[#737373] leading-5 mt-2 mb-6">Enter your details below to create your account</p>
          
          {/* Name */}
          <label className="text-sm font-medium leading-none py-2">Name</label>
          <input
            className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm"
            id="name"
            type="text"
            placeholder="John Doe"
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
                value: /^[a-zA-Z\s]{2,30}$/,
                message: "El nombre solo debe contener letras",
              },
            })}
          />
          {errors.name && (
            <span className="block text-red-600 text-xs">
              {errors.name.message}
            </span>
          )}

          {/* Email */}
          <label className="text-sm font-medium leading-none py-2">Email</label>
          <input
            className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm"
            id="email"
            type="text"
            placeholder="m@example.com"
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
            <span className="block text-red-600 text-xs">
              {errors.email.message}
            </span>
          )}

          {/* Password */}
          <label className="text-sm font-medium leading-none py-2">Password</label>
          <input
            className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm"
            id="password"
            type="text"
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
            <span className="block text-red-600 text-xs">
              {errors.password.message}
            </span>
          )}

          <button className="text-sm font-medium text-white py-2 px-4 my-4 bg-primary rounded-[6px]">Create account</button>
        </form>
      </div>
    </>
  );
}
