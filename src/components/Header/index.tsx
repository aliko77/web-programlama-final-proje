import { FaShoppingCart } from "react-icons/fa";
import { useData } from "../../hooks/useData";

export const Header = () => {
  const { changePage } = useData();

  return (
    <>
      <nav className="bg-white p-4 rounded-md flex items-center justify-between text-574c44 sm:w-2/3 mx-auto z-10">
        <button onClick={() => changePage("home")}>
          <img className="w-24" src="images/logo.png" alt="logo" />
        </button>
        <div className="flex items-center justify-center gap-4 text-lg max-sm:hidden">
          <button
            onClick={() => changePage("our-products")}
            className="hover:text-ffc43a transition-colors"
          >
            <h1 className="font-medium">Ürünlerimiz</h1>
          </button>
          <button
            onClick={() => changePage("contact-us")}
            className="hover:text-ffc43a transition-colors"
          >
            <h1 className="font-medium">Hakkımızda</h1>
          </button>
          <button
            onClick={() => changePage("contact-us")}
            className="hover:text-ffc43a transition-colors"
          >
            <h1 className="font-medium">Referanslarımız</h1>
          </button>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button className="w-12">
            <FaShoppingCart className="text-5fcac7 w-12" />
          </button>
          <button
            onClick={() => changePage("contact-us")}
            className="bg-ffc43a py-3 rounded-3xl px-8 text-white font-semibold"
          >
            Bize Ulaş
          </button>
        </div>
      </nav>
    </>
  );
};
export default Header;
