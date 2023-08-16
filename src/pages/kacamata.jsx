import React from "react";
import NextLink from "next/link";
import { ReactPhotoCollage } from "react-photo-collage";
import { BiArrowBack } from "react-icons/bi";

const setting = {
  height: [
    "350px",
    "87.5px",
    " 87.5px",
    "175px",
    "350px",
    "87.5px",
    "87.5px",
    "350px",
  ],
  layout: [1, 4, 4, 2, 1, 4, 4, 1],
  photos: [
    { source: "/images/kacamata1.jpg" },
    { source: "/images/kacamata2.jpg" },
    { source: "/images/kacamata3.jpg" },
    { source: "/images/kacamata4.jpg" },
    { source: "/images/kacamata5.jpg" },
    { source: "/images/kacamata6.jpg" },
    { source: "/images/kacamata7.jpg" },
    { source: "/images/kacamata8.jpg" },
    { source: "/images/kacamata9.jpg" },
    { source: "/images/kacamata10.jpg" },
    { source: "/images/kacamata11.jpg" },
    { source: "/images/kacamata12.jpg" },
    { source: "/images/kacamata13.jpg" },
    { source: "/images/kacamata14.jpg" },
    { source: "/images/kacamata15.jpg" },
    { source: "/images/kacamata16.jpg" },
    { source: "/images/kacamata17.jpg" },
    { source: "/images/kacamata18.jpg" },
    { source: "/images/kacamata19.jpg" },
    { source: "/images/kacamata20.jpg" },
    { source: "/images/kacamata21.jpg" },
  ],
};

const variants = [
  {
    bentuk: "Bentuk frame : petak",
    warna: "Warna : Black Red, Black Coffe, Mocca, Red & Full Black",
  },
  {
    bentuk: "Bentuk frame : oval",
    warna: "Warna : Red, Black Blue, Black Gold, Black Silver",
  },
  {
    bentuk: "Bentuk frame : bulat",
    warna: "Warna : Navy Blue, Purple, Black Rose Gold, Full Rose Gold",
  },
];

const benefits = [
  " Dapat Digunakan Untuk membatu Terapi pada mata : Glukoma, Floater, Mata Merah, Kabur, Lelah, Berair, Perih, Minus, Plus, Silinder Hingga Katarak.",
  " Dapat Menghilangkan keluhan Migrain, Sinusitis, Sakit Kepala Serta Membuat Penampilan Makin Cantik & Elegant.",
  " Dapat Digunakan Untuk Menangkal Radiasi Hp, Tv, Laptop, Sinar Lampu dan Sinar Matahari",
];

const steps = [
  "ION NANO EYEGLASSES BY BIGENMI adalah kacamata dengan teknologi ion nano yang dapat memancarkan energi Anion atau Ion Negatif dan Sinar Infra Merah Jarak Jauh dalam bentuk partikel nano yang sangat baik bagi kesehatan mata.",
  "Ion Negatif yang dipancarkan INE bisa meningkatkan sistem imunitas dan memperkuat fungsi tubuh. Anion juga dapat menambah suplai oksigen di sekitar mata agar mata tidak mudah terasa lelah dan tetap nyaman.",
  "Sementara Sinar Infra Merah Jarak Jauh juga dapat meresap masuk ke dalam tubuh dan menimbulkan gaya resonansi yang bermanfaat untuk pelebaran kapiler-kapiler pembuluh darah untuk melancarkan peredaran darah, meningkatkan fungsi sel-sel sekitar mata, dan mengurangi risiko terjadinya gangguan-gangguan kesehatan mata.",
];

const items = [
  "☑ Rabun Jauh (Miopi)",
  "☑ Rabun Dekat (Hipermetropi)",
  "☑ Astigmatism",
  "☑ Mata Kering",
  "☑ Lazy Eye (mata lelah)",
  "☑ Floater Eye (mata bengkak)",
  "☑ Glaucoma",
  "☑ Retinopati Diabetik",
  "☑ Katarak",
  "☑ Migraine",
  "☑ Kantung mata",
  "☑ Mata bantal",
];

