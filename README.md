# Movie_App
https://iamwooki.github.io/movie_app

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
- ref : https://velopert.com/3631

### Axios
```npm i axios```
```js
//async : 비동기, await 지점에서
getMovies = async () =>{
    const movies = await axios.get("http://yts-proxy.now.sh/list_movies.json")
  }
```

### Build
```npm run build```

### git-page에 올리기
- ```git remote -v``` 경로 먼저 확인
- gh-pages 설치 ```npm i gh-pages```
- ```package.json``` 수정
```json
//package.json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  },
.
.
.
 "homepage": "https://iamwooki.github.io/movie_app"
}
```
```npm run deploy```

### Router-DOM
```npm install react-router-dom```
- <Route /> : 렌더링할 스크린과, props가 들어감
- 기존 HTML a tag는 페이지를 새로고침해서, 리액트 페이지가 죽고 다시 로딩됨 ```LINK```활용
```js
import { Link } from "react-router-dom";
<Link to="./">Home<Link>
```
## Ref
- https://velopert.com/3612
- https://academy.nomadcoders.co/courses/216871/lectures/10881387
- http://jeonghwan-kim.github.io/2018/07/16/react-app-overview.html
