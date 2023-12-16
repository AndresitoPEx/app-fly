import Layout from "../../components/Layout";
import './home.css';
import Container from '@mui/material/Container';
import { Divider, Typography } from "@mui/material";

const Home = () => {


    return (
        <Layout>
            <section className="w-full bg-no-repeat bg-cover bg-center relative">
                <section className="parallax-section "> {/* Ajusta el margen superior según sea necesario */}
                    <div className="parallax-container ">
                        <div className="parallax-image " style={{ backgroundImage: "url(https://i.postimg.cc/YSxpsx21/portada.jpg)" }}>

                        </div>
                        <Typography variant="h4" className="message-text text-gray-100 pt-10">
                            Conquista tu cielo.
                        </Typography>
                        <Typography variant="h4" className="message-text text-gray-100">
                            Despliega tu elegancia,
                        </Typography>
                        
                    </div>
                </section>
            </section>
            <Container maxWidth="xl">

                <section className="py-10 bg-black w-full">
                    <div className="container mx-auto text-center">
                        <h2 className="  text-3xl font-bold mb-6">Fly Alone</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="
                            flex flex-col justify-center items-center md:items-start">
                                <img src="https://i.postimg.cc/7YRnFHrT/log.png" alt="Fly" className="w-2/3 object-cover mb-4" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <blockquote className="italic text-2xl text-gray-300 font-bold mb-4 tracking-wide">
                                    Diseño de alas exclusivas para realzar tus sesiones fotográficas. Eleva tus imágenes a nuevas alturas con creaciones únicas que capturan la esencia de la elegancia y la creatividad. Descubre cómo mis alas personalizadas pueden añadir un toque mágico a tus fotos, creando momentos inolvidables que perdurarán para siempre
                                </blockquote>

                            </div>
                        </div>
                    </div>
                </section>

                <Divider />

            </Container>
        </Layout>
    );
};

export default Home;
