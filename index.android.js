/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component
} from 'react-native';

import WebBrowser from './src/WebBrowser';

class PoisonBrowser extends Component {
  render() {
    return (
      <WebBrowser
        url='https://google.co.jp/'
        showAddressBar
        showToolBar
        showPoisonBar
        poisonTitle="私のダイエット痩せすぎてワロタ"
        poisonText="ダイエットが続かない私が1ヶ月で痩せたその結果がこちら"
      />
    );
  }
}

AppRegistry.registerComponent('PoisonBrowser', () => PoisonBrowser);
