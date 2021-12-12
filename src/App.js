import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from './components/Container/Container';
import Filters from './components/Filter/Filter';
import List from './components/List/List';

import { Operation } from './store/reducer/rootReducer';
import { getFilter, getFilteredItems, getItems } from './store/reducer/selectors';

function App() {
  const dispatch = useDispatch();

  const goods = useSelector(state => getItems(state));
  const filteredGoods = useSelector(state => getFilteredItems(state));
  const isFiltered = useSelector(state => getFilter(state));

  useEffect(() => {
    dispatch(Operation.getItems());
  },[dispatch]);

  return (
    <div className='wrapper'>
      <header className="header">
        <h3 className="title">MakeUp Store React</h3>
      </header>

      <Filters toggle={isFiltered} />

      <Container>
        <List goods={ isFiltered ? filteredGoods : goods} />
      </Container>
    </div>
  );
}

export default App;
