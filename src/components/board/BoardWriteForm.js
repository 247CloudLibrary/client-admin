import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

const LibraryName = "OOO 도서관";

const BoardWriteForm = () => {
  const [boardContent, setBoardContent] = useState({
    type: "",
    title: "",
    content: "",
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setBoardContent({
      ...boardContent,
      [name]: value,
    });
    console.log(boardContent);
  };

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
            onChange={getValue}
            name="title"
            placeholder="제목을 입력해 주세요."
          />
        </div>
        <div className="content-box">
          <div className="content">
            <div className="content-quill">
              <CKEditor
                editor={ClassicEditor}
                onReady={(editor) => {}}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setBoardContent({
                    ...boardContent,
                    content: data,
                  });
                  console.log(boardContent);
                }}
                onBlur={(event, editor) => {}}
                onFocus={(event, editor) => {}}
              />
            </div>
          </div>
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
