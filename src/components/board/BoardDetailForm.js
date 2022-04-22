import HTMLReactParser from "html-react-parser";

const contents =
  "<p>조회한 게시글의 내용</p><strong>조회한 게시글의 내용</strong>";
const title = "게시글 제목";
const adminName = "작성자";
const LibrariesName = "도서관 이름";
const createdAt = "2022.22.22";
const readCounts = "222";

const BoardDetailForm = () => {
  return (
    <div id="BoardDetailForm">
      <div className="detail-form">
        <div className="title-area">
          <div className="board-title">{title}</div>
        </div>
        <div className="info-area">
          <div className="board-writer">{adminName}</div>
          <div className="board-created">{createdAt}</div>
          <div className="board-readcounts">조회수 {readCounts}</div>
          <div className="board-library">{LibrariesName}</div>
        </div>
        <div className="contents-area">
          <div className="board-contents">{HTMLReactParser(contents)}</div>
        </div>
      </div>
    </div>
  );
};
export default BoardDetailForm;
