import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View, 
  Image, 
  Button,
  
} from 'react-native';

var icon;

export default class SanPham extends Component{
  constructor(props){
    super(props);
    this.state={
      Them : 1
    }
  }
  

  Them(){
      this.setState({
        //Them: this.state.Them
        them:this.this.state.them + 1
      });
      
  }

  render() {
    return (

      
      <View style={styles.product}>
        <View style={styles.logo}>
          <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
        </View>
        <View style={styles.menu}>
          <Button onPress={this._onPressButton} title="trang chủ" color="#841584"/>
          <Button onPress={this._onPressButton} title="Giỏ hàng" color="#841584"/>
          <Button onPress={this._onPressButton} title="liên hệ" color="#841584"/>
        </View>

          <View style={styles.product}>
          <View style={styles.containerImg}>
          <View>
            <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
          </View>          
        </View>    
        <View style={styles.containerContent}>
          <Text> Tên sản phẩm : {this.props.tenSP} </Text> 
          <Text> Giá sản phẩm : {this.props.giaSP} </Text>
          <Text> Số lượng: {this.props.soLuong} </Text>
                  
        </View> 
        </View>       
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  product: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'orange',
    width: 400,
    height: 110,
    marginBottom : 10,
    
  },
  menu: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 250,
    height: 35,
    },
    logo:{
      
    },
  cuoi:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    width: 400,
    height: 110,
    marginBottom : 10,
  },
  productText: {
    marginBottom : 5,
  },
  
  img: {
    marginTop: -25,
    width: 50,
    height:60,
  },
  containerImg: {
    width: 100,
    height: 150,
    marginLeft: 10
  },

  containerContent: {
    marginTop:-150,
    marginLeft: 80,
    
  },

  soLuong:{
    marginLeft: 20,
  },

  soLuongText: {
    fontSize: 10
  }, 

  giamSL: {
    backgroundColor: 'white',
    textAlign:'center', 
    borderRadius: 5

  },
  tangSL: {
    backgroundColor: 'white',
    textAlign:'center',
    borderRadius: 5
    }
});
