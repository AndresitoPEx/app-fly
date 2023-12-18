// SponsorSection.js
import './sponsors.css';
import Slider from 'react-slick';
import { Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';




const SponsorSection = () => {
    // Lista de URLs de las imágenes de los patrocinadores
    const sponsors = [
        'https://i.postimg.cc/rpzMq8pc/sponsor0.jpg',
        'https://i.postimg.cc/6QSw3D7Z/sponsor1.jpg',
        'https://i.postimg.cc/MTQwjdRF/sponsor2.jpg',
        'https://i.postimg.cc/FF0mrChf/sponsor3.jpg',
        'https://i.postimg.cc/qM0rzc71/sponsor4.jpg',
        'https://i.postimg.cc/WbnvrDFT/sponsor5.jpg',
        'https://i.postimg.cc/fy7h8y87/sponsor6.jpg',
        'https://i.postimg.cc/3NQTjmFJ/sponsor7.jpg',
        'https://i.postimg.cc/522MmxLv/sponsor8.jpg',
        'https://i.postimg.cc/Mp3JPhmL/sponsor9.jpg',
        'https://i.postimg.cc/CKWTYktH/sponsor10.jpg',
        'https://i.postimg.cc/k4Kr5DPr/sponsor11.jpg',
        'https://i.postimg.cc/SRhBYqmn/sponsor12.jpg',
        'https://i.postimg.cc/tCX0XXrf/sponsor13.jpg',
        'https://i.postimg.cc/c17yyKcw/sponsor14.jpg',
        'https://i.postimg.cc/XqkTwhvQ/sponsor15.jpg',
        'https://i.postimg.cc/fT5Gy6pb/sponsor16.jpg',
        'https://i.postimg.cc/DwMRd12k/sponsor17.jpg',
        'https://i.postimg.cc/MpThQ9Jm/sponsor18.jpg',
        'https://i.postimg.cc/rm6b7c0f/sponsor19.jpg',
        'https://i.postimg.cc/tThfjfFp/sponsor20.jpg',
        'https://i.postimg.cc/1Xsd5HK6/sponsor21.jpg',
        'https://i.postimg.cc/zv7cLgdQ/sponsor22.jpg',
        'https://i.postimg.cc/7YPRFKhr/sponsor23.jpg',
        'https://i.postimg.cc/c1Bjkpsc/sponsor24.jpg',

        

    ];

    const [currentSponsor, setCurrentSponsor] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSponsor((prevSponsor) =>
                prevSponsor === sponsors.length - 1 ? 0 : prevSponsor + 1
            );
        }, 3000); // Cambia el valor para ajustar la duración de la presentación
        return () => clearInterval(interval);
    }, [sponsors]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000, // Ajusta la velocidad del carrusel
        slidesToShow: 4, // Ajusta la cantidad de imágenes mostradas simultáneamente
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500, // Ajusta el intervalo de cambio
        responsive: [
            {
                breakpoint: 768, // Ajusta el punto de quiebre según sea necesario
                settings: {
                    slidesToShow: 1, // Cambia la cantidad de imágenes mostradas en pantallas pequeñas
                    autoplaySpeed: 1500, // Ajusta la velocidad de reproducción en pantallas pequeñas
                },
            },
        ],
    };
    

    return (
        <section className="bg-gray-400 py-10">
            <div className="container mx-auto text-center">
                <Typography variant="h3" className="italic text-gray-800 font-bold mb-6 pb-10">
                    Auspiciadores
                </Typography>
                <Slider {...settings}>
                    {sponsors.map((sponsor, index) => (
                        <img
                            key={index}
                            src={sponsor}
                            alt={`Sponsor ${index + 1}`}
                            className="slick-image p-1"
                        />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default SponsorSection;
