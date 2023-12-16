import Layout from "../../components/Layout";
import './home.css';
import Container from '@mui/material/Container';


const Home = () => {
    return (
        <Layout>
            <section className="w-full bg-no-repeat bg-cover bg-center relative">
                <section className="parallax-section "> {/* Ajusta el margen superior según sea necesario */}
                    <div className="parallax-container ">
                        <div className="parallax-image " style={{ backgroundImage: "url(https://i.postimg.cc/YSxpsx21/portada.jpg)" }}></div>
                    </div>
                </section>
            </section>
            <Container maxWidth="xl">
                <div className="w-full">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div className="flex flex-col md:w-1/2">
                            <h1 className="text-4xl font-bold text-center md:text-left md:text-5xl lg:text-6xl">Fly Alone</h1>
                            <p className="text-center text-lg md:text-left md:text-xl lg:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <img className="w-full" src="https://i.postimg.cc/7YRnFHrT/log.png" alt="Fly Alone" />
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Home;
