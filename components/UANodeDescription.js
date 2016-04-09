
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
     fontSize: 19,
     fontWeight: 'bold',
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
        displayName {
          text
        }
        description {
          text
        }
      }
    `
  }
}

const UANodeDescription = compose(createContainer(frags))
  (({uaNode, navigator})=>
    <View style={styles.nodePane}>
       <Text>
        {uaNode.description ? uaNode.description.text : ''}
      </Text>
    </View>
  );

export default UANodeDescription