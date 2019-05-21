import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { DataTable,Button,IconButton } from 'react-native-paper';
import Foundation from 'react-native-vector-icons/Foundation';

export default class ManageArea extends Component{
	render(){
		const { navigate } = this.props.navigation;
		return(
			<View>
				 <DataTable>
		        <DataTable.Header>
		          <DataTable.Title>กิจกรรม</DataTable.Title>
		          <DataTable.Title >รายละเอียด</DataTable.Title>
		          <DataTable.Title numeric>เนื้อที่</DataTable.Title>
		          <DataTable.Title ></DataTable.Title>
		        </DataTable.Header>

		        <DataTable.Row>
		          <DataTable.Cell>ปลูกยาง</DataTable.Cell>
		          <DataTable.Cell >พันธุ์ ....?</DataTable.Cell>
		          <DataTable.Cell numeric>6.0</DataTable.Cell>
			 		<IconButton
					    icon="edit"
					    size={20}
					    onPress={() => navigate('Home')}
					  />
  					<IconButton
					    icon="delete"
					    size={20}
					    onPress={() => navigate('Home')}
					  />
		        </DataTable.Row>

		        <DataTable.Row>
		          <DataTable.Cell>
		          	<Image 
    					source={require('../../img/flish_small.png')}  
    					style={{width: 50, height: 100}} />
					  เลี้ยงปลานิน
		          </DataTable.Cell>
		          <DataTable.Cell >พันธุ์ปลานิน ปลาดุก</DataTable.Cell>
		          <DataTable.Cell numeric>3.0</DataTable.Cell>
		         
					<IconButton
					    icon="edit"
					    size={20}
					    onPress={() => navigate('Home')}
					  />
  					<IconButton
					    icon="delete"
					    size={20}
					    onPress={() => navigate('Home')}
					  />
		       
		        </DataTable.Row>

		        <DataTable.Pagination
		          page={1}
		          numberOfPages={3}
		          onPageChange={(page) => { console.log(page); }}
		          label="1-2 of 6"
		        />
		   </DataTable>
		   </View>
			)
	}
}