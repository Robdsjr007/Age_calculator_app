import styles from './CardContainer.module.sass';
import FormCard from './FormCard';

const CardContainer = () => {

  return (
    <article className={styles.card}>
      <FormCard>
        <div className={styles.line}></div>
        <button type='submit'>enviar</button>
      </FormCard>
    </article>
  )
}

export default CardContainer