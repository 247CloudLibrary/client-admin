/* global kakao */
import { MdLocationPin } from "react-icons/md";
import React, { useEffect } from "react";

const BoardMap = ({ libraryAddress, libraryName }) => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 2,
    };

    //지도생성
    var map = new kakao.maps.Map(container, options);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    //디폴트 주소: 주소가 안찍혀있을 때 보여지는 지도
    var address = libraryAddress;

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        let infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;">${address}</div>`,
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  }, []);
  return (
    <div id="BoardMap">
      <div className="name">{libraryName}</div>
      <div className="address-info">
        <MdLocationPin className="icon" />
        {libraryAddress}
      </div>
      <div id="map"></div>
    </div>
  );
};

export default BoardMap;
