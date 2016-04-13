
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView
} from 'react-native';

import Relay from 'react-relay';

import {createContainer} from 'recompose-relay';
import {compose} from 'recompose';


var styles = StyleSheet.create({
  nodeStyle : {
    flex:1,
     fontSize: 12,
     justifyContent: 'center',
     alignItems: 'center'
  },
  nodePane : {
    flex:1,
     justifyContent: 'center',
     alignItems: 'center'
  }
});


const frags =  {
  fragments: {
    uaNode: ()=> Relay.QL`
      fragment on UANode {
        nodeClass
      }
    `
  }
}

const UANodeClass = compose(createContainer(frags))
  (({uaNode, navigator})=>
    <View style={styles.nodePane}>
      <Text
        style = {styles.nodeStyle}>
        {uaNode.nodeClass}
      </Text>
    </View>
  );

export default UANodeClass