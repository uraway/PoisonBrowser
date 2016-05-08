'use strict';

import React, {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image,
  Component
} from 'react-native';
import Utils from './Utils';
import styles from '../styles';
const TEXT_INPUT_REF = 'urlInput';

class AddressBar extends Component {
  constructor(props) {
    super(props);
    this.inputText = '';
    this.state = {
      url: this.props.url
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      url: nextProps.url
    });
  }

  handleTextInputChange(event) {
    const url = Utils.sanitizeURL(event.nativeEvent.text);
    this.inputText = url;
  }

  onSubmitEditing(event) {
    this.load();
  }

  load() {
    const url = this.inputText;
    if (url === this.props.url) {
      this.props.onReload();
    } else {
      this.props.onLoad(url);
    }
    // dismiss keyboard
    this.refs[TEXT_INPUT_REF].blur();
  }

  render() {
    return (
      <View style={styles.addressBarRow}>
        <TextInput
          ref={TEXT_INPUT_REF}
          autoCapitalize="none"
          defaultValue={this.state.url}
          onSubmitEditing={this.onSubmitEditing.bind(this)}
          onChange={this.handleTextInputChange.bind(this)}
          clearButtonMode="while-editing"
          style={styles.addressBarTextInput}
        />
      </View>
    );
  }
}

export default AddressBar;
