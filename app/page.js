export default function Home() {
  return (
    <>
      <section className=" bg-purple-50 ">
        <header className="flex justify-between items-center p-4 max-w-5xl  mx-auto">
          <div className="text-3xl font-bold text-purple-400 ">SM</div>
          <nav className="flex space-x-4 ">
            <div className="hover:text-purple-400 cursor-pointer">About me</div>
            <div className="hover:text-purple-400 cursor-pointer">
              Portfolio
            </div>
            <div className="hover:text-purple-400 cursor-pointer">Contact</div>
          </nav>
        </header>
      </section>
      <section className=" p-12 mt-12 max-w-5xl     border-2 border-purple-50 rounded-3xl  mx-auto flex flex-col md:flex-row space-x-12 items-center">
        <img src="./shweta.jpeg" className="w-[220px] rounded-full border-8 border-purple-200 " />
        <div>
          <h1 className="text-xl font-medium mt-4 md:mt-0 ">ABOUT ME</h1>
          <p>
            As a student of UX design, I embody a passionate and creative
            spirit, constantly seeking new avenues to blend logic and creativity
            harmoniously. With an unwavering dedication to self-improvement, I
            strive for purity in my design approach. A deep appreciation for
            aesthetics drives my expression through dance, while my love for
            capturing meaningful moments adds depth to my creative journey.
          </p>
        </div>
      </section>
    </>
  );
}
