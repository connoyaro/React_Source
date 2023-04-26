import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  //초기 state 설정
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps !== prevState.color) {
      return { color: nextProps.color };
    }
  }

  //첫 렌더링 마친 후 실행
  componentDidMount() {
    console.log("componentDidMount");
  }

  //props 또는 state를 변경했을때 리렌더링을 시작할지 여부를 지정
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    //마지막 숫자가 4이면 렌더링 하지 않는다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  //클릭시 number에 숫자 데이터 1씩 증가
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  //render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
  getSnapshotBeforeUpdate(prevProps, prevState, snapshot) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  //리렌더링을 완료한 후 실행
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트 되기 직전 색상", snapshot);
    }
  }

  render() {
    console.log("render");
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color} </p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
