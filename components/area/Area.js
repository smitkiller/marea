import React,{Component} from 'react';
import { SafeAreaView,View, Text, StyleSheet, ScrollView,Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import PieChart from '../PieChart';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';

const { width,height } = Dimensions.get('window');

export default class Area extends Component{
	// state = {
    // We don't know the size of the content initially, and the probably won't instantly try to scroll, so set the initial content height to 0
  //  screenHeight: 0,
 // };

//onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
//    this.setState({ screenHeight: contentHeight });
//  };
	render(){
	//	const scrollEnabled = this.state.screenHeight > height;
	const { navigate } = this.props.navigation;
		return(
			<SafeAreaView style={styles.container}>
				<ScrollView
		          style={{ flex: 1 }}
		          contentContainerStyle={styles.scrollview}
		          scrollEnabled={true}
		          onContentSizeChange={this.onContentSizeChange}
		        >

		        <Button
					  onPress={() => navigate('AddArea',{name:'smit'})}
          			  icon={<EvilIcons name="plus" size={24} />}
          			  mode="contained"
          			  title="Add"
          			  buttonStyle={styles.bottonA}
					/>
					     <Button
					  onPress={() => navigate('ManageArea')}
          			  icon={<Foundation name="page-edit" size={24} />}
          			  mode="contained"
          			  title="Edit"
          			  buttonStyle={styles.bottonE}
					/>
					<PieChart/>
				</ScrollView>
			</SafeAreaView>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollview: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  bottonE:{
  	width:"20%",
  	height:35,
  	marginLeft:'75%',
  	marginTop:-35
  },
  bottonA:{
  	width:"20%",
  	height:35,
  	marginLeft:20,
  	marginTop:20
  }
});