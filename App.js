/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';

import { TabBar, Button, Icon } from 'antd-mobile';
import FontAIcon from 'react-native-vector-icons/FontAwesome'

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

  componentDidMount() {
    

    let icon =  <FontAIcon name='home' size={22} />;
    console.log(icon);

    var _react = require('react');
    var _react2 = _interopRequireDefault(_react);
    let res =  _react2['default'].isValidElement(icon);
    console.log(res);
    
    

  }

  render() {
    return (
      <View style={styles.container}>
      <FontAIcon name='home' size={22} color="red" />
      <View>
        <FontAIcon name='home' size={22} color="red" />
      </View>
      <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="white"
      hidden={this.state.hidden}
    >
      <TabBar.Item
        title="Life"
        key="Life"
        icon={<Image src={require('./alipay.png')} />}
        selected={this.state.selectedTab === 'blueTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'blueTab',
          });
        }}
        data-seed="logId"
      >
        <Text>4ws</Text>
      </TabBar.Item>
      <TabBar.Item
        icon={{"uri":"http://www.movesay.com/static/default/home/img/main-logo.png"}
        }
        selectedIcon={
          <div style={{
            width: '22px',
            height: '22px'
            }}
          />
        }
        title="Koubei"
        key="Koubei"
        badge={'new'}
        selected={this.state.selectedTab === 'redTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'redTab',
          });
        }}
        data-seed="logId1"
      >
      <Text>content</Text>
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon type="search" size={20} />}
        selectedIcon={
          <Icon type="search" size={20} />
        }
        title="Friend"
        key="Friend"
        dot
        selected={this.state.selectedTab === 'greenTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'greenTab',
          });
        }}
      >
      <Text>content</Text>
      </TabBar.Item>
      <TabBar.Item
        icon={require('./alipay.png')}
        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
        title="My"
        key="my"
        selected={this.state.selectedTab === 'yellowTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'yellowTab',
          });
        }}
      >
      <Text>content</Text>
      </TabBar.Item>
    </TabBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  }
});
