interface propsDefinition {
  message: string
} 

class ChildClassComp extends React.Component<propsDefinition> {
  render(){
    return <div>{this.props.message}</div>
  }
}

const ChildFuncComp = (props : propsDefinition) => (<div>{props.message}</div>)

class ClassComp extends React.Component {
  render(){
    return <div>
      hello world from parent class
      <ChildFuncComp message="message sent to functional component" />
      <ChildClassComp message="message sent to class component" />
    </div>
  }
}

ReactDOM.render(<ClassComp />, document.getElementById("container"))