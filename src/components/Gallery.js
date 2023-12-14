import React, { useState } from 'react';
import Image from './Image'; 

const Gallery = ({ imagesPerPage }) => {
  const images = [
    ' /images/A2_4k.jpg ',
    ' /images/Akali_4k.jpg ',
    ' /images/Arena_4k.jpg ',
    ' /images/ball_4k.jpg ',
    ' /images/bg166Final2 (2).jpg ',
    ' /images/BG1_6D.jpg ',
    ' /images/BG2_1D.jpg ',
    ' /images/BG2_4B.jpg ',
    ' /images/BG2_6B.jpg ',
    ' /images/BlackSwan2_4k.jpg ',
    ' /images/BlackSwan3_4k.jpg ',
    ' /images/BlackSwan4_4k.jpg ',
    ' /images/Black_4k.jpg ',
    ' /images/BR1F.jpg ',
    ' /images/BR5.jpg ',
    ' /images/Bride_4k.jpg ',
    ' /images/Butterfly_4k.jpg ',
    ' /images/Cage2_4k.jpg ',
    ' /images/Cage3_4k.jpg ',
    ' /images/Cage_4k.jpg ',
    ' /images/Ceremonial3_4k.jpg ',
    ' /images/change12B2.jpg ',
    ' /images/change1A22test3.jpg ',
    ' /images/Change2A6.jpg ',
    ' /images/Change71A.jpg ',
    ' /images/change7A32.jpg ',
    ' /images/civilization_4k.jpg ',
    ' /images/Comb_4k.jpg ',
    ' /images/Connection.jpg ',
    ' /images/Coronation.jpg ',
    ' /images/crown_4k.jpg ',
    ' /images/Curse_dnf_4k.jpg ',
    ' /images/Curtesey_4k.jpg ',
    ' /images/Dads_4k.jpg ',
    ' /images/Dance_4k.jpg ',
    ' /images/dream.jpg ',
    ' /images/dressing.jpg ',
    ' /images/Duel_4k.jpg ',
    ' /images/Fate_anniversary_4k.jpg ',
    ' /images/Father_4k.jpg ',
    ' /images/ff7.jpg ',
    ' /images/fly_4k.jpg ',
    ' /images/freak.jpg ',
    ' /images/God_of_War.jpg ',
    ' /images/Guard_4k.jpg ',
    ' /images/guweiz 1.jpg ',
    ' /images/guweiz 13.jpg ',
    ' /images/guweiz 2.jpg ',
    ' /images/guweiz 24.jpg ',
    ' /images/guweiz 26.jpg ',
    ' /images/guweiz 3.jpg ',
    ' /images/guweiz 33.jpg ',
    ' /images/guweiz 34.jpg ',
    ' /images/guweiz 36.jpg ',
    ' /images/guweiz 38.jpg ',
    ' /images/guweiz 4.jpg ',
    ' /images/guweiz 40.jpg ',
    ' /images/guweiz 41.jpg ',
    ' /images/guweiz 42.jpg ',
    ' /images/guweiz 44.jpg ',
    ' /images/guweiz 45.jpg ',
    ' /images/guweiz 46.jpg ',
    ' /images/guweiz 5.jpg ',
    ' /images/guweiz 6.jpg ',
    ' /images/guweiz 8.jpg ',
    ' /images/guweiz 9.jpg ',
    ' /images/Gwent_4k.jpg ',
    ' /images/Gyarados_4k.jpg ',
    ' /images/Hawk_4k.jpg ',
    ' /images/Hometown_4k.jpg ',
    ' /images/hunter.jpg ',
    ' /images/Ice Princess_4k.jpg ',
    ' /images/Jade_4k.jpg ',
    ' /images/Jewel_4k.jpg ',
    ' /images/journey_4k.jpg ',
    ' /images/Kainé_4k.jpg ',
    ' /images/LakeP3_2.jpg ',
    ' /images/Landing_4k.jpg ',
    ' /images/lion.jpg ',
    ' /images/LonelyParade_4k.jpg ',
    ' /images/LunarNewYear2_4k.jpg ',
    ' /images/Lylian 3_4k.jpg ',
    ' /images/Lylian2_4k.jpg ',
    ' /images/makeup_8k.jpg ',
    ' /images/mirror.jpg ',
    ' /images/morning 2 4k.jpg ',
    ' /images/Morning2_4k.jpg ',
    ' /images/Motorcycle_4k.jpg ',
    ' /images/nap2_4k.jpg ',
    ' /images/nap3_4k.jpg ',
    ' /images/Nap_4k.jpg ',
    ' /images/OceanDream1_4k.jpg ',
    ' /images/OceanDream2_4k.jpg ',
    ' /images/OceanDream3_4k.jpg ',
    ' /images/painter_4k.jpg ',
    ' /images/piano1_4k.jpg ',
    ' /images/piano2_4k.jpg ',
    ' /images/Piano3_4k.jpg ',
    ' /images/Princess_4k.jpg ',
    ' /images/reading_4k.jpg ',
    ' /images/reflection_4k.jpg ',
    ' /images/Reign_4k.jpg ',
    ' /images/Saber Lily_4k.jpg ',
    ' /images/Saber_4k.jpg ',
    ' /images/sacrifice2_4k.jpg ',
    ' /images/Sea_4k.jpg ',
    ' /images/sekiro_4k.jpg ',
    ' /images/selfie1A9F2B.jpg ',
    ' /images/SG22F.jpg ',
    ' /images/Shadow (1)_4k.jpg ',
    ' /images/Shadow (4)_4k.jpg ',
    ' /images/Shooting_4k.jpg ',
    ' /images/Silence_4k.jpg ',
    ' /images/sin2_4k.jpg ',
    ' /images/sky24k.jpg ',
    ' /images/Smile_4k.jpg ',
    ' /images/Snowy2_4k.jpg ',
    ' /images/stairs1_4k.jpg ',
    ' /images/summer_4k.jpg ',
    ' /images/sunset.jpg ',
    ' /images/Sylvanas_4k.jpg ',
    ' /images/Tattoo_4k.jpg ',
    ' /images/Throne (1)_4k.jpg ',
    ' /images/Tower2C.jpg ',
    ' /images/trapped1_4k.jpg ',
    ' /images/trapped2_4k.jpg ',
    ' /images/trapped3_4k.jpg ',
    ' /images/trapped4_4k.jpg ',
    ' /images/Triumph_4k.jpg ',
    ' /images/ttguweiz_1261298227246100480_20200515_101145_img1.jpg ',
    ' /images/ttguweiz_1263836207806464001_20200522_101647_img1.jpg ',
    ' /images/ttguweiz_1290289407489011712_20200803_101221_img1.jpg ',
    ' /images/ttguweiz_1312757175387791360_20201004_101115_img4.jpg ',
    ' /images/Village2_4k.jpg ',
    ' /images/Village4_4k.jpg ',
    ' /images/Village_4k.jpg ',
    ' /images/violet2.jpg ',
    ' /images/War_4k.jpg ',
    ' /images/Watcher_4k.jpg ',
    ' /images/white2_4k.jpg ',
    ' /images/white_4k.jpg ',
    ' /images/Window_4k.jpg ',
    ' /images/wlop 10.jpg ',
    ' /images/wlop 11_4k.jpg ',
    ' /images/wlop 15.jpg ',
    ' /images/wlop 15_4k.jpg ',
    ' /images/wlop 16_4k.jpg ',
    ' /images/wlop 17_4k.jpg ',
    ' /images/wlop 18.jpg ',
    ' /images/wlop 27.jpg ',
    ' /images/wlop 32.jpg ',
    ' /images/wlop 33.jpg ',
    ' /images/wlop 34.jpg ',
    ' /images/wlop 40.jpg ',
    ' /images/wlop 55.jpg ',
    ' /images/wlop 57.jpg ',
    ' /images/wlop 60.jpg ',
    ' /images/Yu_4k.jpg ',
    // Добавьте пути к остальным изображениям
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(images.length / imagesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="gallery">
      {currentImages.map((image, index) => (
        <a key={index} href={image} target="_blank" rel="noopener noreferrer">
          <Image imageUrl={image} />
        </a>
      ))}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(images.length / imagesPerPage)}>
          Next
        </button>
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(images.length / imagesPerPage) }, (_, i) => i + 1).map(page => (
          <button key={page} onClick={() => paginate(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
