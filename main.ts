import { mkdirSync, writeFileSync } from "node:fs";
// Second opinion: the patient keeps booking sessions just to argue with the diagnosis.
const LINE = "Diagnosis: chronic doomscrolling with acute reply-guy tendencies. Treatment: one walk outside, no phone, and a journal instead of a chatbot at 2 a.m.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
