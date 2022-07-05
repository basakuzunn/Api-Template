import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Row, Statistic, Button, Input, Space } from "antd";
import { useState, useEffect } from "react";

export default function FacebookApi(props) {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const [engagementCount, setEngagementCount] = useState();

  const [list, setList] = React.useState(props.arr);

  const [update, setUpdate] = React.useState("");
  function handleChange(event) {
    setUpdate(event.target.value);
  }
  function handleAdd() {
    const newList = list.concat(engagementCount);

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
              onChange={handleChange}
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
