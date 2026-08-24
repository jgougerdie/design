# Second Brain vault

This folder is a self-contained Obsidian vault. Start at [Home.md](./Home.md).

## Getting this into Obsidian on your machine (`C:\ObsidianProject`)

This was built in a cloud session, so it can't write to your local filesystem directly — pull it down yourself:

**Option A — git (recommended, keeps it updatable)**
```
cd C:\ObsidianProject
git remote add design https://github.com/jgougerdie/design.git   # skip if already added
git fetch design claude/obsidian-second-brain-97jg8c
git checkout design/claude/obsidian-second-brain-97jg8c -- second-brain
```
Then in Obsidian: **File → Open folder as vault → C:\ObsidianProject\second-brain**.

**Option B — plain download**
1. On GitHub, open the `claude/obsidian-second-brain-97jg8c` branch of `jgougerdie/design`.
2. Download the `second-brain` folder (or the whole repo as a zip and pull that folder out).
3. Copy it into `C:\ObsidianProject\`.
4. In Obsidian: **File → Open folder as vault** → point at the copied `second-brain` folder.

## Structure
- `Home.md` — map of content, start here
- `01 - Profile/` — identity, certifications, employment history
- `02 - Business/` — Video Design Studio brand, portfolio, pricing
- `03 - Systems/` — the Upwork proposal-writing playbook
- `04 - Skills/` — reference guides (e.g. frontend design)
- `Templates/` — reusable note scaffolding
