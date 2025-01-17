import React, { useState } from 'react';

const Calculator = () => {
  const [numbers, setNumbers] = useState("");

  const handleButtonClick = async(value) => {
    console.log(value);
    if (value === "AC") {
      setNumbers(""); 
    } else if (value === "DEL") {
      if (numbers.length > 0) {
      
        await setNumbers((prevNumbers) => {
          const updatedNumbers = prevNumbers.slice(0, -1);
          console.log(updatedNumbers); 
          return updatedNumbers;
        });
      }
    } else if (value === "=") {
      try {
        const result = eval(numbers); 
        setNumbers(String(result)); 
      } catch (error) {
        setNumbers("Error",error); 
      }
    } else {
      setNumbers((prevNumbers) => prevNumbers + value);
    }
  };

  return (
    <div className="container text-white">
      <h3 className="text-center mt-3 text-dark">Calculator</h3>
      <div className="container border p-5 bg-dark" style={{ width: "600px" }}>
        <div className="col">
          <div className="row-lg-6 text-end bg-success-subtle">
            {/* Display the current input */}
            <input
              type="text"
              placeholder="0"
              value={numbers || "0"}
              readOnly
              maxLength="20"
              style={{
                width: "100%",
                textAlign: "right",
                fontSize: "1.5rem", 
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="row-lg-6">
            <div className="row">
              {/* Individual Buttons */}
              <div className="col-lg-3 mt-1">
                <button value="AC" onClick={(e) => handleButtonClick(e.target.value)} className="btn text-white bg-warning p-2">AC</button>
              </div>
              <div className="col-lg-3 mt-1">
                <button value="DEL" onClick={(e) => handleButtonClick(e.target.value)} className="btn text-white">
                  <i className="fs-3 fa-solid fa-rectangle-xmark"></i>
                </button>
              </div>
              <div className="col-lg-3 mt-1">
                <button value="%" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">%</button>
              </div>
              <div className="col-lg-3 mt-1">
                <button value="/" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">/</button>
              </div>
            </div>
            {/* Buttons for numbers and operators */}
            <div className="row mt-1">
              <div className="col-lg-3">
                <button value="7" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">7</button>
              </div>
              <div className="col-lg-3">
                <button value="8" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">8</button>
              </div>
              <div className="col-lg-3">
                <button value="9" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">9</button>
              </div>
              <div className="col-lg-3">
                <button value="x" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">x</button>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-lg-3">
                <button value="4" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">4</button>
              </div>
              <div className="col-lg-3">
                <button value="5" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">5</button>
              </div>
              <div className="col-lg-3">
                <button value="6" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">6</button>
              </div>
              <div className="col-lg-3">
                <button value="-" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">-</button>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-lg-3">
                <button value="1" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">1</button>
              </div>
              <div className="col-lg-3">
                <button value="2" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">2</button>
              </div>
              <div className="col-lg-3">
                <button value="3" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">3</button>
              </div>
              <div className="col-lg-3">
                <button value="+" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">+</button>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-lg-3">
                <button value="0" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">0</button>
              </div>
              <div className="col-lg-3">
                <button value="." onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">.</button>
              </div>
              <div className="col-lg-3">
                <button value="=" onClick={(e) => handleButtonClick(e.target.value)} className="fs-5 btn text-white">=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
