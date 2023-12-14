import Layout from "../../components/Layout";
import './home.css';
import Container from '@mui/material/Container';

const Home = () => {
    return (
        <Layout>
            <section className="w-full">
                <section className="parallax-section "> {/* Ajusta el margen superior según sea necesario */}
                    <div className="parallax-container ">
                        <div className="parallax-image " style={{ backgroundImage: "url(https://i.postimg.cc/1X1CNTgw/img1.jpg)" }}></div>
                    </div>
                </section>
            </section>
            <div className="bg-gray-100 w-full">
                <Container maxWidth="xl">

                </Container>
            </div>
        </Layout>
    );
};

export default Home;
