import React from 'react'

function Carousel() {
  const imgList = [
    "https://shorturl.at/U4rkM",
    "https://shorturl.at/NlDls",
    "https://shorturl.at/2sBKp",
    "https://shorturl.at/XyV0b"
  ];

  return (
    <div id="animation-carousel" className="relative w-[95%] md:w-[75%]" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-[35rem]">
        <Helper imgList={imgList} />
      </div>
    </div>
  );
}

function Helper({ imgList }) {
  const divClass = "hidden duration-200 ease-linear";
  const imgClass = "absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2";

  return (
    <>
      {imgList.map((img, index) => (
        <div key={index} className={divClass} data-carousel-item>
          <img src={img} className={imgClass} alt="..." />
        </div>
      ))}
    </>
  );
}

export default Carousel;
