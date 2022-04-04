import React, { Component } from 'react'; // React and Component are both classes. React is the default export of the base react file. Component is not a default export, so we have to add {} around it
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import IG from './views/IG';
import Login from './views/Login';
import News from './views/News';
import Shop from './views/Shop';
import SignUp from './views/SignUp';
import SinglePost from './views/SinglePost';
import SingleProduct from './views/SingleProduct';

export default class App extends Component { // creating a class called "App" that inherets/extends all the things from the built in "Component" class
  // #
  // # CONVERTING TO RFC -> default class App would change to default function App () (and delete "extends Component")
  // #
  constructor() {
    super(); // super() is needed when you are inheriting (extending) from another class. In this case, we are inheriting from "Component", so we need to run super();
    // console.log('MAIN APP: i have constructed')
    this.state = {
      age: 9000,
      people: ['andrew', 'david', 'anthony', 'tyler', 'tommy', 'april', 'christopher', 'dylan', 'jamia'],
      user: {}
    }
  }
  // #
  // # CONVERTING TO RFC -> ^ The whole constructor method above wouldn't exist, so you could comment it out or delete it ^
  // # If you did want some type of constructor method for your RFC, you could make a const function below to use in place of it
  // #

  logMeIn = (userObj) => { // we'll pass down the function logMeIn as a prop 
    this.setState({user: userObj})
  }
  logMeOut = () => {
    this.setState({user: {}})
  }

  happyBirthday = () => { // this function changes the state of age, so if we call it below in the render() { return()}, we can update the current state's age
    this.setState(
      { age: this.state.age + 1 }
    )
  };

  componentDidMount() {
    // console.log("MAIN APP: I have mounted")
  }
  // #
  // # CONVERTING TO RFC -> ^ component did mount above wouldn't exist, so you could comment it out or delete it ^
  // #





  render() { // render (or return) some JSX (which is javascripts HTML)
    // #
    // # CONVERTING TO RFC -> remove render() method 
    // #

    // console.log("MAIN APP: I have rendered")
    return (
      <div>
        <Navbar currentUser={this.state.user} logMeOut={this.logMeOut} /> {/* we are creating an instance and passing through currentUser and logMeOut to Navbar (refered to as props) */}
            {/* Note: when you acces these "props" in your Navbar.js, they will be called using the syntax {this.props.currentUser} or {this.logMeOut} */}
        {/* <h1>Hi, I am {this.state['name']} and my age is {this.state.age}</h1>
        <button onClick={()=>this.happyBirthday()}>Happy Birthday</button> */}
        <div className='container d-flex justify-content-center mt-4'> {/* d-flex is a built in Bootstrap class to make your div a flex container. mt-4 stands for margin top 4 */}
          <Routes>
            <Route path='/' element={<Home name={this.state.name} />} />
            <Route path='/about' element={<About myClass={this.state.people} />} /> {/* myClass={this.state.people} is passing myClass as a prop so we can use it in the About.js view*/}
            <Route path='/news' element={<News />} />
            <Route path='/instagram' element={<IG />} />
            <Route path='/instagram/:postId' element={<SinglePost />} /> {/* to create a route/path that changes you have to use : and then a name */}
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:productId' element={<SingleProduct />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='/login' element={<Login logMeIn={this.logMeIn}/>} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </div>
      </div>
    )
  }
}