import React, { useState, useEffect } from "react";
import config from "./Config";
import { Card, Button } from "react-bootstrap";

export default function YouTubeCounter(props) {
  const [subscriberCount, setSubscriberCount] = useState();

  const [list, setList] = React.useState(props.arr);

  const [update, setUpdate] = React.useState("");
  function handleChange(event) {
    setUpdate(event.target.value);
  }
  function handleAdd() {
    const newList = list.concat(subscriberCount);

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
    <div>
      <Card>
        <Card.Header>Subscriber Count </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>{list}</Card.Text>
          <Button variant="primary" onChange={handleChange} onClick={handleAdd}>
            update
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
