import { RoutineCard } from "../components/RoutineCard";

export const RoutineLibrary = () => {
  return (
    <>
      <div className="flex-1">
        <div className="container mx-auto py-10">
          <h1 className="mb-8 text-4xl font-bold">Rutinas recomendadas</h1>

          <div>
            <RoutineCard />
          </div>
        </div>

        <div className="flex min-h-screen flex-col">
          <section className="flex justify-center space-y-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:py-10">
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
              <h1 className="mb-4 text-2xl font-semibold">
                ¿No encuentras lo que buscas?
              </h1>
              <p className="max-w-[40rem] leading-normal text-gray-500 sm:text-xl sm:leading-8">
                Crea tu propia rutina personalizada seleccionando ejercicios de
                nuestra amplia biblioteca.
              </p>
              <div className="space-x-4">
                <a href="">
                  <button className="bg-primary hover: bg-accent my-4 rounded-[6px] px-4 py-2 text-sm font-medium text-white">
                    Crea una rutina personalizada
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
