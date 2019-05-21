import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { TextInput ,Button } from 'react-native-paper';
import Foundation from 'react-native-vector-icons/Foundation';

export default class UpdateArea extends Component{
	render(){
		const { navigate } = this.props.navigation;
		return(
		   <TextInput
		        label='Email'
		        value={this.state.text}
		        onChangeText={text => this.setState({ text })}
		      />
		)
	}
}