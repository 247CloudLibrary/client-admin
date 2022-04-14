import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const LibraryName = "OOO 도서관";
const title = "게시판 제목";
const content = "입력했던 내용들....";

const BoardEditForm = () => {
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
        <div className="content-box">
          <div className="content">
            <div className="content-quill">
              <CKEditor
                editor={ClassicEditor}
                onReady={(editor) => editor.data.set(content)}
                onChange={(event, editor) => {
                  const data = editor.getData();
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
