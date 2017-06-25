import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default class App extends Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.welcome }, "Welcome to React Native!"),
            React.createElement(Text, { style: styles.instructions }, "To get started, edit index.ios.js"),
            React.createElement(Text, { style: styles.instructions },
                "Double tap R on your keyboard to reload,",
                '\n',
                "Shake or press menu button for dev menu")));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
//# sourceMappingURL=index.ios.js.map