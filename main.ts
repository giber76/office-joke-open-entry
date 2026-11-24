import { mkdirSync, writeFileSync } from "node:fs";

// Why this joke: the request itself is the trap — asking to be removed
// via reply-all invites the exact thing it tries to stop, and 47 people
// reply-all to agree, so the punchline (the ironic twist) lands in the
// last words: the escape attempt becomes the thread's biggest reply-all.
const joke =
  "I replied-all to ask to be removed from the thread, and 47 people replied-all to agree with me.";

// The rules require 1-200 Unicode code points, not only whitespace.
const length = [...joke].length;
if (length < 1 || length > 200 || joke.trim().length === 0) {
  throw new Error(`entry.txt must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
