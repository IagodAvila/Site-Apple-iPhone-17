function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-3 py-4 flex items-center justify-center gap-4 md:gap-8 font-semibold text-xs md:text-lg overflow-x-auto scrollbar-hide">
        <a
          href="#design"
          className="hover:text-gray-300 hover:-translate-y-0.5 transition-transform duration-300 hover:scale-105"
        >
          Design
        </a>
        <a
          href="#performance"
          className="hover:text-gray-300 hover:-translate-y-0.5 transition-transform duration-300 hover:scale-105"
        >
          Performance
        </a>
        <a
          href="#camera"
          className="hover:text-gray-300 hover:-translate-y-0.5 transition-transform duration-300 hover:scale-105"
        >
          Camera
        </a>
        <a
          href="#colors"
          className="hover:text-gray-300 hover:-translate-y-0.5 transition-transform duration-300 hover:scale-105"
        >
          Cores
        </a>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-transform duration-300 hover:scale-105">
          Comprar
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
