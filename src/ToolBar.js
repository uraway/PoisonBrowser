'use strict';

import React, {
  Component,
  View,
  TouchableOpacity,
  Text,
  Image,
  NavigatorIOS,
  StatusBarIOS
} from 'react-native';
const NAVIGATOR_REF = 'navigator';
import styles from '../styles';

class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.inputText = '';
    this.state = ToolBar.updateState(this.props);
    this.state = {
      showConf: false
    };
  }

  static updateState(props) {
    return {
      backButtonEnabled: props.backButtonEnabled,
      forwardButtonEnabled: props.forwardButtonEnabled,
      onBack: props.onBack,
      onForward: props.onForward
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(ToolBar.updateState(nextProps));
  }

  buttonStyle() {
    return [styles.toolBarIcons, this.props.foregroundColor && {tintColor:this.props.foregroundColor}];
  }

  render() {
    return (
      <View style={styles.toolBar}>
        <TouchableOpacity
          onPress={this.state.onBack}>
            <Text
              style={this.buttonStyle()}>
              {'<'}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.state.onForward}>
          <Text
            style={this.buttonStyle()}>
            {'>'}
          </Text>
        </TouchableOpacity>
{/*        <TouchableOpacity
          onPress={this.handlePressConfig.bind(this)}>
          <Image
            style={styles.button}
            source={require('../assets/images/settings-work-tool.png')}
          />
        </TouchableOpacity>
*/}
      </View>
    );
  }
}

export default ToolBar;
