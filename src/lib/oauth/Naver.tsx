// const { naver }: any = window;

declare global {
  interface Window {
    naver: any;
  }
}

const Naver = () => {
  const { naver } = window;
  const naverLogin = new naver.LoginWithNaverId({
    clientId: `${process.env.REACT_APP_NAVER_LOGIN}`,
    callbackUrl: 'http://localhost:3000/Api/Member/Oauth',
    isPopup: false,
    loginButton: { color: 'green', type: 3, height: '50' },
    callbackHandler: true,
  });
  naverLogin.init();

  console.log(naverLogin);

  localStorage.setItem('naver.accessToken', naverLogin.accessToken);
};

export default Naver;
