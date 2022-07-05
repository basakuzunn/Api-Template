import React from "react";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import { Card, Col, Row, Statistic, Button } from "antd";
import config from "./Config";
import ApiGraph from './ApiGraph';
export default function YoutubeSubs(props) {
  const [subscriberCount, setSubscriberCount] = useState();

  const [list, setList] = React.useState(props.arr);
  const [date, setDate] = React.useState(0);
  
  function handleAdd() {
    const newList = list.concat({view:subscriberCount,date: date});
    setDate(date+1)
    setList(newList);
  }
  useEffect(() => {
    const { api_key, channel_id } = config;
    const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel_id}&key=${api_key}`;
    fetch(apiCall)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        const count = data.items[0].statistics.subscriberCount;
        setSubscriberCount(count);
      });
  }, [list]);

  return (
    <div className="site-statistic-demo-card">
      <ApiGraph list = {list}/>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Youtube Subscriber Count"
              value={list}
              precision={0}
              valueStyle={{
                color: "#3f8600"
              }}
            />
            <Button
              variant="outline-info"
              onClick={handleAdd}
            >
              update
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
