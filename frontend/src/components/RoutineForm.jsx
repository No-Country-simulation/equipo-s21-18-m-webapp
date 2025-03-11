import { useEffect, useState } from "react";
import { useToast } from "../context/ToastContext";
export const RoutineForm = ({ id, selection, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    difficult: "",
    id_exercises: [],
  });

  const { openToast } = useToast();

  useEffect(() => {
    if (selection === "new") {
      setFormData((prevData) => ({
        ...prevData,
        id_exercises: [id],
      }));
    }
  }, [selection]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.description || !formData.difficult) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await fetch(
        "https://equipo-s21-18-m-webapp.onrender.com/routines",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Error al enviar la rutina");
      }

      const data = await response.json();

      openToast(
        <div className="flex gap-2 rounded-lg bg-green-300 p-4 text-green-800 shadow-lg">
          <div className="grid h-12 w-12 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12"
            >
              <path d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z" />
            </svg>
          </div>
          <div className="grid place-items-center">
            <h3 className="font-bold">Éxito</h3>
            <p className="text-sm">Rutina creada</p>
          </div>
        </div>,
        2000,
      );
    } catch (error) {
      console.error("Error:", error);
      openToast(
        <div className="flex gap-2 rounded-lg bg-red-300 p-4 text-red-800 shadow-lg">
          <div className="grid h-12 w-12 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12"
            >
              <path d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z" />
            </svg>
          </div>
          <div className="grid place-items-center">
            <h3 className="font-bold">Error</h3>
            <p className="text-sm">Error al crear la rutina</p>
          </div>
        </div>,
        2000,
      );
    } finally {
      setFormData({
        name: "",
        description: "",
        difficult: "",
        id_exercises: [],
      });
      onClose();
    }
  };

  return (
    <form className="mt-5 flex flex-col space-y-2">
      <label htmlFor="">Nombre:</label>
      <input
        className="flex h-10 w-full rounded-md border border-gray-200 px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Nombre de la rutina"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="">Descripción:</label>
      <input
        className="flex h-10 w-full rounded-md border border-gray-200 px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <label htmlFor="">Dificultad:</label>
      <select
        className="rounded-md border border-gray-200 p-2 tracking-wider focus:border focus:border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        name="difficult"
        value={formData.difficult}
        onChange={handleChange}
      >
        <option value="">Seleccione una rutina</option>
        <option value="fácil">fácil</option>
        <option value="intermedio">intermedio</option>
        <option value="avanzado">avanzado</option>
      </select>
      <button
        className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#b50d50] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-[#e51065] disabled:opacity-50"
        type="button"
        disabled={
          !formData.name || !formData.description || !formData.difficult
        }
        onClick={handleSubmit}
      >
        Añadir
      </button>
    </form>
  );
};
