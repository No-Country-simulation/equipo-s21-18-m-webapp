import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export default function Login() {
    {/* Funcion de peticion */}
  const authLogin = async (dataUser) => {
    const RUTA = `https://equipo-s21-18-m-webapp.onrender.com/auth/login`;
    try {
      const { data } = await axios.post(RUTA, dataUser);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

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
      email: data.email,
      password: data.password
    };

    try {
      setLoading(true);
      const rta = await authLogin(body)
      console.log(rta)
    } catch (error) {
      setLoading(false);
      handleError(error)
        setTimeout(()=>{
          resetError()
        },3000)
    } finally {
      setLoading(false);
    }
  });

  const handleError = (error) => {
    if(error.detail){
      if(error.detail.password){
        const rta = error.detail.password
        setError({
          state:true,
          msg:rta
        })
      }else{
        setError({
          state:true,
          msg:'algo salio mal,intentalo mas tarde'
        })
      }
    }else{
      setError({
        state:true,
        msg:error.message
      })
    }
  };

  const resetError =()=>{
    setError({
      state:false,
      msg:''
    })
  }


    return (
        <>
            <section className="w-full font-inter">
                <form onSubmit={onSubmit} className="w-[350px] flex flex-col mx-auto py-14" noValidate>
                <h1 className="text-2xl leading-8 font-semibold tracking-tight text-center">Bienvenido</h1>
                <p className="text-sm text-[#737373] leading-5 mt-2 mb-6 text-center">Ingresa tus datos para acceder a tu cuenta</p>
                <label className="text-sm font-medium leading-none py-2">Correo</label>
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
                          <span className="block text-red-600 text-xs">
                            {errors.email.message}
                          </span>
                        )}

                    
                    <label className="text-sm font-medium leading-none py-2">Contraseña</label>
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
                          <span className="block text-red-600 text-xs">
                            {errors.password.message}
                          </span>
                        )}
                    

                    <button disabled={loading} className="text-sm font-medium text-white py-2 px-4 my-4 bg-primary rounded-[6px] cursor-pointer">
                    {
              loading ? <span>cargando....</span> : <span>Ingresar</span>
            }
                    </button>
                </form>
            </section>
        </>
    )
}