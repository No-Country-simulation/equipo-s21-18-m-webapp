import avatar from '/avatar.jpg'

export default function Avatar() {
  
  return (
    <>
      <div className="relative w-8">
        <img className="h-8 w-8 rounded-full ring-2 ring-gray-100" src={avatar}/>
        <div className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-600 ring ring-white"></div>
      </div>
    </>
  );
}
