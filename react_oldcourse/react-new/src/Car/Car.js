import React, {Component, PureComponent}from 'react';
import classes from "../index.module.sass"
import PropTypes from 'prop-types'
import withClass from '../hoc/withClass'
import Counter2 from '../Counter2/Counter2'
// 1 место Использовать эту функцию в приоретете
class Car extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if (this.props.index === 1) {
            this.inputRef.focus()
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     console.log('componentWillReceiveProps');
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate',nextProps, nextState);
    //     return nextProps.name.trim() !== this.props.name.trim()
    // }
    // componentWillUpdate(nextProps, nextState) {
    //     console.log('componentWillUpDate', nextProps, nextState);
    // }
    // componentDidUpdate() {
    //     console.log('componentDidUpdate');
    // }
    // componentWillUnmount() {
    //     console.log('componentWillUnmount');
    // }
    render() {
        // if (Math.random() > 0.7) {
        //     throw new Error('Cae random failed')
        // }

        const inputClasses = [classes.input];

        if (this.props.name) {
            inputClasses.push(classes.green);
        } else {
            inputClasses.push(classes.red);
        }

        if (this.props.name.length > 4) {
            inputClasses.push(classes.bold);
        }

        return (
            <React.Fragment>
                <div className={classes.car}>
                    <h3>{this.props.name}</h3>
                    <p>Year: <strong>{this.props.year}</strong></p>
                    {/* <Counter2/> */}
                    {/* {props.children} */}
                    <input 
                        ref={this.inputRef}
                        type="text"
                        onChange={this.props.inputChangeName} 
                        value={this.props.name} 
                        className={inputClasses.join(' ')}/>
                    {/* <button onClick={props.onChangeTitle}>Change</button> */}
                    <button onClick={this.props.onDelete}>Delete</button>
                </div>
            </React.Fragment>
        );
    }   
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    inputChangeName: PropTypes.func, 
    onDelete: PropTypes.func,
}

export default withClass(Car, classes.Car);


// 2 место использовать в приоерете 
// function Car(props) {
//     return (
//         <div className="car">
//             <h3>{props.name}</h3>
//             <p>Year: <strong>{props.year}</strong></p>
//             <p>Number: <strong>{Math.round(Math.random() * 100)}</strong></p>
//         </div>
//     );
// }

// export default Car;


// 3 место Работфет, но так не нужно писать 
// export default (props) => (
//     <div className='car'>
//         <h3>{props.name}</h3>
//         <p>Year: <strong>{props.year}</strong></p>
//     </div>
// )

// 4 место Работфет, но так не нужно писать 
// const Car = (props) => (
//     <div className='car'>
//         <h3>{props.name}</h3>
//         <p>Year: <strong>{props.year}</strong></p>
//     </div>
// )
// export default Car;


