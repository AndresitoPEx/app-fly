import './overlay.css';
import { Typography } from '@mui/material';

const OverlayComponent = () => {

  const alas = "../alas-ok.png"

  return (
    <div className="overlay-container">
      <div className="overlay">
        <img src={alas} alt="Alas y Moda" className="overlay-image" />
        <Typography className="overlay-text">
          <label className='italic font-extralight'>
            20 de Diciembre.
          </label>
        </Typography>
      </div>
    </div>
  );
};

export default OverlayComponent;
