import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import Car from './Car/Car';
import classes from './index.module.sass'
import ErrorBoundary from './ErrorBountary/ErrorBountary'
import Counter from "./Counter/Counter"

export const ClickedContext = React.createContext(false)
class App extends Component {

  constructor(props) {
    console.log('Constructor');
    super(props)

    this.state = {
      clicked: false,
      cars: [
        {name: 'Ford', year: 2012},
        {name: 'Audi', year: '2014'},
        {name: 'Mazda', year: 2002}
      ],
      pageTitle: 'React Components',
      showCards: false,
    }
  }

  handleTitle = () => {
    this.setState ({
      showCards: !this.state.showCards
    })
  }

  // handleTitleChange = pageTitle => {
  //   this.setState({pageTitle})
  // }
  inputChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars]
    // console.log(cars);
    cars[index] = car;
    this.setState ({cars})
  }
  changeInput = (event) => {
    this.setState ({
      pageTitle: event.target.value
    })
  }
  deleteHandler(index) {
    let cars = this.state.cars.concat()
    cars.splice(index, 1);
    this.setState({cars})
  }

  // componentWillMount() {
  //   console.log('App componentWillMount');
  // }
  componentDidMount() {
    console.log('App componentDidMount');
  }

  render() {
  //   const divStyle = {
  //     textAlign: 'center',
  // }

  console.log('Render');
  let cars = null 
  
  if (this.state.showCards) {
    cars = this.state.cars.map((car, index) => {
      return (
        <ErrorBoundary key={index}>
        <Car
          name={car.name}
          year={car.year}
          onDelete={this.deleteHandler.bind(this, index)}
          inputChangeName={(event)=> this.inputChangeName(event.target.value, index)}
        />
      </ErrorBoundary>
      )
    })
  }

  return (
      <div className={classes.cars}>
        <h1>{this.props.title}</h1>
        <input type='text' onChange={this.changeInput}/>
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter /> 
        </ClickedContext.Provider>
        <div>
          {/* <button onClick={this.handleTitleChange.bind(this, 'Changed!')}>Change</button> */}
          <button 
          onClick={this.handleTitle}
          > Show cars</button>
          <button
            onClick={() => this.setState({clicked: true})}
          >Change clicked</button>
        </div>
        {cars}
        {/* <Car name={cars[0].name} year={cars[0].year} onChangeTitle={this.handleTitleChange.bind(this, cars[0].name)} /> 
        <Car name={cars[1].name} year={cars[1].year} onChangeTitle={() => this.handleTitleChange(cars[1].name)}/>  
        <Car name={cars[2].name} year={cars[2].year} onChangeTitle={() => this.handleTitleChange(cars[2].name)}/>   */}
      </div>
    );
  }
}

export default App;
