"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Icon from "@/components/ui/AppIcon";

interface CaseType {
  id: string;
  label: string;
  description: string;
  colorClass: string;
  example: string;
  transform: (text: string) => string;
}

const caseTypes: CaseType[] = [
  {
    id: "sentence",
    label: "Sentence case",
    description: "Capitalizes the first letter of each sentence",
    colorClass: "case-btn-teal",
    example: "The quick brown fox.",
    transform: (text: string) => {
      return text
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s+\w)/g, (match) => match.toUpperCase());
    },
  },
  {
    id: "lower",
    label: "lower case",
    description: "Converts all letters to lowercase",
    colorClass: "case-btn-cyan",
    example: "the quick brown fox.",
    transform: (text: string) => text.toLowerCase(),
  },
  {
    id: "upper",
    label: "UPPER CASE",
    description: "Converts all letters to uppercase",
    colorClass: "case-btn-violet",
    example: "THE QUICK BROWN FOX.",
    transform: (text: string) => text.toUpperCase(),
  },
  {
    id: "title",
    label: "Title Case",
    description: "Capitalizes the first letter of each word",
    colorClass: "case-btn-emerald",
    example: "The Quick Brown Fox.",
    transform: (text: string) => {
      const smallWords = ["a","an","the","and","but","or","for","nor","on","at","to","by","in","of","up","as","is","it"];
      return text
        .toLowerCase()
        .split(" ")
        .map((word, index) => {
          if (index === 0 || !smallWords.includes(word)) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          }
          return word;
        })
        .join(" ");
    },
  },
  {
    id: "camel",
    label: "camelCase",
    description: "No spaces, each word capitalized except first",
    colorClass: "case-btn-amber",
    example: "theQuickBrownFox",
    transform: (text: string) => {
      return text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
    },
  },
  {
    id: "pascal",
    label: "PascalCase",
    description: "Like camelCase but first word also capitalized",
    colorClass: "case-btn-rose",
    example: "TheQuickBrownFox",
    transform: (text: string) => {
      return text
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9])([a-zA-Z0-9])/g, (_, _sep, chr) => chr.toUpperCase());
    },
  },
  {
    id: "snake",
    label: "snake_case",
    description: "Words separated by underscores, all lowercase",
    colorClass: "case-btn-slate",
    example: "the_quick_brown_fox",
    transform: (text: string) => {
      return text
        .toLowerCase()
        .replace(/\s+/g, "_")
        .replace(/[^a-zA-Z0-9_]/g, "");
    },
  },
  {
    id: "kebab",
    label: "kebab-case",
    description: "Words separated by hyphens, all lowercase",
    colorClass: "case-btn-indigo",
    example: "the-quick-brown-fox",
    transform: (text: string) => {
      return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9-]/g, "");
    },
  },
  {
    id: "alternating",
    label: "aLtErNaTiNg",
    description: "Alternates between lower and upper case letters",
    colorClass: "case-btn-teal",
    example: "tHe QuIcK bRoWn FoX.",
    transform: (text: string) => {
      return text
        .split("")
        .map((char, i) => (i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
        .join("");
    },
  },
  {
    id: "inverse",
    label: "iNVERSE cASE",
    description: "Flips the case of every letter",
    colorClass: "case-btn-rose",
    example: "tHE qUICK bROWN fOX.",
    transform: (text: string) => {
      return text
        .split("")
        .map((char) =>
          char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        )
        .join("");
    },
  },
];

interface Stats {
  characters: number;
  words: number;
  sentences: number;
  lines: number;
}

function computeStats(text: string): Stats {
  const characters = text.length;
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const sentences = text.trim() === "" ? 0 : (text.match(/[.!?]+/g) || []).length;
  const lines = text.trim() === "" ? 0 : text.split(/\n/).length;
  return { characters, words, sentences, lines };
}

export default function CaseConverterTool() {
  const [inputText, setInputText] = useState("");
  const [activeCase, setActiveCase] = useState<string | null>(null);
  const [stats, setStats] = useState<Stats>({ characters: 0, words: 0, sentences: 0, lines: 0 });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setStats(computeStats(inputText));
  }, [inputText]);

  const showToastMessage = useCallback((msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setShowToast(false), 2200);
  }, []);

  const handleCaseConvert = useCallback(
    (caseType: CaseType) => {
      const converted = caseType.transform(inputText);
      setInputText(converted);
      setActiveCase(caseType.id);
      setTimeout(() => setActiveCase(null), 500);
    },
    [inputText]
  );

  const handleCopy = useCallback(async () => {
    if (!inputText.trim()) return;
    try {
      await navigator.clipboard.writeText(inputText);
      showToastMessage("✓ Copied to clipboard!");
    } catch {
      showToastMessage("⚠ Copy failed — please select and copy manually");
    }
  }, [inputText, showToastMessage]);

  const handleClear = useCallback(() => {
    setInputText("");
    if (textareaRef.current) textareaRef.current.focus();
  }, []);

  const handleDownload = useCallback(() => {
    if (!inputText.trim()) return;
    const blob = new Blob([inputText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted-text.txt";
    a.click();
    URL.revokeObjectURL(url);
    showToastMessage("⬇ File downloaded!");
  }, [inputText, showToastMessage]);

  const handlePaste = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputText(text);
      if (textareaRef.current) textareaRef.current.focus();
    } catch {
      showToastMessage("⚠ Paste failed — please paste manually with Ctrl+V");
    }
  }, [showToastMessage]);

  const handleUpperCase = () => handleCaseConvert(caseTypes.find(c => c.id === "upper")!);
  const handleLowerCase = () => handleCaseConvert(caseTypes.find(c => c.id === "lower")!);

  return (
    <div className="w-full">
      {/* ── Case Buttons Row ── */}
      <div className="flex flex-wrap gap-2 mb-4">
        {caseTypes.map((ct) => (
          <button
            key={ct.id}
            onClick={() => handleCaseConvert(ct)}
            className={`case-btn ${ct.colorClass} ${activeCase === ct.id ? "active" : ""}`}
            title={ct.description}
            aria-label={`Convert to ${ct.label}`}
          >
            {ct.label}
          </button>
        ))}
      </div>

      {/* ── Textarea ── */}
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="tool-textarea"
          style={{ minHeight: "260px", maxHeight: "480px", overflowY: "auto" }}
          placeholder="Type or paste your text here… then click any button above to transform it instantly."
          aria-label="Text input area"
          spellCheck={false}
        />
        {/* Character count overlay */}
        {inputText.length > 0 && (
          <div className="absolute bottom-4 right-4 text-xs font-mono text-brand-muted opacity-60 select-none pointer-events-none">
            {inputText.length.toLocaleString()} chars
          </div>
        )}
      </div>

      {/* ── Stats Bar ── */}
      <div className="flex flex-wrap items-center gap-2 mt-3 mb-4">
        <span className="stat-badge">
          <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
          <strong>{stats.characters.toLocaleString()}</strong> Characters
        </span>
        <span className="stat-badge">
          <strong>{stats.words.toLocaleString()}</strong> Words
        </span>
        <span className="stat-badge">
          <strong>{stats.sentences.toLocaleString()}</strong> Sentences
        </span>
        <span className="stat-badge">
          <strong>{stats.lines.toLocaleString()}</strong> Lines
        </span>
      </div>

      {/* ── Action Buttons ── */}
      <div className="flex flex-wrap gap-3 items-center">
        <button
          onClick={handleCopy}
          className="action-btn action-btn-primary"
          aria-label="Copy text to clipboard"
          disabled={!inputText.trim()}
          style={{ opacity: inputText.trim() ? 1 : 0.5, cursor: inputText.trim() ? "pointer" : "not-allowed" }}
        >
          <Icon name="ClipboardDocumentIcon" size={16} />
          Copy Text
        </button>

        <button
          onClick={handlePaste}
          className="action-btn action-btn-secondary"
          aria-label="Paste from clipboard"
        >
          <Icon name="ClipboardDocumentListIcon" size={16} />
          Paste
        </button>

        <button
          onClick={handleDownload}
          className="action-btn action-btn-secondary"
          aria-label="Download text as file"
          disabled={!inputText.trim()}
          style={{ opacity: inputText.trim() ? 1 : 0.5, cursor: inputText.trim() ? "pointer" : "not-allowed" }}
        >
          <Icon name="ArrowDownTrayIcon" size={16} />
          Download
        </button>

        <div className="flex-1" />

        <button
          onClick={handleClear}
          className="action-btn action-btn-danger"
          aria-label="Clear all text"
          disabled={!inputText}
          style={{ opacity: inputText ? 1 : 0.5, cursor: inputText ? "pointer" : "not-allowed" }}
        >
          <Icon name="TrashIcon" size={16} />
          Clear
        </button>
      </div>

      {/* ── Toast Notification ── */}
      {showToast && (
        <div className="copy-feedback" role="status" aria-live="polite">
          {toastMessage}
        </div>
      )}
    </div>
  );
}