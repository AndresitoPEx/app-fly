import React from 'react';
import Layout from "../../components/Layout";
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import './about.css';

const About = () => {
  return (
    <Layout>
      <section className="custom-parallax">
        <section className="custom-parallax-section">
          <div className="custom-parallax-container">
            <div className="custom-parallax-image" style={{ backgroundImage: "url(https://i.postimg.cc/P5XS2dKW/img2ok.jpg)" }}>
              <div className="custom-overlay w-full">
                <div className="custom-flex-container">
                  <Typography variant="h4" className="custom-italic custom-message-text custom-text-gray">
                    SOBRE NOSOTROS
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Container maxWidth="lg" className="custom-bg-black">
        <section className="custom-section">
          <div className="custom-container">
            <div className="custom-flex-container custom-grid-cols-2 custom-p-20">
              <div className="custom-image-container">
                <img src="https://i.postimg.cc/7YRnFHrT/log.png" alt="Fly" className="custom-image" />
              </div>
              <div className="custom-flex-container custom-justify-center">
                <blockquote className="custom-italic custom-text-2xl custom-text-gray custom-font-thin mb-4 custom-tracking-wide">
                  Eleva tus imágenes a nuevas alturas con creaciones únicas que capturan la esencia de la elegancia y la creatividad. Descubre cómo puedes tener alas personalizadas pueden añadir un toque mágico a tus fotos, creando momentos inolvidables que perdurarán para siempre.
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default About;
