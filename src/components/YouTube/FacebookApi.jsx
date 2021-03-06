import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Row, Statistic, Button, Input, Space } from "antd";
import { useState, useEffect } from "react";
import { LineChart, Line } from 'recharts';
import ApiGraph from './ApiGraph';

export default function FacebookApi(props) {
 
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const [engagementCount, setEngagementCount] = useState();

  const [list, setList] = React.useState(props.arr);
  const [date, setDate] = React.useState(0);
  
  function handleAdd() {
    const newList = list.concat({view :engagementCount,date: date });
    setDate(date+1)
    setList(newList);
  }

  useEffect(() => {
    const apiCall =
      "https://graph.facebook.com/v3.0/?id=http://www.test.com&fields=og_object{engagement}&access_token=3163851127215825|7c69e47fb7a72eebcf79fea236491b7e";
    fetch(apiCall)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        const count = data.og_object.engagement.count;
        setEngagementCount(count);
      });
  }, [list]);

  return (
    <div className="site-statistic-demo-card">
      <ApiGraph list = {list}/>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Facebook Like Count"
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
