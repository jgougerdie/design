---
tags: [skill, design, frontend, reference]
created: 2026-08-24
source: frontend-design skill (Claude Code)
---

# Frontend Design — Skill Guide

Reference note for the `frontend-design` skill: guidance for distinctive, intentional visual design when building new UI or reshaping an existing one — aesthetic direction, typography, and avoiding templated defaults.

Approach it as the design lead at a small studio known for giving every client a visual identity that couldn't be mistaken for anyone else's. The client has rejected proposals that felt templated and is paying for a distinctive point of view: make deliberate, opinionated choices about palette, typography, and layout specific to the brief, and take one real aesthetic risk you can justify.

## Ground it in the subject

If the brief doesn't pin down what the product/subject is, pin it yourself before designing: name one concrete subject, its audience, and the page's single job — state the choice. Use any known preferences or prior context as a hint. The subject's own world — its materials, instruments, artifacts, vernacular — is where distinctive choices come from. Build with the brief's real content throughout.

## Design principles

- **Hero as thesis.** Open with the most characteristic thing in the subject's world — headline, image, animation, live demo, interactive moment. A big number + small label + supporting stats + gradient accent is the template answer; only use it if it's genuinely the best option.
- **Typography carries personality.** Pair display and body faces deliberately — not the defaults you'd reach for on any other project. Set a clear type scale with intentional weights, widths, spacing. Make the type treatment itself memorable, not a neutral delivery vehicle.
- **Structure is information.** Numbering, eyebrows, dividers, labels should encode something true about the content, not decorate it. Numbered markers (01/02/03) only belong where the content is actually a sequence.
- **Motion, deliberately.** Consider a page-load sequence, scroll-triggered reveal, hover micro-interactions, ambient atmosphere. One orchestrated moment usually beats scattered effects — but sometimes less is more; excess animation reads as AI-generated.
- **Match complexity to the vision.** Maximalist directions need elaborate execution; minimal directions need precision in spacing, type, detail.
- **Written content is design material.** A generic-sounding copy voice makes a design feel as templated as its layout. See "More on writing" below.

## Process: brainstorm → explore → plan → critique → build → critique again

Calibration — AI-generated design currently clusters around three defaults:
1. Warm cream background (~#F4F1EA), high-contrast serif display, terracotta accent
2. Near-black background, single bright acid-green or vermilion accent
3. Broadsheet layout — hairline rules, zero border-radius, dense newspaper columns

All three are legitimate for *some* briefs, but they're defaults, not choices — they show up regardless of subject. Where the brief pins a direction, follow it exactly, even if it asks for one of these looks. Where it leaves an axis free, don't spend that freedom on a default.

**Work in two passes.**
1. **Brainstorm a compact token system:**
   - *Color* — 4–6 named hex values
   - *Type* — typefaces for 2+ roles (characterful display face used with restraint, complementary body face, utility face for captions/data if needed)
   - *Layout* — one-sentence prose concepts + ASCII wireframes to compare
   - *Signature* — the one unique element the page will be remembered by
2. **Review the plan against the brief before building.** If any part reads like the generic default for any similar brief, revise it and note what changed and why. Only then write code, following the revised plan, deriving every color/type decision from it.

Watch CSS selector specificity — type-based (`.section`) vs element-based (`.cta`) selectors can silently cancel each other out, especially around section padding/margins.

Do most of the planning/iteration in thinking; only surface ideas once confidence is high they'll land.

## Restraint and self-critique

Spend boldness in one place — let the signature element be the one memorable thing, keep everything around it quiet and disciplined, cut decoration that doesn't serve the brief. Not taking a risk can itself be a risk. Build to a quality floor without announcing it: responsive down to mobile, visible keyboard focus, reduced motion respected. Critique the work as you build — screenshots if possible. Chanel's rule: before leaving the house, look in the mirror and remove one accessory. Keep notes on what's been tried before, for future passes.

## More on writing in design

Words exist in a design for one reason: to make it easier to understand and use. Design material, not decoration — bring the same intentionality to copy as to spacing and color.

- Write from the end user's side of the screen. Name things by what people control and recognize, not by how the system is built ("manages notifications," not "webhook config").
- Default to active voice — a control says exactly what happens when used ("Save changes," not "Submit"). An action keeps its name through the whole flow (button says "Publish" → toast says "Published").
- Treat failure/emptiness as moments for direction, not mood — explain what went wrong and how to fix it, in the interface's voice. Errors don't apologize and are never vague. An empty screen is an invitation to act.
- Keep the register conversational and tuned: plain verbs, sentence case, no filler, tone matched to brand/audience. Each element does exactly one job — a label labels, an example demonstrates, nothing does double duty.

## Related
- [[Upwork Proposal Engine]] — a parallel "voice and doctrine" system, for copy rather than UI
