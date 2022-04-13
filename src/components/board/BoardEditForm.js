import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Quill from "quill";
import "quill/dist/quill.bubble.css";

const LibraryName = "OOO 도서관";
const title = "게시판 제목";
const content = "입력했던 내용들....";

const BoardEditForm = () => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: content,
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
    <div className="BoardEdit">
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
          <input type="text" className="title-input" defaultValue={title} />
        </div>
        <div className="content">
          <div className="content-quill" ref={quillElement} />
        </div>
        <Link to="/boards/list" style={{ textDecoration: "none" }}>
          <div className="btn">
            <button className="save-btn" type="submit">
              수정
            </button>
            <button className="delete-btn" type="submit">
              삭제
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
};
export default BoardEditForm;
