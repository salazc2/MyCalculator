import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Keys from './components/keys/Keys';
import Footer from './components/footer/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputFirst: null,
      inputSecond: null,
      previousOp: false,

      division: false,
      multiplication: false,
      subtraction: false,
      addition: false,
      operation: null,
    }
    this.clear = this.clear.bind(this);
  }

  clear = () => {
    this.inputVal.value = "";
    this.setState({
      inputFirst: null,
      inputSecond: null,
      previousOp: null,

      division: false,
      multiplication: false,
      subtraction: false,
      addition: false,
    })
  }

  numberDot = () => {
    console.log("Number dot function " + this.inputVal.value)
    if(this.inputVal.value === null || this.inputVal.value === "") {
      this.inputVal.value += 0 + ".";
    } else {
      this.inputVal.value += ".";
    }
    
  }

  numberZero = () => {
    console.log("Pressing 0");
    if(this.state.previousOp) {
      console.log("Previous operation true");
      if(this.state.inputSecond == null) {
        console.log("Second input is null");
        this.inputVal.value = "";
        this.inputVal.value += 0;
        return this.setState({inputSecond: this.inputVal.value});
      } else {
        console.log("Second input is not empty");
        this.inputVal.value += 0;
        return this.setState({inputSecond: this.inputVal.value});
      }
    } else {
      console.log("Previous operation is false");
      this.inputVal.value += 0;
    }
  }

  numberOne = () => {
    console.log("Pressing 1");
    if(this.state.previousOp) {
      console.log("Previous operation true");
      if(this.state.inputSecond == null) {
        console.log("Second input is null");
        this.inputVal.value = "";
        this.inputVal.value += 1;
        return this.setState({inputSecond: this.inputVal.value});
      } else {
        console.log("Second input is not empty");
        this.inputVal.value += 1;
        return this.setState({inputSecond: this.inputVal.value});
      }
    } else {
      console.log("Previous operation is false");
      this.inputVal.value += 1;
    }
  }

  numberTwo  = () => {
    console.log("Pressing 2");
    if(this.state.previousOp) {
      console.log("Previous operation true");
      if(this.state.inputSecond == null) {
        console.log("Second input is null");
        this.inputVal.value = "";
        this.inputVal.value += 2;
        return this.setState({inputSecond: this.inputVal.value});
      } else {
        console.log("Second input is not empty");
        this.inputVal.value += 2;
        return this.setState({inputSecond: this.inputVal.value});
      }
    } else {
      console.log("Previous operation is false");
      this.inputVal.value += 2;
    }
  }

  numberThree = () => {
    console.log("Pressing 3");
    if(this.state.previousOp) {
      console.log("Previous operation true");
      if(this.state.inputSecond == null) {
        console.log("Second input is null");
        this.inputVal.value = "";
        this.inputVal.value += 3;
        return this.setState({inputSecond: this.inputVal.value});
      } else {
        console.log("Second input is not empty");
        this.inputVal.value += 3;
        return this.setState({inputSecond: this.inputVal.value});
      }
    } else {
      console.log("Previous operation is false");
      this.inputVal.value += 3;
    }
  }

  numberFour = () => {
    console.log("Pressing 4");
    if(this.state.previousOp) {
      console.log("Previous operation true");
      if(this.state.inputSecond == null) {
        console.log("Second input is null");
        this.inputVal.value = "";
        this.inputVal.value += 4;
        return this.setState({inputSecond: this.inputVal.value});
      } else {
        console.log("Second input is not empty");
        this.inputVal.value += 4;
        return this.setState({inputSecond: this.inputVal.value});
      }
    } else {
      console.log("Previous operation is false");
      this.inputVal.value += 4;
    }
  }

  numberFive = () => {
    console.log("Pressing 5");
    if(this.state.previousOp) {
      console.log("Previous operation true");
      if(this.state.inputSecond == null) {
        console.log("Second input is null");
        this.inputVal.value = "";
        this.inputVal.value += 5;
        return this.setState({inputSecond: this.inputVal.value});
      } else {
        console.log("Second input is not empty");
        this.inputVal.value += 5;
        return this.setState({inputSecond: this.inputVal.value});
      }
    } else {
      console.log("Previous operation is false");
      this.inputVal.value += 5;
    }
  }

  numberSix = () => {
    console.log("Pressing 6");
    if(this.state.previousOp) {
      console.log("Previous operation true");
      if(this.state.inputSecond == null) {
        console.log("Second input is null");
        this.inputVal.value = "";
        this.inputVal.value += 6;
        return this.setState({inputSecond: this.inputVal.value});
      } else {
        console.log("Second input is not empty");
        this.inputVal.value += 6;
        return this.setState({inputSecond: this.inputVal.value});
      }
    } else {
      console.log("Previous operation is false");
      this.inputVal.value += 6;
    }
  }

  numberSeven = () => {
    console.log("Pressing 7");
    if(this.state.previousOp) {
      console.log("Previous operation true");
      if(this.state.inputSecond == null) {
        console.log("Second input is null");
        this.inputVal.value = "";
        this.inputVal.value += 7;
        return this.setState({inputSecond: this.inputVal.value});
      } else {
        console.log("Second input is not empty");
        this.inputVal.value += 7;
        return this.setState({inputSecond: this.inputVal.value});
      }
    } else {
      console.log("Previous operation is false");
      this.inputVal.value += 7;
    }
  }
  numberEight  = () => {
    console.log("Pressing 8");
    if(this.state.previousOp) {
      console.log("Previous operation true");
      if(this.state.inputSecond == null) {
        console.log("Second input is null");
        this.inputVal.value = "";
        this.inputVal.value += 8;
        return this.setState({inputSecond: this.inputVal.value});
      } else {
        console.log("Second input is not empty");
        this.inputVal.value += 8;
        return this.setState({inputSecond: this.inputVal.value});
      }
    } else {
      console.log("Previous operation is false");
      this.inputVal.value += 8;
    }
  }

  numberNine   = () => {
    console.log("Pressing 9 ");
    if(this.state.previousOp) {
      console.log("Previous operation true");
      if(this.state.inputSecond === null) {
        console.log("second input is null");
        this.inputVal.value = "";
        this.inputVal.value += 9;
        return this.setState({inputSecond: this.inputVal.value});
      } else { 
        console.log("second input is not empty");
        this.inputVal.value += 9;
        return this.setState({inputSecond: this.inputVal.value}); 
      }
    } else {
      console.log("Previous operation is false");
      this.inputVal.value += 9;
    }
  }

  equals = () => {
    let first = this.state.inputFirst;
    let second = this.state.inputSecond;
    let result;
    if(this.state.division) {
      result = parseFloat(first)/parseFloat(second);
      console.log("Result of division " + result);
      if(parseInt(first, 10) % parseInt(second, 10) === 0) {
        this.inputVal.value = result;
      } else {
        this.inputVal.value = result.toFixed(6)
      }
    } else if(this.state.multiplication) {
      result = parseInt(first,10)*parseInt(second,10);
      this.inputVal.value = result;
    } else if(this.state.subtraction) {
      result = parseInt(first, 10) - parseInt(second, 10);
      this.inputVal.value = result;
    } else if(this.state.addition) {
      result = parseFloat(first) + parseFloat(second);
      this.inputVal.value = result;
    }
    this.setState({inputFirst: result, inputSecond: null, division: false, multiplication: false, subtraction: false, addition: false, previousOp: false});
    console.log("Equal " + result);
  }

  divide = () => {
    if(this.state.inputFirst != null && this.state.inputSecond != null) {
      this.equals();
      this.setState({division: true, multiplication: false, subtraction: false, addition: false, previousOp: true}, () => {
        console.log("division inputfirst and input second not null, prevOps: " + this.state.previousOp)
      })
      
    } else /*(this.state.inputFirst)*/ {
      this.setState({inputFirst: this.inputVal.value, division: true, multiplication: false, subtraction: false, addition: false, previousOp: true}, () => {
        console.log("division when inputfirst has something and inputsecond has nothing " + this.inputVal.value);
      })
    } 
  }

  multiply = () => {
    if(this.state.inputFirst != null && this.state.inputSecond != null) {
      this.equals();
      this.setState({division: false, multiplication: true, subtraction: false, addition: false, previousOp: true})
    } else {
      this.setState({inputFirst: this.inputVal.value, division: false, multiplication: true, subtraction: false, addition: false, previousOp: true}, () => {
        console.log("Multiply state " + this.inputVal.value);
      })
    }
  }

  subtract = () => {
    if(this.state.inputFirst != null && this.state.inputSecond != null) {
      this.equals();
      this.setState({division: false, multiplication: false, subtraction: true, addition: false, previousOp: true})
    } else {
      this.setState({inputFirst: this.inputVal.value, division: false, multiplication: false, subtraction: true, addition: false, previousOp: true}, () => {
        console.log("Subtraction state " + this.inputVal.value);
      })
    }
    
  }

  add = () => {
    if(this.state.inputFirst != null && this.state.inputSecond != null) {
      this.equals();
      this.setState({division: false, multiplication: false, subtraction: false, addition: true, previousOp: true})
    } else {
      this.setState({inputFirst: this.inputVal.value,division: false, multiplication:false, subtraction: false, addition: true, previousOp: true}, () => {
        console.log("Addition state " + this.inputVal.value);
      })
    }
    
  }

  render() {

    console.log("First Input " + this.state.inputFirst);
    console.log("Second Input " + this.state.inputSecond);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <code>My Calculator</code>
        </p>
        <div className="calculator">
        <input onChange={this.handleChange} type="text" placeholder="0123" className="input" ref={el => this.inputVal = el}></input>
        <Keys 
          clear={this.clear}
          dot={this.numberDot}
          zero={this.numberZero} 
          one={this.numberOne} 
          two={this.numberTwo} 
          three={this.numberThree}
          four={this.numberFour}
          five={this.numberFive}
          six={this.numberSix}
          seven={this.numberSeven}
          eight={this.numberEight}
          nine={this.numberNine}
          divide={this.divide}
          multiply={this.multiply}
          subtract={this.subtract}
          add={this.add}
          equals={this.equals}
          />
          
          </div>
          <div className="footer">
            <Footer/>
          </div>


      </div>
    );
  }
}

export default App;
