import { useContext, useEffect, useState } from "react";
import ReactDom from "react-dom";

import { MODAL_STYLES, OVERLAY_STYLES } from "../utils/styles";
import { RoutineForm } from "./RoutineForm";
import { useToast } from "../context/ToastContext";
import { RoutinesContext } from "../context/RoutinesContext";

export const RoutineModal = ({ open, id, onClose }) => {
  const { data: routineList, getFetch } = useContext(RoutinesContext);
  const [showForm, setShowForm] = useState(false);
  const [selection, setSelection] = useState("");

  const [updatedRoutine, setUpdatedRoutine] = useState(null);

  const { openToast } = useToast();

  useEffect(() => {
    if (selection !== "new" && selection !== "") {
      const filtered = routineList.filter(
        (routine) => routine._id === selection,
      );
      setUpdatedRoutine(filtered[0]);
    }
  }, [selection]);

  const handleUpdate = async () => {
    if (updatedRoutine.id_exercises.includes(id)) {
      openToast(
        <div className="flex gap-2 rounded-lg bg-sky-300 p-4 text-sky-800 shadow-lg">
          <div className="grid h-12 w-12 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12"
            >
              <path d="M12,10a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,6Z" />
            </svg>
          </div>
          <div className="grid place-items-center">
            <h3 className="font-bold">Oops!</h3>
            <p className="text-sm">El ejercicio ya ha sido registrado</p>
          </div>
        </div>,
        2000,
      );
      return;
    }

    setUpdatedRoutine((prevData) => ({
      ...prevData,
      id_exercises: [...prevData.id_exercises, id],
    }));

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
            <p className="text-sm">Rutina actualizada</p>
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
              <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
            </svg>
          </div>
          <div className="grid place-items-center">
            <h3 className="font-bold">Error</h3>
            <p className="text-sm">Error al actualizar la rutina</p>
          </div>
        </div>,
        2000,
      );
    } finally {
      onReset();
    }
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelection(value);
    if (value === "new" || value === "") {
      setUpdatedRoutine(null);
    }
    setShowForm(value === "new");
  };

  const handleCloseBtn = () => {
    onReset();
  };

  const onReset = () => {
    setSelection("");
    setShowForm(false);
    setUpdatedRoutine(null);
    getFetch();
    onClose();
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}>
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
          <RoutineForm
            id={id}
            selection={selection}
            open={open}
            onReset={onReset}
          />
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
