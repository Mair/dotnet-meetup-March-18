# Dotnet User group March 2018

## prerequisite
* node installed
* typescript installed
* run `tsc --watch`



1. install react typings

```
npm init -y
npm i @types/react @types/react-dom --dave-dev
```

2. render dom
```javascript
ReactDOM.render(<div>hello world!</div>, document.getElementById("container"))
```

3. simple functional component
```javascript
const FuncComp = () => (<div>hello world</div>)

ReactDOM.render(<FuncComp />, document.getElementById("container"))
```


3. convert to class component
```javascript
class ClassComp extends React.Component {
  render(){
    return <div>hello world from class</div>
  }
}

ReactDOM.render(<ClassComp />, document.getElementById("container"))
```

4. nested components & passing props
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
```typescript
interface Planet {
  name: string;
  image: string;
}
const planets: Planet[] = [
  {
    name: 'Mercury',
    image:
      'data:image/jpeg;base64,/9j/4AAQ....'
  },
  {
    name: 'Venus',
    image:
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/....'
  },
  {
    name: 'Earth',
    image:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABA....'
  },
  ....
];

interface planetProps {
  callBack: (planet: Planet) => void;
  planet: Planet;
}

class PlanetComp extends React.Component<planetProps> {
  render() {
    return (
      <div  onClick={() => this.props.callBack(this.props.planet)}>
        <img style={{ width: '100px', height: '100px', margin: '10px' }} src={this.props.planet.image} />
        <h2>{this.props.planet.name}</h2>
      </div>
    );
  }
}
interface ClassCompProps {}
interface ClassCompState {
  planet: Planet;
}

class ClassComp extends React.Component<ClassCompProps, ClassCompState> {
  state = { planet: null };

  setPlanet = selectedPlanet => this.setState({ planet: selectedPlanet });

  render() {
    return (
      <div>
        <div style={{ display: 'flex', width:'100%' }}>
          {planets.map(planet => <PlanetComp key={planet.name} planet={planet} callBack={this.setPlanet} />)}
        </div>
        {this.state.planet && <img style={{width: '200px', height: '200px', }} src={this.state.planet.image} alt="" />}
      </div>
    );
  }
}

ReactDOM.render(<ClassComp />, document.getElementById('container'));
```