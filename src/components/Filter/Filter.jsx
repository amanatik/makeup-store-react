import { Filter } from 'grommet-icons';
import { useDispatch } from 'react-redux';
import { Operation } from '../../store/reducer/rootReducer';

const Filters = ({toggle}) => {
  const dispatch = useDispatch();

  const filterHadler = () => {
    dispatch(Operation.setFilter());
  }

  return (
    <button className='filter' onClick={filterHadler}>
      <Filter size='large' color={ toggle ? '#FD7014' : ''} />
      <p>Отфильтровать</p>
    </button>
  );
}
 
export default Filters;