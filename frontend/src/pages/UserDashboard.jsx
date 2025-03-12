export const UserDashboard = () => {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6">
        <div className="rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl leading-none font-semibold tracking-tight">
              Fin de semana de fuerza
            </h3>
          </div>
          <div className="p-6 pt-0">
            <div className="mb-2 flex items-center justify-between">
              <span>Progreso</span>
              <span>15 / 20 sesiones</span>
            </div>
            <div className="relative my-5">
              <div className="mb-4 flex h-4 overflow-hidden rounded bg-gray-100 text-xs">
                <div
                  style={{ width: "75%" }}
                  className="bg-[#e51065] transition-all duration-500 ease-out"
                ></div>
              </div>
            </div>

            <div className="mt-4">
              <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-gray-100">
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
