import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import {Route, Routes} from 'react-router-dom';
import TourPage from "./TourPage";

const TourCard = tour => {
  const {title, location, descr, price, image, addToCart, addedCount} = tour;
  return (
    <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>
          {title}
        </Card.Header>
      <Card.Meta>
        <span className='location'>
            {location}
            </span>
      </Card.Meta>
      <Card.Description>
      <span className='descr'>
            {descr}
            </span>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='rub' />
        {price} - за ночь на двоих
      </a>
    </Card.Content>

        <Routes>
            <Route path={'tour'} element={() => <TourPage/>} >

            </Route>
        </Routes>

   <button className="noomera card__links">
       <a href={"/tour"} target="_blank" className={'link card__link'} >
           Подробнее
       </a>
   </button>

   <button className="btn-cart" onClick={addToCart.bind(this, tour)}>
        Добавить в корзину {addedCount > 0 && `(${addedCount})`}
   </button>
  </Card>
)
};
export default TourCard;