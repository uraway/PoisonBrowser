'use strict';

import React, {
  Component,
  View,
  WebView,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import AddressBar from './AddressBar';
import ToolBar from './ToolBar';
import PoisonBar from './PoisonBar';

import Utils from './Utils';
import styles from '../styles';

const WEBVIEW_REF = 'webview';

class WebBrowser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: Utils.sanitizeURL(this.props.url),
      backButtonEnabled: false,
      forwardButtonEnabled: false,
      loading: true,
      scalesPageToFit: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      url: Utils.sanitizeURL(nextProps.url)
    });
  }

  renderAddressBar() {
    if (!this.props.showAddressBar) {
      return;
    }
    return (
      <AddressBar
        url={Utils.sanitizeURL(this.state.url)}
        onReload={this.reload.bind(this)}
        onLoad={(url)=>{this.load(url)}}
      />
    );
  }

  renderToolBar() {
    if (!this.props.showToolBar) {
      return;
    }
    return (
      <ToolBar
        onBack={this.goBack.bind(this)}
        onForward={this.goForward.bind(this)}
        backButtonEnabled={this.state.backButtonEnabled}
        forwardButtonEnabled={this.state.forwardButtonEnabled}
      />
    );
  }

  renderPoisonBar() {
    if (!this.props.showPoisonBar) {
      return;
    }
    return (
      <PoisonBar
        poisonTitle={this.props.poisonTitle}
        poisonText={this.props.poisonText}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        {this.renderAddressBar()}
        {this.renderToolBar()}
        </View>
        <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{ uri: this.state.url }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        />
      <View style={styles.footer}>
        {this.renderPoisonBar()}
      </View>
      <Spinner visible={this.state.loading} />
      </View>
    );
  }

  goBack() {
    this.refs[WEBVIEW_REF].goBack();
  }

  goForward() {
    this.refs[WEBVIEW_REF].goForward();
  }

  load(url) {
    this.setState({
      url
    });
  }

  reload() {
    this.refs[WEBVIEW_REF].reload();
  }

  onNavigationStateChange(navigationState) {
    this.setState({
      backButtonEnabled: navigationState.canGoBack,
      forwardButtonEnabled: navigationState.canGoForward,
      url: navigationState.url,
      title: navigationState.title,
      loading: navigationState.loading,
      scalesPageToFit: true
    });
  }
}

export default WebBrowser;
