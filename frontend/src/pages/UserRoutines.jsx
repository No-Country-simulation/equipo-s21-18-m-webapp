export const UserRoutines = () => {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Mis rutinas</h1>
      <div className="grid gap-6">
        <div className="rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl leading-none font-semibold tracking-tight">
              Cardio por la tarde
            </h3>
          </div>
          <div className="p-6 pt-0">
            <p className="font-medium">5 ejercicios</p>
            <p>Última ejecución: 2023-06-15</p>

            <div className="mt-4 space-x-2">
              <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-gray-100">
                Ver más
              </button>
              <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-gray-100">
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <a href="/routines">
          <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#b50d50] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-[#e51065]">
            Añadir nueva rutina
          </button>
        </a>
      </div>
    </div>
  );
};
