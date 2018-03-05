import React, { Component } from 'react';

export default  function fauxConnect(mapStateToProps, mapDispatchToProps){

  return function(TargetComponent) {

    return class ConnectComponent extends Component {
      render() {
        const { store } = this.context;
        const props = mapStateToProps(store.getState());
        const dispatchProps = mapDispatchToProps();

        return <TargetComponent {...props} {...dispatchProps}/>;

      }
    };
  };
}