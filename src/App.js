import React, {Component} from 'react';
import Profile from './components/Profile';
import Basic from './components/Basic';
import Part from './components/Part/Wrapper';
import Skill from './components/Skill';
import Reserch from "./components/Reserch";
import Award from './components/Award';
import Certificate from './components/Certificate';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      profiles:[
        {id:1, title:'이름', desc:'김호빈'},
        {id:2, title:'전화번호', desc:'010 - 5534 - 0573'},
        {id:3, title:'email', desc:'isb0573@naver.com'},
        {id:4, title:'git', desc:'asdasddasdd.com'},
        {id:5, title:'blog', desc:'asdfsdfasf.com'},
      ],
      projects:[
        {id:1, left_title:'TAPC', left_subtitle:'2018.03 ~ 2018.06',right_title:'Andoroid기반 앱 프로젝트', right_subtitle:'Android + FireBase',
        right:[
          {id:1, content:'asfasdfasdf'},
          {id:1, content:'asfasdfasdf'},
        ]},
        {id:2, left_title:'PC 견적 관리 시스템', left_subtitle:'2019.09 ~ 2019.12', right_title:'PC견적관리 웹사이트', right_subtitle:'PHP + mySQL', 
        right:[
          {id:1, content:'asfasdfasdf'},
          {id:1, content:'asfasdfasdf'},
          {id:1, content:'asfasdfasdf'},
          {id:1, content:'asfasaaaaaasdf'},
        ]},
      ],

    }
  }
  render() {
    return (
      <div className="App">
        <Profile data={this.state.profiles}></Profile>
        <Skill></Skill>
        <Part data={this.state.projects}></Part>
        <Reserch></Reserch>
        <Basic></Basic>
        <Award></Award>
        <Certificate></Certificate>
      </div>
    );
  }
}

export default App;