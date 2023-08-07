import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MainPage from './MainPage';

import useApi from '../../hooks/useApi';

// 메인 페이지에 필요한 데이터를 관리하는 컨테이너
const MainContainer = () => {
  // 회원 정보, 오늘 투표수, 어제 투표수, 관심 기기
  const [user, setUser] = useState({});
  const [today, setToday] = useState(0);
  const [yesterday, setYesterday] = useState(0);
  const [likes, setLikes] = useState([]);

  // location 객체 생성 (현재 URL 정보 가져오기)
  const location = useLocation();

  // console.log(location);

  // 컨테이너 렌더링 시 api 호출하여 데이터 불러오기
  // location 객체를 통해 URL을 불러올 때마다 재렌더링
  useEffect(() => {
    useApi('/users/1', 'GET').then(res => {
      setUser(res.data[0], console.log(user));
    });

    useApi('/users/smoke', 'GET').then(res => {
      setToday(res.data.currentCount);
      setYesterday(res.data.pastCount);
    });

    useApi('/users/like', 'GET').then(res => {
      setLikes(res.data);
    });
  }, [location]);

  return (
    <div>
      <MainPage user={user} today={today} yesterday={yesterday} machines={likes} />
    </div>
  );
};

export default MainContainer;
