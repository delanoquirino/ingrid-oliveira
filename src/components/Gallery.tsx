/* eslint-disable @next/next/no-img-element */
import { Grid, ImageList, ImageListItem } from "@mui/material";

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
  return (
   
      <Grid item xs={12} md={8} lg={6}>
        <ImageList
          variant="woven"
          cols={4}
          gap={8}
          style={{ width: '100%', height: '100%' }}
        >
          {images.map((image, index) => (
            <ImageListItem key={index}>
              <img
                srcSet={`${image.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${image.img}?w=161&fit=crop&auto=format`}
                alt={image.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>

  );
};