const KacamataPage = () => {
  return (
    <div
      style={{ backgroundImage: "url(/images/backgroundImage.jpg)" }}
      className="min-h-screen bg-center bg-blend-darken bg-cover py-10 px-7 bg-no-repeat"
    >
      <div className="fixed inset-0 bg-black opacity-20"></div>

      <div className="relative flex items-center gap-2 max-w-[500px] m-auto">
        <NextLink className="bg-white p-2 rounded-full" href={"/"}>
          <BiArrowBack className="text-xl" />
        </NextLink>

        <p className="font-semibold m-auto font-poppins text-center text-white text-xl">
          ION NANO EYEGLASSES (INE)
        </p>
      </div>

      <div className="m-auto max-w-[500px] overflow-hidden mt-10">
        <ReactPhotoCollage width="100%" {...setting} />
      </div>

      <div className="mt-10">
        <div
          className={`w-full relative max-w-[500px] m-auto transition-all overflow-hidden bg-white rounded-lg p-3 font-poppins`}
        >
          <h2 className="font-semibold text-center text-xl">
            ION NANO EYEGLASSES (INE)
          </h2>

          <p className="mt-5 text-justify">
            Ion Nano Eyeglasses (INE) merupakan kacamata terapi yang dilengkapi
            lensa Anti UV & Anti Blue rays sehingga melindungi mata Anda dari
            kerusakan akibat sinar matahari & cahaya barang elektronik
          </p>

          <p className="mt-5 text-justify">
            selain itu kandungan Ion Negative & FIR pada frame kacamata ini
            dapat membantu mengobati berbagai macam keluhan mata & penyakit
          </p>
        </div>

        <div
          className={`w-full relative max-w-[500px] m-auto transition-all overflow-hidden bg-white rounded-lg p-3 font-poppins mt-5`}
        >
          <p>VARIAN INE :</p>

          {variants.map((varian, index) => (
            <>
              <ul key={index} className="mt-3">
                <li className="flex items-start gap-2">
                  <span>✨</span>
                  {varian.bentuk}
                </li>
                <li className="flex items-start gap-2">
                  <span>✨</span>
                  {varian.warna}
                </li>
              </ul>
              <div className="h-1 w-full bg-black bg-opacity-70 my-2 rounded-full"></div>
            </>
          ))}

          <p className="text-justify">
            NB: warna & bentuk frame terus diupdate, info varian terbaru bisa
            Anda tanyakan kepada upline / lider terdekat
          </p>
        </div>

        <div
          className={`w-full relative max-w-[500px] m-auto transition-all overflow-hidden bg-white rounded-lg p-3 font-poppins mt-5`}
        >
          <p className="text-justify">
            BAHAN FRAME : Thermoplastic Rubber (TR90) yang memiliki bingkai
            lentur warna tidak luntur dan ringan saat dipakai
          </p>
        </div>

        <div
          className={`w-full relative max-w-[500px] m-auto transition-all overflow-hidden bg-white rounded-lg p-3 font-poppins mt-5`}
        >
          <p>MANFAAT INE :</p>

          <ul className="mt-3y">
            {benefits.map((benefit, index) => (
              <li className="mt-3 flex items-start gap-2" key={index}>
                <span>👉</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`w-full relative max-w-[500px] m-auto transition-all overflow-hidden bg-white rounded-lg p-3 font-poppins mt-5`}
        >
          <p>CARA KERJA INE :</p>

          <ul className="mt-3">
            {steps.map((step, index) => (
              <li key={index} className="mt-3 flex items-start gap-2">
                <span>👉</span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`w-full relative max-w-[500px] m-auto transition-all overflow-hidden bg-white rounded-lg p-3 font-poppins mt-5`}
        >
          <p>CARA PEMAKAIAN :</p>

          <p className="mt-3 text-justify">
            gunakan min. 8 jam/ hari untuk terapi
          </p>
        </div>

        <div
          className={`w-full relative max-w-[500px] m-auto transition-all overflow-hidden bg-white rounded-lg p-3 font-poppins mt-5`}
        >
          <p>KENAPA HARUS KACAMATA ION BIGENMI⁉️</p>

          <p className="mt-3 text-justify">
            Sudah banyak yg membutikan dan merasakan manfaat nya...
          </p>

          <p className="mt-3 text-justify">
            Manfaat Kacamata Terapi ION NANO EYEGLASSES BIGENMI
          </p>

          <p className="mt-3">Membantu terapi 👉</p>

          <ul className="mt-3 text-justify">
            {items.map((item, index) => (
              <li key={index} className="mt-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KacamataPage;
