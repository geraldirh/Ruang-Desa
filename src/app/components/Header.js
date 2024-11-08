const Header = () => {
    return (
        <header className="bg-transparent shadow-md transition-all duration-300" id="header">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <img alt="Logo" className="h-10" height="50" src="/src/assets/Ruang_desa_pth.png" width="50" />
          </div>
          <div>
            <button className="text-gray-800 mr-4" aria-label="Login">
              Masuk
            </button>
            <button className="bg-yellow-400 text-white px-4 py-2 rounded" aria-label="Sign Up">
              Daftar
            </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  