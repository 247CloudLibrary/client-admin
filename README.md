<div align="center">
  <h2>🔥24/7 Cloud Library client-admin🔥</h2>
  |　<a href="https://www.notion.so/Cloud-Library-b9bb2c8ddbc241f5b4d8c160208cf108">노션</a>　|　
  <br>
</div>
<br>
<div align="center">
  <img src="https://img.shields.io/badge/node-16.15.0-339933?logo=node.js"> 
  <img src="https://img.shields.io/badge/React-17.0.2-61DAFB?logo=React"> 
  <img src="https://img.shields.io/badge/Sass-7.01-009639?logo=Sass"> 
</div>

## 소개

> Cloud Library는 한 번의 회원가입, 통합 도서 데이터 관리로 도서관 관리자와 사용자에게 하나의 도서관을 제공하는 웹 서비스입니다.   
> client-admin은 도서관 관리자들에게 간편하고 편리한 사용자 경험을 제공할 수 있도록 설계되었습니다.

<div align="center">
<table>
<thead>
  <tr>
    <th>
      <div>
        <img src="그림1" width="300" height="180">
      </div>
      공지사항 관리
    </th>
    <th>
      <div>
        <img src="그림2" width="300" height="180">
      </div>
      도서 / 도서관 등록
    </th>
  </tr>
</thead>
  <tr>
    <th>
      <div>
        <img src="그림3" width="300" height="180">
      </div>
      대출 / 반납 처리
    </th>
    <th>
      <div>
       <img src="그림4" width="300" height="180">
      </div>
       회원관리
    </th>
  </tr>
</tbody>
</table>

| 김주상 | 김한휘 | 홍인수 |
|:--------:|:--------:|:--------:|
| ![img](김주상그림) | ![img](김한휘그림) | ![img](홍인수그림) |
| [fable0831](https://github.com/fable0831) | [KimHanWhee](https://github.com/KimHanWhee) | [iinsue](https://github.com/iinsue) | |
| Web Frontend | Web Frontend | Web Frontend |
  
  </div>

<details>
<summary>✅ 모든 구현 기능 리스트</summary>
<br>
  
**관리자 메인 페이지**

- 공통 메인 페이지에서 관리자 로그인 시 진입 가능

**공지사항 관리**

- 도서관 별 공지사항 등록, 수정, 삭제 가능
- 공지사항 / 이용 규정 / 오시는 길로 분류

**관리자 마이 페이지**

- 관리자 정보 수정 가능
  
**도서 관리 페이지**

- 도서 등록, 수정, 삭제 가능
  
**대출 관리**

- 도서 대출 /반납 처리 => 처리 후 대출 가능/ 불가능 상태 변경
- 도서 목록에서 각 도서 별 상세 페이지 조회 가능
- 도서 상세 페이지에서 제재 유저 blacklist 등록 가능 -> blacklist 페이지에서 조회 및 삭제 가능
- 도서 검색 기능
- 도서관 or category(총류) 별 필터 기능

 **도서관 관리**

- 도서관 등록, 수정, 삭제 기능

</details>

## 페이지 구성 구조
![main](관리자 메인 페이지 그림 들어가면 좋을듯)

## 기술 특장점 🛠
<details>
<summary>🛠 프론트엔드 코드 통일성에 대한 지속적인 고민</summary>
<br>

**협업 및 분업**을 원활하게 하기 위해 개발 시 **통일성**을 부여하고자 많이 고민했어요.

- axios를 통한 **API 요청에 대한 처리**
- 
  
</details>

<details>
<summary>🛠 통일된 API 규격 및 에러 처리</summary>
<br>
  
클라이언트의 **효율적인 API 요청 처리**를 위해 서버는 **일관적인 형태의 API 응답**을 제공.
- 모든 API 응답은 **상태 코드**, **API 결과**, **메세지**를 하나의 API 응답 형태로 정해 사용하고 있어요.
- 
  
</details>
