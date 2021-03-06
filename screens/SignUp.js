import React, { Component } from 'react';
import { 
  View, 
  Text 
} from 'react-native';

import t from 'tcomb-form-native';
import Person, { formOptions } from '../models/Person';

import styles from './SignUp.styles';

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { newUser: null };

  }

  componentDidMount() {
    // focus on the "name" field
    this.refs.form.getComponent('name').refs.input.focus();
  }

  clearForm() {
    this.setState({ newUser: null });
  }

  onChange(newUser) {
    this.setState({ newUser });
  }

  onSubmit() {
    // ...
    this.clearForm();
  }


  render() {
    const Form = t.form.Form;
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign up for ChatApp</Text>

        <Form
          ref='form'
          type={Person}
          options={formOptions}
          value={this.state.newUser}
          onChange={this.onChange}
        />
      </View>
    );
  }
}