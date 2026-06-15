# Medical Knowledge Diagnosis Demo

An interactive static demo for a 306 postgraduate medical exam knowledge-point diagnosis loop.

The current demo uses the resting membrane potential topic to show the full flow:

- a five-option diagnostic question
- adaptive follow-up questions after mistakes
- minimal explanation cards
- variant verification
- mastery-state labeling
- review log and student profile tags

## Run Locally

Open `index.html` directly in a browser, or serve the folder:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173
```

## Files

- `index.html`: page structure
- `styles.css`: responsive interface styling
- `app.js`: diagnosis tree and interaction state machine
