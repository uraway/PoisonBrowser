'use strict';

import React, {
  Component,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

const TITLE_INPUT_REF = 'title';
const DESCRIPTIOM_INPUT_REF = 'description';

export default class PoisonSettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poisonTitle: this.props.poisonTitle,
      poisonDescription: this.props.poisonDescription
    };
  }
  onTitleSubmitEditing(event) {
    this.props.onTitleInput(
      this.state.poisonTitle
    );
  }

  onDescriptionSubmitEditing(event) {
    this.props.onDescriptionInput(
      this.state.poisonDescription
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.settingText}>
          Title:
        </Text>
        <TextInput
          ref={TITLE_INPUT_REF}
          clearButtonMode="while-editing"
          style={styles.textInput}
          onChangeText={(poisonTitle) => this.setState({poisonTitle})}
          onSubmitEditing={this.onTitleSubmitEditing.bind(this)}
          value={this.state.poisonTitle}
        />
      <Text style={styles.settingText}>
          Description:
        </Text>
        <TextInput
          ref={DESCRIPTIOM_INPUT_REF}
          clearButtonMode="while-editing"
          style={styles.textInput}
          onChangeText={(poisonDescription) => this.setState({poisonDescription})}
          onSubmitEditing={this.onDescriptionSubmitEditing.bind(this)}
          value={this.state.poisonDescription}
         />
      </View>
    );
  }
}
