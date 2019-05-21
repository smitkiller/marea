import React, { Component } from "react";
import FusionCharts from 'react-native-fusioncharts';
import { View, Text, StyleSheet, Platform } from 'react-native';
class Pie3D extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'pie3d',
      width: '100%',
      height: '100%',
      dataFormat: 'json',
      dataSource: {
          chart: {
            caption: "พื้นที่ทั้งหมด",
            subCaption: 'จัดสันสัดส่วน',
            numberprefix: 'จำนวนไร่',
            theme: 'fint',
                flatscrollbars: "0",
    scrollheight: "12",
    scrollshowbuttons: "1",
        },
        data: [
          { label: 'ปลูกโกโก้', value: '5' },
          { label: 'ผักสวนครัว', value: '2' },
          { label: 'ฟาร์มเลี้ยงไก่', value: '1' },
          { label: 'สระเลี้ยงปลา', value: '1' },
          { label: 'ปลูกต้นยางพารา', value: '3' }
        ]
      },
      events: {
        // Add your events method here:
        // Event name should be in small letters.
        
      }
    };
    this.libraryPath = Platform.select({
      android: { uri: 'file:///android_asset/fusioncharts.html' },
      //ios: require('./assets/fusioncharts.html')
    })
  }
  render() {
    return (
      <View style={styles.container}>   
        <View style={styles.chartContainer}>

          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} 
          />
         
        </View>     
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 16
  },
  chartContainer: {
    height: 250,
    borderColor: '#000'
  }
});

export default Pie3D;