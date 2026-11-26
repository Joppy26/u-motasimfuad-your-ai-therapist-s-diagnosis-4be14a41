import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "Diagnosis: terminally online with a severe case of main-character syndrome. Treatment: log off, touch grass, and stop outsourcing your feelings to a chatbot.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
