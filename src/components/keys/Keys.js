import React from 'react';
import './Keys.css';


const Keys = (props) => {

    return(
        <div className="keyBody">
            <table className="keyTable">
                <tbody>
                    <tr>
                        <td colSpan="3"><button className="clearButton" onClick={props.clear}>clear</button></td>
                        <td className="operations"><button className="operations" onClick={props.divide}>/</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={props.seven}>7</button></td>
                        <td><button onClick={props.eight}>8</button></td>
                        <td><button onClick={props.nine}>9</button></td>
                        <td className="operations"><button className="operations" onClick={props.multiply}>x</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={props.four}>4</button></td>
                        <td><button onClick={props.five}>5</button></td>
                        <td><button onClick={props.six}>6</button></td>
                        <td className="operations"><button className="operations" onClick={props.subtract}>-</button></td>
                    </tr>

                    <tr>
                        <td><button onClick={props.one}>1</button></td>
                        <td><button onClick={props.two}>2</button></td>
                        <td><button onClick={props.three}>3</button></td>
                        <td className="operations"><button className="operations" onClick={props.add}>+</button></td>
                    </tr>

                    <tr>
                        <td colSpan="2"><button onClick={props.zero}>0</button></td>
                        <td><button onClick={props.dot}>.</button></td>
                        <td className="operations"><button className="operations" onClick={props.equals}>=</button></td>
                    </tr>

                </tbody>

            </table>


        </div>


    )
}


export default Keys;