import { computeHeadingLevel } from "@testing-library/react";
import React,{useState} from "react";
import Counter from "./counter"

const CountersList = () => {
    const initialState = [
        {id:0, value: 0, name: 'Ненужная вещь'},
        {id:1, value: 4, name: 'Ложка'},
        {id:2, value: 0, name: 'Вилка'},
        {id:3, value: 0, name: 'Тарелка'},
        {id:4, value: 4, name: 'Набор минималиста'},
    ];

    const [counters, setCounters] = useState(initialState);
    const handelDelete = (id) => {
        const newCount = counters.filter((count) => count.id !== id);
        setCounters(newCount);
    };
    const handeleReset = () => {
        setCounters(initialState)
    };
    const handeleUpdate = () => {
        const upDateState = [
            {id:0, value: 1, name: 'Ненужная вещь'},
            {id:1, value: 4, name: 'Ложка'},
            {id:2, value: 3, name: 'Вилка'},
            {id:3, value: 4, name: 'Тарелка'},
            {id:4, value: 4, name: 'Набор минималиста'},
        ];
        setCounters(upDateState);
    };
    return (
        <>
            {counters.map((count) => (
                <Counter {...count} onDelete={handelDelete}></Counter> 
            ))}
        <button className="btn btn-primary m-2" onClick={handeleReset}>Сброс</button>
        <button className="btn btn-primary m-2" onClick={handeleUpdate}>Обновить состояние</button>
        </>
    );
};

export default CountersList;