import React, { useState } from 'react'; 
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Contact from './views/Contact';
import CreatePost from './views/CreatePost';
import Home from './views/Home';
import IG from './views/IG';
import Login from './views/Login';
import News from './views/News';
import Shop from './views/Shop';
import SignUp from './views/SignUp';
import SinglePost from './views/SinglePost';
import SingleProduct from './views/SingleProduct';

export default function App () { // creating a function called "App" 
  
//   constructor() { <-- No longer need constructor method in a functional component
//     super(); // super() is needed when you are inheriting (extending) from another class. In this case, we are inheriting from "Component", so we need to run super();
    // console.log('MAIN APP: i have constructed')
    // this.state = { <--RFC Note: we are setting the initial state below for each of the variables using useState 
    //   age: 9000,
    //   people: ['andrew', 'david', 'anthony', 'tyler', 'tommy', 'april', 'christopher', 'dylan', 'jamia'],
    //   user: {}
    // }

    const getUserFromLocalStorage = () => {
        const foundUser = localStorage.getItem('vanguard_user')
        if (foundUser) {
            return JSON.parse(foundUser) // doing the parsing conversion 0that turns the string into the JSON object of key value pairs
        }
        return {}

    }

    const [age, setState] = useState(9000);
    const [people, setPeople] = useState(['andrew', 'david', 'anthony', 'tyler', 'tommy', 'april', 'christopher', 'dylan', 'jamia']);
    const [user, setUser] = useState(()=>getUserFromLocalStorage());
    const [cart, setCart] = useState([])

//   } <--This bracket was from the constructor method
  // #
  // # If you want some type of constructor method for your RFC, you could make a const function below to use in place of it
  // #

  // In RFC, you need const in front of all of the functions below because they are no longer methods being defined inside a class, but they are stand alone functions
  const logMeIn = (userObj) => { // we'll pass down the function logMeIn as a prop 
    setUser(userObj) // for RFC, it changed from this.setState() to setUser and setting the user to the userObj object
    localStorage.setItem('vanguard_user', JSON.stringify(userObj)) // localStorage is a variable that exists right off the bat. setItem is a built in function to set the key and value for the local storage
    // we name the key something that is specific to our application instead of just "user", so we don't unintentionally interact with any other user instances. 
    // the key-value object can only accept the stringify version of the object, so we use JSON.stringify()
  }
  const logMeOut = () => {
    setUser({})
    localStorage.removeItem('vanguard_user') // removes the vanguard_user stored variable from local storage if the user signs out
  }

  const happyBirthday = () => { // this function changes the state of age, so if we call it below in the render() { return()}, we can update the current state's age
      setAge(age + 1)
    
  };

  const addToCart = (product) => {setCart([...cart, product])}; // ...cart clones the cart, and whatever you add after will be added on
  const removeFromCart = (product) => {
      let newCart = [...cart];
      for (let i = newCart.length-1; i>=0; i--) {
          if (product.id === newCart[i].id){
              newCart.splice(i, 1)
              break
          }
      }
  };
  const sumTotalCart = (cart) => {
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
          total += cart[i].price

      }
      return total.toFixed(2) // toFixed(2) rounds to 2 decimal places
  };


//   componentDidMount() {
//     // console.log("MAIN APP: I have mounted")
//   }
  // #
  // # CONVERTING TO RFC -> ^ component did mount above wouldn't exist, so you could comment it out or delete it ^
  // #





//   render() { // render (or return) some JSX (which is javascripts HTML)
    // #
    // # CONVERTING TO RFC -> remove render() method 
    // #

    // console.log("MAIN APP: I have rendered")
    return (
      <div>
        <Navbar currentUser={user} logMeOut={logMeOut} cart={cart} sumTotalCart={sumTotalCart}/> {/* we are creating an instance and passing through currentUser and logMeOut to Navbar (refered to as props) */}
            {/* Note: when you acces these "props" in your Navbar.js, they will be called using the syntax {this.props.currentUser} or {this.logMeOut} */}
        {/* <h1>Hi, I am {this.state['name']} and my age is {this.state.age}</h1>
        <button onClick={()=>this.happyBirthday()}>Happy Birthday</button> */}
        <div className='container d-flex justify-content-center mt-4'> {/* d-flex is a built in Bootstrap class to make your div a flex container. mt-4 stands for margin top 4 */}
          <Routes>
            <Route path='/' element={<Home name={name} />} /> {/* for RFC, all of the variables we pass through changed from this.state.variable-name, to just the variable name */}
            <Route path='/about' element={<About myClass={this.state.people} />} /> {/* myClass={this.state.people} is passing myClass as a prop so we can use it in the About.js view*/}
            <Route path='/news' element={<News />} />
            <Route path='/instagram' element={<IG />} />
            <Route path='/instagram/:postId' element={<SinglePost user={user}/>} /> {/* to create a route/path that changes you have to use : and then a name */}
            <Route path='/shop' element={<Shop addToCart={addToCart} />} />
            <Route path='/shop/:productId' element={<SingleProduct />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='/login' element={<Login logMeIn={logMeIn}/>} />
            <Route path='/signup' element={<SignUp />} />

            <Route path='/instagram/post/create' element = {<CreatePost user={user}/>} />
            <Route path='/cart' element = {<Cart cart={cart} sumTotalCart={sumTotalCart} removeFromCart={removeFromCart} />} />
          </Routes>
        </div>
      </div>
    )
  }
// }