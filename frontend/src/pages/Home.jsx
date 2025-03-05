import { Link } from "react-router-dom";
import logoGrande from "/img/logoGrande.png";
import fotoGimnasio from "/img/fotoGimnasio.png";
import ejercicios from "/img/ejercicioPersonal.png";
import seguimiento from "/img/seguimiento.png";
import expertos from "/img/expertos.png";
import libre from "/img/aireLibre.png";

export default function Home() {
  return (
    <>
      <section className="flex justify-center space-y-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:py-10">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div className="flex items-center justify-center rounded-lg">
            <img className="h-[150px] w-[150px]" src={logoGrande} />
          </div>
          <h1 className="lg:text-30xl text-5xl font-bold sm:text-5xl md:text-6xl">
            Su viaje hacia{" "}
            <span style={{ color: "#b50d50" }}>
              {" "}
              la excelencia en el fitness
            </span>
          </h1>
          <p className="text-muted-foreground max-w-[40rem] leading-normal sm:text-xl sm:leading-8">
            Únase a nuestra comunidad de entusiastas del fitness. Obtenga
            entrenamientos personalizados, realice un seguimiento de su progreso
            y alcance sus objetivos de fitness con la orientación de expertos.
          </p>
          <div className="space-x-4">
            <a href="/register">
              <button className="bg-primary hover: bg-accent my-4 cursor-pointer rounded-[6px] px-4 py-2 text-sm font-medium text-white">
                Empieza tu viaje
              </button>
            </a>
            <a href="/exercises">
              <button className="my-4 rounded-[6px] border bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-300">
                Explorar ejercicios
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="container px-8 py-8 md:py-12 lg:py-2">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-5xl">
              Transforma tu cuerpo, transforma tu vida
            </h1>
            <p>
              Ya sea que recién esté comenzando o esté buscando mejorar su nivel
              de acondicionamiento físico, tenemos todo lo que necesita para
              tener éxito en su viaje de acondicionamiento físico.
            </p>
          </div>
          <img className="" src={fotoGimnasio}></img>
        </div>
      </section>
      <section className="container space-y-4 bg-slate-50 py-8 md:py-12 lg:py-24 dark:bg-transparent">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl leading-[1.1] font-bold sm:text-3xl md:text-6xl">
            Características
          </h1>
          <h3 className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
            Todo lo que necesitas para alcanzar tus objetivos fitness
          </h3>
        </div>
        <div className="mx-auto grid justify-center gap-4 text-center sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="group relative cursor-pointer overflow-hidden rounded-lg">
            <img
              width="350"
              height="150"
              src={ejercicios}
              className="transition-transform duration-500 group-hover:scale-110"
            ></img>
            <div className="bg-fondo/50 bg-opacity-60 absolute inset-0 grid place-items-center space-y-2 text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="font-bold lg:text-4xl">
                Entrenamientos personalizados
              </h3>
              <p className="text-muted-foreground text-sm font-bold lg:text-2xl">
                Obtén planes de entrenamiento personalizados adaptados a tus
                objetivos y nivel de condición física.
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer overflow-hidden rounded-lg">
            <img
              width="350"
              height="150"
              src={seguimiento}
              className="transition-transform duration-500 group-hover:scale-110"
            ></img>
            <div className="bg-fondo/50 bg-opacity-60 absolute inset-0 grid place-items-center space-y-2 text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="font-bold lg:text-4xl">
                Seguimiento del progreso
              </h3>
              <p className="text-muted-foreground text-sm font-bold lg:text-2xl">
                Supervise su progreso con análisis e información detallados.
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer overflow-hidden rounded-lg">
            <img
              width="350"
              height="150"
              src={expertos}
              className="transition-transform duration-500 group-hover:scale-110"
            ></img>
            <div className="bg-fondo/50 bg-opacity-60 absolute inset-0 grid place-items-center space-y-2 text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="font-bold lg:text-4xl">Orientación experta</h3>
              <p className="text-muted-foreground text-sm font-bold lg:text-2xl">
                Aprenda la forma y técnica adecuadas con nuestros tutoriales
                expertos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container bg-[#ff9d9d]/20 px-8 py-8 md:py-12 lg:py-2">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <img className="" src={libre}></img>
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-5xl">
              Comience su viaje de acondicionamiento físico hoy
            </h1>
            <p>
              Únase a miles de entusiastas del fitness y comience su
              transformación con nuestros planes de entrenamiento integrales y
              orientación experta.
            </p>
            <div className="space-x-4">
              <a href="/register">
                <button className="bg-primary hover: bg-accent my-4 cursor-pointer rounded-[6px] px-4 py-2 text-sm font-medium text-white">
                  Empieza tu viaje
                </button>
              </a>
              <a href="/exercises">
                <button className="my-4 cursor-pointer rounded-[6px] border bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-300">
                  Explorar ejercicios
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
