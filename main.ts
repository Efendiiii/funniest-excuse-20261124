import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "The task didn't fail. I simply outsourced it to a future version of myself, and that version is still on break.";

// Guard: the entry must be non-empty and at most 200 characters.
if (!TEXT || TEXT.length > 200) {
  throw new Error("entry must be 1-200 characters");
}

// Guard: the entry must be exactly one line.
if (TEXT.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
