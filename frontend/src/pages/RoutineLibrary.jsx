import { RoutineCard } from "../components/RoutineCard";

export const RoutineLibrary = () => {
    return (
        <>
            <div classsName="flex-1">
                <div className="container mx-auto py-10 ">
                    <h1 className="mb-8 text-4xl font-bold">Rutinas recomendadas</h1>

                    <div>
                        <RoutineCard />
                    </div>
                </div>

                <div className="flex flex-col min-h-screen">
                    <section className="flex justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-10">
                        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                            <h1 className="text-2xl font-semibold mb-4 ">¿No encuentras lo que buscas?</h1>
                            <p className="max-w-[40rem] leading-normal text-gray-500 sm:text-xl sm:leading-8">Crea tu propia rutina personalizada seleccionando ejercicios de nuestra amplia biblioteca.</p>
                            <div className="space-x-4">
                                <a href="">
                                    <button className="text-sm font-medium text-white py-2 px-4 my-4 bg-primary rounded-[6px] hover: bg-accent">Crea una rutina personalizada</button>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};
