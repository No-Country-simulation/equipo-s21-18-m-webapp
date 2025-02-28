import { Link } from "react-router-dom";
import logo_grande from "../assets/img/logoGrande.png";
import foto_gimnasio from "../assets/img/foto_gimnasio.png"
import ejercicios from "../assets/img/ejercicio_personal.png"
import seguimiento from "../assets/img/seguimiento.png"
import expertos from "../assets/img/expertos.png"

export default function Home() {
    return (
        <>
            <section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div class="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <div class="flex items-center justify-center rounded-lg">
                        <img className="w-[150px] h-[150px]" src={logo_grande} />
                    </div>
                    <h1 class="font-bold text-5xl sm:text-5xl md:text-6xl lg:text-5xl ">Su viaje hacia <span style={{ color: "#b50d50" }}> la excelencia en el fitness.-</span></h1>
                    <p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">Únase a nuestra comunidad de entusiastas del fitness. Obtenga entrenamientos personalizados, realice un seguimiento de su progreso y alcance sus objetivos de fitness con la orientación de expertos.</p>
                    <div className="space-x-4">
                        <button className="text-sm font-medium text-white py-2 px-4 my-4 bg-primary rounded-[6px]">Empieza tu viaje</button>
                        <button className="text-sm font-medium text-black py-2 px-4 my-4 bg-white rounded-[6px] border">Explorar ejercicios</button>
                    </div>
                </div>
            </section>
            <section class="container py-8 md:py-12 lg:py-24">
                <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div class="flex flex-col justify-center space-y-4">
                        <h1 class="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-5xl ">Transforma tu cuerpo, transforma tu vida</h1>
                        <p>Ya sea que recién esté comenzando o esté buscando mejorar su nivel de acondicionamiento físico, tenemos todo lo que necesita para tener éxito en su viaje de acondicionamiento físico.</p>
                    </div>
                    <img className="" src={foto_gimnasio}></img>
                </div>
            </section>
            <section class="container space-y-4 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
                <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h1 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Características</h1>
                    <h3 class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">Todo lo que necesitas para alcanzar tus objetivos fitness</h3>
                </div>
                <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 text-center">
                    <div class="relative rounded-lg ">
                        <div class="flex h-[300px] flex-col justify-between rounded-md p-6">
                            <img width="400" height="200" src={ejercicios}></img>
                            <div class="space-y-2">
                                <h3 class="font-bold">
                                    Entrenamientos personalizados
                                </h3>
                                <p class="text-sm text-muted-foreground" >
                                    Obtén planes de entrenamiento personalizados adaptados a tus objetivos y nivel de condición física.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="relative rounded-lg ">
                        <div class="flex h-[300px] flex-col justify-between rounded-md p-6">
                            <img width="400" height="200" src={seguimiento}></img>
                            <div class="space-y-2">
                                <h3 class="font-bold">
                                    Seguimiento del progreso
                                </h3>
                                <p class="text-sm text-muted-foreground" >
                                    Supervise su progreso con análisis e información detallados.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="relative rounded-lg ">
                        <div class="flex h-[300px] flex-col justify-between rounded-md p-6">
                            <img width="400" height="200" src={expertos}></img>
                            <div class="space-y-2">
                                <h3 class="font-bold">
                                    Orientación experta
                                </h3>
                                <p class="text-sm text-muted-foreground" >
                                    Aprenda la forma y técnica adecuadas con nuestros tutoriales expertos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container py-8 md:py-12 lg:py-24 bg-fondo">
                <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <img className="" src={""}></img>
                    <div class="flex flex-col justify-center space-y-4">
                        <h1 class="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-5xl ">Comience su viaje de acondicionamiento físico hoy</h1>
                        <p>Únase a miles de entusiastas del fitness y comience su transformación con nuestros planes de entrenamiento integrales y orientación experta.</p>
                    </div>
                </div>
            </section>

        </>
    )
}