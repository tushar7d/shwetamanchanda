export default function Home() {
  return (
    <>
    <section className=" bg-purple-50 ">
      <header className="flex justify-between items-center p-4 max-w-5xl  mx-auto">
        <div className="text-3xl font-bold text-purple-400 ">SM</div>
        <nav className="flex space-x-4 ">
          <div className="hover:text-purple-400 cursor-pointer">About me</div>
          <div className="hover:text-purple-400 cursor-pointer">Portfolio</div>
          <div className="hover:text-purple-400 cursor-pointer">Contact</div>
        </nav>
      </header>
     
    </section>
    <section className="p-4 max-w-5xl  mx-auto">
        <h1>About Me</h1>
        <p>Hello I am shweta a 2nd year student of Design at Amity University </p>
      </section>
    </>
  );
}
