import React, { useEffect } from 'react';
import './App.css';
import ChangeNameAvatar from './components/common/ChangeNameAvatar';
import { Route, useLocation, withRouter } from 'react-router-dom';
import LazyWrapper from './components/LazyWrapper';
import TodoTemplate from './components/template/TodoTemplate';
import SlideContainer from './Container/common/SlideContainer';
import Naver from './lib/oauth/Naver';
import Callback from './lib/oauth/Callback';
import instance from './lib/api/client';
import List from './components/dnd/List';

function App({ history }: any) {
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

      instance({
        // 프록시에 카카오 도메인을 설정했으므로 결제 준비 url만 주자
        url: '/v1/nid/me',
        // 결제 준비 API는 POST 메소드라고 한다.
        method: 'GET',
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
          history.push('/lazy');
        });
    }

    test();
  }, [history]);

  return (
    <div className="App">
      <div id="naverIdLogin"></div>
      <Route path="/image" component={ChangeNameAvatar} />
      <Route path="/lazy" component={LazyWrapper} />
      <Route path="/todo" component={TodoTemplate} />
      <Route path="/slide" component={SlideContainer} />
      <Route path="/Api/Member/Oauth" component={Callback} />
      <Route path="/dnd" component={List} />
    </div>
  );
}

export default withRouter(App);
