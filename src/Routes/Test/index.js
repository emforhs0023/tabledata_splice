import React,{ useState, useEffect } from "react"


const Test = () => {

    const [aa, as] = useState([
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
          },
          {
            key: '2',
            name: 'Joe Black',
            age: 42,
            address: 'London No. 1 Lake Park',
          },
          {
            key: '3',
            name: 'Jim Green',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
          },
          {
            key: '4',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
          },
    ])

    useEffect(() => {
        const temp = [...aa]
        
        const postIndex = temp.findIndex((v) => v.name === "Jim Green")
        const post = temp[postIndex];
        console.log(post.key)
        // const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
    }, [])    

    const on = () => {
        // case LIKE_POST_SUCCESS: {
        //     const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
        //     const post = state.mainPosts[postIndex];
        //     const Likers = [{ id: action.data.userId }, ...post.Likers];
        //     const mainPosts = [...state.mainPosts];
        //     mainPosts[postIndex] = { ...post, Likers };
        //     return {
        //         ...state,
        //         mainPosts,
        //     };
        // }
        // case LIKE_POST_FAILURE: {
        //     return {
        //         ...state,
        //     };
        // }
        // case UNLIKE_POST_REQUEST: {
        //     return {
        //         ...state,
        //     };
        // }
        // case UNLIKE_POST_SUCCESS: {
        //     const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
        //     const post = state.mainPosts[postIndex];
        //     const Likers = post.Likers.filter(v => v.id !== action.data.userId);
        //     const mainPosts = [...state.mainPosts];
        //     mainPosts[postIndex] = { ...post, Likers };
        //     return {
        //         ...state,
        //         mainPosts,
        //     };
        // }
    }
    return (
        <>
            <div style={{margin:"10px"}}>
                {aa.map((data) => 
                    <div key={data.key} style={{ border:"1px solid black", marginTop:"10px" }}>

                        <div>{data.key}</div>
                        <div>{data.name}</div>
                        <div>{data.age}</div>
                        <div>{data.address}</div>

                    </div>
                )}	
                <button onClick={on}>
                    상승
                </button>
            </div>
            
        </>
    )
}

export default Test


1. welltag
1) 진행 기간 : 2017.08 ~ 현재 까지 진행중
2) 주요 내용 : 병동안의 환자들을 대상으로 하여 환자의 현재 위치는 물론 낙상과 욕창 등의 상태, 환자의 운동량을 실시간 모니터링 하는 동시에 실제 낙상과 욕창이 자주 일어난 장소를 도식화 하여 예방 까지 할 수 있는 웹을 이용한 실시간 상태 모니터링 시스템 구현
3) 본인이 공헌한 점:
frontend => 화면 구성 및 데이터 처리, 웹서버 데이터 요청, jcanvas 드래그, stop, start 화면 기능 구현, socket으로 실시간 데이터 들어 왔을 때 데이터 처리
backend => Rest full Api 구성, mqttPublish 설계 및 개발, DataBase 연동, 실시간 서비스 socket.io 개발,
Database => Database설계, Database query 개발
4) 사용한 skill
frontend => HTML, CSS, Jquery, Javascript, jcanvas, ajax
backend => node.js(express), mqtt, socket.io
Database => mysql

5) 결과 및 성과
부산 대학병원, 부산의료원, 한서요양병원 의 병원에서 테스트 및 임상 실험 으로 국가 과제 통과
깃 허브 주소 : https://github.com/emforhs0023/welltag_page
--------------------------------------------------------------------

2. mtag
1) 진행 기간 : 2017.08 ~ 현재 까지 진행중

2) 주요 내용 : 승선자 측위 및 안전 상태 감지 시스템에서 정송 되는 데이터를 이용하여 승선 자의 현재 위치를 화면에 표시 할 수 있는 웹 서버 시스템으로 구현 되었다.

3) 본인이 공헌한 점:
frontend => 화면 구성 및 데이터 처리, 웹서버 데이터 요청, jcanvas 드래그, stop, start 화면 표현 기능 구현
backend => Rest full Api 구성, mqtt Publish 설계 및 개발, subscribe 개발, DataBase 연동
Database => Database query 개발

4) 사용한 skill
frontend => HTML, CSS, Jquery, Javascript, jcanvas, ajax
backend => node.js(express), mqtt
Database => mysql

5) 결과 및 성과
휴면 중공업 테스트 및 나이파 과제 통과 , gs인증 1등급
깃 허브 주소 : https://github.com/emforhs0023/mtag_page
--------------------------------------------------------------------
3. Cloud Connector

1) 진행 기간 : 2018.05 ~ 2018.11.01

2) 주요 내용 : 설비의 상태를 쉽게 모니터링하고, 상태에 대한 분석/센싱정보 가공/활용을 용이하게 하는 모니터링 서비스

