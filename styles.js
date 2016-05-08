import { StyleSheet } from 'react-native';

const HEADER = '#3b5998';
const BGWASH = 'rgba(255,255,255,0.8)';
const ELEMENT_MARGIN = 8;
const SHADOW_COLOR = '#333';
const SHADOW_OPACITY = 0.4;
const SHADOW_RADIUS = 1;
const DISABLED_WASH = 'rgba(255,255,255,0.25)';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: HEADER,
    },

    header: {
        transform: [{'translate':[0,0,1]}], /* bring view to front */
        shadowColor:SHADOW_COLOR,
        shadowOpacity:SHADOW_OPACITY,
        shadowRadius:SHADOW_RADIUS,
        shadowOffset: { height:1, width: 0 },
        paddingTop: 20,
    },

    footer: {
        transform: [{'translate':[0,0,1]}], /* bring view to front */
        shadowColor:SHADOW_COLOR,
        shadowOpacity:SHADOW_OPACITY,
        shadowRadius:SHADOW_RADIUS,
        shadowOffset: { height:1, width: 0 },
    },

    addressBarRow: {
        flexDirection: 'row',
        marginTop: ELEMENT_MARGIN/2,
        marginBottom: ELEMENT_MARGIN/2,
        marginLeft: ELEMENT_MARGIN,
        marginRight: ELEMENT_MARGIN,
    },
    webView: {
        backgroundColor: BGWASH,
        height: 350,
    },
    addressBarTextInput: {
        backgroundColor: BGWASH,
        borderColor: 'transparent',
        borderRadius: 3,
        borderWidth: 1,
        height: 24,
        paddingLeft: 10,
        flex: 1,
        fontSize: 14,
    },
    navButton: {
        width: 20,
        padding: 3,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BGWASH,
        borderColor: 'transparent',
        borderRadius: 3,
    },
    button: {
      marginLeft:ELEMENT_MARGIN,
    },
    disabledButton: {
      width: 20,
      padding: 3,
      marginRight: 3,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: DISABLED_WASH,
      borderColor: 'transparent',
      borderRadius: 3,
    },
    toolBar: {
      paddingTop:ELEMENT_MARGIN,
      paddingBottom:ELEMENT_MARGIN,
      height: 40,
      flexDirection:'row',
      justifyContent:'space-around',

    },

    statusBarText: {
      flex:1,
      color: 'white',
      fontSize: 10,
    },
    spinner: {
      width: 20,
      marginRight: 6,
    },
/*
    toolBar: {
      shadowColor:SHADOW_COLOR,
      shadowOpacity:SHADOW_OPACITY,
      shadowRadius:SHADOW_RADIUS,
      shadowOffset: { height:0, width: 0 },
      flexDirection:'row',
      justifyContent:'space-around',
      paddingTop:ELEMENT_MARGIN,
      paddingBottom:ELEMENT_MARGIN
    },
*/
    toolBarIcons: {
        width:20,
        height:20,
        opacity: 0.9
    },

    poisonBar: {
      backgroundColor: 'black',
      shadowColor:SHADOW_COLOR,
      shadowOpacity:SHADOW_OPACITY,
      height: 70,
    },

    poisonText: {
      color: 'gray',
      fontSize: 10,
      margin: 5
    },

    poisonTitle: {
      color: 'white',
      fontSize: 15,
      margin: 5,
    }
});
