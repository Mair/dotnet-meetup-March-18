# Dotnet User group March 2018

## prerequisite
* node installed
* git installed
* typescript installed `npm i typescript -g `
* clone the repo
* install dependencies `npm install`
* run `tsc --watch`

1. install react typings

```
npm init -y
npm i @types/react @types/react-dom --dave-dev
```

2. render dom
``` 
git checkout master~7 
```
```javascript
ReactDOM.render(<div>hello world!</div>, document.getElementById("container"))
```

3. simple functional component
``` 
git checkout master~6 
```

```javascript
const FuncComp = () => (<div>hello world</div>)

ReactDOM.render(<FuncComp />, document.getElementById("container"))
```


3. convert to class component
``` 
git checkout master~5 
```
```javascript
class ClassComp extends React.Component {
  render(){
    return <div>hello world from class</div>
  }
}

ReactDOM.render(<ClassComp />, document.getElementById("container"))
```

4. nested components & passing props
``` 
git checkout master~4 
```
```typescript

class ChildClassComp extends React.Component {
  render(){
    return <div>{this.props.message}</div>
  }
}

const ChildFuncComp = props => (<div>{props.message}</div>)

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
```


5. add typescript typings
``` 
git checkout master~3 
```
```typescript

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
```

6. show using passing messages to parent with callback
``` 
git checkout master~2
```
```typescript
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
```

7 using state to update components
``` 
git checkout master~1
```
```typescript
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

```

8. arrays and more
``` 
git checkout master
```