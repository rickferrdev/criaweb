import React, { useMemo } from "react";

interface MarkdownProps {
  content: string;
  className?: string;
}

export function Markdown({ content, className = "typeset typeset-docs" }: MarkdownProps) {
  const parsedElements = useMemo(() => {
    if (!content) return null;

    const lines = content.split(/\r?\n/);
    const elements: React.ReactNode[] = [];
    let keyCounter = 0;

    let inList = false;
    let listType: "ul" | "ol" | null = null;
    let listItems: string[] = [];

    let inCodeBlock = false;
    let codeBlockLang = "";
    let codeBlockLines: string[] = [];

    let paragraphLines: string[] = [];

    const flushParagraph = () => {
      if (paragraphLines.length > 0) {
        const text = paragraphLines.join(" ");
        elements.push(
          <p key={`p-${keyCounter++}`}>{renderInline(text)}</p>
        );
        paragraphLines = [];
      }
    };

    const flushList = () => {
      if (inList && listItems.length > 0) {
        const Tag = listType === "ol" ? "ol" : "ul";
        elements.push(
          <Tag key={`list-${keyCounter++}`}>
            {listItems.map((item, idx) => (
              <li key={`li-${idx}`}>{renderInline(item)}</li>
            ))}
          </Tag>
        );
        listItems = [];
        inList = false;
        listType = null;
      }
    };

    const flushCodeBlock = () => {
      if (inCodeBlock) {
        const codeText = codeBlockLines.join("\n");
        elements.push(
          <pre key={`code-${keyCounter++}`}>
            <code className={codeBlockLang ? `language-${codeBlockLang}` : ""}>
              {codeText}
            </code>
          </pre>
        );
        codeBlockLines = [];
        inCodeBlock = false;
        codeBlockLang = "";
      }
    };

    const flushAll = () => {
      flushParagraph();
      flushList();
      flushCodeBlock();
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Code Block start/end
      if (trimmed.startsWith("```")) {
        if (inCodeBlock) {
          flushCodeBlock();
        } else {
          flushAll();
          inCodeBlock = true;
          codeBlockLang = trimmed.slice(3).trim();
        }
        continue;
      }

      if (inCodeBlock) {
        codeBlockLines.push(line);
        continue;
      }

      // Horizontal Rule
      if (trimmed === "---" || trimmed === "***") {
        flushAll();
        elements.push(<hr key={`hr-${keyCounter++}`} />);
        continue;
      }

      // Headings
      const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
      if (headingMatch) {
        flushAll();
        const level = headingMatch[1].length;
        const text = headingMatch[2];
        const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
        elements.push(
          <Tag key={`h-${keyCounter++}`}>{renderInline(text)}</Tag>
        );
        continue;
      }

      // Blockquotes
      const blockquoteMatch = line.match(/^>\s*(.*)$/);
      if (blockquoteMatch) {
        flushAll();
        let blockquoteText = blockquoteMatch[1];
        while (i + 1 < lines.length && lines[i + 1].trim().startsWith(">")) {
          i++;
          blockquoteText += "\n" + lines[i].trim().slice(1).trim();
        }
        elements.push(
          <blockquote key={`bq-${keyCounter++}`}>
            <p>{renderInline(blockquoteText)}</p>
          </blockquote>
        );
        continue;
      }

      // Unordered Lists
      const ulMatch = line.match(/^[\*\-]\s+(.*)$/);
      if (ulMatch) {
        if (inList && listType !== "ul") {
          flushList();
        }
        inList = true;
        listType = "ul";
        flushParagraph();
        listItems.push(ulMatch[1]);
        continue;
      }

      // Ordered Lists
      const olMatch = line.match(/^\d+\.\s+(.*)$/);
      if (olMatch) {
        if (inList && listType !== "ol") {
          flushList();
        }
        inList = true;
        listType = "ol";
        flushParagraph();
        listItems.push(olMatch[1]);
        continue;
      }

      // Empty line closes block elements
      if (trimmed === "") {
        flushAll();
        continue;
      }

      // Otherwise, collect lines for paragraph
      flushList();
      paragraphLines.push(line);
    }

    flushAll();
    return elements;
  }, [content]);

  return <div className={className}>{parsedElements}</div>;
}

// Simple inline parser returning React nodes
function renderInline(text: string): React.ReactNode[] {
  const regex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(regex);
  
  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith("[") && part.includes("](")) {
      const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (match) {
        return (
          <a key={index} href={match[2]} target="_blank" rel="noopener noreferrer">
            {match[1]}
          </a>
        );
      }
    }
    return part;
  });
}
