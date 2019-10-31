import React, { Component } from 'react';
import { View } from 'react-native';
import SanPham from './SanPham';

export default class DanhSachSP extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
         <SanPham maSP ='SP01' tenSP= "Áo" img = 'https://khuyenmaikiengiang.com/images/sanpham/841/ao-so-mi-nu-tay-hinh-buom-.jpg'></SanPham>
         <SanPham maSP ='SP02' tenSP= "Áo" img = 'https://khuyenmaikiengiang.com/images/sanpham/841/ao-so-mi-nu-tay-hinh-buom-.jpg'></SanPham>
         <SanPham maSP ='SP01' tenSP= "Áo" img = 'https://khuyenmaikiengiang.com/images/sanpham/841/ao-so-mi-nu-tay-hinh-buom-.jpg'></SanPham>
         <SanPham maSP ='SP02' tenSP= "Áo" img = 'https://khuyenmaikiengiang.com/images/sanpham/841/ao-so-mi-nu-tay-hinh-buom-.jpg'></SanPham>
      </View>
    );
  }
}
