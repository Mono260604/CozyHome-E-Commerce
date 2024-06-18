import Image from "next/image";

interface Category {
  src: string;
  alt: string;
  text: string;
}

const categories: Category[] = [
  { src: "/food.jpg", alt: "Bahan Makanan", text: "Bahan Makanan" },
  { src: "/household.jpg", alt: "Peralatan Rumah Tangga", text: "Peralatan Rumah Tangga" },
  { src: "/cleaning.jpg", alt: "Produk Kebersihan", text: "Produk Kebersihan" },
  { src: "/personal_care.jpg", alt: "Produk Perawatan Diri", text: "Produk Perawatan Diri" },
  { src: "/electronics.jpg", alt: "Elektronik Rumah Tangga", text: "Elektronik Rumah Tangga" },
  { src: "/clothing.jpg", alt: "Pakaian dan Aksesoris", text: "Pakaian dan Aksesoris" },
  { src: "/baby.jpg", alt: "Perlengkapan Anak", text: "Perlengkapan Anak" },
  { src: "/health.jpg", alt: "Kesehatan", text: "Kesehatan" },
  { src: "/stationery.jpg", alt: "Alat Tulis", text: "Alat Tulis" }
];

export default function Home() {
  return (
  <div className="flex flex-col items-center min-h-screen font-sans">
      <header className="w-full flex justify-center py-5">
        <input
          type="text"
          placeholder="Search..."
          className="w-3/5 p-3 text-lg border border-gray-300 rounded"
        />
      </header>
      <div className="flex flex-wrap justify-center w-full max-w-6xl mx-auto mt-5">
        <div className="flex-1 flex flex-wrap gap-5 justify-around bg-gray-100 p-5 rounded-lg">
          {categories.map((item, index) => (
            <div key={index} className="w-1/3 text-center border border-gray-300 rounded-lg p-3 bg-white">
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 bg-gray-100 p-5 rounded-lg ml-5">
          <h3 className="font-bold">Receipt</h3>
          <p className="my-1">Date: 22/10/2022</p>
          <p className="my-1">Time: 09:34</p>
          <p className="my-1">Id: 00049</p>
          <p className="my-1">Naufal</p>
          <p className="my-1">5X Pulpen - 2K - 10K</p>
          <p className="my-1">1X Obt Dmm - 10K - 10K</p>
          <p className="my-1">1X Puzzle - 25K - 25K</p>
          <p className="border-t border-black pt-2 mt-2 font-bold">Total: 45K</p>
        </div>
      </div>
    </div>
  );
}
