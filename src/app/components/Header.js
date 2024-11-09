"use client"; // Tambahkan ini di bagian paling atas

import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Menambahkan efek saat scroll lebih dari 50px
      } else {
        setIsScrolled(false); // Kembali ke kondisi awal saat di atas
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
      id="header"
      style={{ height: isScrolled ? "80px" : "112px" }} // Menyesuaikan tinggi header
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo (on the left side) */}
        <div className="flex items-center">
          <img
            alt="Logo"
            className="transition-all duration-300" // Menghapus transisi ukuran
            height={112} // Tetap pada ukuran yang konsisten
            width={112}  // Tetap pada ukuran yang konsisten
            src={isScrolled ? "/assets/LogoHitam.png" : "/assets/Ruang_desa_pth.png"} // Logo berubah sesuai kondisi scroll
          />
        </div>

        {/* Buttons (aligned with the logo) */}
        <div className="flex items-center space-x-4 ml-auto"> {/* Align buttons next to the logo */}
          <button
            className={`transition-colors duration-300 text-lg ${
              isScrolled ? "text-gray-800" : "text-white"
            }`} // Warna berubah sesuai kondisi scroll
            aria-label="Login"
          >
            Masuk
          </button>
          <button
            className={`bg-yellow-400 transition-colors duration-300 text-lg px-6 py-2 rounded-lg ${
              isScrolled ? "text-gray-800" : "text-white"
            }`} // Warna berubah sesuai kondisi scroll
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
