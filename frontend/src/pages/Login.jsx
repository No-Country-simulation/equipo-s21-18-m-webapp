export default function Login() {
    return (
        <>
            <section className="w-full font-inter">
                <form className="w-[350px] flex flex-col mx-auto py-14" noValidate>
                <h1 className="text-2xl leading-8 font-semibold tracking-tight text-center">Bienvenido</h1>
                <p className="text-sm text-[#737373] leading-5 mt-2 mb-6">Ingresa tus datos para acceder a tu cuenta</p>
                <label className="text-sm font-medium leading-none py-2">Correo</label>
                    <input className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm" placeholder="m@ejemplo.com"/>
                    <label className="text-sm font-medium leading-none py-2">Contraseña</label>
                    <input className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm"/>

                    <button className="text-sm font-medium text-white py-2 px-4 my-4 bg-primary rounded-[6px]">Ingresar</button>
                </form>
            </section>
        </>
    )
}