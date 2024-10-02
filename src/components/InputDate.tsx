import styles from './InputDate.module.sass'

import { ChangeEventHandler, ReactElement } from 'react'

type Props = {
  placeholder: string,
  label: string,
  event: ChangeEventHandler,
  state: number | undefined
}

const InputDate = ({ label, placeholder, event, state }: Props): ReactElement => {
  return (
    <div className={styles.labelContainer}>
      <label htmlFor={label} style={state == 0 ? {color: 'red'} : {}}>{label}</label>
        <input id={label} onChange={event} value={state} style={state == 0 ? {borderColor: 'red', color: 'red'} : {}} className={styles.input} type="number" placeholder={placeholder} required />
        {state == 0 && <p style={state == 0 ? {color: 'red'} : {}}>This field is required</p>}
    </div>
  )
}

export default InputDate