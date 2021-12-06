import React, { Component } from 'react';
import {
    Col,
    Row
} from 'reactstrap';

class MadlibForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            color: '',
            pluralNoun: '',
            adjectiveOne: '',
            celebrityOne: ''
        }
    }

    handleChange = function(props) {
        return function(event) {

            // console.log(`value for input ${props.inputTitle} is: ${event.target.value}`)
            this.setState({[props.inputTitle]: event.target.value});
            console.log(`value for state ${props.inputTitle} is ${this.state[props.inputTitle]}`);
        }.bind(this);
    }

    render() {

      return (
        <Row style={{textAlign: 'center', color: 'white'}}>
            <Col md="3" className="inputWrapper">
                <Row>
                    <Col md="2">
                        <label className="greenLabel">1</label>
                    </Col>
                    <Col md="10">
                        <input placeholder='Color' type='text' onChange={this.handleChange({inputTitle: 'color'})} />
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <label className="inputDescription">Color</label>
                    </Col>
                </Row>
            </Col>
            <Col md="3" className="inputWrapper">
                <Row>
                    <Col md="2">
                        <label className="greenLabel">1</label>
                    </Col>
                    <Col md="10">
                        <input placeholder='Noun (Plural)' type='text' onChange={this.handleChange({inputTitle: 'pluralNoun'})}  />
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <label className="inputDescription">Noun (Plural)</label>
                    </Col>
                </Row>
            </Col>
            <Col md="3" className="inputWrapper">
                <Row>
                    <Col md="2">
                        <label className="greenLabel">1</label>
                    </Col>
                    <Col md="10">
                        <input placeholder='Adjective' type='text' onChange={this.handleChange({inputTitle: 'adjectiveOne'})}  />
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <label className="inputDescription">Adjective</label>
                    </Col>
                </Row>
            </Col>
            <Col md="3" className="inputWrapper">
                <Row>
                    <Col md="2">
                        <label className="greenLabel">1</label>
                    </Col>
                    <Col md="10">
                        <input placeholder='Celebrity' type='text' onChange={this.handleChange({inputTitle: 'celebrityOne'})} />
                    </Col>
                    <Row>
                    <Col md="12">
                        <label className="inputDescription">Celebrity</label>
                    </Col>
                </Row>
                </Row>
            </Col>
        </Row>
      );
    }
}

export default MadlibForm;