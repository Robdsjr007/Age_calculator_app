import styles from './InputDate.module.sass'

import {ChangeEventHandler, ReactElement} from 'react'

type Props = {
    placeholder: string,
    label: string,
    event: ChangeEventHandler,
    state: Number | null
}

const InputDate = ({label, placeholder, event, state}: Props): ReactElement => {
  return (
    <>
    <label className={styles.labelContainer}>
        {label}
        <input onChange={event} value={state} className={styles.input} type="number" placeholder={placeholder} required/>
    </label>
    </>
  )
}

export default InputDate