import React from "react";
import NextLink from "next/link";
import { ReactPhotoCollage } from "react-photo-collage";
import { BiArrowBack } from "react-icons/bi";

const setting = {
  height: ["175px"],
  layout: [2],
  photos: [
    { source: "/images/facialWash1.jpg" },
    { source: "/images/facialWash2.jpg" },
  ],
};

const FacialWashPage = () => {
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
          BI-WASH
        </p>
      </div>

      <div className="m-auto max-w-[500px] overflow-hidden mt-10">
        <ReactPhotoCollage width="100%" {...setting} />
      </div>

      <div
        className={`w-full relative max-w-[500px] m-auto transition-all text-justify overflow-hidden bg-white rounded-lg p-3 font-poppins mt-10`}
      >
        <h2 className="font-semibold text-center text-xl">BI WASH..</h2>

        <div className="mt-5 text-justify">
          <p>Berproses secara natural yaa...🍃</p>
          <p className="mt-2">
            Enggak ujuk ujuk sim salabim langsung kinclong...
          </p>
        </div>

        <div className="h-1 w-full bg-black bg-opacity-70 my-5 rounded-full"></div>

        <div className="mt-5 text-justify">
          <p>Inilah BI WASH lovers yg kulitnya sehat, natural...</p>
          <p className="mt-2">
            BI WASH aman (sudah BPOM) & hasilnya ngga INSTAN y Dears😍
          </p>
          <p className="mt-2">
            Nikmati setiap tetesnya untuk menuju kulit sehat dan cantik
          </p>
        </div>

        <div className="h-1 w-full bg-black bg-opacity-70 my-5 rounded-full"></div>

        <p>Yukkk sayangi diri dg perawatan yg aman, hasil maksimal...</p>

        <div className="h-1 w-full bg-black bg-opacity-70 my-5 rounded-full"></div>

        <div className="mt-5 text-justify">
          <p>BI WASH</p>
          <p className="mt-2">just try It & U will Love It😘</p>
        </div>
      </div>
    </div>
  );
};

export default FacialWashPage;
