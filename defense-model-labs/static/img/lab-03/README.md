# Lab 3 Screenshot Slots

Place PNG screenshots in this directory following the `<page>_<sequence>.png` naming convention.
The MDX pages already reference these filenames — add your screenshots and the build will pick them up automatically.

All screenshots should be from the **ARGUS AI fine-tuning interface**.

---

## setup.mdx

| Filename | What to capture |
|---|---|
| `setup_1.png` | TechZone demo environment landing page — the page you see after clicking the launch link |
| `setup_2.png` | ARGUS AI home screen / dashboard after logging in |
| `setup_3.png` | Fine Tuning section of the ARGUS AI interface — the starting point for the lab |

---

## step1.mdx — Prepare Training Data

| Filename | What to capture |
|---|---|
| `step1_1.png` | Training Data section / tab in the ARGUS AI fine-tuning interface |
| `step1_2.png` | File picker or upload dialog for selecting the training data file |
| `step1_3.png` | An individual training example expanded — showing the input prompt and expected output |
| `step1_4.png` | Dataset summary panel showing total examples, validation status, and statistics |

---

## step2.mdx — Configure and Run Fine-Tuning Job

| Filename | What to capture |
|---|---|
| `step2_1.png` | Fine-tuning job configuration panel / Create New Job form in ARGUS AI |
| `step2_2.png` | Base model and training dataset selection dropdowns in the job configuration |
| `step2_3.png` | Job configuration summary screen before clicking Submit / Start Fine-Tuning |
| `step2_4.png` | Fine-tuning job monitoring view — showing training progress bar, current epoch, and loss metric |

---

## step3.mdx — Evaluate Fine-Tuned Model

| Filename | What to capture |
|---|---|
| `step3_1.png` | Fine-tuning job showing "Complete" status with an Evaluate or Test Model button visible |
| `step3_2.png` | Model selection panel showing base model vs fine-tuned checkpoint options |
| `step3_3.png` | Side-by-side comparison of base model vs fine-tuned model response to a domain-specific prompt |
| `step3_4.png` | Classification evaluation — comparing base and fine-tuned model outputs on a classification task |
| `step3_5.png` | Evaluation metrics panel showing quantitative performance scores (ROUGE, accuracy, etc.) |

---

## Notes

- PNG format preferred; JPG is also acceptable
- Recommended width: 1200–1600px for clarity at full page width
- Annotate screenshots with callout numbers (①②③) if referencing specific UI elements in the step text
- After adding screenshots, run `npm run build` inside `defense-model-labs/` to verify they load correctly
- These screenshots all come from the **custom ARGUS AI fine-tuning interface** — not watsonx.ai Tuning Studio
