interface propsDefinition {
  callBack: (message: string) => void;
}

class ChildClassComp extends React.Component<propsDefinition> {
  render() {
    return (
      <div>
        <input type="text" onChange={e => this.props.callBack(e.target.value)} />
      </div>
    )
  }
}

class ClassComp extends React.Component {
  render() {
    return (
      <div>
        hello world from parent class
        <ChildClassComp callBack={message => console.log(message)} />
      </div>
    );
  }
}

ReactDOM.render(<ClassComp />, document.getElementById('container'));