import React from "react";

interface Props {
  text: string,
  size: number,
}

const TruncatedText:React.FC<Props> = ({ text, size }) => {
  const truncated = text.length > size ? text.substring(0, size) + "..." : text;

  return <p>{truncated}</p>;
};

export default TruncatedText;