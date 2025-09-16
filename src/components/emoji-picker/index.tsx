import React from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { customEmojis } from "./custom-emojis";

interface EmojiPickerComponentProps {
  onSelectEmoji: (emoji: string) => void;
}

const EmojiPickerComponent: React.FC<EmojiPickerComponentProps> = ({
  onSelectEmoji,
}) => {
  // Handle emoji selection
  const handleEmojiSelect = (emoji: { native: string }) => {
    // console.log(emoji, "emoji");
    onSelectEmoji(emoji.native); // Pass the selected emoji to parent component
  };

  return (
    <div className="relative w-full !max-w-8">
   <Picker
  data={data}
  custom={customEmojis}
  categories={["activity", "objects", "people", "places"]}
  onEmojiSelect={handleEmojiSelect}
  emojiSize={20}
  showPreview={false}
  showSkinTones={false}
  theme="light"
  navPosition="top"
  maxFrequentRows={0}
  emojiButtonColors={["rgba(102, 51, 153, .2)"]}
/>
    </div>
  );
};

export default EmojiPickerComponent;
