import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as toursActions from '../actions/tours';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (tours, filterBy) => {
    switch (filterBy) {
        case 'all':
            return tours;
        case 'price_high':
            return orderBy(tours, 'price', 'desc');
        case 'price_low':
            return orderBy(tours, 'price', 'asc');
        case 'location':
            return orderBy(tours, 'location', 'asc');
        default:
            return tours;
    }
};

const filterTours = (tours, searchQuery) =>
    tours.filter(
        o => 
            o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.location.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
    );
    
const searchTours = (tours, filterBy, searchQuery) => {
    return sortBy(filterTours(tours, searchQuery), filterBy);
};

const mapStateToProps = ({ tours, filter }) => ({
    tours: tours.items && searchTours(tours.items, filter.filterBy, filter.searchQuery),
    isReady: tours.isReady,
});
  
  const mapDispatchToProps = dispatch => ({
      ...bindActionCreators(toursActions, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);