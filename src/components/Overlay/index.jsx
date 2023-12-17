import './overlay.css';
import { Typography } from '@mui/material';

const OverlayComponent = () => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <Typography variant="h1" className="overlay-text">
         ALAS Y MODA
        </Typography>
        <Typography variant="h5" className="overlay-text">
          20 de Diciembre
        </Typography>
      </div>
    </div>
  );
};

export default OverlayComponent;
