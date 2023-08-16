import Link from "@/components/Link";
import React, { useState } from "react";

const products = [
  "💕 GLEAMING BEAUTY SLIM (GBS) Supplement pendamping diet dengan formula siang malam yg bermanfaat untuk memberbaiki metabolisme tubuh, membakar lemak & menurunkan berat badan secara optimal.",
  "💕 GLEAMING BEAUTY DRINK (GBD) Minuman serbuk rasa strawberry yang mengandung Collagen dan Glutathione yg berfungsi sbg antiokasidan, bermanfaat untuk mengencangkan kulit, mengurangi kerutan, mencerahkan kulit, mencegah penuaan dini, dll",
  "💕 BI-WASH Facial Wash dg kandungan collagen & bbrapa bahan utama lainya yg memiliki tripple function, yaitu membersihkan kulit dg optimal, melembabkan + menjaga elastisitas kulit, serta menutrisi + mencerahkan kulit sehingga kulit tampak glowing bercahaya.",
  "💕 SKINCLAIRE Body Butter dg kandungan niacinamide & DNA Salmon, dan beberapa bahan terbaik lainya yg efektif untuk menutrisi kulit sehingga kulit menjadi lebih cerah, lembab, elastis & terlindungi dr paparan sinar matahari.",
  "💕 ION NANO EYEGLASSES (INE) Kacamata terapi yang kaya akan ION Negatif sampai dengan 2300 ION dan Sinar Infra Merah yang dapat membantu terapi keluhan mata, menutrisi mata dan area sekitarnya sehingga kesehatan mata selalu terjaga.",
  "💕 YOUNG ENERGY PENDANT (YEP) Kalung Kesehatan yg mengandung ion negatif sebagai zat atau mineral yang dibutuhkan tubuh sebagai anti kanker. YEP dapat memancarkan Far Infra Red (FIR), energi scalar atau pemacu energi yang dapat bekerja hanya dalam 10 detik ke dalam tubuh kita.",
];

const HomePage = () => {
  const [show, setShow] = useState(false);

  const showTextHandler = () => {
    setShow(true);
  };

  console.log(show);

  return (
    <div
      style={{ backgroundImage: "url(/images/backgroundImage.jpg)" }}
      className="min-h-screen bg-center bg-blend-darken bg-cover py-10 px-7 bg-no-repeat"
    >
      <div className="fixed inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-[500px] m-auto">
        <div className="rounded-full p-2 w-24 overflow-hidden m-auto bg-white">
          <img className="" src="/images/logo.png" alt="" />
        </div>

        <div>
          <h1 className="text-center text-white font-poppins font-semibold mt-5 text-xl">
            TiniBigenmi
          </h1>
          <p className="text-center mt-2 text-white font-poppins text-base">
            Healt care products
          </p>
        </div>

        <div
          className={`${
            show ? "h-max" : "h-[170px]"
          } w-full relative transition-all overflow-hidden bg-white rounded-lg p-3 font-poppins mt-10`}
        >
          <h2 className="font-semibold text-center text-xl">PRODUK2 BIGENMI</h2>

          <ul
            className={`${
              show ? "h-max mt-5" : "h-[100px] overflow-hidden"
            } text-justify`}
          >
            {products.map((product, index) => (
              <li className="mt-5" key={index}>
                {product}
              </li>
            ))}
          </ul>

          <button
            onClick={showTextHandler}
            className={`${
              show ? "hidden" : "absolute bottom-0"
            } mt-3 text-right text-blue-500`}
          >
            Baca Selengkapnya...
          </button>
        </div>

        <div className="mt-10">
          <Link
            images={[
              "/images/pendant1.jfif",
              "/images/pendant2.jfif",
              "/images/pendant3.jfif",
              "/images/pendant4.jfif",
              "/images/pendant5.jfif",
            ]}
            href="/kalung"
            name="YOUNG ENERGY PENDANT (YEP)"
          />

          <div className="h-1 w-full bg-black bg-opacity-70 my-5 rounded-full"></div>

          <Link
            images={[
              "/images/kacamata1.jpg",
              "/images/kacamata2.jpg",
              "/images/kacamata3.jpg",
              "/images/kacamata4.jpg",
              "/images/kacamata5.jpg",
              "/images/kacamata6.jpg",
              "/images/kacamata7.jpg",
              "/images/kacamata8.jpg",
            ]}
            href="/kacamata"
            name="ION NANO EYEGLASSES (INE)"
          />

          <div className="h-1 w-full bg-black bg-opacity-70 my-5 rounded-full"></div>

          <Link
            images={[
              "/images/gleaming1.jpg",
              "/images/gleaming2.jpg",
              "/images/gleaming3.jpg",
              "/images/gleaming4.jpg",
              "/images/gleaming5.jpg",
            ]}
            href="/gleaming"
            name="GLEAMING BEAUTY SLIM AND DRINK"
          />

          <div className="h-1 w-full bg-black bg-opacity-70 my-5 rounded-full"></div>

          <Link
            images={["/images/facialWash1.jpg", "/images/facialWash2.jpg"]}
            href="/facialWash"
            name="BI-WASH"
          />

          <div className="h-1 w-full bg-black bg-opacity-70 my-5 rounded-full"></div>

          <Link
            images={[
              "/images/skinAndFacial1.jpg",
              "/images/skinAndFacial2.jpg",
              "/images/skinAndFacial3.jpg",
              "/images/skinAndFacial4.jpg",
              "/images/skinAndFacial5.jpg",
              "/images/skinAndFacial6.jpg",
            ]}
            href="/skinAndFacial"
            name="SKINCLAIRE"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
