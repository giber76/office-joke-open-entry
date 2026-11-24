import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about office life.
const joke =
  "I replied-all to ask to be removed from the thread, and 47 people replied-all to agree with me.";

// The rules require 1-200 Unicode code points, not only whitespace.
const length = [...joke].length;
if (length < 1 || length > 200 || joke.trim().length === 0) {
  throw new Error(`entry.txt must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
