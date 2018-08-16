import React from "react";

const Message = ({ data, authorName, authorImage }) => (
  <div>
    <div>{authorImage}</div>
    <div>{authorName} : {data.text} ({data.datetime})</div>
  </div>
);

export default Message;
