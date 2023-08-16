import React from "react";
import NextLink from "next/link";
import { ReactPhotoCollage } from "react-photo-collage";
import { BiArrowBack } from "react-icons/bi";

const setting = {
  height: ["350px", "125px", " 175px"],
  layout: [1, 3, 2],
  photos: [
    { source: "/images/skinAndFacial1.jpg" },
    { source: "/images/skinAndFacial2.jpg" },
    { source: "/images/skinAndFacial3.jpg" },
    { source: "/images/skinAndFacial4.jpg" },
    { source: "/images/skinAndFacial5.jpg" },
    { source: "/images/skinAndFacial6.jpg" },
  ],
};

const benefits = [
  {
    number: "Melembapkan kulit",
    text: "sebuah penelitian yang dimuat dalam International Journal of Cosmetic Science membuktikan bahwa mengoleskan krim mengandung DNA salmon 3% selama penggunaan 12 minggu secara rutin mampu melembapkan kulit sekaligus meningkatkan elastisitas pada kulit",
  },
  {
    number: "Mencerahkan kulit",
    text: "mencerahkan kulit yang kusam. DNA dalam sperma ikan salmon mengandung peptida yang dapat merangsang produksi kolagen sehingga kulit bisa tampak lebih cerah.",
  },
  {
    number: "Memperlambat tanda penuaan dini",
    text: "DNA salmon disebut mampu memperbaiki struktur jaringan kulit dan meregenerasi sel-sel kulit yang lama dengan yang baru berkat efek antiradang di dalamnya",
  },
  {
    number: "Mempercepat penyembuhan luka",
    text: "penggunaan krim mengandung DNA salmon dapat membantu luka bakar pada kulit cepat sembuh",
  },
  {
    number: "Melindungi kulit dari paparan sinar ultraviolet (UV)",
    text: "Manfaat DNA salmon diyakini dapat melindungi kulit dari kerusakan akibat paparan sinar UV yang berasal dari sinar matahari.",
  },
];

const SkinAndFacialPage = () => {
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
          SKINCLAIRE
        </p>
      </div>

      <div className="m-auto max-w-[500px] overflow-hidden mt-10">
        <ReactPhotoCollage width="100%" {...setting} />
      </div>

      <div
        className={`w-full relative max-w-[500px] m-auto transition-all overflow-hidden bg-white rounded-lg p-3 font-poppins mt-10`}
      >
        <h2 className="font-semibold text-center text-xl">
          SKINCLAIRE BODY BUTTER
        </h2>

        <p className="mt-5 text-justify">
          APA SIH MANFAAT DNA SALMON PADA KANDUNGAN SKINCLAIRE BODY BUTTER?
        </p>

        <p className="mt-5 text-justify">
          Beberapa ahli dermatologi menyatakan bahwa DNA yang terdapat dalam
          sperma ikan salmon dipercaya baik untuk kesehatan dan kecantikan
          kulit. Bahkan, hal ini didukung pula oleh sejumlah hasil penelitian.
        </p>

        <p className="mt-5 text-justify">
          Adapun berbagai klaim manfaat DNA salmon untuk kulit adalah sebagai
          berikut.
        </p>

        <div className="mt-5">
          {benefits.map((benefit, index) => (
            <div key={index} className="mt-5">
              <p className="font-semibold flex items-start gap-2">
                <span>{(index += 1)}. </span>
                {benefit.number}
              </p>
              <p className="mt-2">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkinAndFacialPage;
