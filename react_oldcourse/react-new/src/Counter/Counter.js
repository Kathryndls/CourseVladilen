import React, {Component} from 'react'
import Auxiliary from '../hoc/Auxiliary'
import Counter2 from '../Counter2/Counter2'

export default class Counter extends Component {

    state = {
        counter: 0
    }

    minCounter = () => {
        // this.setState({
        //     counter: this.state.counter - 1
        // })

        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }



    render() {
        return (
            <Auxiliary>
                <h2 key={'1'}>Counter {this.state.counter}</h2>
                <Counter2/>
                <button style={{margin: '5px',}} key={'2'} onClick={() => this.setState({counter: this.state.counter + 1})}>+</button>
                <button key={'3'} onClick={this.minCounter}>-</button>
            </Auxiliary>
        )
        // return [
        //     <h2 key={'1'} >Counter {this.state.counter}</h2>,
        //     <button key={'2'} onClick={() => this.setState({counter: this.state.counter + 1})}>+</button>,
        //     <button key={'3'} onClick={this.minCounter}>-</button>
        // ]
    }
}