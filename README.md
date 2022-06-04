# moadata-team-5

## 개발자

## 개발기간

## 과제 수행 보고서

## 폴더 구조

## 배포 링크

## 실행 화면과 기능

1. 로그인 화면
     - ID, PW 입력창
     - 로그인 버튼 (ID, PW 미일치에 따른 버튼 처리)
     - ID, PW가 다른 경우의 에러메시지 및 예외처리 문구


2. 백오피스 홈 (예시와 동일하게 페이지만 구현)


4. 회원 관리 메뉴 (유령회원 DB 3개 생성 – 가입일, 로그인 아이디는 임의로 더미데이터 삽입해주세요)
     - 회원 조회 및 검색용 텍스트 박스 적용
     - 회원 조회를 위한 필터 적용
5) 로그인 ID – 과제수행자 임의 생성
6) 회원가입일시 – 과제수행자 임의 생성
7) 회원번호 – 과제수행자 임의 생성


*제공한 json 데이터 안에 member_seq를 과제수행자가 임의로 만든 아이디의 회원번호와 동일하게 적용해주세요.
그래서 해당 로그인ID로 검색할 때 회원번호(member_seq)의 데이터가 연동되도록 작업해주세요.
예) 로그인 ID moadata = 380 / moadata ID로 검색시, 380(member_seq) 에 해당하는 데이터 노출 

![ezgif-2-832329774b](https://user-images.githubusercontent.com/64529155/171983985-55b758cd-fbe7-4404-9236-55374e539788.gif)ㅇ

#### 조회 기간 구현

* 데이터 피커를 통해 조회 기간을 설정할 수 있습니다.
* 데이터 피커에서 날짜는 유저 데이터에서 가장 빠른 날짜와 가장 최근 날짜 사이에 값들만 선택이 가능합니다. 
* 데이터 피커에서 날짜를 선택했다면 조회하기 버튼을 눌러야 차트에 반영이 됩니다.
* 퀵 버튼은 오늘은 현재 날짜, 1주일은 데이터 피커의 마지막 날짜의 7일전까지의 데이터 전체는 모든 데이터를 불러오고 누른 즉시 반영이 됩니다.
* 해당 기간 데이터가 없을 경우 데이터가 없다는 것을 알리기 위한 이미지가 차트 대신 화면에 띄워집니다.

#### 차트 구현
* 특정 유저 데이터를 가져오기 위해 모든 유저의 데이터 중 해당하는 유저의 데이터를 쿼리로 받아와 일치하는 유저의 데이터를 찾아 filter하는 과정을 거칩니다.
* 특정 기간 데이터를 가져오기 위해 유저 데이터 중 crt_ymdt의 앞 부분인 년원일만 쪼개서 일치하는 날짜의 데이터들을 전부 가져온 후 각 날짜의 심박수 값의 평균을 구해 날짜당 평균값의 데이터 하나씩만 화면에 구현되도록 하였습니다.
* 데이터가 바뀔 때 차트가 애니메이션과 함께 새로 구현됩니다.
* 해당 기간 중 데이터가 없는 날은 0으로 표기됩니다.
* 툴팁에는 날짜와 심박수가 표현됩니다.





[우대 사항] - 가산점
1. 관리자 로그인 실패시(벨리데이션 체크), 팝업 호출(슬라이드업으로 페이드인 애니메이션 처리)
2. 관리자 로그인 실패시(벨리데이션 체크), 플로팅 메시지 및 애니메이션 처리 (적절한 위치에 호출)
3. 꼭 예시 화면과 똑같이 개발할 필요는 없습니다. 더 정돈된 레이아웃이라 생각되면 임의로 변경하여도 무방합니다. 단, 변경한 의도를 간단히 알려주세요. 위의 조건들에만 부합한다면 예시 화면과 전혀 다른 구조로 개발하여도 감점되거나 문제되지 않습니다.


## 추가 기능 


## 테스트 케이스 정의서


## 어려웠던 점, 배운 점, 그리고 느낀 점





