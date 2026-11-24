// Two-Sentence Horror — make.fun entry (u-suroto-two-sentence-horror-acea9253).
// Writes one horror story of exactly two sentences to /output/entry.txt.
// Node stdlib only. Deterministic: the story is a fixed string.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "The vet said our dog stopped barking at the mailman because dogs only bark at strangers. " +
  "This morning, for the first time in twelve years, he barked at me.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const file = join(outDir, "entry.txt");
writeFileSync(file, STORY, "utf8");
// Leave the output file world-readable; never chmod the output dir itself.
try {
  chmodSync(file, 0o644);
} catch {
  // Best effort only: the grader runs as another user.
}
