interface propsDefinition {
  callBack: (message: string) => void;
}

class ChildClassComp extends React.Component<propsDefinition> {
  render() {
    return (
      <div>
        <input type="text" onChange={e => this.props.callBack(e.target.value)} />
      </div>
    );
  }
}
interface ClassCompProps {}
interface ClassCompState {
  message: string;
}

class ClassComp extends React.Component<ClassCompProps, ClassCompState> {
  state ={message: ''}
  render() {
    return (
      <div>
        hello world from parent class
        <ChildClassComp callBack={message => this.setState({message})} />
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

ReactDOM.render(<ClassComp />, document.getElementById('container'));