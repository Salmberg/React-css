import './gallery.css';
import Bild1 from '../assets/img/Bild1.webp';
import Bild2 from '../assets/img/Bild2.jpg';
import Bild3 from '../assets/img/Bild3.jpg';
import Bild4 from '../assets/img/Bild4.jpg';
import Bild5 from '../assets/img/Bild5.jpeg';
import { useState } from 'react';
import Borderded from './Bordered';

const Gallery = () => { 
    const [columns, setColumns] = useState(2);

    let imagesClass = 'images';

    switch (columns) {
        case 1:
            imagesClass += ' one-column';
            break;
        case 2:
            imagesClass += ' two-columns';
            break;
        case 3:
            imagesClass += ' three-columns';
            break;
        default:
            imagesClass += ' two-columns';
    }

    return ( 

        <div className='gallery'> 

        <Borderded>
        <section>
            <button onClick={() => setColumns(1)}>1 Columns</button>
            <button onClick={() => setColumns(2)}>2 Columns</button>
            <button onClick={() => setColumns(3)}>3 Columns</button>
        </section>
        </Borderded>

            <section className={imagesClass}>
            <img src={Bild1} alt="" />
            <img src={Bild2} alt="" />
            <img src={Bild3} alt="" />
            <img src={Bild4} alt="" />
            <img src={Bild5} alt="" />

            </section>
           
         
        </div>
    )
}

export default Gallery;