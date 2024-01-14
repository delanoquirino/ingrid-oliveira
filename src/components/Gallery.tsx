"use client";

/* eslint-disable @next/next/no-img-element */
import { ImageList, ImageListItem } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";

const images = [
  {
    img: "/img/gallery/gallery1.jpg",
    title: "gallery1",
  },
  {
    img: "/img/gallery/gallery2.jpg",
    title: "gallery2",
  },
  {
    img: "/img/gallery/gallery3.jpg",
    title: "gallery3",
  },
  {
    img: "/img/gallery/gallery4.jpg",
    title: "gallery4",
  },
  {
    img: "/img/gallery/gallery5.jpg",
    title: "gallery5",
  },
  {
    img: "/img/gallery/gallery6.jpg",
    title: "gallery6",
  },

  {
    img: "/img/gallery/gallery8.jpg",
    title: "gallery8",
  },
  {
    img: "/img/gallery/gallery9.jpg",
    title: "gallery9",
  },
];

export const Gallery = () => {
  const isMediumScreen = useMediaQuery("(max-width: 900px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const getCols = () => {
    if (isSmallScreen) {
      return 2;
    } else if (isMediumScreen) {
      return 3;
    } else {
      return 4;
    }
  };

  const getStyle = () => {
    return {
      width: isSmallScreen ? "70%" : isMediumScreen ? "70%" : "100%",
      height: isSmallScreen ? "70%" : isMediumScreen ? "70%" : "100%",
    };
  };

  return (
    <ImageList
      variant="woven"
      cols={getCols()}
      style={getStyle()}
      className="mx-auto"
    >
      {images.map((image, index) => (
        <div
          className=""
          key={index}
         
        >
          <ImageListItem>
            <img
              srcSet={`${image.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${image.img}?w=161&fit=crop&auto=format`}
              alt={image.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="lazy"
            />
          </ImageListItem>
        </div>
      ))}
    </ImageList>
  );
};
