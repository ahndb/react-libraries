import React from 'react';
import './App.css';
import ZustandLibrary from 'src/zustand/ZustandLibrary';
import ReactRouterLibrary, { ReactRouterPage1, ReactRouterPage2 } from './react-router/ReactRouterLibrary';
import { Route, Routes } from 'react-router';
import Layout from './react-router/Layout';

function App() {
  return (
    <Routes>
      {/* <Route index element={<ReactRouterLibrary />} />
      <Route path='/page1' element={<ReactRouterPage1 />} />
      <Route path='/page2' element={<ReactRouterPage2 />} />
      <Route path='/zustand' element={<ZustandLibrary />} /> */}

      <Route path='/router' element={<Layout />}>
        <Route index element={<ReactRouterLibrary />} />
        {/* /:value 하면 뒤에오는 데이터를 받을 수 있음 */}
        <Route path='page1/:value' element={<ReactRouterPage1 />} />
        <Route path='page2' element={<ReactRouterPage2 />} />
      </Route>
      <Route path='/zustand' element={<ZustandLibrary />} />
      {/* 사용하지 않는 페이지도 아닌페이지라고 명시해서 관리해야함 */}
      <Route path='*' element={<h3>404 Error</h3>} />
    </Routes>
  );
}

export default App;


// react-cookie : React에서 쿠키관리를 수월하게하는 라이브러리