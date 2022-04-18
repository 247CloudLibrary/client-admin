import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

const LibraryName = "OOO 도서관";

const BoardWriteForm = () => {
  const [boardContent, setBoardContent] = useState({
    type: "Notice",
    title: "",
    contents: "",
  });

  const { type, title, contents } = boardContent;

  const getValue = (e) => {
    setBoardContent({
      ...boardContent,
      [e.target.name]: e.target.value,
    });
  };
  console.log(type, title, contents);

  return (
    <div className="BoardWrite">
      <form>
        <h1 className="library-name">{LibraryName}</h1>
        <div className="type">
          <select
            value={type}
            name="type"
            className="type-item"
            onChange={getValue}
          >
            <option value="Notice">공지사항 게시판</option>
            <option value="Info">이용안내 게시판</option>
          </select>
        </div>
        <div className="title">
          <input
            type="text"
            className="title-input"
            value={title}
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
                config={{
                  toolbar: [
                    "heading",
                    "|",
                    "bold",
                    "italic",
                    "link",
                    "bulletedList",
                  ],
                  placeholder: "내용을 작성해주세요...",
                }}
                value={contents}
                onReady={(editor) => {}}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setBoardContent({
                    ...boardContent,
                    contents: data,
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
