const ImgUpload = ({
  loaded1,
  fileURL1,
  handleImgUpload1,
  imageChange1,
  loaded2,
  fileURL2,
  handleImgUpload2,
  imageChange2,
}) => {
  return (
    <>
      <div className="image-box">
        <div className="preview">
          {loaded1 === false || loaded1 === true ? (
            <img src={fileURL1} className="image"></img>
          ) : (
            <span>이미지 불러오는 중</span>
          )}
        </div>
        <label>
          썸네일 이미지
          <input
            className="thumbNailImage"
            type="file"
            accept="image/jpg,image/jpeg"
            onChange={(e) => {
              handleImgUpload1(e);
              imageChange1(e);
            }}
          />
        </label>
      </div>
      <div className="image-box">
        <div className="preview">
          {loaded2 === false || loaded2 === true ? (
            <img src={fileURL2} className="image"></img>
          ) : (
            <span>이미지 불러오는 중</span>
          )}
        </div>
        <label>
          커버 이미지
          <input
            className="coverImage"
            type="file"
            accept="image/jpg,image/jpeg"
            onChange={(e) => {
              handleImgUpload2(e);
              imageChange2(e);
            }}
          />
        </label>
      </div>
    </>
  );
};
export default ImgUpload;
