import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Row, Statistic, Button, Input, Space } from "antd";
import { useState, useEffect } from "react";

export default function FacebookApi(props) {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const [instagramCount, setInstagramCount] = useState();

  const [list, setList] = React.useState(props.arr);

  const [update, setUpdate] = React.useState("");
  function handleChange(event) {
    setUpdate(event.target.value);
  }
  function handleAdd() {
    const newList = list.concat(instagramCount);

    setList(newList);
  }

  useEffect(() => {
    const apiCall =
      "https://graph.instagram.com/v14.0/5315786098467868?fields=media_count&access_token=IGQVJVdjRBaXFTUnNDV3JsWlIwdXpCMl9KR1h4WVM1V3BrS3VXcnlpOHNwSURicUVLU1Vyc0VsNGxzUjdIeTVVaTR5SUU4UnJKSzRNUmpadXlzNENmY1d2UU9LNmlVbDR1U3FHTDhvTnhuWXZAfSnpHSgZDZD";
    fetch(apiCall)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        const count = data.media_count;
        setInstagramCount(count);
      });
  }, [list]);
  return (
    <div className="site-statistic-demo-card">
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Instagram Media Count"
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
