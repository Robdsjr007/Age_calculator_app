import React, { ChangeEvent, FormEventHandler, ReactNode, useState } from 'react';
import InputDate from './InputDate';

import styles from './FormCard.module.sass'

type Props = {
    children: ReactNode,
}

const FormCard = ({ children }: Props): React.ReactElement => {
    const [day, setDay] = useState<number | undefined>(undefined);
    const [month, setMonth] = useState<number | undefined>(undefined);
    const [year, setYear] = useState<number | undefined>(undefined);

    const countTimeThatHasPassed: FormEventHandler = (e: React.FormEvent): void => {
        e.preventDefault();
        alert("Funfa");
    };

    return (
        <form onSubmit={countTimeThatHasPassed}>
            <div className={styles.inputContainer}>
                <InputDate label={"Day"} placeholder={"DD"} state={day} event={(e: ChangeEvent<HTMLInputElement>) => setDay(Number(e.target.value))} />
                <InputDate label={"Month"} placeholder={"MM"} state={month} event={(e: ChangeEvent<HTMLInputElement>) => setMonth(Number(e.target.value))} />
                <InputDate label={"Year"} placeholder={"YYYY"} state={year} event={(e: ChangeEvent<HTMLInputElement>) => setYear(Number(e.target.value))} />
            </div>
            <div className={styles.buttonContainer}>
                {children}
            </div>
        </form>
    );
}

export default FormCard;
