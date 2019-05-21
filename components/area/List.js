import React,{Component} from 'react';
import {View,Text,Image,TouchableHighlight} from 'react-native';
import { Button } from 'react-native-paper';

export default class List extends Component{
	render(){
		return(
				<View>
				<TouchableHighlight
				 onPress={() => console.log('test')}>
  					<View>  
  					  <Image 
    					source={require('../../img/flish_small.png')}  
    					style={{width: 100, height: 150}} />
					  <Text style={{color:'black'}}>เลี้ยงปลา</Text>
					</View>
				</TouchableHighlight>
	


					  <Button 
					  mode="Outlined button" 
					  onPress={() => console.log('Pressed')}
					  color="dodgerblue"
					  >

					  <Text style={{color:'black'}}>เลี้ยงปลา</Text>
					  </Button>

  						 <Button icon="add-a-photo" mode="Outlined button
" onPress={() => console.log('Pressed')}>
   						 ปลูกยาง
  						</Button>
				</View>
			)
	}
}