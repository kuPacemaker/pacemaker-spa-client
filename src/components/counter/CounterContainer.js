import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './view/Counter';
import { increment, decrement } from 'store/modules/creators/counter';
import { bindActionCreators } from 'redux'; // 불러오기
import { getPost } from 'store/modules/action/post';

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  handleTest = () => {
    this.props.getPost(this.props.number);
  };
  render() {
    const { color, number } = this.props;
    return (
      <Counter
        color={color}
        value={number}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onTest={this.handleTest}
      />
    );
  }
}

const mapStateToProps = ({ counter }) => ({
  color: counter.color,
  number: counter.number,
});

// const mapStateToProps = ({ counter }) => ({
//   color: counter.get('color'),
//   number: counter.get('number'),
// });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ increment, decrement, getPost }, dispatch); // (2) bindActionCreators 사용.

// **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
// const mapDispatchToProps = { increment, decrement };

// ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
