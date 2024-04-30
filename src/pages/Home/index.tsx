import { CiShop, CiShoppingCart } from "react-icons/ci";
import Header from "../../components/Header";
import { useData } from "../../hooks/useData";

export const Home: React.FC = () => {
  const { changePage } = useData();

  return (
    <div className="overflow-auto overflow-x-hidden">
      <div className="relative p-4 z-10 w-full bg-5fcac7">
        <div
          className="select-none absolute w-full h-full top-0 left-0 bg-contain bg-top opacity-20 -z-10"
          style={{ backgroundImage: "url(images/header-bg.png)" }}
        ></div>
        <Header />
        <div className="w-full text-center mt-8">
          <h1 className="text-[64px] font-medium font-sans italic">
            <span className="text-ffc43a">Tatlı</span> Yiyelim, Tatlı{" "}
            <span className="text-ffc43a">Görüşelim</span>
          </h1>
          <h1 className="italic text-lg">
            En seçkin ve lezzetli tatlılarımızın tadını çıkarın. Eşsiz
            tariflerimizle unutamayacağınız bir lezzeti garanti ediyoruz !
          </h1>
          <div className="absolute flex w-full justify-center">
            <img src="images/pronuro.png" alt="pronuro" />
          </div>
        </div>
        <div className="relative w-full flex items-center justify-center -z-10 top-14 opacity-40">
          <div className="w-[480px]">
            <img src="images/ellipse.png" alt="ellipse" />
          </div>
        </div>
      </div>
      <div className="bg-white p-4 w-full h-full z-10 relative pt-20">
        <div className="w-full sm:flex sm:items-center sm:justify-center sm:gap-6 text-center p-4">
          <div className="relative flex items-center justify-center">
            <img
              className="absolute h-[300px] w-[500px]"
              src="images/ellipse_2.png"
              alt="ellipse_2"
            />
            <div className="animate-swing">
              <img
                className="w-[420px]"
                src="images/san-sebastian.png"
                alt="sebastion"
              />
            </div>
          </div>
          <div className="flex flex-col max-w-[420px] text-start">
            <h1 className="text-5fcac7/60 text-2xl font-medium italic font-sans">
              Hakkımızda
            </h1>
            <h1 className="text-gray-500/80 text-xl">
              Korona dönemi sonrası, aşçılık mezunu üç arkadaş, hayallerinin
              peşinden gitmek için üniversite okurken kurdukları küçük bir
              işletmeden büyüyen bu şirket büyük bir pastanesi işletmesi haline
              geldi.
            </h1>
          </div>
        </div>
        <div className="mt-20 m-auto flex items-center justify-center gap-8 text-black">
          <div className="group w-[240px] relative bg-5fcac7/20 text-center p-4 h-60 flex flex-col items-center justify-between px-4">
            <div className="bg-white rounded-full p-2 absolute -top-8 shadow-[0_-2px_8px_rgba(0,_0,_0,_.04)]">
              <CiShop className="group-hover:scale-110 transform-gpu transition text-5xl text-5fcac7" />
            </div>
            <h1 className="font-semibold text-2xl mt-6 text-574c44">
              Şubelerimiz
            </h1>
            <h1 className="text-black/80">Türkiye Şubelerimiz</h1>
            <button
              onClick={() => changePage("contact-us")}
              className="mt-4 text-white rounded-3xl py-2 px-4 bg-5fcac7 font-medium"
            >
              Şubelerimiz
            </button>
          </div>
          <div className="group w-[240px] relative bg-5fcac7/20 text-center p-4 h-60 flex flex-col items-center justify-between px-4">
            <div className="bg-white rounded-full p-2 absolute -top-8 shadow-[0_-2px_8px_rgba(0,_0,_0,_.04)]">
              <CiShoppingCart className="group-hover:scale-110 transform-gpu transition text-5xl text-5fcac7" />
            </div>
            <h1 className="font-semibold text-2xl mt-6 text-574c44">
              Sipariş Ver
            </h1>
            <h1 className="text-black/80">Çeşitli Siparişler Verin</h1>
            <button
              onClick={() => changePage("our-products")}
              className="mt-4 text-white rounded-3xl py-2 px-4 bg-5fcac7 font-medium"
            >
              Sipariş
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute w-full h-96 top-0 left-0 bg-black/40"></div>
        <video
          className="object-cover w-full h-96"
          autoPlay
          muted
          loop
          src="https://assets-global.website-files.com/64f990aba108f46dcd9ffb07/65016d3d380c6155c38c3120_Bakery Video-transcode.mp4"
        ></video>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <h1 className="text-5fcac7 italic text-2xl">Özel Fırsatlar</h1>
          <h1 className="text-5xl font-bold w-2/4 text-center">
            Menülerimizi ve Fırsatlarımızı İnceleyin
          </h1>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => changePage("our-products")}
              className="bg-ffc43a border-2 border-ffc43a p-2 px-4 font-medium text-lg rounded-3xl hover:border-white hover:bg-transparent"
            >
              Menülerimiz
            </button>
            <button
              onClick={() => changePage("contact-us")}
              className="bg-orange-400 border-2 border-orange-400 p-2 px-4 font-medium text-lg rounded-3xl hover:border-white hover:bg-transparent"
            >
              Bize Ulaşın
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
