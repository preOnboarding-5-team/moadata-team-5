# moadata-team-5

## 개발자
### 곽태훈, 민지원, 박휘건, 이지정, 장재혁, 문재석, 이선아

## 개발기간

## 과제 수행 보고서

## 폴더 구조

## 배포 링크

## 실행 화면과 기능

1. 로그인 화면

![Animation](https://user-images.githubusercontent.com/47405655/171988356-6342576a-b0c1-49be-96b4-dc1fdf56df44.gif)

* ID, PW input이 비었을 경우 '필수 입력 항목입니다.'라는 문구가 해당 input 아래에 나타납니다. 
* PW의 경우 5자 이상의 유효성 검사를 추가하여 5자 미만일 경우 '최소 5글자 입력해주세요'라는 문구가 나타납니다.
* 
* 로그인 실패시 
* ID 불일치일 경우 input 상단에 페이드인 애니메이션을 적용한 '존재하지 않는 아이디입니다.' 문구가 나타났다 사라집니다. 
* PW 불일치일 경우 input 상단에 페이드인 애니메이션을 적용한 '일치하지 않는 패스워드입니다.' 문구가 나타났다 사라집니다. 

2. 백오피스 홈 (예시와 동일하게 페이지만 구현)

### 회원 관리 메뉴
4. 회원 관리 메뉴 (유령회원 DB 3개 생성 – 가입일, 로그인 아이디는 임의로 더미데이터 삽입해주세요)
     - 회원 조회 및 검색용 텍스트 박스 적용
     - 회원 조회를 위한 필터 적용

5) 로그인 ID – 과제수행자 임의 생성
6) 회원가입일시 – 과제수행자 임의 생성
7) 회원번호 – 과제수행자 임의 생성


*제공한 json 데이터 안에 member_seq를 과제수행자가 임의로 만든 아이디의 회원번호와 동일하게 적용해주세요.
그래서 해당 로그인ID로 검색할 때 회원번호(member_seq)의 데이터가 연동되도록 작업해주세요.
예) 로그인 ID moadata = 380 / moadata ID로 검색시, 380(member_seq) 에 해당하는 데이터 노출 

![ezgif-2-832329774b](https://user-images.githubusercontent.com/64529155/171983985-55b758cd-fbe7-4404-9236-55374e539788.gif)
![ezgif-2-fab7dfd2f9](https://user-images.githubusercontent.com/64529155/171985676-41831732-9a82-49c1-b584-0a9b8fb2cac3.gif)

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

3. 꼭 예시 화면과 똑같이 개발할 필요는 없습니다. 더 정돈된 레이아웃이라 생각되면 임의로 변경하여도 무방합니다. 단, 변경한 의도를 간단히 알려주세요. 위의 조건들에만 부합한다면 예시 화면과 전혀 다른 구조로 개발하여도 감점되거나 문제되지 않습니다.


## 추가 기능 


## 테스트 케이스 정의서


## 어려웠던 점, 배운 점, 그리고 느낀 점

### 박휘건
유저 관점에서의 상식을 지키는 일이 어려웠습니다.
개발면에서 따로 조건을 두지 않아도 로직 상으로 이상은 없지만 유저 입장에서 봤을 때 혼란을 줄 수 있는 사항들이 많았습니다. 데이터가 비어있는 부분에 대한 처리에 대해 고민을 많이했고 협업 과정에서는 로직에 대한 중복 코드를 줄이는 일에 대해 많이 배웠습니다. 특히 폴더와 파일들이 많아질 수록  제 코드가 누군가에겐 철학 책처럼 어려울 수 있고 좋은 코드란 동화책처럼 수월하게 읽히는 코드라는 것을 체감하게 되었습니다. 결국 코드를 설명하기 위해 말이 길어진다는 것은 시간을 리소스로서 사용하게 된다는 점을 느꼈습니다.
좋은 디자인, 그리고 화면에 대한 가독성을 생각하는 것이 어려웠습니다. 같은 모양이지만 서로 다른 기능을 담고 있는 버튼을 구분 짓는 방법에 대한 고민을 했습니다. 

### 장재혁
레이아웃을 구성하면서 가능한 페이지의 모든 정보를 스크롤 없이 한 화면에 담기 위해 고민을 많이 했습니다.

각자 맡은 부분이 달라 페이지간 스타일을 일정하게 유지하는 것이 쉽지 않았습니다. 디자인 적인 면에서 많은 의견이 있었으며 이를 통합하고 발전시키는 것에 많은 시간이 소요되었습니다. 특히 공용 컴포넌트로 구현된 버튼의 스타일이 전부 동일하다는 문제가 있어 주요 버튼과 일반 버튼의 구분을 통해 이를 보완하려 하였습니다.

날짜를 지정하는 방법과 데이터가 비어있는 경우와 같이 로직의 경우 해석의 여지가 꽤 있어 가능한 사용자가 이해하기 쉬운 방향을 찾기 위해 노력하였습니다.

팀의 소통과 협업의 중요성을 가장 크게 느낄 수 있었습니다. 감사합니다.


### 이선아

이전 기업 과제들보다 이번 과제에서는 css에서 어려움을 겪었습니다. 유저가 사용할 때 불편함이 없도록 중요도, 배치, 정렬에 신경을 썼습니다. 개발자 입장에서는 사소한 레이아웃일지라도, 유저에게는 사용함에 있어 크게 작용할 수 있다는 것을 깨닫게 되었습니다. 

팀플을 진행하면서 더 나은 로직과 디자인을 위해 팀원들과 계속해서 소통을 통해 더 좋은 방향으로 나아갔습니다. 그 과정에서 코드 리뷰를 통해 코드를 좀 더 가독성있고 간결하게 짜는 방법에 대해서 많이 배웠습니다. 

혼자 개발했으면 중간에 지치거나 발전할 기회가 없었을텐데, 팀원들과 함께 새벽까지 작업을 하여 끝까지 재미있게 할 수 있었다고 생각합니다.


