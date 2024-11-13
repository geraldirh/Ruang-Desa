import Link from "next/link";
// import SignIn from '/signinform'


const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-lg" id="header">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            alt="Logo"
            height={112} 
            width={112}  
            src="/assets/LogoHitam.png" 
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4 ml-auto">
          <Link href="/signinform">
            <span className="text-lg text-gray-800 cursor-pointer">Masuk</span>
          </Link>
          <button
            className="bg-yellow-400 text-lg px-6 py-2 rounded-lg text-gray-800"
            aria-label="Sign Up"
          >
            Daftar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
