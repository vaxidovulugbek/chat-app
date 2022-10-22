import "./imoji.css";
import { EmojiButton } from "@joeattardi/emoji-button";

function Imoji() {
  let imojis = new EmojiButton();

  //   console.log(imojis.options.emojiData.emoji);
  let imoji = imojis.options.emojiData.emoji;
  return (
    <div className="imoji-container">
      {imoji.map((el) => {
        console.log(el);
        if (el.category == 1) {
          return <p>{el.imoji}</p>;
        }
      })}
    </div>
  );
}

export default Imoji;
