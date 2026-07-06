"use client";

import React from "react";
import { Tweet } from "react-tweet";

class TweetErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Tweet embed failed to render", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

function TweetFallback({ id }) {
  const href = `https://x.com/i/web/status/${id}`;

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-700">
      <p className="mb-2">
        This embedded post could not be loaded right now.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-primary underline underline-offset-2 hover:text-secondary"
      >
        View the post on X
      </a>
    </div>
  );
}

export default function SafeTweet({ id }) {
  return (
    <TweetErrorBoundary key={id} fallback={<TweetFallback id={id} />}>
      <Tweet id={id} />
    </TweetErrorBoundary>
  );
}
