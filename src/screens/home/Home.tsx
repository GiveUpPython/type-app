import React, { PureComponent } from 'react';

interface IProps {
  children: any;
}

interface IState {
  res?: any;
}

export default class Home extends PureComponent<IProps, IState> {
  state = {
    res: undefined,
  } as IState;

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <>
        <div>1234</div>
      </>
    );
  }
}
