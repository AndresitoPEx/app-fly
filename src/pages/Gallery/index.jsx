import React from 'react';
import Layout from "../../components/Layout";
import Container from '@mui/material/Container';
import { Typography, Divider } from "@mui/material";

const logoImage = "https://i.postimg.cc/7YRnFHrT/log.png";

const Gallery = () => {
  return (
    <Layout>
      <section className="bg-black p-10 text-center">
        <img src={logoImage} alt="Logo" className="w-1/2 lg:w-1/6 mx-auto" />
      </section>
      <Container maxWidth="lg">
        {galleryItems.map((item, index) => (
          <GalleryItem key={index} {...item} reverse={index % 2 !== 0} />
        ))}
      </Container>
    </Layout>
  );
};

const galleryItems = [
  {
    title: "Diseño Exclusivo",
    image: "https://i.postimg.cc/zB9n0P9Y/346470286-2030320460646843-8578493562256325050-n.jpg",
    alt: "Fly",
    quote: "Diseñamos alas exclusivas para realzar tus sesiones fotográficas."
  },
  {
    title: "Piezas Únicas",
    image: "https://i.postimg.cc/MKCJKj9t/img3ok.jpg",
    alt: "Fly",
    quote: "Nuestro propósito es que cada par de alas sea una pieza única e irrepetible, que se adapte a la personalidad de cada cliente."
  },
  {
    title: "Toque Mágico",
    image: "https://i.postimg.cc/prNDqFzG/img4ok.jpg",
    alt: "Fly",
    quote: "Las alas son un accesorio que le da un toque mágico a tus fotografías, haciéndolas únicas e inolvidables."
  },
  {
    title: "Calidad Garantizada",
    image: "https://i.postimg.cc/mkC7qysz/349343546-1606212133231379-9218695645586412260-n.jpg",
    alt: "Fly",
    quote: "Nuestras alas son elaboradas con materiales de alta calidad, lo que garantiza su durabilidad y resistencia."
  },
];

const GalleryItem = ({ title, image, alt, quote, reverse }) => (
  <section className={`p-10 w-full ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
    <div className="container mx-auto text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center md:items-start">
          <img src={image} alt={alt} className="w-full object-cover mb-4 rounded-lg shadow-lg" />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <Typography variant="h2" className="italic text-gray-100 font-bold mb-4">
            {title}
          </Typography>
          <Typography variant="body1" className="italic text-gray-100 mb-4 tracking-wide">
            {quote}
          </Typography>
        </div>
      </div>
      <Divider className="my-4" 
      style={{ backgroundColor: "#D9A86C" }}
      />
    </div>
  </section>
);

export default Gallery;
