import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

const BoardEditForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [editContent, setEditContent] = useState({
    type: location.state.defaultType,
    title: location.state.defaultTitle,
    contents: location.state.defaultContents,
  });
  const json = JSON.parse(localStorage.getItem("user"));
  const storage = json.data;

  const libraryName = storage.libraryName;
  const id = location.state.id;

  let { type, title, contents } = editContent;
  switch (type) {
    case "안내사항":
      type = "INFO";
      break;
    default:
      type = "NOTICE";
  }

  const getValue = (e) => {
    setEditContent({
      ...editContent,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm("게시글을 삭제하시겠습니까?") === false) {
      return;
    } else {
      axios.delete(`/v1/boards/${id}`).then(function (boardDelete) {
        console.log(boardDelete);
        alert("게시글이 삭제되었습니다.");
        navigate(-2);
      });
    }
  };
  return (
    <div className="BoardEdit">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .put(`/v1/boards/${id}`, {
              type: type,
              title: title,
              contents: contents,
              libraryName: libraryName,
            })
            .then(function (response) {
              console.log(response);
              alert("게시글이 수정되었습니다.");
              navigate(-1);
            });
        }}
      >
        <h1 className="library-name">{libraryName}</h1>
        <div className="type">
          <select
            defaultValue={type}
            defaultinputvalue={type}
            name="type"
            className="type-item"
            onChange={getValue}
          >
            <option value="NOTICE">공지사항 게시판</option>
            <option value="INFO">이용안내 게시판</option>
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
        <div className="btn">
          <button className="save-btn" type="submit">
            저장
          </button>
          <button className="delete-btn" type="button" onClick={handleDelete}>
            삭제
          </button>
        </div>
      </form>
    </div>
  );
};
export default BoardEditForm;
