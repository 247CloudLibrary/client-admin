import { Link } from "react-router-dom";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const LibraryName = "OOO 도서관";

const BoardEditForm = () => {
  const [editContent, setEditContent] = useState({
    type: "Notice",
    title: "",
    contents: "",
  });

  const { type, title, contents } = editContent;

  const getValue = (e) => {
    setEditContent({
      ...editContent,
      [e.target.name]: e.target.value,
    });
  };
  console.log(type, title, contents);
  return (
    <div className="BoardEdit">
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
            defaultValue={title}
            name="title"
            onChange={getValue}
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
                onReady={(editor) => editor.data.set(contents)}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setEditContent({
                    ...editContent,
                    contents: data,
                  });
                }}
                onBlur={(event, editor) => {}}
                onFocus={(event, editor) => {}}
              />
            </div>
          </div>
        </div>
        <Link to="/boards/list" style={{ textDecoration: "none" }}>
          <div className="btn">
            <button className="save-btn" type="submit">
              저장
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
};
export default BoardEditForm;
