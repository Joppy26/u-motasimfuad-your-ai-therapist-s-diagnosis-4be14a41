import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "Diagnosis: chronic doomscrolling with acute main-character syndrome; prognosis good, unless you keep asking a chatbot to feel your feelings for you.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
