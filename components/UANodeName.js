import React, {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Relay from 'react-relay';
import {createContainer} from 'recompose-relay';
import {compose} from 'recompose';

var styles = StyleSheet.create({
  textStyle : {
    fontSize: 19,
    fontWeight: 'bold'
  }
});

const frags =  {
  fragments: {
    uaNode: ()=> Relay.QL`
      fragment on UANode {
        displayName {
          text
        }
      }
    `
  }
}

const UANodeName = compose(createContainer(frags))
  (({uaNode})=>
    <Text
      style = {styles.textStyle}>
      {uaNode.displayName.text}
    </Text>
  );

export default UANodeName
