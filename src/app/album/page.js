import Image from "next/image";
import banner from "@/assets/banner-7.jpg";
const AlbumPage = () => {
  return (
    <div className="flex gap-4">
      <Image
        src="https://i.ibb.co/G2LrT0C/bibimbap.png"
        width={500}
        height={500}
        alt="FoodImg"
      />
      <Image src={banner} width={500} height={500} alt="FoodImg" />
      {/*       <img
        src="https://i.ibb.co/G2LrT0C/bibimbap.png"
        width={500}
        height={500}
        alt="FoodImg"
      /> */}
    </div>
  );
};

export default AlbumPage;
