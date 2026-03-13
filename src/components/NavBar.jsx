function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8 font-semibold text-lg">
        <a
          href="#design"
          className="hover:text-gray-300 hover:-translate-y-0.5 transition-transform 300s hover:scale-105"
        >
          Design
        </a>
        <a
          href="#performance"
          className="hover:text-gray-300 hover:-translate-y-0.5 transition-transform 300s hover:scale-105"
        >
          Performance
        </a>
        <a
          href="#camera"
          className="hover:text-gray-300 hover:-translate-y-0.5 transition-transform 300s hover:scale-105"
        >
          Camera
        </a>
        <a
          href="#colors"
          className="hover:text-gray-300 hover:-translate-y-0.5 transition-transform 300s hover:scale-105"
        >
          Cores
        </a>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full hover:scale-105">
          Comprar
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
