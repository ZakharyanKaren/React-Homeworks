import styles from  './Weather.module.css';

export default function Weather({ predictions }) {
    return (
      <div>
        <h1 className={styles.heading}>Weather</h1>
        <div className={styles.wrapper}>
        {predictions.map(({ weekDay, temp, icon: Icon }) => (
          <div key={weekDay} className={styles.dayOfWeek}>
            <h2>{weekDay}</h2>
            <Icon />
            <p>{temp}</p>
          </div>
        ))}
        </div>
      </div>
    );
  }
  