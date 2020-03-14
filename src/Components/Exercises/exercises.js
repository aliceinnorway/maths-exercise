import React from '../../../node_modules/react';
import './exercises.scss';

class Exercises extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            numberOne: 0,
            numberTwo: 0,
            answer: 0
        }
    }   

    generateNumbers = () => {
        let first = Math.floor((Math.random() * 10) + 1);
        let second = Math.floor((Math.random() * 10) + 1);

        this.setState ({
            numberOne: this.state.numberOne + first,
            numberTwo: this.state.numberTwo + second,
            answer: this.state.answer + first + second
        })

    }

    componentDidMount(){
        this.generateNumbers();
      }

    render(){
        return(
            <section className="exercise">
                <div className="question">
                    <p>{this.state.numberOne} + {this.state.numberTwo} = </p>
                </div>
                <div className="answer-box">
                    <input inputMode="numeric" class="input-field" name="answer" id="answer" required />
                    <label for="answer" class="input-label">Your Answer</label>
                </div>
            </section>
        )
}

}

export default Exercises;