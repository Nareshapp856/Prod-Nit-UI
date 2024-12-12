import MainNav from "../ui/home/MainNav";
import Test from "../components/home/Test";

function Home() {
  return (
    <>
      <header className="relative">
        <MainNav />
      </header>

      <div className="min-h-screen min-w-full bg-gradient-to-r from-blue-800 via-white to-white opacity-[.10] fixed top-0 left-0 -z-10">
        <div className="min-h-screen min-w-full bg-gradient-to-b from-white via-white to-blue-800 opacity-60">
          <div className="min-h-screen min-w-full bg-gradient-to-t from-blue-800 via-white to-blue-800 opacity-70"></div>
        </div>
      </div>

      <main className="">
        <Test />
      </main>
      <footer></footer>
    </>
  );
}

export default Home;
