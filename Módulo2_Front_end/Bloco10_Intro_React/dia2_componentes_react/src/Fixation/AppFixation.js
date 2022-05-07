// import Image from './Fixation/Image';
import Order from './Order';
import React from 'react';

// const imgSource = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
// const altText = 'Cute cat staring';

class AppFixation extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: 'cena@gmail.com',
      product: 'Razer Headphone',
      price: {
        value: 99.99,
        currency: 'dollars'
      }
    }
    const energyDrink = {
      id: 77,
      user: 'cena@gmail.com',
      product: 'Monster 500mL',
      price: {
        value: 9.99,
        currency: 'dollars'
      }
    }
    return (
      <div>
        {/* <Image source={imgSource} altText={altText}/> Exercício de fixação */}
        <h1> Orders recenlty created </h1>
        <Order order={headphone} />
        <Order order={energyDrink} />
      </div>
    );
  }
}

export default AppFixation;
