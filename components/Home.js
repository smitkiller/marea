import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { Button } from 'react-native-elements';


export default class Home extends Component{
     constructor(props){
     	super(props)
     	this.state={
     		test:1001
     	}
     }
    testState=(val)=>{
    	console.log("test state in function==>",val);
    }

    componentDidMount(){
    	this.testState(this.state.test);// right
    }

	render(){
		const { navigate } = this.props.navigation;
		//console.log("test state ===> ",this.state);
		return(
				<View> 
				<View>
					<Text>Hello React Native App</Text>
				</View>
					<Button
					  onPress={() => navigate('ManageArea',{name:'smit'})}
          			  title="จัดสรรพื้นที่"
					/>
	            		

				</View>
			);
	}
}
