import React from 'react';
import { useDispatch } from 'react-redux';
import { Close, Favorite } from 'grommet-icons';

import styles from './Item.module.scss';

import { Operation } from '../../store/reducer/rootReducer';

const Item = React.memo(({item}) => {
  const dispatch = useDispatch();

  const { id, name, price, image_link, brand, liked } = item;

  const deleteHandler = (event) => {
    const { target } = event;
    if (target.id) {
      const currentID = target.id
      dispatch(Operation.deleteItem(currentID)) 
    }
  }

  const likeHandler = (event) => {
    const { target } = event;
    if (target.id) {
      const currentID = target.id
      dispatch(Operation.likeItem(currentID)) 
    }
  }

  return (  
    <li className={styles.wrap}>
      <div className={styles.imageWrap}>
        <img alt={brand} src={image_link} className={styles.image} />
      </div>

      <div className={styles.info}>
        <div className={styles.description}>
          <p className={styles.name}>
            {name}
          </p>
          <span className={styles.price}>
            $ {price}
          </span>
        </div>
        <div className={styles.options}>
          <div id={id} className={styles.icon} >
            <Close id={id} onClick={deleteHandler} />
          </div>
          <div id={id} onClick={likeHandler} className={styles.icon}>
            <Favorite id={id} color={liked ? 'red' : ''}/>
          </div>
        </div>
      </div>
    </li>
  );
});
 
export default Item;