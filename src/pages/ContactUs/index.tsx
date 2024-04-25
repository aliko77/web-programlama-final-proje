import Header from "../../components/Header";
import { CiLocationOn, CiPhone } from "react-icons/ci";

export const ContactUs = () => {
  return (
    <>
      <div className="w-full h-full overflow-y-auto">
        <div className="relative p-4 z-10 w-full bg-5fcac7 max-h-[720px]">
          <div
            className="absolute w-full h-full top-0 left-0 bg-contain bg-top opacity-20 -z-10"
            style={{ backgroundImage: "url(images/header-bg.png)" }}
          ></div>
          <div className="relative p-4 z-10 w-full bg-5fcac7 max-h-[720px]">
            <div
              className="absolute w-full h-full top-0 left-0 bg-contain bg-top opacity-20 -z-10"
              style={{ backgroundImage: "url(images/header-bg.png)" }}
            ></div>
            <Header />
            <div className="w-full text-center my-20">
              <h1 className="text-[64px] font-medium font-sans italic">
                <span className="text-white">Menülerimiz</span>
              </h1>
              <h1 className="italic text-lg text-white lg:w-1/3 mx-auto">
                En iyi malzemelerle ve ekstra bir tutam sevgiyle sevgiyle
                hazırlanmış çok çeşitli ürünlerimizi keşfedin.
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center gap-5 my-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h1 className="text-5fcac7 font-medium italic">Mağazalarımız</h1>
              <h1 className="text-574c44 font-bold text-3xl">
                Bizi Nerede Bulabilirsin
              </h1>
              <h1 className="text-[#535353]/80 w-96">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                et fermentum magna, eu facilisis augue.
              </h1>
            </div>
            <div className="flex flex-col gap-3 border-b pb-10 border-dashed border-5fcac7">
              <h1 className="text-574c44 font-bold text-2xl">
                Kadıköy, İstanbul
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex gap-4 items-center justify-start">
                  <div className="p-4 bg-white shadow-2xl rounded-full">
                    <CiLocationOn className="text-5fcac7 text-4xl" />
                  </div>
                  <div>
                    <h1 className="text-574c44 font-medium">Adres</h1>
                    <h1 className="text-5fcac7 text-lg text-wrap">
                      Lorem ipsum dolor sit amet...
                    </h1>
                  </div>
                </div>
                <div className="flex gap-4 items-center justify-start">
                  <div className="p-4 bg-white shadow-2xl rounded-full">
                    <CiPhone className="text-5fcac7 text-4xl" />
                  </div>
                  <div>
                    <h1 className="text-574c44 font-medium">Telefon</h1>
                    <h1 className="text-5fcac7 text-lg text-wrap">
                      +90 555 555 55 55
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 border-b pb-10 border-dashed border-5fcac7">
              <h1 className="text-574c44 font-bold text-2xl">
                Büyükçekmece, İstanbul
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex gap-4 items-center justify-start">
                  <div className="p-4 bg-white shadow-2xl rounded-full">
                    <CiLocationOn className="text-5fcac7 text-4xl" />
                  </div>
                  <div>
                    <h1 className="text-574c44 font-medium">Adres</h1>
                    <h1 className="text-5fcac7 text-lg text-wrap">
                      Lorem ipsum dolor sit amet...
                    </h1>
                  </div>
                </div>
                <div className="flex gap-4 items-center justify-start">
                  <div className="p-4 bg-white shadow-2xl rounded-full">
                    <CiPhone className="text-5fcac7 text-4xl" />
                  </div>
                  <div>
                    <h1 className="text-574c44 font-medium">Telefon</h1>
                    <h1 className="text-5fcac7 text-lg text-wrap">
                      +90 555 555 55 55
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 hidden lg:block top-2 sticky ml-40 h-min">
            <div className="transform w-full flex items-center justify-center relative">
              <img
                className="z-10 w-5/6 relative"
                src="images/macarons.png"
                alt="macarons"
              />
              <img
                className="w-full h-full absolute top-0 left-0 right-0 bottom-0 align-middle"
                src="images/ellipse_2.png"
                alt="ellipse_2"
              />
            </div>
          </div>
        </div>
        <div
          className="relative mt-40 w-full h-[750px] bg-fixed bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url(images/lemoni.png)" }}
        >
          <div className="flex items-center justify-center w-full h-full p-2">
            <div className="bg-fff3d6 rounded-3xl p-8 lg:w-1/2">
              <div className="flex flex-col gap-4">
                <h1 className="text-center text-5fcac7 italic font-medium text-lg">
                  İletişime Geçin
                </h1>
                <h1 className="text-center text-574c44 font-bold text-3xl tracking-wider">
                  Geri Bildirimizin Bizim İçin Çok Değerli
                </h1>
              </div>
              <div className="mt-10 flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-12">
                  <div>
                    <input
                      type="text"
                      placeholder="İsminiz"
                      className="p-3 bg-white rounded-xl text-574c44 ring-0 outline-5fcac7 w-full"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="p-3 bg-white rounded-xl text-574c44 ring-0 outline-5fcac7 w-full"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Telefon"
                      className="p-3 bg-white rounded-xl text-574c44 ring-0 outline-5fcac7 w-full"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    className="ring-0 outline-5fcac7 w-full rounded-xl p-3 text-574c44"
                    placeholder="Mesajınız..."
                    name="text"
                    cols={30}
                    rows={10}
                  ></textarea>
                </div>
                <div className="mx-auto">
                  <button className="py-2 px-4 rounded-3xl bg-ffc43a text-white font-medium text-lg">
                    Gönder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
