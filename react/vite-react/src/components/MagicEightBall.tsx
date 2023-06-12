import React, { Component } from 'react';

class MagicEightBall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
        };
    }

    // Функція для генерації випадкових відповідей
    generateAnswer = () => {
        const answers = [
            'Безумовно',
            'Так',
            'Ні',
            'Можливо',
            'Не впевнений',
            'Скоріше за все',
            'Знаки вказують на "так"',
            'Знаки вказують на "ні"',
            'Потрібно спробувати ще раз',
            'Попробуйте пізніше',
        ];
        const randomIndex = Math.floor(Math.random() * answers.length);
        return answers[randomIndex];
    };

    // Функція, яка обробляє подію submit форми
    handleFormSubmit = (event) => {
        event.preventDefault();
        const answer = this.generateAnswer();
        this.setState({ answer });
    };

    render() {
        return (
            <div>
                <h1>Магічна куля передбачень</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <button type="submit">Задати питання</button>
                </form>
                <p>{this.state.answer}</p>
            </div>
        );
    }
}

export default MagicEightBall;
