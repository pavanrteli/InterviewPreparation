import React from "react";
export default class ClassComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count:0,
      showChild: true,
    };
  }
  componentDidMount() {
    console.log("componentDidMount:renders only once");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate:renders on update");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount gets executed");
  }
 
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button
          onClick={() => {
            this.setState((prevState) => ({

              count: prevState.count+1,
            }));
          }}
        >
          Increment
        </button>
        <button onClick={()=>{
            this.setState((prevState)=>({
                showChild:!prevState.showChild
            }))
        }}>Delete Button</button>
        {this.state.showChild && <ChildComponent/>}
      </div>
    );
  }
}

class ChildComponent extends ClassComponents {
  render() {
    return <><p>this is child component</p></>;
  }
}
