import React from 'react';
import { Menu } from 'semantic-ui-react';

const Filter = ({ setFilter, filterBy, searhQuery, setSearchQuery }) => (
    <Menu secondary>
          <Menu.Item
            active={filterBy === 'all'}
            onClick={setFilter.bind(this, 'all')}>
              Все
          </Menu.Item>
          <Menu.Item
            active={filterBy === 'price_high'}
            onClick={setFilter.bind(this, 'price_high')}>
              Цена (дорогие)
          </Menu.Item>
          <Menu.Item
            active={filterBy === 'price_low'}
            onClick={setFilter.bind(this, 'price_low')}>
              Цена (дешевые)
          </Menu.Item>
          <Menu.Item
            active={filterBy === 'location'}
            onClick={setFilter.bind(this, 'location')}>
              Локация
          </Menu.Item>
          <Menu.Item>
            <input
              onChange={e => setSearchQuery(e.target.value)} 
              value={searhQuery} 
              placeholder="Поиск" 
            />
          </Menu.Item>
    </Menu>
);

export default Filter;