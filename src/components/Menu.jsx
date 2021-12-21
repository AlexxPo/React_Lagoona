import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this, id)} color='red'>
          Удалить
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

const MenuComponent = ({ totalPrice, count, items }) => (
    <Menu>
        <Menu.Item name="name">
          Lagoona - сеть отелей
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name="total">
            Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
          </Menu.Item>

          <Popup>
            trigger={
              <Menu.Item name="cart">
                  Корзина (<b>{count}</b>)
               </Menu.Item>
            }
            content={items.map(tour => (
              <CartComponent {...tour} />))}
            on="click"
            hideOnScroll
          </Popup>
        </Menu.Menu>
    </Menu>
);

export default MenuComponent;