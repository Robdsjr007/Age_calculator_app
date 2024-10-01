import React, { ChangeEventHandler, ReactElement, ReactNode, useState } from 'react'

import InputDate from './InputDate';

type Props = {
    children: ReactNode,
    event: ChangeEventHandler,
    state: Number | null
}

const FormCard = ({ children }: Props): React.ReactElement => {
    const [day, setDay] = useState<null | Number>();
    const [month, setMonth] = useState<null | Number>();
    const [year, setYear] = useState<null | Number>();

    const countTimeThatHasPassed = () => {
        alert("Funfa");
    };

    return (
        <form onSubmit={countTimeThatHasPassed}>
            <div className="inputContainer">
                <InputDate label={"Day"} placeholder={"DD"} state={day} event={(e) => setDay(e.target.value)} />
                <InputDate label={"Month"} placeholder={"MM"} state={month} event={(e) => setMonth(e.target.value)}/>
                <InputDate label={"Year"} placeholder={"YYYY"} state={year} event={(e) => setYear(e.target.value)}/>
            </div>
            {children}
        </form>
    )
}

export default FormCard