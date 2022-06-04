# moadata-team-5

## 개발자

곽태훈, 민지원, 박휘건, 이지정, 장재혁, 문재석, 이선아

## 개발기간

2022년 5월 30일 ~ 2022년 6월 5일 (총 7일)

## 배포 링크
* https://moadata-team-5.vercel.app/

## 과제 수행 보고서

개인 노션 링크

장재혁 https://elemental-sole-787.notion.site/ecd80cace1d64365a17f6d6789c3a255

## Dependencies

<span><img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/stylelint-263238?style=flat-square&logo=stylelint&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=ReactRouter&logoColor=white"/></span>

<span><img src="https://img.shields.io/badge/datefns-FF0000?style=flat-square&logo=datefns&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/dayjs-FFA500?style=flat-square&logo=dayjs&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/recoil-FFFF00?style=flat-square&logo=recoil&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/store-00FF00?style=flat-square&logo=store&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/victory-0000FF?style=flat-square&logo=victory&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/classnames-000000?style=flat-square&logoColor=white"/></span>


## 폴더 구조

<details>
<summary>폴더 구조</summary>
<div markdown="1">
  
- 📁 assets
  - 아이콘 및 이미지 등을 모아둔 폴더입니다.

- 📁 components
  - 특정 페이지에 귀속되지 않는 컴포넌트들을 모아둔 폴더입니다.
  - 다른 컴포넌트들에 공통적으로 사용될 수 있는 Button과 DatePicker는 common에 넣어뒀습니다.
  - 그 외에 SNB, GNB, Breadcrumb은 공통적으로 사용되기 보단 페이지에 따라 사용될 수 있는 컴포넌트이기 때문에 common 밖에 두었습니다.

- 📁 data
  - 프로젝트 구현에 사용될 데이터인 json 파일들이 들어가 있는 폴더입니다.

- 📁 hooks
  - Custom hooks를 모아둔 폴더입니다.
  - 이번 프로젝트에선 Recoil을 위한 `useRecoil`만 존재합니다.

- 📁 layouts
  - 페이지 전반에 적용할 레이아웃을 모아둔 폴더입니다.

- 📁 pages
  - 라우터를 기준으로 각각의 페이지를 모아둔 폴더입니다.
  - 해당 페이지에서만 사용되는 컴포넌트들은 components 폴더가 아닌 각 페이지 폴더 안에 있습니다.

- 📁 states
  - Recoil과 관련된 파일들을 모아둔 폴더입니다.
  - 각 Atom 별로 파일을 따로 작성하였습니다.

- 📁 styles
  - 전역 스타일링, 변수, mixins 등 전역에서 사용되는 스타일링 관련 파일들을 모아둔 폴더입니다.

- 📁 types
  - 전역적으로 사용되는 타입을 모아둔 폴더입니다.

- 📁 utils
  - 앱 전반적으로 사용되는 변수, 함수, 서비스 등을 담아둔 폴더입니다.

</div>
</details>

## 실행 화면과 기능

1. 로그인 화면

