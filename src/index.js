import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Footer from "./footer";
import "./index.css";
class App extends React.Component{
  setValue(name){
    window.alert(name)
  }
  render () {
    return(
    <React.Fragment> 
        <Header></Header>
        <button tipe="button" onClick={() => this.setValue("გამარჯობა მსოფლიო")}>დააკლიკე</button> 
        <Footer></Footer>
    </React.Fragment>
    );
  }
}
var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);