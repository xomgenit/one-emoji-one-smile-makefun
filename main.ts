import * as fs from "node:fs";
import * as path from "node:path";

// The entry: one hugging face. A hug is the warmest thing a stranger
// can offer at a glance — friendly, universal, and clearly chosen
// rather than the default smiley, with no intimacy or irony.
const smile = "🤗";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
fs.mkdirSync(targetDir, { recursive: true });
fs.writeFileSync(path.join(targetDir, "entry.txt"), smile, "utf8");
