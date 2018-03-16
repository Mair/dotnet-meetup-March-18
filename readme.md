# Dotnet User group March 2018

## prerequisite
* node installed
* git installed
* typescript installed `npm i typescript -g `
* clone the repo
* install dependencies `npm install`
* run `tsc --watch`

[![React meetup video](http://img.youtube.com/vi/5zP7L2UY0K4/0.jpg)](http://www.youtube.com/watch?v=5zP7L2UY0K4)

1. ensure everything is working
```
git checkout step1
``` 
copy the path of index.html and paste it into your browser. You should get an alert


2. render dom
``` 
git checkout step2
```
```javascript
ReactDOM.render(<div>hello world!</div>, document.getElementById("container"))
```

3. simple functional component
``` 
git checkout step3
```

```javascript
const FuncComp = () => (<div>hello world</div>)

ReactDOM.render(<FuncComp />, document.getElementById("container"))
```


3. convert to class component
``` 
git checkout step4
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
git checkout step5
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
git checkout step6
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
git checkout step7
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
git checkout step8
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