import styles from "./List.module.scss";

import Item from "../Item/Item";

const List = ({ goods }) => {

  return (
    <>
      {goods.length ? (
        <ul className={styles.wrap}>
          {goods.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      ) : 'Oops! There is nothing here'}
    </>
  );
};

export default List;
