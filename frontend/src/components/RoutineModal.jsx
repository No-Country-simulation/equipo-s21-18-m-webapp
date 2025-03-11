import { useContext, useEffect, useState } from "react";
import ReactDom from "react-dom";
import { ExercisesContext } from "../context/ExercisesContext";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  background: "#FFF",
  padding: "25px",
  borderRadius: "9px 9px 9px 9px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

export const RoutineModal = ({ open, id, onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const [selection, setSelection] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    difficult: "",
    id_exercises: [],
  });
  const [updatedRoutine, setUpdatedRoutine] = useState(null);

  const { routineList } = useContext(ExercisesContext);

  useEffect(() => {
    if (
      open &&
      id &&
      !formData.id_exercises.includes(id) &&
      selection === "new"
    ) {
      setFormData((prevData) => ({
        ...prevData,
        id_exercises: [...prevData.id_exercises, id],
      }));
    }
    if (open && id && selection !== "new" && selection !== "") {
      const filtered = routineList.filter(
        (routine) => routine._id === selection,
      );
      setUpdatedRoutine(filtered[0]);
    }
  }, [formData, open, selection]);

  if (!open) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (selection === "new") {
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
        console.log("Rutina creada:", data);
        alert("Rutina creada con éxito");
        onClose();
        setSelection("");
        setFormData({
          name: "",
          description: "",
          difficult: "",
          id_exercises: [],
        });
      } catch (error) {
        console.error("Error:", error);
        alert("Hubo un problema al enviar la rutina");
      }
    }
  };

  const handleUpdate = async () => {
    if (updatedRoutine.id_exercises.includes(id)) return;

    setUpdatedRoutine((prevData) => ({
      ...prevData,
      id_exercises: [...prevData.id_exercises, id],
    }));
    console.log(updatedRoutine);

    const body = {
      ...updatedRoutine,
      id_exercises: [...updatedRoutine.id_exercises, id],
    };

    try {
      const response = await fetch(
        `https://equipo-s21-18-m-webapp.onrender.com/routines/${selection}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      );

      if (!response.ok) {
        throw new Error("Error al actualizar la rutina");
      }

      const data = await response.json();
      console.log("Rutina actualizada:", data);
      alert("Rutina actualizada con éxito");
      onClose();
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al actualizar la rutina");
    }
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelection(value);
    setShowForm(value === "new");
  };

  const handleCloseBtn = () => {
    setShowForm(false);
    onClose();
    setSelection("");
    setFormData({
      name: "",
      description: "",
      difficult: "",
      id_exercises: [],
    });
  };

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}>
        <div>{id}</div>
        <button
          type="button"
          className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none"
          onClick={handleCloseBtn}
        >
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
            className="lucide lucide-x h-4 w-4"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
          <span className="sr-only">Close</span>
        </button>
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2 className="text-xl leading-none font-semibold tracking-tight">
            Añadir a rutina
          </h2>
        </div>
        <div className="mt-2 flex flex-col space-y-5">
          <h3 className="text-base leading-none font-normal tracking-tight">
            Elija una rutina o cree una nueva:
          </h3>
          <select
            className="rounded-md border border-gray-200 p-2 tracking-wider focus:border focus:border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            onChange={handleSelectChange}
          >
            <option value="">Seleccione una rutina</option>
            {routineList.map((routine) => (
              <option key={routine._id} value={routine._id}>
                {routine.name}
              </option>
            ))}
            <option value="new">Crear una nueva rutina</option>
          </select>
        </div>
        {showForm && (
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
        )}

        {!showForm && (
          <div className="mt-5 flex flex-col">
            <button
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#b50d50] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-[#e51065] disabled:opacity-50"
              type="button"
              disabled={selection === ""}
              onClick={handleUpdate}
            >
              Añadir
            </button>
          </div>
        )}
      </div>
    </>,
    document.getElementById("portal"),
  );
};
