import React, { useState, useEffect, useRef } from 'react';

interface DecryptedTextProps {
  text: string;
  start: boolean;
  onComplete?: () => void;
  speed?: number;
  className?: string;
  as?: 'span' | 'h1' | 'div' | 'p' | 'h2' | 'h3';
  showCursor?: boolean;
  instant?: boolean;
}

const CIPHER_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789!@#$%&*<>/=";

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  start,
  onComplete,
  speed = 18,
  className = "",
  as: Component = 'span',
  showCursor = true,
  instant = false,
}) => {
  const [displayText, setDisplayText] = useState<string>(instant ? text : '');
  const [isDone, setIsDone] = useState<boolean>(instant);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (instant) {
      setDisplayText(text);
      setIsDone(true);
      if (onCompleteRef.current) onCompleteRef.current();
      return;
    }

    if (!start) {
      setDisplayText('');
      setIsDone(false);
      return;
    }

    let charIdx = 0;
    const len = text.length;

    const interval = window.setInterval(() => {
      if (charIdx <= len) {
        // Build current string
        const revealed = text.slice(0, Math.max(0, charIdx - 1));
        const scramble = charIdx > 0 && charIdx <= len
          ? CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)]
          : '';
        setDisplayText(revealed + scramble);
        charIdx++;
      } else {
        window.clearInterval(interval);
        setDisplayText(text);
        setIsDone(true);
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [start, text, speed, instant]);

  if (!start && !instant) {
    return null;
  }

  return (
    <Component className={className}>
      {displayText}
      {showCursor && !isDone && (
        <span className="inline-block w-2 h-4 sm:h-5 bg-[#75F0A8] ml-1 animate-terminal-blink align-middle shadow-[0_0_8px_#75F0A8]" />
      )}
    </Component>
  );
};
