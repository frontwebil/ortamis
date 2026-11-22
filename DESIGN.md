---
name: Ортаміс
description: A Poltava dental clinic lettered like its own shopfront at night — slate field, Roman capitals, linen paper, one brass accent.
colors:
  slate: "#1c252d"
  slate-2: "#24303a"
  slate-3: "#2f3c48"
  linen: "#efe8dd"
  linen-2: "#e5dccd"
  paper: "#f7f3ec"
  brass: "#c8b08a"
  brass-2: "#a88f68"
  ink-soft: "#4a5560"
  on-slate-soft: "#b9b4ab"
  hair-dark: "rgba(200, 176, 138, .28)"
  hair-light: "rgba(28, 37, 45, .14)"
typography:
  display:
    fontFamily: "Forum, Times New Roman, serif"
    fontSize: "clamp(48px, 6.6vw, 100px)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  signage:
    fontFamily: "Forum, Times New Roman, serif"
    fontSize: "clamp(48px, 9vw, 148px)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.22em"
  headline:
    fontFamily: "Forum, Times New Roman, serif"
    fontSize: "clamp(40px, 5.2vw, 80px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.005em"
  numeral:
    fontFamily: "Forum, Times New Roman, serif"
    fontSize: "clamp(56px, 7vw, 112px)"
    fontWeight: 400
    lineHeight: 0.9
    fontFeature: "\"lnum\" 1, \"tnum\" 1"
  title:
    fontFamily: "Forum, Times New Roman, serif"
    fontSize: "clamp(28px, 2.6vw, 40px)"
    fontWeight: 400
    lineHeight: 1.1
  quote:
    fontFamily: "Forum, Times New Roman, serif"
    fontSize: "clamp(24px, 2.2vw, 32px)"
    fontWeight: 400
    lineHeight: 1.22
  body:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1
  label-sm:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1
    fontFeature: "\"tnum\" 1"
  signage-sub:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "clamp(11px, 1vw, 14px)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  focus: "2px"
  plate: "4px"
  pill: "999px"
spacing:
  hairline-inset: "14px"
  row: "28px"
  column-gap: "clamp(32px, 5vw, 80px)"
  gutter: "clamp(20px, 5vw, 80px)"
  section: "clamp(88px, 11vw, 168px)"
  container: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.linen}"
    textColor: "{colors.slate}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "#ffffff"
  button-brass:
    backgroundColor: "transparent"
    textColor: "{colors.linen}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-brass-hover:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.slate}"
  slot-cta:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.linen}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "48px"
  slot-cta-hover:
    backgroundColor: "{colors.slate-3}"
  slot-pill:
    backgroundColor: "{colors.linen-2}"
    textColor: "{colors.slate}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.pill}"
    padding: "7px 10px"
  slots-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.slate}"
    rounded: "{rounded.plate}"
    padding: "24px 24px 20px"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.on-slate-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "40px"
  filter-chip-active:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.slate}"
  plate:
    backgroundColor: "{colors.slate-2}"
    rounded: "{rounded.plate}"
  sign-board:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.linen}"
    typography: "{typography.signage}"
    padding: "clamp(28px, 4vw, 56px) clamp(32px, 6vw, 96px)"
  callbar:
    backgroundColor: "{colors.linen}"
    textColor: "{colors.slate}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "56px"
  nav-link:
    textColor: "{colors.on-slate-soft}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.linen}"
---

# Design System: Ортаміс

## Overview

**Creative North Star: "The Shopfront at Night"**

The clinic is lettered the way its real street sign is: a deep slate panel carrying wide, inscriptional Roman capitals, lit warm. The page is that sign extended into a building. Slate is the night field that opens and closes every visit; linen and paper bands are the lit interior seen through it; a single brass-beige accent does the work of the sign's gilt: hairlines, numerals, the pressed state, the one emphasised line. Nothing is decorated that is not also information. Prices, phone numbers and doctors' names are set as large type, because in this world the facts are the ornament.

Density is low and calm. Sections are tall, type is big, and rows are separated by 1px rules rather than boxes. Photography sits in framed plates like pictures hung in a waiting room, each with a thin brass hairline inset from its edge. Motion is one orchestrated hero entrance plus quiet, exponential ease-out responses to the pointer; nothing loops and nothing performs on its own.

The world explicitly rejects the white-and-teal clinic template with icon cards, and the flat linen-and-slate look of the discarded first version.

**Key Characteristics:**
- Slate grounds carry the majority of the page; light bands alternate inside it.
- Forum, an inscriptional serif with full Cyrillic, sets every heading, name, price and quote.
- Brass is the only accent and lives in lines, numerals and active states.
- Structure is drawn with hairlines, not cards; shadows exist only on objects that float.
- 4px framed photo plates; pills only for tappable controls and time slots.
- One hero entrance, then the page answers the pointer and otherwise stays still.

