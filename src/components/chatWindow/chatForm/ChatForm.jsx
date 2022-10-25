import * as sanitizeHtml from "sanitize-html";
import ContentEditable from "react-contenteditable";
import { useRef, useState } from "react";
import "./chatForm.css";
function ChatForm({ setIsNotAnimated, isNotAnimated }) {
  let inRef = useRef(null);

  let [text, setText] = useState({
    html: "<p>type here</p>",
  });

  let handleChange = (evt) => {
    setText({ html: evt.target.value });
    if (evt.target.value.length > 0) {
      setIsNotAnimated(true);
    } else {
      setIsNotAnimated(false);
    }
  };

  const content = " hello world";

  sanitizeHtml(text.html, {
    allowedTags: ["u", "strong", "em", "a", "iframe", "strike", "p"],
    allowedAttributes: {
      a: ["href", "name", "target"],
      iframe: [
        {
          name: "sandbox",
          multiple: true,
          values: ["allow-popups", "allow-same-origin", "allow-scripts"],
        },
      ],
    },
    transformTags: {
      a: function (tagName, attribs) {
        return {
          tagName: "a",
          text: "Some text",
        };
      },
    },
    allowedIframeHostnames: ["www.youtube.com", "player.vimeo.com"],
    allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
    llowedSchemesAppliedToAttributes: ["href", "src", "cite"],
    allowProtocolRelative: true,
    enforceHtmlBoundary: false,
  });

  // input change event
  let send_message = (e) => {};
  return (
    <div className="ChatWindow-textFeild-wrapper">
      <ContentEditable
        className="ChatWindow-textFeild__input"
        //   onKeyUp={(event) => send_message(event)}
        ref={inRef} // use ref
        html={text.html} // innerHTML of the editable div
        disabled={false} // use true to disable editing
        onChange={handleChange} // handle innerHTML change
        tagName="div" // Use a custom HTML tag (uses a div by default)
      />
    </div>
  );
}

export default ChatForm;
