import React, {useState, useEffect} from 'react';

const WelcomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      'ruta/a/imagen1.jpg',
      'ruta/a/imagen2.jpg',
      'ruta/a/imagen3.jpg',
      // Agrega más rutas de imágenes aquí según sea necesario
    ];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 3000); // Cambia el tiempo en milisegundos para controlar la velocidad de cambio de imágenes
  
      return () => clearInterval(intervalId);
    }, [images.length]);
  
    return (
        <div className="container">
            <div className="content">
                <h1>Bienvenido a la plataforma de la Secretaría de Obras y Servicios de José C Paz</h1>
                <p>Aquí puedes agregar cualquier información adicional que desees mostrar en la página de inicio.</p>
                <div className="image-gallery">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className={index === currentIndex ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
