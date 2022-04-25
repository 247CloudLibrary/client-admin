import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GuideForm = () => {
  const [guideData, setGuideData] = useState([{}]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/boards")
      .then((guide) => {
        const guideArr = guide.data.data;

        console.log(guideArr);
        const filtedByGuideData =
          guideArr.type !== "안내사항"
            ? guideArr.filter((i) => i.type === "안내사항")
            : guideArr;
        setGuideData(filtedByGuideData);
      });
  }, []);
  const id = guideData[0].id;

  const toGuideEdit = () => {
    navigate(`/boards/edit/${id}`);
  };

  console.log(guideData);
  return (
    <div id="guide-form">
      <div className="board-guide">이용안내</div>
      <div className="text-form">
        <div className="title-form">{guideData[0].title}</div>
        <div className="contents-form">
          {HTMLReactParser(`${guideData[0].contents}`)}
        </div>
      </div>
      <div className="edit-btn">
        <button className="edit" onClick={toGuideEdit}>
          수정
        </button>
      </div>
    </div>
  );
};
export default GuideForm;
