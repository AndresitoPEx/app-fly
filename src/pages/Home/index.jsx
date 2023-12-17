import React from 'react';
import Layout from "../../components/Layout";
import Container from '@mui/material/Container';
import { Typography, Button } from "@mui/material";
import './home.css';
import SponsorSection from '../../components/Sponsors';
import OverlayComponent from '../../components/Overlay';

const backgroundImage = "https://i.postimg.cc/YSxpsx21/portada.jpg";
const logoImage = "https://i.postimg.cc/7YRnFHrT/log.png";

const Home = () => {
    return (
        <Layout>
            <section className="w-full bg-no-repeat bg-cover bg-center relative">
                <section className="parallax-section">
                    <div className="parallax-container relative">
                        <div className="parallax-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
                        </div>
                    <OverlayComponent />
                        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:px-12 lg:px-24 p-20 h-full">
                            <Typography variant="h5" className="italic message-text text-gray-100">
                                Despliega tu <strong>elegancia</strong>,
                            </Typography>
                            <Typography variant="h5" className="italic message-text text-gray-100 pt-10">
                                Conquista tu <strong>cielo.</strong>
                            </Typography>
                        </div>
                    </div>
                </section>
            </section>

            <Container maxWidth="lg">
                <section className="p-20 w-full text-center">
                    <Typography variant="h3" className="italic text-gray-100 font-bold mb-4">
                        Más allá de la moda. Un evento para compartir
                    </Typography>
                    <Typography variant="body1" className="italic text-gray-100 mb-4 tracking-wide">
                        Descubre cómo nuestros modelos desfilarán no solo con elegantes alas de fantasía, sino también con el propósito de hacer una diferencia.
                        Tu participación contribuirá a brindar alegría y regalos a las comunidades más necesitadas del Valle del Mantaro.
                        ¡Súmate a la moda con un significado especial!
                    </Typography>
                </section>
            </Container>

            <SponsorSection />


            <section className="bg-black p-10 text-center">
                <img src={logoImage} alt="Logo" className="w-1/2 lg:w-1/6 mx-auto mb-6" />
                <Typography variant="body1" className="text-gray-100 mb-6">
                    Únete a nuestro evento especial de moda, donde modelos desfilarán con alas de fantasía.
                </Typography>
                <Typography variant="h6" className="italic text-gray-100 mb-4">
                    Desfile de Alas y Moda
                </Typography>
                <Typography variant="body1" className="text-gray-100 mb-4">
                    <strong>Miércoles 20 de diciembre</strong> - Hora: <strong>4:30 pm</strong>
                </Typography>
                <Typography variant="body1" className="text-gray-100 mb-8">
                    El evento se llevará a cabo en el <strong>Salón Dorado</strong>, Av. José Olaya #907, Huancayo, Perú.
                </Typography>
                <Typography variant="body1" className="text-gray-100 mb-6">
                    ¡Ayúdanos a llevar alegría a los más necesitados! Estamos recolectando viveres, juguetes y regalos para las zonas más pobres del Valle del Mantaro.
                </Typography>
                <Button variant="contained" color="primary">
                    Únete a nosotros
                </Button>
            </section>
        </Layout>
    );
};

export default Home;
