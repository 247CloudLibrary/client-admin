import { Link, useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import axios from "axios";

const BoardWriteForm = () => {
  const navigate = useNavigate();
  const [boardContent, setBoardContent] = useState({
    type: "Notice",
    title: "",
    contents: "",
  });
  const json = JSON.parse(localStorage.getItem("user"));
  const storage = json.data;

  const libraryName = storage.libraryName;
  console.log(libraryName);
  const { type, title, contents } = boardContent;

  const getValue = (e) => {
    setBoardContent({
      ...boardContent,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="BoardWrite">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("https://www.cloudlibrary.shop/v1/boards", {
              libraryName: libraryName,
              type: type,
              title: title,
              contents: contents,
            })
            .then(function (response) {
              console.log(response);
              alert("게시글이 등록되었습니다.");
              navigate(-1);
            });
        }}
      >
        <h1 className="library-name">{libraryName}</h1>
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
            <div>
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
                }}
                onBlur={(event, editor) => {}}
                onFocus={(event, editor) => {}}
              />
            </div>
          </div>
        </div>
        <div className="btn">
          <button type="submit" className="submit-btn">
            게시글 등록
          </button>
        </div>
      </form>
    </div>
  );
};
export default BoardWriteForm;
