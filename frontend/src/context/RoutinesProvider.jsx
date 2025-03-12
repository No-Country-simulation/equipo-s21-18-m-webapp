import { useEffect, useState } from "react";
import { RoutinesContext } from "./RoutinesContext";

export const RoutinesProvider = ({ children }) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, []);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    setLoadingState();

    const resp = await fetch(
      "https://equipo-s21-18-m-webapp.onrender.com/routines/",
    );

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });
  };

  return (
    <RoutinesContext.Provider
      value={{ data: state.data, isLoading: state.isLoading, getFetch }}
    >
      {children}
    </RoutinesContext.Provider>
  );
};
