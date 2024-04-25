import Header from "../../components/Header";
import Categories from "./categories";
import Testimonials from "./testimonials";

export const OurProducts = () => {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="relative p-4 z-10 w-full bg-fff3d6 max-h-[720px]">
        <div
          className="absolute w-full h-full top-0 left-0 bg-contain bg-top opacity-20 -z-10"
          style={{ backgroundImage: "url(images/header-bg.png)" }}
        ></div>
        <div className="relative p-4 z-10 w-full bg-fff3d6 max-h-[720px]">
          <div
            className="absolute w-full h-full top-0 left-0 bg-contain bg-top opacity-20 -z-10"
            style={{ backgroundImage: "url(images/header-bg.png)" }}
          ></div>
          <Header />
          <div className="w-full text-center my-20">
            <h1 className="text-[64px] font-medium font-sans italic">
              <span className="text-574c44">Menülerimiz</span>
            </h1>
            <h1 className="italic text-lg text-574c44">
              Memnuniyetiniz önceliğimizdir.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full mt-20 text-center">
        <div>
          <div>
            <h1 className="italic font-medium text-xl text-5fcac7 text-center mb-2">
              Çeşitlerimiz
            </h1>
            <h1 className="text-574c44 text-3xl font-bold">
              Tatlı Buluşmaların Güzel Atıştırmalıkları
            </h1>
          </div>
          <div className="mt-20">
            <Categories />
          </div>
        </div>
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  );
};
