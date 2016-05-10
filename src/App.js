'use strict';

import React, {
  Component
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import WebBrowser from './WebBrowser';
import PoisonSettingPage from './PoisonSettingPage';

export default class PoisonBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poisonTitle: "私ダイエット痩せすぎてワロタ",
      poisonDescription: "ダイエットが続かない私が1ヶ月で痩せたその結果がこちら"
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      poisonTitle: newProps.poisonTitle,
      poisonDescription: newProps.poisonDescription
    });
  }

  handleTitleInputChange(inputText) {
    this.setState({
      poisonTitle: inputText
    });
  }

  handleDescriptionInputChange(inputText) {
    this.setState({
      poisonDescription: inputText
    });
  }

  render() {
    return (
      <ScrollableTabView
        tabBarPosition='bottom'
        >
        <WebBrowser
          url='https://google.co.jp/'
          backgroundColor='rgb(50, 180, 280)'
          tabLabel='Browser'
          poisonTitle={this.state.poisonTitle}
          poisonDescription={this.state.poisonDescription}
        />
        <PoisonSettingPage
          tabLabel='Setting'
          poisonTitle={this.state.poisonTitle}
          poisonDescription={this.state.poisonDescription}
          onTitleInput={this.handleTitleInputChange.bind(this)}
          onDescriptionInput={this.handleDescriptionInputChange.bind(this)}
        />
      </ScrollableTabView>
    );
  }
}
