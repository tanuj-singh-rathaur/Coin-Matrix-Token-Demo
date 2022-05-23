import React,{Component} from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { ProtectedRoute } from './protected.route';
import Header from './components/header/Header'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Buy from './pages/buy/Buy'; 
import Sell from './pages/sell/Sell';
import Tokenomics from './pages/tokenomics/Tokenomics';
import Email from './pages/email/Email';
import Whatsapp from './pages/whatsapp/Whatsapp';
import Invoices from './pages/invoices/Invoices';
import Aadhar from './pages/kyc/aadhar/Aadhar'
import Pan from './pages/kyc/pan/Pan'
import Bank from './pages/kyc/bank/Bank'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

class App extends Component{
state={
  hamClicked:false
}  
state={
  isAuthenticated:false
}

show(){
  
  console.log(this.state.hamClicked)
  return this.setState({hamClicked:!this.state.hamClicked})
}
  
  render(){
    return(
<div className="App">
<Header  hamClicked={this.show.bind(this)}></Header> 
      <Router>
     
        <Sidebar sidebar={this.state.hamClicked} showSidebar={this.show.bind(this)}/>
        <Switch>
          <Route path="/" exact component={Home} ></Route>
          <Route path="/home" exact component={Home} ></Route>
          <Route exact path="/login" component={Login} ></Route>
          <Route exact path="/signup" component={SignUp} ></Route>
          <ProtectedRoute exact path="/exchange/buy" component={Buy} ></ProtectedRoute>
          <ProtectedRoute exact path="/exchange/sell" component={Sell} ></ProtectedRoute>
          <ProtectedRoute exact path="/exchange/invoice" component={Invoices} ></ProtectedRoute>
          <Route exact path="/support/email" component={Email} ></Route>
          <Route exact path="/support/whatsapp" component={Whatsapp} ></Route>
          <Route exact path="/tokenomics" component={Tokenomics} ></Route>
          <ProtectedRoute exact path="/kyc/aadhar" component={Aadhar} ></ProtectedRoute>
          <ProtectedRoute exact path="/kyc/pan" component={Pan} ></ProtectedRoute>
          <ProtectedRoute exact path="/kyc/bank" component={Bank} ></ProtectedRoute>
          
        </Switch>
        <Footer></Footer>
      </Router>
  
        
    </div>
    )
  }
}

export default App;
