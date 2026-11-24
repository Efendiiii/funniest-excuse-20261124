import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The task didn't fail. I simply outsourced it to a future version of myself, and that version is still on break.";

if (!TEXT.trim() || TEXT.length > 200) throw new Error("entry text out of range");
if (TEXT.includes("\n")) throw new Error("entry must be exactly one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
