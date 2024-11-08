import Image from "next/image";
import Header from '/src/app/components/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <main className="bg-gray-100 font-roboto">
        <Header />
        <section className="relative bg-cover bg-no-repeat bg-center h-96" style={{ backgroundImage: "url('/assets/village profile.png')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto relative z-10 flex flex-col items-start justify-center h-full text-left text-white pl-20">
            <h1 className="text-4xl font-bold">Selamat datang di</h1>
            <h2 className="text-6xl font-bold mt-2">Ruang Desa</h2>
            <p className="mt-4 text-lg">Pusat informasi dan sumber daya untuk kemajuan desa kita</p>
            <button className="mt-6 bg-yellow-400 text-white px-6 py-3 rounded" aria-label="Explore">
              Jelajahi
            </button>
          </div>
        </section>

        <section className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-6">
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6">Kampung Adat</h2>
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-start">
        {/* Bagian Gambar */}
        <div className="w-full md:w-1/2">
          <Image 
            alt="Image of Kampung Adat Cirendeu" 
            className="rounded-lg mb-4" 
            height={300} 
            src="/assets/village1.png" 
            width={300} 
          />
        </div>

        {/* Bagian Deskripsi */}
        <div className="w-full md:w-1/2 md:pl-6">
          <p className="text-lg">
            Cirendeu berasal dari nama "pohon reundeu", karena sebelumnya di kampung ini banyak sekali populasi pohon reundeu. Pohon reundeu itu sendiri ialah pohon untuk bahan obat herbal. Maka dari itu kampung ini disebut Kampung Cirendeu. Kampung Adat Cirendeu terletak di Kelurahan Leuwigajah, Kecamatan Cimahi Selatan.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


        <section className="bg-gray-900 text-white py-12 border-t border-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-6">Team Terkait</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full p-4 text-center">
                <div className="bg-gray-800 rounded-lg p-4">
                  <Image alt="Team Member 2" className="rounded-full mb-4" height={100} src="/assets/teamMember1.png" width={100} />
                  <h3 className="text-lg font-bold">Aulia Rahma | AUL</h3>
                  <p className="text-sm">UI/UX</p>
                </div>
              </div>
              <div className="w-1/2 md:w-1/4 p-4 text-center">
                <div className="bg-gray-800 rounded-lg p-4">
                  <Image alt="Team Member 3" className="rounded-full mb-4" height={100} src="/assets/teamMember2.png" width={100} />
                  <h3 className="text-lg font-bold">Geraldi Ridwan | ALD</h3>
                  <p className="text-sm">Front End</p>
                </div>
              </div>
              <div className="w-1/2 md:w-1/4 p-4 text-center">
                <div className="bg-gray-800 rounded-lg p-4">
                  <Image alt="Team Member 4" className="rounded-full mb-4" height={100} src="/assets/teamMember3.png" width={100} />
                  <h3 className="text-lg font-bold">Zaidan | DUN</h3>
                  <p className="text-sm">Front End</p>
                </div>
              </div>
              <div className="w-full p-4 text-center">
                <div className="bg-gray-800 rounded-lg p-4">
                  <Image alt="Team Member 5" className="rounded-full mb-4" height={100} src="/assets/teamMember4.png" width={100} />
                  <h3 className="text-lg font-bold">Zaenal Abidin | ZEN</h3>
                  <p className="text-sm">Back End</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-6 text-center">
            <p>© 2023 Ruang Desa. All rights reserved.</p>
            <div className="mt-4">
              <a className="text-white mx-2" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-white mx-2" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-white mx-2" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-white mx-2" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
