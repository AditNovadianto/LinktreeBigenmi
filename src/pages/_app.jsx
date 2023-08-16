import "@/styles/globals.css";
import { BsWhatsapp } from "react-icons/bs";

export default function App({ Component, pageProps }) {
  return (
    <div className="mb-10">
      <Component {...pageProps} />

      <div className="fixed bottom-0 w-full bg-green-500 m-auto text-center p-3 left-0 z-[500] right-0">
        <a
          className="flex items-center w-full text-center justify-center gap-2 font-semibold font-poppins text-base text-white"
          href="https://api.whatsapp.com/send?phone=6285921778028&text=Assalaamu%27alaikum.%20Halo%20Mba%2C%20saya%20mau%20tanya%20tentang%20produk%20Bigenminya.%0AMohon%20dibantu%20ya.%20Terima%20kasih"
          target="_blank"
        >
          <BsWhatsapp />
          <p>Tanya Sekarang!</p>
        </a>
      </div>
    </div>
  );
}
