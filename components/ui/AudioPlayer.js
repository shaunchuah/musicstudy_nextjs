import React from "react";

export default function AudioPlayer({ id, src, className = "" }) {
  return (
    <audio id={id} controls className={className}>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
