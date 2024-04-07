import styles from './stars.module.css';
import Star from '../Star/Star';

const Stars = ( {count = 0} ) => {
  const starsArray = [];

  if (count > 0 && count <= 5 && typeof count === 'number') {
    for (let i = 0; i < count; i++) {  
      starsArray.push(<Star key={i} />)
    }
  }

  return (
    <ul className={styles['stars'] + ' card-body-stars u-clearfix'}>
      {starsArray.map(e => e)}
    </ul>
  )
}

export default Stars;
