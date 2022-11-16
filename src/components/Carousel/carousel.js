import Carousel from 'react-bootstrap/Carousel';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import './carousel.css'

function Carousell() {
  return (
    <Carousel>
      <Carousel.Item className='carou'>
        <img
          className="imgg"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Organizamos tu fiesta en nuestro salón completamente equipado para vos!</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carou'>
        <img
          className="imgg"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Dejanos ser parte de tu mejor recuerdo.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carou'>
        <img
          className="imgg"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;