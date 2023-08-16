import React from "react";
import NextLink from "next/link";
import { ReactPhotoCollage } from "react-photo-collage";
import { BiArrowBack } from "react-icons/bi";

const setting = {
  height: ["350px", "87.5px"],
  layout: [1, 4],
  photos: [
    { source: "/images/gleaming1.jpg" },
    { source: "/images/gleaming2.jpg" },
    { source: "/images/gleaming3.jpg" },
    { source: "/images/gleaming4.jpg" },
    { source: "/images/gleaming5.jpg" },
  ],
};

const faqs = [
  {
    question: "Gleaming diminum berapa kali sehari?",
    answer:
      "1-2 kali sehari, selanjutnya bisa 3-4 kali seminggu utk perawatan dari dalam",
  },
  {
    question: "Kapankan waktu terbaik minum gleaming?",
    answer:
      "Bisa diminum kapan saja, tpi di anjurkan malam hari sebelum tidur.",
  },
  {
    question: "Siapa saja yang boleh meninum gleaming?",
    answer:
      "Siapapun bisa meminum gleaming, termasuk ibu hamil & menyusui, juga anak2 (diatas 2th) dan lansia. Untuk anak2 dan lansia di anjurkan bertahap dr setengah porsi dulu.",
  },
  {
    question: "Kenapa gleaming dikatakan bagus untuk bumil & busui?",
    answer:
      "Gleaming mengandung tinggi kalsium yg bagus utk kesehatan & kepadatan tulang dan gigi bagi ibu&janin/bayi",
  },
  {
    question: "Apakah gleaming aman untuk penderita magh?",
    answer:
      "Aman karena kompoisisi dari gleaming ramah untuk lambung (teruama ekstrak malt nya). Silakan cek & pelajari lagi komposisinya ya.",
  },
  {
    question: "Bagaimana bisa gleaming dikatakan mampu mendetoks sistem tubuh?",
    answer:
      "Glutathione dlm gleaming berperan dlm reaksi kimia tubuh untuk membantu mengeluarkan racun, baik yg dr dlm tubuh sndiri maupun dr obat2an yang dikonaumsi & lingkungan sekitar",
  },
  {
    question: "Apakah gleaming bisa diberikan kepada anak dg kondisi autisme?",
    answer:
      "Anak dengan autisme mengalami kerusakan otak akibat adanya proses oksidatif yang tinggi di sistem saraf. Proses tersebut juga bisa disebabkan karena kurangnya jumlah glutathione dalam tubuh si kecil.Glutathione dlm gleaming bs membantu mencegah kerusakan otal lebih parah lagi. Gleaming bisa di erikan, tapi sebaiknya dikonsultasikan kepada dokter dulu.",
  },
  {
    question: "Berapa lama hasil gleaming mulai terlihat?",
    answer:
      "Untuk mencerahkan kulit yaitu seminggu sdh mulai terasa hasil nya secara bertahap. Untuk kesehatan yaitu hitungan jam& hari sdh mulai terlihat",
  },
  {
    question: "Organ tubuh apa yang paling bisa merasakan manfaat gleaming?",
    answer:
      "Manfaat gleaming bisa menjangkau hampir seluruh organ dalam tubuh kita, mulai dr ujung kuku sampai ujung rambut, bahkan kinerjanya sampai pd tingkat sel",
  },
];

const GleamingPage = () => {
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
          GLEAMING BEAUTY SLIM AND DRINK
        </p>
      </div>

      <div className="m-auto max-w-[500px] overflow-hidden mt-10">
        <ReactPhotoCollage width="100%" {...setting} />
      </div>

      <div
        className={`w-full relative max-w-[500px] m-auto transition-all overflow-hidden bg-white rounded-lg p-3 font-poppins mt-10`}
      >
        <h2 className="font-semibold text-center text-xl">FAQ GBD BIGENMI</h2>

        <div>
          {faqs.map((faq, index) => (
            <>
              <div className="mt-5" key={index}>
                <p className="font-semibold flex items-start gap-2">
                  <span>🍓</span>
                  {faq.question}
                </p>
                <p className="mt-1">{faq.answer}</p>
              </div>

              <div className="h-1 w-full bg-black bg-opacity-70 my-5 rounded-full"></div>
            </>
          ))}
        </div>

        <p className="mt-5 text-justify">
          Masih ragu untuk mengkonsumi si multitasking nutrisi ini?
        </p>

        <p className="mt-5 text-justify">
          Pantang percaya sebelum membuktikanya❗
        </p>
      </div>
    </div>
  );
};

export default GleamingPage;
