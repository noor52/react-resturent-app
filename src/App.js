import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./Navbar";
// import Form from "./Components/Form.js"
// import User from "./User";
// import Name from './Components/NameForm'
// import MyForm1 from './Components/MyForm1'
// import MyForm1 from './Components/MyForm1'
// import TestMatch from './TestMatch'
// import FormComponent from './MediamForm/FormComponent'
// import FormContainer from './MediamForm/FormContainer'
// import FormComponent2 from './MediamForm/FormComponent2'
// import App2 from './MediamForm/Gone'
// import Gone from "./MediamForm/Gone";
// import Try from "./Emis/Try";
// import Prectise from "./Emis/Prectise";
// import AllTypeInput from './Components/AllTypeInput'

// function App() {
//   return (
//     <div>
//       {/* <Navbar /> */}
//       {/* <User /> */}
//       {/* <Form /> */}
//       {/* <Name /> */}
//       {/* {<MyForm1 />}*/}
//       {/* {<TestMatch />} */}
//       {/* {<AllTypeInput />} */}
//       {/* {<FormComponent />} */}
//       {/* {<FormContainer />} */}
//       {/* {<FormComponent2 />} */}
//       {/* {<Gone />} */}
//       {/* {<Try />} */}
//       {/* {<Prectise />} */}

//       {<Menu />}
//     </div>
//   );
// }

import { DISHES } from "./shared/dishes";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Menu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        {<Menu dishes={this.state.dishes} />}
      </div>
    );
  }
}

export default App;
