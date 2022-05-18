<div align="center">
  <h2>🔥24/7 Cloud Library client-admin🔥</h2>
  |　<a href="https://www.notion.so/Cloud-Library-b9bb2c8ddbc241f5b4d8c160208cf108">노션</a>　
  |　<a href="https://metroretro.io/board/LB5JSXC2NCBV">Event Storming</a>　
  |　<a href="https://www.marimba.team/board/7ffcfbc5-0bef-4c77-bb9f-a630a6f18ec6">Boris Diagram</a>　
  |　<a href="https://www.figma.com/file/HHNzpgsiaHdkr8lDSwAQo5/Cloud-Library?node-id=0%3A1">Snap-E</a>　|　
  <br>
</div>
<br>
<div align="center">
  <img src="https://img.shields.io/badge/React-17.0.2-61DAFB?logo=React">
  <img src="https://img.shields.io/badge/node-16.15.0-339933?logo=node.js"> 
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
        <img src="그림1" width="470" height="290">
      </div>
      공지사항 관리
    </th>
    <th>
      <div>
        <img src="그림2" width="470" height="290">
      </div>
      도서 / 도서관 등록
    </th>
  </tr>
</thead>
  <tr>
    <th>
      <div>
        <img src="https://user-images.githubusercontent.com/93421415/168946409-0b3c1e27-e657-4fbe-bed0-3db40c214f8a.gif" width="470" height="290">
      </div>
      대출 / 반납 처리
    </th>
    <th>
      <div>
       <img src="그림4" width="470" height="290">
      </div>
       회원관리
    </th>
  </tr>
</tbody>
</table>

| 김주상 | 김한휘 | 홍인수 |
|:--------:|:--------:|:--------:|
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

## client-admin main page
![client-main-image](https://user-images.githubusercontent.com/93421415/168944389-570d4aed-6409-4a52-97e0-fa9b1432e7e8.gif)

## 프로젝트 장점 🛠
<details>
<summary>🛠 프론트엔드 코드 통일성에 대한 지속적인 고민</summary>
<br>

**협업 및 분업**을 원활하게 하기 위해 개발 시 다양한 방법을 고민

- **Git-flow** 전략을 토대로 issue 생성 -> branch 생성 -> PR -> 코드 리뷰 -> Merge 순으로 개발
- **코드 리뷰**는 모든 FE 개발자들이 함께 Discord를 통해 소통
- 매일 **Daily Scrum**을 통해 진행 방식 및 에러 사항 공유 -> Notion을 사용하여 회의 내용 정리
  
</details>

<details>
<summary>🛠 DDD 방식을 통한 MSA 설계</summary>
<br>
  
Domain Driven Design 방식을 통해 MSA 프로젝트 기획.
- client는 **client-admin**과 **client-user**로 인스턴스 분리
- 다양한 **협업 tool**을 사용하여 DDD 단계별로 기획(MetroRetro / Marimba / Figma)
- 전체 개발 기간 중 절반을 오롯히 기획에 투자 => **프로젝트 구조**의 완성도를 높임
  
</details>
