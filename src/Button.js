
import React, {
  Component,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import styles from '../styles';

const Button = ({props}) => {
  _handlePress() {
    if (this.props.enabled !== false && this.props.onPress) {
      this.props.onPress();
    }
  }
  return (
    <TouchableWithoutFeedback
      onPress={this._handlePress}>
      <View
        style={[styles.button, this.props,enabled ? {} : styles.buttonDisabled]}>
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
