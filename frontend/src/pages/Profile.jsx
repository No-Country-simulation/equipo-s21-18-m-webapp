import avatar from "/avatar.jpg";

export default function Profile() {
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

        <form className="flex flex-col">
          <h2 className="my-4 text-xl font-semibold">Información personal</h2>
          <label className="py-2 text-sm leading-none font-medium text-[#374151]">
            Nombre
          </label>
          <input
            className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm"
            type="text"
          />

          <label className="py-2 text-sm leading-none font-medium text-[#374151]">
            Edad
          </label>
          <input
            className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm"
            type="numer"
          />

          <label className="py-2 text-sm leading-none font-medium text-[#374151]">
            Peso
          </label>
          <input
            className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm"
            type="numer"
          />

          <label className="py-2 text-sm leading-none font-medium text-[#374151]">
            Altura
          </label>
          <input
            className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm"
            type="numer"
          />


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
                  defaultChecked
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
                htmlFor="ligeramenteActivo"
              >
                <input
                  name="nivelActividad"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 transition-all checked:border-slate-400"
                  id="ligeramenteActivo"
                />
                <span className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-slate-800 opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></span>
              </label>
              <label
                className="ml-2 cursor-pointer text-sm text-slate-600"
                htmlFor="ligeramenteActivo"
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
                htmlFor="moderadamenteActivo"
              >
                <input
                  name="nivelActividad"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 transition-all checked:border-slate-400"
                  id="moderadamenteActivo"
                />
                <span className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-slate-800 opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></span>
              </label>
              <label
                className="ml-2 cursor-pointer text-sm text-slate-600"
                htmlFor="moderadamenteActivo"
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
                htmlFor="muyActivo"
              >
                <input
                  name="nivelActividad"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 transition-all checked:border-slate-400"
                  id="muyActivo"
                />
                <span className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-slate-800 opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></span>
              </label>
              <label
                className="ml-2 cursor-pointer text-sm text-slate-600"
                htmlFor="muyActivo"
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
            { /* Definición */ }
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

            { /* Volumen */ }
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

          <div className="flex justify-center gap-4 my-12">
            <button className="h-[2.25rem] w-[300px] cursor-pointer content-center rounded-[6px] bg-[#F3F4F6] px-3 text-[#4B5563] transition duration-700">
              Cancelar
            </button>
            <button className="bg-primary h-[2.25rem] w-[300px] cursor-pointer content-center rounded-[6px] px-3 text-white">
              Guardar cambios
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
