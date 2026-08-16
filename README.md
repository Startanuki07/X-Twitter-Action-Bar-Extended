# ✨ Not Interested, Mute, and Block Buttons for X (Twitter)

Adds Not Interested, Mute, and Block buttons to each tweet.

<details open>
  <summary><small style="color: #666;">Hide image</small></summary>
  <img src="https://greasyfork.s3.us-east-2.amazonaws.com/hp7z1ipm60k0e8iktpe5q2dmizdm" alt="Image">
</details>

---

> 💡 **Overview**
> This script places quick-action buttons alongside the existing controls on every tweet on X (Twitter), removing the need to open dropdown menus to manage your feed. A mute shortcut also appears on user profile pages for fast silencing without leaving the page. A floating settings panel lets you choose which buttons are active, where they sit on each tweet, and how Not Interested actions behave after the initial click.

---

## 🎛 How to Access Features

| Icon | Feature | Where It Appears |
|------|---------|-----------------|
| 🚫 | Not Interested | On each tweet, For You tab only |
| 🔇 | Mute user | On each tweet (enable in Settings) |
| ⛔ | Block user | On each tweet (enable in Settings) |
| 🔇 | Profile page mute shortcut | On any user's profile page, next to the follow/unfollow controls |
| ⚙️ | Settings panel | Gear button, bottom-right corner of any X page |

---

## 🚀 Core Features

### 🚫 Not Interested

Signals to the algorithm that you dislike a post.

- The button appears automatically on tweets in the **For You** tab. It does not appear on other tabs or pages because the underlying action is not available there.
- When triggered, the tweet is dismissed from your feed and a brief confirmation is shown before it disappears.
- What happens after the initial click depends on the **After Not Interested** setting. See the Settings section below for the available options.

### 🔇 Mute User

Mutes the tweet's author so their posts stop appearing in your feed.

- The button visually confirms success once muting is complete.
- Muting is reversible — clicking the button again on a muted author's tweet unmutes them immediately.
- If the author is already blocked, the mute button indicates this and the action is skipped.

### ⛔ Block User

Blocks the tweet's author so they can no longer see your posts or interact with your account.

- A confirmation step is handled automatically — no dialog requires your input.
- The button changes its appearance once blocking is confirmed.
- Blocking and muting are mutually exclusive. Blocking an already-muted user clears the mute state, and the button indicators update immediately to reflect this.

### 🔇 Profile Page Mute Shortcut

Places a mute button directly on a user's profile, next to the standard action controls.

- Appears automatically whenever you visit a profile page on X.
- Behaves identically to the mute button on individual tweets — the action is silent and reversible.

---

## ⚠️ Known Limitations

- **For You tab only:** The Not Interested button appears exclusively when you are on the For You (recommended) tab. Switching to Following, Search, Bookmarks, or a profile removes it, as the action does not exist in those contexts. On tweet detail pages, the button is visible but inactive.

- **Language-dependent mute detection:** Mute and unmute actions may not work correctly in all regional language settings. Coverage includes several major languages, but is not guaranteed to be complete.

- **Gear button placement:** The settings gear button appears in the bottom-right corner of the page, close to X's native Messages button. If the Messages button becomes difficult to click, aim for its outer edge — it is larger than the gear button and still responds there.

- **Page load timing:** If X takes longer than ten seconds to fully render after navigation, the buttons will not appear on that page load. Refreshing the page resolves this.

---

## ⚙️ Settings

### Button Visibility

Each of the three action buttons can be turned on or off independently from the Settings panel.

- **Not Interested** is enabled by default; Mute and Block are off by default.
- Changes take effect immediately across all visible tweets without a page reload.

### After Not Interested

Controls what happens after the initial Not Interested click, when X shows a follow-up prompt.

- **Off** — no follow-up action is taken. The tweet is dismissed after the prompt disappears on its own.
- **Reduce posts** — automatically selects "Show fewer posts from this user" from the follow-up prompt.
- **Not relevant** — automatically selects "This post isn't relevant to me" from the follow-up prompt.
- **⟡ Elegant Menu Mode ⟡** (default) — an inline menu appears near the Not Interested button, letting you choose between Reduce posts and Not relevant at the moment of each click. The menu closes automatically after 8 seconds if no choice is made, and the tweet is dismissed without a follow-up selection.

The tweet is dismissed from the feed regardless of which option is chosen. Some post types show only a brief confirmation with no selectable options, in which case the follow-up step is skipped automatically.

### Button Position

Choose where the action buttons sit on each tweet.

- **Header** (default): buttons appear in the top-right area of the tweet card, alongside the existing caret and Grok controls.
- **Action Bar**: buttons appear in the bottom row alongside Like, Repost, Reply, and Bookmark.
- Switching position updates all visible tweets instantly.

### Panel Theme

The settings panel supports a dark and a light colour scheme.

- The default theme is dark.
- Toggle using the circular button in the top-right corner of the settings panel.
- Your choice is remembered and restored the next time you visit X.

### Hover to Reveal

Hides the action buttons until you point at the tweet.

- **Off** by default — buttons stay always visible, matching the script's original behaviour.
- When enabled, buttons fade in when your cursor is over the tweet's button area, and fade out otherwise. Buttons already showing a muted or blocked state stay visible regardless, so you can still spot accounts you've already acted on at a glance.
- On touch devices without a real pointer (phones, tablets), this setting has no visible effect — buttons remain always visible, since there is no hover gesture to detect.

### Panel Pin

Keeps the settings panel open while you browse, instead of it closing when you click elsewhere.

- Click the pin icon in the panel header to lock it open. The panel stays open across page navigation until you unpin it, so option changes can be compared across multiple tweets.
- While pinned, clicking the ✕ button does not close the panel immediately — the first click flashes the pin as a reminder, and a second click brings up a confirmation before unpinning and closing.
- Your pinned state is remembered and restored the next time you visit X.

---

- This userscript is primarily maintained on Greasy Fork.
- Built with AI assistance by a hobbyist developer. Bug fixes and updates may not be immediate.
- Feedback is welcome. Responses may be assisted by translation tools if needed.