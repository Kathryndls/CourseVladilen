import React from 'react'
import classes from './FinishedQuiz.module.sass'
import Button from '../UI/Button/Button'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        classes.fa,
                        props.results[quizItem.id] === 'error' 
                        ? classes['fa-times'] : classes['fa-check'],
                    ]
                    return (
                        <li 
                            key={index}
                            // className={classes.li}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question} 
                            <div className={cls.join(' ')}></div>
                        </li>
                    )
                })}
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Button type="success">Перейти в список тестов</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz;