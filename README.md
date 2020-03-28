# Movie_App

React JS Fundamentals Course
- node js : 10.16.1 LTS
- npm : 6.13.4
```
node -v
npm -v
npm install npx -g
npx create-react-app movie_app
```

### jsx
- react application은 하나의 component만 렌더링함 따라서 모든 것은 application안에 들어가야하고 app안에는 많은 components를 넣을 수 있음
- component에 정보를 보낼 수 있음, react가 멋진 이유는 재사용 가능한 component를 만들 수 있다는 것
- react는 render()을 실시간으로 새로고침 하지 않음
    -   ```this.setState({변수 : 값})```을 이용해 render()호출


### [React Component LifeCycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
- render()-> componentDidMount()
- setState() -> render() -> componentDidUpdate()

### Axios
```npm i axios```
```js
componentDidMount(){
    axios.get("http://yts-proxy.now.sh/list_movies.json")
}
```
