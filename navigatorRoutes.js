import * as queryConfigs from './queries/queryConfigs';
import UANode from './components/UANode';
import UANodeName from './components/UANodeName';
import UANodeDescription from './components/UANodeDescription';
import UANodeNavBar from './components/UANodeNavBar';



const globalMenuState = {
  menuLeftIsOpen: false,
  
  setMenuLeft: (isOpen)=>{
    globalMenuState.menuLeftDisplay = globalMenuState.menuLeftIsOpen = isOpen;
  },
  startMenuLeft: ()=>{
    globalMenuState.menuLeftDisplay = true;
  },
  
  menuRightIsOpen: false,
  setMenuRight: (isOpen)=>{
    globalMenuState.menuRightDisplay = globalMenuState.menuRightIsOpen = isOpen;
  },
  startMenuRight: ()=>{
    globalMenuState.menuRightDisplay = true;
  }
}

const MyUANode = UANode(globalMenuState);
export function uaNodeRoute(nodeId) {
  return {
    title: 'UANode',
    Component: MyUANode(
    	[		
    		UANodeNavBar(nodeId, 'first'),
    		UANodeName,
    		UANodeDescription
    	]
    ),
    queryConfig: new queryConfigs.UaNodeQuery({nodeId})
  };
}


export function uaNodeRoute1(nodeId) {
  return {
    title: 'UANode1',
    Component: MyUANode(
    	[
    		UANodeNavBar(nodeId, 'second'),
    		UANodeName,
    		UANodeDescription
    		
    	]
    ),
    queryConfig: new queryConfigs.UaNodeQuery({nodeId})
  };
}

export function uaNodeRoute2(nodeId) {
  return {
    title: 'UANode',
    Component: MyUANode(
    	[
    		UANodeNavBar(nodeId, 'third'),
    		UANodeName
    		
    	]
    ),
    queryConfig: new queryConfigs.UaNodeQuery({nodeId})
  };
}

export function uaNodeRoute3(nodeId) {
  return {
    title: 'UANode',
    Component: MyUANode(
    	[
    		UANodeNavBar(nodeId, 'fourth'),
    		UANodeName,
    		UANodeDescription
    		
    	]
    ),
    queryConfig: new queryConfigs.UaNodeQuery({nodeId})
  };
}

export function uaNodeRoute4(nodeId) {
  return {
    title: 'UANode',
    Component: MyUANode(
    	[
    		UANodeNavBar(nodeId, 'fifth'),
    		UANodeName,
    		UANodeDescription
    		
    	]
    ),
    queryConfig: new queryConfigs.UaNodeQuery({nodeId})
  };
}