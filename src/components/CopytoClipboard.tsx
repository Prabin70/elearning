"use client";

import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
declare module "react-copy-to-clipboard";

const ClipboardCopy = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <input
        className="border border-gray-600"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text to copy"
      />
      <CopyToClipboard text={inputValue} onCopy={() => setCopied}>
        <button>Copy</button>
      </CopyToClipboard>
      {copied ? <span>copied</span> : null}

      <textarea name="" id="" className="border border-gray-950"></textarea>
    </div>
  );
};

export default ClipboardCopy;
