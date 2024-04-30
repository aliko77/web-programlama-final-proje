import { GoDownload } from "react-icons/go";
import { AiFillSound } from "react-icons/ai";
import { useRef, useState } from "react";

export const Categories = () => {
  const _categories = [
    {
      key: "desserts",
      title: "Tatlılar",
      description:
        "Herhangi zamanda keyfinizi bayram havasına çevirecek süper tatlılarımız.",
      color: "rgba(95, 202, 199, 0.2)",
      image: "images/category-eclair.png",
    },
    {
      key: "cakes",
      title: "Kekler",
      description: "Yüzyıllardır sevilen o muhteşem kategori.",
      color: "rgba(247, 132, 185, 0.2)",
      image: "images/category-mois.png",
    },
    {
      key: "candies",
      title: "Şekerlemeler",
      description:
        "Herhangi zamanda keyfinizi bayram havasına çevirecek süper şekerlemeler.",
      color: "rgba(255, 196, 58, 0.2)",
      image: "images/category-desserts.png",
    },
  ];

  const _products = [
    {
      title: "Pandispanya",
      description: "Pandispanya karakteristiktir.",
      price: 220,
    },
    {
      title: "San Sebastian",
      description: "Nuro şefin tavsiyesi. Bu lezzeti kaçırmayın.",
      price: 300,
    },
    {
      title: "Ekler",
      description: "Rengarenk ekler tatlıları.",
      price: 180,
    },
    {
      title: "Makaron",
      description: "Makaronlar büyüleyici küçük şekerlemelerdir.",
      price: 200,
    },
    {
      title: "Cheesecake",
      description: "Nefis tatlı ve keskin bir lezzet.",
      price: 200,
    },
    {
      title: "Kruvasan",
      description: 'Kruvasan, "kwah-sahn" diye telaffuz edilir.',
      price: 200,
    },
  ];

  const [isPlaying, setIsPlaying] = useState(false); // true ya da false
  const audioRef = useRef(new Audio("audio/muzik.m4a"));

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    /**
     * isPlaying = false
     * ise
     * !isPlaying = true // değerine eşittir
     */
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col lg:w-2/4 justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">
            {_categories.map((category) => {
              return (
                <div
                  key={category.key}
                  className="relative w-[320px] h-[340px] px-5 pb-8 text-center flex flex-col justify-between items-center mt-12 rounded-xl"
                  style={{ backgroundColor: category.color }}
                >
                  <div
                    className="-mt-16 mb-5 p-5 animate-swing bg-center bg-no-repeat bg-cover rounded-[120px] justify-center items-center flex w-[160px] h-[140px] shadow-[0_-5px_8px_rgba(0,0,0,.05)]"
                    style={{ backgroundImage: `url(images/ellipse.png)` }}
                  >
                    <img
                      className="w-[140px] mb-5"
                      src={category.image}
                      alt="category-img"
                    />
                  </div>
                  <h1 className="font-semibold text-574c44 text-2xl">
                    {category.title}
                  </h1>
                  <h1 className="text-base text-[#535353] my-5">
                    {category.description}
                  </h1>
                  <button className="rounded-3xl bg-white py-2 px-5 text-5fcac7 font-medium text-lg">
                    Sipariş Ver
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mt-20 grid grid-flow-row lg:grid-cols-2 gap-y-6 gap-x-14 text-start px-5 lg:px-0">
            {_products.map((product, i) => (
              <div
                key={i}
                className="flex justify-between items-start border-b-2 border-dashed"
              >
                <div className="mb-4">
                  <h1 className="text-574c44 text-xl font-semibold">
                    {product.title}
                  </h1>
                  <h1 className="text-[#575757] text-sm">
                    {product.description}
                  </h1>
                </div>
                <div className="text-5fcac7 font-semibold text-lg whitespace-nowrap">
                  {product.price.toFixed(2)} ₺
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-end mt-8 gap-3 px-5 lg:px-0">
            <a
              className="text-white bg-ff91a4 py-2 px-8 rounded-3xl font-medium flex items-center justify-center gap-2"
              download
              target="_blank"
              href="/files/menu.txt"
            >
              <h1>Menüyü İndir</h1>
              <div>
                <GoDownload className="text-white text-lg" />
              </div>
            </a>
            <button
              onClick={togglePlay}
              className="text-white bg-ff91a4 p-2 rounded-3xl font-medium flex items-center justify-center gap-2"
            >
              <AiFillSound />
            </button>
          </div>
        </div>
        <div className="relative mt-40 w-full">
          <div className="absolute w-full lg:h-96 h-40 top-0 left-0 bg-black/40"></div>
          <video
            className="object-cover w-full lg:h-96 h-40"
            autoPlay
            muted
            loop
            src="https://assets-global.website-files.com/64f990aba108f46dcd9ffb07/65016d3d380c6155c38c3120_Bakery Video-transcode.mp4"
          ></video>
        </div>
      </div>
    </>
  );
};

export default Categories;
