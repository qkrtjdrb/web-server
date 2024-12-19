import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import https from 'https';

function Concerts() {
  const Navigate = useNavigate();
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    // 데이터 가져오기
    axios
    .get('http://10.0.5.173/Concerts', {
      httpsAgent: new https.Agent({ rejectUnauthorized: false }), // 인증서 오류 무시
    })
    .then((response) => {
      setConcerts(response.data);
    })
    .catch((error) => {
      console.error("Error fetching Concerts:", error);
    });
}, []);

  // 날짜 형식 변환 함수
  const formatDate = (isoString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(isoString).toLocaleDateString("ko-KR", options);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1>Concerts</h1>
      <Button onClick={() => Navigate("/")}> 홈 </Button>
      <div style={{ display: "flex" }}>
        {concerts.map((concert, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <img
              src={concert.image_url}
              alt="Concert"
              style={{ width: "300px", height: "400px" }}
            />
            <p>시작 날짜: {formatDate(concert.start_date)}</p>
            <p>종료 날짜: {formatDate(concert.end_date)}</p>
            <Button onClick={() => Navigate("/")}> 콘서트 예매 </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Concerts;
