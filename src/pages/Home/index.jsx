import React from 'react';
import Layout from "../../components/Layout";
import Container from '@mui/material/Container';
import { Typography, Card, CardContent, CardMedia, Button, Divider } from '@mui/material';
import './home.css';
import SponsorSection from '../../components/Sponsors';
import OverlayComponent from '../../components/Overlay';


const backgroundImage = "https://i.postimg.cc/YSxpsx21/portada.jpg";
const logoImage = "https://i.postimg.cc/7YRnFHrT/log.png";
const artista = "https://i.postimg.cc/qMZrPTwK/sadham.jpg";

const Home = () => {
    return (
        <Layout>
            <Divider className="my-4"
                style={{ backgroundColor: "#D9A86C" }}
            />
            <section className="w-full bg-no-repeat bg-cover bg-center relative">
                <section className="parallax-section">
                    <div className="parallax-container relative">
                        <div className="parallax-image " style={{ backgroundImage: `url(${backgroundImage})` }}>
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

            <Divider className="my-4"
                style={{ backgroundColor: "#D9A86C" }}
            />

            <Container maxWidth="lg">
                {/* Sección del artista invitado */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10'>
                    <section className="p-2 w-full text-center">
                        <Card className="max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
                            <CardMedia
                                component="img"
                                height="400"
                                alt="Sadham Jose"
                                src={artista}
                            />
                            <CardContent
                                className="bg-gray-100"
                            >
                                <Typography variant="h5" component="div" className="font-bold mb-2">
                                    Sadham José
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Artista Invitado
                                </Typography>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="p-2 w-full text-center">
                        <div className="bg-black border-2 rounded-lg p-6 shadow-lg mb-10">
                            <Typography variant="h4" className="italic text-gray-100 font-bold mb-4">
                                Más allá de la moda. Un evento para compartir
                            </Typography>
                        </div>
                        <Typography variant="body1" className="italic text-gray-100 mb-4 tracking-wide">
                            Tu participación contribuirá a llevar alegría y regalos a comunidades necesitadas en el Valle del Mantaro, siendo distribuidos personalmente por nuestro artista invitado, Sadham José.

                        </Typography>

                        <Typography variant="body1" className="italic text-gray-100 mb-4 tracking-wide">
                            ¡Únete a nosotros!
                        </Typography>

                    </section>
                </div>
            </Container>


            <SponsorSection />


            <section className="bg-black p-10 text-center">
                <img src={'https://i.postimg.cc/wjsQHC94/im0.png'} alt="Logo" className="w-1/2 lg:w-1/6 mx-auto mb-6" />

                <Typography variant="body1" className="text-gray-100 mb-6">
                    Descubre un evento especial de moda donde modelos desfilarán con alas de fantasía.
                </Typography>

                <Typography variant="h6" className="italic text-gray-100 mb-4">
                    Desfile de Alas y Moda
                </Typography>

                <Typography variant="body1" className="text-gray-100 mb-4">
                    <strong>Miércoles 20 de diciembre</strong> - Hora: <strong>4:30 pm</strong>
                </Typography>

                <Typography variant="body1" className="text-gray-100 mb-4">
                    ¡Ayúdanos a llevar alegría a los más necesitados! Estamos recolectando viveres, juguetes y regalos para las zonas más pobres del Valle del Mantaro.
                </Typography>

                <div className="flex justify-center mb-6">
                    {/* Agrega imágenes relacionadas con el evento */}
                    <img src={'https://i.postimg.cc/wjsQHC94/im0.png'} alt="Imagen1" className="w-1/3 mx-2" />
                    <img src={'https://i.postimg.cc/wjsQHC94/im0.png'} alt="Imagen2" className="w-1/3 mx-2" />
                    {/* Puedes agregar más imágenes según sea necesario */}
                </div>

                <Button variant="contained" color="primary">
                    Únete a nosotros
                </Button>
            </section>

        </Layout>
    );
};

export default Home;
