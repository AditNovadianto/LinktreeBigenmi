import React from "react";
import NextLink from "next/link";
import { ReactPhotoCollage } from "react-photo-collage";
import { BiArrowBack } from "react-icons/bi";

const setting = {
  height: ["350px", "87.5px", " 125px", "175px", "350px"],
  layout: [1, 4, 3, 2, 1],
  photos: [
    { source: "/images/pendant1.jfif" },
    { source: "/images/pendant2.jfif" },
    { source: "/images/pendant3.jfif" },
    { source: "/images/pendant4.jfif" },
    { source: "/images/pendant5.jfif" },
    { source: "/images/pendant6.jfif" },
    { source: "/images/pendant7.jfif" },
    { source: "/images/pendant8.jfif" },
    { source: "/images/pendant9.jfif" },
    { source: "/images/pendant10.jfif" },
    { source: "/images/pendant11.jpg" },
  ],
};

const benefits = [
  "Tubuh lebih menjadi bertenaga",
  "Tubuh menjadi lebih segar",
  "Mengurangi kadar lemak dan kolestrol jahat dalam darah",
  "Melancarkan peredaran darah",
  "Mengurangi efek radiasi",
  "Mengurangi sakit pinggang atau perut saat menstruasi",
  "Mengurangi #sakitkepala",
  "Mengontrol tekanan darah pada penderita #hipertensi",
  "Meningkatkan kekuatan dan keseimbangan tubuh",
  "Mengurangi penggumpalan sel",
  "Mencegah berkembangnya sel kanker",
  "Mengurangi kerusakan DNA akibat radikal bebas",
  "Mengurangi ketegangan sistem syaraf",
];

const KalungPage = () => {
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
          YOUNG ENERGY PENDANT (YEP)
        </p>
      </div>

      <div className="m-auto max-w-[500px] overflow-hidden mt-10">
        <ReactPhotoCollage width="100%" {...setting} />
      </div>

      <div
        className={`w-full relative max-w-[500px] m-auto transition-all overflow-hidden bg-white rounded-lg p-3 font-poppins mt-10`}
      >
        <h2 className="font-semibold text-center text-xl">
          BUKAN KALUNG BIASA
        </h2>

        <p className="mt-5">
          Dengan pemakaian teratur YEP dapat merasakan manfaat :
        </p>

        <ul>
          {benefits.map((benefit, index) => (
            <li className="flex items-start gap-2 mt-3" key={index}>
              <span>✨</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KalungPage;
