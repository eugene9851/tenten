import Button from '../common/Button';
import styles from './NoList.module.scss';

interface NoListProps {
  title: string;
  description: string;
  text: string;
}
function NoList({ title, description, text }: NoListProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.box}>
        <p className={styles.description}>{description}</p>
        <div className={styles.button}>
          <Button buttonType='button' text={text} size='M' />
        </div>
      </div>
    </div>
  );
}

export default NoList;
