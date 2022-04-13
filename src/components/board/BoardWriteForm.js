import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import "../../styles/components/board/BoardWriteForm.scss";

const LibraryName = "OOO 도서관";

const BoardWriteForm = () => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "내용을 입력하세요...",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });
  }, []);

  return (
    <div className="BoardWrite">
      <form>
        <h1 className="library-name">{LibraryName}</h1>
        <div className="type">
          <select className="type-item">
            <option disabled>---게시판 선택---</option>
            <option value="Notice">공지사항 게시판</option>
            <option value="Information">이용안내 게시판</option>
          </select>
        </div>
        <div className="title">
          <input
            type="text"
            className="title-input"
            placeholder="제목을 입력해 주세요."
          />
        </div>
        <div className="content">
          <div className="content-quill" ref={quillElement} />
        </div>
        <Link to="/boards/list" style={{ textDecoration: "none" }}>
          <div className="btn">
            <button className="submit-btn" type="submit">
              게시글 등록
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
};
export default BoardWriteForm;
