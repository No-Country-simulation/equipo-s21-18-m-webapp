import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import noImg from "../assets/no-image.svg";
import { useFetch } from "../hooks/useFetch";
import { LoadingView } from "../components/LoadingView";
import { RoutineModal } from "../components/RoutineModal";

export const ExerciseDetail = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const { data, isLoading } = useFetch(
    `https://equipo-s21-18-m-webapp.onrender.com/exercises/${id}`,
  );

  const handleAdd = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <RoutineModal open={isOpen} onClose={onClose} id={id} />
      {isLoading ? (
        <LoadingView />
      ) : (
        <div className="container mx-auto py-10">
          <Link to={"/exercises"}>
            <button className="mb-6 inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium">Atrás</span>
            </button>
          </Link>

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h1 className="mb-4 text-4xl font-bold">{data.title}</h1>
              <p className="text-muted-foreground mb-6">
                {data.type} | {data.category} | {data.level}
              </p>
              <p className="mb-6">{data.description}</p>
              <h2 className="mb-4 text-2xl font-semibold">Instrucciones</h2>
              <ol className="mb-6 list-inside list-decimal space-y-2">
                {data.instructions.split("\n").map((instruction) => (
                  <li key={instruction}>{instruction}</li>
                ))}
              </ol>
              <h2 className="mb-4 text-2xl font-semibold">
                ¿Qué músculos trabajo?
              </h2>
              <ul className="mb-6 list-inside list-disc space-y-2">
                {data.benefits.split("\n").map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <button
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#b50d50] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-[#e51065]"
                onClick={handleAdd}
              >
                Añadir a la rutina
              </button>
            </div>
            <div>
              <img
                alt="Push-ups"
                loading="lazy"
                width="600"
                height="400"
                decoding="async"
                data-img="1"
                className="h-auto w-full rounded-lg object-cover"
                src={noImg}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