## Colors

A night palette: two cool slates, two warm papers, one brass, with text colors that are the opposite ground rather than black or white.

### Primary
- **Shopfront Slate** (#1c252d): the night field. Hero, implant steps, the sign band and the footer; also the text color on every light band (the build aliases it as `--ink`) and the hover wipe behind service rows. Also the browser `theme-color`.

### Secondary
- **Sign Brass** (#c8b08a): the single accent. Frame hairlines on plates and the sign, the third line of the hero headline, implant step numerals, list headings in the price section, rating stars, nav underline, the pressed filter chip, the hover fill of the outline button, the focus ring, text selection.
- **Aged Brass** (#a88f68): the darker brass for marks that sit on light grounds without being read as text: link underlines, the caret, the scrollbar thumb.

### Neutral
- **Lamplit Linen** (#efe8dd): the main light band (services, team) and the primary button and phone call bar fill; also the text color on slate (aliased `--on-slate`).
- **Pressed Linen** (#e5dccd): the time-slot pills inside the slots card.
- **Waiting-Room Paper** (#f7f3ec): the lightest band (children, FAQ) and the floating slots card.
- **Night Slate II** (#24303a): the price section band and the empty-plate fill behind photographs.
- **Night Slate III** (#2f3c48): hover state of the slate pill button.
- **Ink Soft** (#4a5560): secondary text on linen and paper (leads, descriptions, review attributions).
- **Slate Soft Text** (#b9b4ab): secondary text on slate (leads, nav links at rest, step paragraphs).
- **Brass Hairline** (rgba(200, 176, 138, .28)): every 1px rule on slate grounds.
- **Ink Hairline** (rgba(28, 37, 45, .14)): every 1px rule on linen and paper grounds.

### Named Rules
**The One Brass Rule.** Brass is the only accent. It appears as lines, numerals, stars and active states; it fills nothing larger than a chip or a pressed button. A second accent hue is a different world.

**The Brass Belongs to the Night Rule.** Brass is used as text only on slate grounds. On linen and paper it appears only as a hairline or an underline (Aged Brass), because brass text on a light ground does not read.

**The Opposite Ground Rule.** Text on slate is linen; text on light bands is slate. Pure black is never used, and pure white appears only as the brightened hover of a linen control.

## Typography

**Display Font:** Forum (with Times New Roman, serif)
**Body Font:** Onest (with system-ui, sans-serif)

**Character:** Forum is a carved, inscriptional Roman with Cyrillic, the voice of the shopfront sign; Onest is a plain, modern Ukrainian-friendly grotesque that does the explaining. The serif is always the larger voice; the sans never competes with it.

### Hierarchy
- **Display** (400, clamp(48px, 6.6vw, 100px), 0.95): the hero headline only, set in masked lines with balanced wrapping; the last line turns brass. 48px on phones.
- **Signage** (400, clamp(48px, 9vw, 148px), 0.95, uppercase, 0.22em tracking): the clinic name on the sign board; the same caps at 26px (0.26em) form the header brand lockup.
- **Headline** (400, clamp(40px, 5.2vw, 80px), 1.0): section headings, balanced wrapping.
- **Numeral** (400, clamp(56px, 7vw, 112px), 0.9, lining tabular figures): the three headline prices. The same face carries the closing phone number (clamp(56px, 12.5vw, 200px)), implant step numbers (clamp(72px, 8vw, 128px), brass) and service-row prices.
- **Title** (400, clamp(28px, 2.6vw, 40px), 1.1): step titles, service names (larger, up to 56px), doctors' names (up to 42px), price-group heads (26px, brass), FAQ questions (up to 30px).
- **Quote** (400, clamp(24px, 2.2vw, 32px), 1.22): patient review quotes, always in guillemets, pretty wrapping.
- **Body** (400, 17px, 1.6): running text. Leads run 18px (19px max in the hero) and cap at 46ch; paragraphs cap at 42 to 62ch.
- **Label** (500, 15–16px, 1.0): buttons, nav links, chips, the call bar. **Label small** (500, 13px, tabular figures) sets time-slot pills.
- **Signage sub-line** (500, clamp(11px, 1vw, 14px), 0.2em tracking, uppercase, brass): the line under the clinic name on the sign board and in the header lockup only.

### Named Rules
**The Inscription Rule.** Forum carries every heading, name, price, numeral and quote. Onest never exceeds 19px and never sets a heading.

**The Facts Are Display Rule.** Prices and the phone number are set as display type in Forum with tabular figures, never as small print. The phone number is the largest type on the page.

**The Sign-Only Caps Rule.** Wide-tracked uppercase belongs to the clinic's name and its sub-line, as on the physical sign. It is never used as an eyebrow or kicker above a heading.

## Layout

A single 1320px container with fluid gutters (clamp(20px, 5vw, 80px)) and tall sections (clamp(88px, 11vw, 168px) top and bottom). Inside it, layouts are unequal two-column splits: 7/5 for the hero and section heads, 6/5 for the implant path, 5/6 for children, 5/7 for the FAQ, and a 6/4/2 row grid for the services index. Column gaps run clamp(32px, 5vw, 80px) and widen to 120px between a sticky photo and its text.

Bands alternate dark and light: slate hero, linen services, full-bleed photo sign, slate implant path, paper children, slate-2 prices, linen team, paper FAQ, slate footer. The page always opens and closes on slate.

Lists are rule-separated rows (28px vertical padding on desktop, 22px on phones), and price lists flow as three newspaper columns (min 300px, 56px gap) with dotted brass leaders between item and price.

Responsive behavior: at 1100px the header nav hides; at 900px every split stacks to one column, the sticky implant photo becomes static and the slots card tucks up under the hero plate (-64px overlap); at 760px service rows become name + price over description, the three headline prices stack, the team list goes single-column and a fixed linen call bar appears at the bottom of the screen; at 640px the header shortens to 68px and drops the phone; at 520px the hero tightens and the primary button goes full width.

**The Unequal Split Rule.** Two-column layouts are never 50/50 except for the team list and reviews; the larger column holds the type.

## Elevation & Depth

Flat by default. Depth comes from alternating grounds and 1px hairlines; within a band there is no layering. Shadows are reserved for objects that physically float over another surface, and they are always soft, deep and dark, never tinted and never offset hard. The fixed header becomes a translucent slate pane (94% opacity, 10px blur, slight saturation) with a brass hairline once the page scrolls.

### Shadow Vocabulary
- **Button lift** (`box-shadow: 0 10px 30px -12px rgba(0,0,0,.55)`): under the linen primary button on slate.
- **Card float** (`box-shadow: 0 30px 60px -24px rgba(0,0,0,.6), 0 2px 6px rgba(0,0,0,.18)`): the slots card overlapping the hero plate.
- **Peek float** (`box-shadow: 0 30px 60px -20px rgba(0,0,0,.5)`): the pointer-following service photo.
- **Board float** (`box-shadow: 0 40px 80px -30px rgba(0,0,0,.6)`): the sign board over its photograph.
- **Bar float** (`box-shadow: 0 16px 40px -12px rgba(0,0,0,.55)`): the mobile call bar.

### Named Rules
**The Hairline-First Rule.** Separate with a 1px rule (Brass Hairline on slate, Ink Hairline on light) before reaching for a box, a fill or a shadow.

**The Only Floaters Cast Shadows Rule.** A shadow means the object sits above another surface (card over photo, board over room, bar over page). Rows, bands and plates at rest cast none.

## Shapes

Gently squared. Containers and photographs use a 4px corner; nothing structural rounds further. Every photo plate carries a 1px brass hairline frame inset 14px from its edge (8px on phones, 20px on the full-bleed sign), like a mount in a picture frame. The sign board doubles that: a brass border plus a slate outline offset 6px. Pills (999px) are reserved for things you press or pick: buttons, filter chips, time slots, the call bar. Price lists use dotted brass leaders; everything else is straight 1px rules.

**The Framed Plate Rule.** Photographs never sit bare: 4px corners, a slate-2 fill behind them, and an inset brass hairline frame.

**The Pill Is for Touch and Time Rule.** A 999px radius marks a control or a time slot. Cards, plates and panels stay at 4px.

## Components

### Buttons
Confident, lamplit pills that respond with a small arrow nudge and a press.
- **Shape:** full pill (999px).
- **Primary (linen):** Lamplit Linen fill, slate text, 56px tall, 28px side padding, 500 weight 16px, trailing 16px stroked arrow; carries the button lift shadow. Hover brightens the fill to white; the arrow slides 4px right (0.35s). Active scales to 0.97. Full width with the arrow pushed to the edge below 520px.
- **Outline (brass):** transparent with a 1px brass border, linen text, 44px tall, 20px padding, 15px; hover fills brass with slate text. Used for the header booking button (40px on phones).
- **Slate pill (slots card):** slate fill, linen text, 48px, label with arrow; hover deepens to Night Slate III.
- **Text link:** 500 weight, underline 1px in Aged Brass at 0.22em offset; hover takes the underline to the text color.
- **Focus:** 2px brass outline, 3px offset, 2px radius, on every interactive element.
- **Timing:** 0.25s on cubic-bezier(.16, 1, .3, 1) for color and transform.

### Chips (price filter)
- **Style:** 40px pill, 1px Brass Hairline border, transparent, Slate Soft Text, 14px 500.
- **State:** hover takes the border to brass and text to linen; pressed (`aria-pressed="true"`) fills brass with slate text; active scales 0.96. Single-select; hidden groups leave the column flow.

### Cards / Containers
- **Corner Style:** 4px.
- **Background:** Waiting-Room Paper for the one floating card (slots); bands otherwise carry content directly without containers.
- **Shadow Strategy:** card float only (see Elevation & Depth).
- **Border:** inner rows divided by Ink Hairline.
- **Internal Padding:** 24px 24px 20px (18px 18px 14px on phones).

### Navigation
- **Header:** fixed, 80px tall (68px on phones), transparent over the hero, turning to the translucent slate pane with a brass hairline after 40px of scroll. Brand lockup left (Forum caps name + brass sub-line), section links, the phone in tabular figures, the brass outline booking button.
- **Links:** 15px 500 Slate Soft Text; hover goes linen while a 1px brass underline draws in from the left and retracts to the right (0.35s).
- **Mobile:** links hide below 1100px, the phone below 640px; booking moves to the fixed linen call bar below 760px, which slides up once the hero has passed and hides again at the footer.

### Slots Card (signature)
The clinic's weekly "free windows" story, made into the thing you act on. A paper card overlapping the lower-left edge of the hero plate: a Forum 26px heading with a soft source note, rows per specialist with their name over a wrap of Pressed Linen time pills (13px tabular), a small note, and the slate pill booking button. It is the last thing to settle in the hero entrance (it rises 28px from a 1.5° tilt). On phones it tucks under the plate and its rows become a name column and a pill column.

### Services Index (signature)
Services as a large type index rather than cards. Each row: Forum service name, a short soft description, a Forum price with a small "від". On hover-capable desktops, a slate wipe rises from the row's bottom edge to bleed full gutter width (0.45s), the text turns linen, the name slides 16px and turns brass, and a 300px 4:5 photo plate follows the pointer with an eased lag. On touch and below 900px, there is no peek and no wipe.

### Implant Path (signature)
A sticky 4:3 framed plate beside an ordered list of four tall steps. The step crossing the middle of the viewport lights to full opacity (others rest at 40%) and the plate crossfades to its photo (0.7s fade, 1.2s settle from 1.06 scale). Brass Forum numerals lead each step. On phones the plate is static and every step is fully lit.

### Sign Board
A full-bleed room photograph with an inset brass hairline frame, and centered on it the slate board carrying the clinic name in Signage caps and the brass sub-line with the street address. Used once per page as the brand's physical sign.

### Price List
Three headline prices as giant Forum numerals between brass hairlines with a small brass "грн" suffix; below them the filter chips and newspaper-column groups, each with a brass Forum head and rows joined to their price by a dotted brass leader.

### Motion
One orchestrated hero entrance after fonts load (capped at 600ms): headline lines rise out of masks over 1.1s with 0.09s staggers, lead and actions fade-rise 16px from 0.45s, the plate unmasks upward over 1.3s while its photo settles from 1.12 scale, the slots card settles last at 1s. Everything uses cubic-bezier(.16, 1, .3, 1). With reduced motion or no JavaScript, content is simply present; smooth scrolling also turns off.

## Do's and Don'ts

### Do:
- **Do** let slate carry most of the page and open and close every page on it.
- **Do** keep brass to hairlines, numerals, stars, focus and pressed states; brass text only on slate.
- **Do** set prices, phone numbers, doctors' names and quotes in Forum, large, with tabular figures for numbers.
- **Do** frame every photograph as a plate: 4px corners, slate-2 behind, an inset 1px brass hairline (14px in, 8px on phones).
- **Do** separate rows with 1px hairlines (rgba(200, 176, 138, .28) on slate, rgba(28, 37, 45, .14) on light) instead of cards.
- **Do** use the 7/5 unequal split for hero and section heads, and stack to one column at 900px.
- **Do** ease every transition on cubic-bezier(.16, 1, .3, 1) and give content its final state when motion is reduced.
- **Do** keep the phone action reachable at all times: header button, hero, slots card, call bar on phones, giant footer number.

### Don't:
- **Don't** build the white-and-teal clinic template with icon cards.
- **Don't** fall back to the flat, evenly-weighted linen-and-slate look of the discarded first version.
- **Don't** introduce a second accent color or use brass as a large fill.
- **Don't** set brass text on linen or paper.
- **Don't** round cards, plates or panels beyond 4px; pills are for controls and time slots only.
- **Don't** set Onest above 19px or use it for headings.
- **Don't** put small tracked uppercase labels (eyebrows, kickers) above headings or values; tracked caps are for the clinic's name only.
- **Don't** add shadows to rows, bands or resting plates, and never use hard offset shadows.
- **Don't** present stock faces as the clinic's doctors; photography shows rooms and instruments.
