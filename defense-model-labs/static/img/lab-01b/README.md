# Lab 1B Screenshot Slots

Place PNG screenshots in this directory following the `<page>_<sequence>.png` naming convention.
The MDX pages already reference these filenames — add your screenshots and the build will pick them up automatically.

---

## setup.mdx

| Filename | What to capture |
|---|---|
| `setup_1.png` | TechZone demo environment landing page — the page you see after clicking the launch link |
| `setup_2.png` | ARGUS AI home screen / dashboard after logging in |
| `setup_3.png` | UDC/UDI section of the interface — the starting point for the lab |

---

## step1.mdx — Upload Document

| Filename | What to capture |
|---|---|
| `step1_1.png` | The document upload zone or upload button in the ARGUS AI / UDC interface |
| `step1_2.png` | File picker or drag-and-drop area with the AAR document selected |
| `step1_3.png` | Upload in progress — loading/processing indicator |
| `step1_4.png` | Upload confirmation — document listed as processed/ready in the interface |
| `step1_5.png` | Document metadata panel showing extracted properties (page count, word count, etc.) |

---

## step2.mdx — Query Documents

| Filename | What to capture |
|---|---|
| `step2_1.png` | The query / chat interface panel in ARGUS AI UDI |
| `step2_2.png` | Typing an overview question (e.g., "What is this document about?") in the chat input |
| `step2_3.png` | AI response to the overview question |
| `step2_4.png` | Typing a specific entity extraction query (e.g., "Who are the key people mentioned?") |
| `step2_5.png` | AI response showing extracted entities/personnel |
| `step2_6.png` | Follow-up question being typed to drill into a specific challenge |
| `step2_7.png` | AI response to follow-up question showing contextual reasoning |

---

## step3.mdx — Extract Insights

| Filename | What to capture |
|---|---|
| `step3_1.png` | Entity extraction panel or results — showing people, places, organizations categorized |
| `step3_2.png` | Timeline or chronological event view generated from the document |
| `step3_3.png` | Pattern/theme analysis results in the interface |
| `step3_4.png` | Cross-reference or comparison view showing relationships between entities or sections |
| `step3_5.png` | Final intelligence brief or synthesized summary output |

---

## Notes

- PNG format preferred; JPG is also acceptable
- Recommended width: 1200–1600px for clarity at full page width
- Annotate screenshots with callout numbers (①②③) if referencing specific UI elements in the step text
- After adding screenshots, run `npm run build` inside `defense-model-labs/` to verify they load correctly
