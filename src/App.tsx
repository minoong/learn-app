import React, { useEffect } from 'react';
import './App.css';
import ChangeNameAvatar from './components/common/ChangeNameAvatar';
import { Route, useLocation } from 'react-router-dom';
import LazyWrapper from './components/LazyWrapper';
import TodoTemplate from './components/template/TodoTemplate';
import SlideContainer from './Container/common/SlideContainer';
import Naver from './lib/oauth/Naver';
import Callback from './lib/oauth/Callback';
import axios from 'axios';

function App() {
  const dummy: string[] = Array(10).fill('test');
  const NaverLogin = () => {
    Naver();
  };

  const location = useLocation();

  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split('=')[1].split('&')[0];
    console.log(token);
    return `Bearer ${token}`;
  };

  useEffect(() => {
    NaverLogin();
  }, []);

  useEffect(() => {
    function test() {
      // const instance = axios.create({
      //   headers: {
      //     Authrozation: getNaverToken(),
      //   },
      // });

      // const data = await instance.post('/v1/nid/me');

      axios({
        // 프록시에 카카오 도메인을 설정했으므로 결제 준비 url만 주자
        url: '/v1/nid/me',
        // 결제 준비 API는 POST 메소드라고 한다.
        method: 'GET',
        headers: {
          // 카카오 developers에 등록한 admin키를 헤더에 줘야 한다.
          // Authorization: `${getNaverToken()}`,
          Authorization: `Bearer ${localStorage.getItem('com.naver.nid.access_token')?.split('.')[1]}`,
        },
        // 설정한 매개변수들
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error.response));
    }

    test();
  }, []);

  return (
    <div className="App">
      <div id="naverIdLogin"></div>
      <Route path="/image" component={ChangeNameAvatar} />
      <Route path="/lazy" component={LazyWrapper} />
      <Route path="/todo" component={TodoTemplate} />
      <Route path="/slide" component={SlideContainer} />
      <Route path="/Api/Member/Oauth" component={Callback} />
    </div>
  );
}

export default App;
