import React, {
  View,
  Text,
  Component
} from 'react-native';

import styles from '../styles';

class PoisonBar extends Component {
  render() {
    return (
      <View style={styles.poisonBar}>
        <Text style={styles.poisonTitle}>
          {this.props.poisonTitle}
        </Text>
        <Text style={styles.poisonText}>
          {this.props.poisonText}
        </Text>
      </View>
    );
  }
}

export default PoisonBar
