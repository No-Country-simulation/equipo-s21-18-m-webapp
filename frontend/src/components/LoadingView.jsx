import loader from "../../public/loading.svg";

export const LoadingView = () => {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <img src={loader} alt="" srcSet="" width="500" height="300" />
    </div>
  );
};
