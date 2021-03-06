
import React, {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Relay from 'react-relay';

import {createContainer} from 'recompose-relay';
import {compose} from 'recompose';
import {uaNodeRoute} from '../navigatorRoutes';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';



var styles = StyleSheet.create({
  row: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerStyle: {
    padding: 10,
    height: 45,
    overflow: 'hidden',
    borderRadius:4,
    backgroundColor: '#FFFF00'
  },
  style: {
    fontSize: 20,
    color: 'green'
  }
});

// #FFFF00


const frags =  {
  fragments: {
    referenceDescription: ()=> Relay.QL`
      fragment on ReferenceDescription {
        uaNode {
          nodeId {
            namespace
            identifierType
            value
          }
          displayName {
            text
          }
        }
      }
    `
  }
}



const getNav = (navigator, nodeId, routeFunc)=>
  ()=> navigator.replace(routeFunc(nodeId));

const ReferenceLink = compose(createContainer(frags))
  (({referenceDescription, navigator, routeFunc})=> (
    <View style={styles.row}>
    <Icon name="rocket" size={30} color="#900" />
      <Button
        containerStyle = {styles.containerStyle}
        style = {styles.style}
        onPress = {
          getNav(
          navigator,
          `ns=${
            referenceDescription.uaNode.nodeId.namespace
          };i=${
            referenceDescription.uaNode.nodeId.value
          }`,
          routeFunc
        )}>
           <Text >
             {referenceDescription.uaNode.displayName.text}
           </Text>
      </Button>
    </View>
  ));
export default ReferenceLink