![Animation](https://user-images.githubusercontent.com/47405655/171988356-6342576a-b0c1-49be-96b4-dc1fdf56df44.gif)

* ID, PW input이 비었을 경우 '필수 입력 항목입니다.'라는 문구가 해당 input 아래에 나타납니다. 
* PW의 경우 5자 이상의 유효성 검사를 추가하여 5자 미만일 경우 '최소 5글자 입력해주세요'라는 문구가 나타납니다.

#### 로그인 실패시

* ID 불일치일 경우 input 상단에 페이드인 애니메이션을 적용한 '존재하지 않는 아이디입니다.' 문구가 나타났다 사라집니다. 
* PW 불일치일 경우 input 상단에 페이드인 애니메이션을 적용한 '일치하지 않는 패스워드입니다.' 문구가 나타났다 사라집니다. 

### 백오피스 홈
![image](https://user-images.githubusercontent.com/47405655/171992558-a6dd4409-9fb7-4cd4-94cf-981e7168b4b5.png)

* 예시와 동일하게 페이지만 구현했습니다.

### 회원 관리 메뉴
#### 상태 관리
* Recoil atom을 통해 사용자 목록, 필더링 옵션, 검색 결과를 전역에서 관리했습니다.
* `userDataList`: 주어진 사용자 정보에 임의의 아이디를 추가하였습니다.
* `userFilterOptions`: 로그인 ID, 회원 번호, 시작일, 종료일을 포함합니다. 각각은 모두 string이며 default로 빈 값을 가집니다. 
* `userSearchResult`: 전체 리스트인 `userDataList`를 default로 하며, 옵션에 따라 필터링이 일어난 결과입니다.

#### 데이터 객체 타입
```ts
interface UserInfo {
  id: number;
  loginId: string;
  registerDate: string;
}

interface UserFilterOptions {
  id: string;
  loginId: string;
  prevDate: string;
  nextDate: string;
}
```

#### 검색 조건
* 로그인 ID: text 형식의 input value를 받아 로그인 ID를 입력받습니다.
* 회원번호: number 형식의 input value 받습니다. 키보드 입력이 일어날 때마다 key를 검사해서 e, E, +, - 등 네 가지 수학 기호를 입력할 수 없게 했습니다.
* 조회기간: 시작일, 종료일 각각의 input을 누르면 date picker가 나타납니다. 날짜 하나를 클릭하면 date picker 창이 닫히고, 날짜를 나타내는 state가 업데이트 되며, 이어서 `userFilterOptions`이 업데이트됩니다.

#### 검색 결과
* 리스트 형태로 검색 결과가 나타나도록 했습니다.
* ‘관리’ 버튼을 제외한 각 항목의 너비를 % 단위로 지정하여 헤더와 아이템의 가로 위치를 맞췄습니다.
* 헤더를 한 번 누르면 오름차순 정렬이, 한 번 더 누르면 내림차순 정렬이 되도록 했습니다. 정렬 기준이 되는 헤더는 굵은 글씨로 나타나고, 오른쪽 화살표를 통해 정렬 방향을 알 수 있습니다. 

#### 반응형 페이지
* 다른 페이지와 같은 정책으로 반응형 페이지를 구현했습니다.
* 창 너비가 768px 미만인 경우 세 개의 검색 조건 입력창이 세로 배열로 바뀝니다.

### 회원 상세 페이지

#### 조회 기간 구현

![ezgif-2-832329774b](https://user-images.githubusercontent.com/64529155/171983985-55b758cd-fbe7-4404-9236-55374e539788.gif)
![ezgif-2-fab7dfd2f9](https://user-images.githubusercontent.com/64529155/171985676-41831732-9a82-49c1-b584-0a9b8fb2cac3.gif)

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

### 이지정

코드를 작성하기 전에 데이터들이 어떻게 사용될 것인지 먼저 생각한 후 작성해야 한다는 것을 알 수 있었습니다.
제가 작성한 걸음수 차트 부분을 구현할 때, 하단의 오늘, 일주일, 전체 버튼과 user가 바뀐다는 것을 고려하지 않고 차트 그리기에만 집중해서 코드를 작성했었습니다. 그러다보니 후반 작업에서 전체 버튼 기능을 구현할 때, user에 대한 데이터를 불러오는 부분을 고려하지 않았기 때문에 다시 데이터를 불러오는 안좋은 방법을 선택했습니다. 그래도 이러한 경험 덕분에 코드를 작성하기 전에 어떤 점을 정하고 넘어가야 하는지 알 수 있었던 좋은 기회였습니다.

### 민지원

UI 디자인에 특히 공을 들인 프로젝트였습니다. 여러 레퍼런스를 참고하며 많은 시도를 하면서 점차 페이지를 개선할 수 있어 좋았습니다. 지난 번 프로젝트의 교훈을 바탕으로 사전에 데이터 형식을 합의하여 개발 시간을 단축할 수 있었습니다. 검색 목록 컴포넌트를 개발하면서 테이블과 리스트 모두의 형태로 각각 개발하면서 비교해 볼 수 있었습니다. 또 지난번과는 달리 라이브러리를 활용해 date picker를 개발한 것도 새로운 경험이었습니다.