3) 본인이 공헌한 점:
frontend => 화면 구성 및 데이터 처리, 웹서버 데이터 요청 개발
backend => rest full Api 구성, mqttSubscribe 설계 및 개발, DataBase 연동, passport 로그인 관리
Database => Database query 개발

4) 사용한 skill
frontend => HTML, CSS, Jquery, Javascript, ajax
backend => node.js(express), mqtt
Database => mysql

5) 결과 및 성과
<제조 산업 IoT를 위한 Cloud Connector 플랫폼 기술 개발> 과제 최종 통과
깃 허브 주소 : https://github.com/emforhs0023/smart_factory_project

--------------------------------------------------------------------
4. MockChart

1) 진행 기간 : 2018.07 ~ 2019.03.13

2) 주요 내용 : 원정보시스템 중 차트에 대한 교육 환경에 초점을 맞추어 기존 종이 차트에 기록 했던 환자에 대한 모든 정보를 전산화 하여 입력, 관리, 저장하는 형태의 EMR(Electronic Medical Record, 전자의무기록)의 기능 중 차트관리에 대한 기능을 구현하여 간호 실습생들의 full chart에 대한 학습 역량을 향상시키고 관련 의료분야에 진출 시 재교육 비용의 절감을 꾀하며 병원에만 있는 EMR의 학습에 대한 시간적 공간적 제약을 해결하기 위하여 개발

3) 본인이 공헌한 점:
frontend => 화면 구성 및 데이터 처리, 웹서버 데이터 요청 개발, 자동 점수 체점 기능
backend => 클라이언트에서 요청한 데이터 Restfull Api 구성, passport ID 권한 처리, 파일 업로드, 데이터베이스 연결
Database => 데이터 베이스 query 개발, 데이터 베이스 설계

4) 사용한 skill
frontend => HTML, CSS, Jquery, Javascript, ajax, React
backend => node.js(express)
Database => mysql

5) 결과 및 성과
논문 1제출,

깃 허브 주소 : https://github.com/emforhs0023/mock_chart
--------------------------------------------------------------------

5. artikplus

1) 진행 기간 : 2017.08 ~ 2018.11

2) 주요 내용 : artikPlus는 아두이노와 라즈베리파이와 같이 ARTIK보드를 사용하는 사용자들의 공간인 커뮤니티 사이트로 개발 되었다. 전체적인 레이아웃은 XE로 개발을 하였고 PHP와 javascript을 사용 하여 사이트를 구축 한 사이트 이다

3) 본인이 공헌한 점:
frontend => 화면 구성 및 데이터 처리, xe core 라이브러리 사용
backend => 클라이언트에서 요청한 데이터 Restfull Api 구성
Database => 데이터 베이스 query 개발

4) 사용한 skill
frontend => HTML, CSS, Jquery, Javascript, ajax
backend => php
Database => mysql

5) 결과 및 성과
실제 artikplus 사이트 서비스 적용(현재 삼성에서 artik보드 사업 중단으로 인해 서비스 사용 중단 )
--------------------------------------------------------------------

6. kpop

1) 진행 기간 : 2019.08 ~ 현재 진행 중

2) 주요 내용 : 리얼 센스 카메라 인식을 이용한 게임을 관리 하는 현재 개발 진행 중인 커뮤니티 컨텐츠 사이트 이다.

3) 본인이 공헌한 점:
frontend => 화면 구성 및 데이터 비동기 요청, SSR
backend => 클라이언트에서 요청한 데이터 Restfull Api 구성, DataBase 연동, passport 로그인 관리
Database => 데이터 베이스 query 개발, 데이터 베이스 설계

4) 사용한 skill
frontend => HTML, CSS, JS, axios, React, Redux, Redux-Saga, Next.js
backend => node,js(express)
Database => mysql

5) 결과 및 성과
현재 개발 진행 중

깃허브 주소: https://github.com/emforhs0023/kpop_page
--------------------------------------------------------------------

7. Jjinipia

1) 진행 기간 : 2019.10 ~ 현재 진행 중

2) 주요 내용 : 자체 개발로 나의 포토폴리오 홈페이지

3) 본인이 공헌한 점:
frontend => 화면 구성 및 데이터 처리, 비동기 처리
backend => 클라이언트에서 요청한 데이터 Restfull Api 구성, DataBase 연동
Database => 데이터 베이스 설계, 데이터 베이스 query 개발

4) 사용한 skill
frontend => HTML, CSS, JS, axios, React, Redux, Redux-Saga
backend => node,js(express)
Database => mysql

5) 결과 및 성과
현재 포토폴리오 사용 중

깃허브 주소: https://github.com/emforhs0023/portfolio

--------------------------------------------------------------------
논문주소 : http://www.riss.kr/search/download/FullTextDownload.do?control_no=b5d62de6c8b084e6ffe0bdc3ef48d419&p_mat_type=be54d9b8bc7cdb09&p_submat_type=f1a8c7a1de0e08b8&fulltext_kind=a8cb3aaead67ab5b&t_gub