# ✨ Manage Your Feed with One-Click Tweet Actions

**Adds Not Interested, Mute, and Block buttons directly to each tweet so you can act on your feed in one click.**

---

> 💡 **Overview**
> This script places quick-action buttons alongside the existing controls on every tweet on X (Twitter), removing the need to open dropdown menus to manage your feed. A mute shortcut also appears on user profile pages for fast silencing without leaving the page. A floating settings panel lets you choose which buttons are active and where they sit on each tweet.

---

## 🎛 How to Access Features

This script consists of **3 independent feature areas**, each accessible from different locations:

| Icon | Feature Area | Feature | Where It Appears |
|------|-------------|---------|-----------------|
| 🚫 | Tweet Actions | Not Interested | On each tweet, For You tab only |
| 🔇 | Tweet Actions | Mute user | On each tweet (enable in Settings) |
| ⛔ | Tweet Actions | Block user | On each tweet (enable in Settings) |
| 🔇 | Profile Actions | Mute user shortcut | On any user's profile page |
| ⚙️ | Settings | Button configuration | Gear button, bottom-right corner of the page |

> 💡 Each feature area operates independently. You do not need to enable all buttons.

---

## 🚀 Core Features

### 🚫 Not Interested

Signals to the algorithm that you dislike a post, without opening any menu.

- The button appears automatically on tweets in the **For You** tab.
- It does not appear on other tabs (Following, Search, Bookmarks, Profiles) because the underlying action is not available there.
- The action completes in the background — no visible dialog or confirmation is shown.

### 🔇 Mute User

Silently mutes the tweet's author so their posts stop appearing in your feed.

- The button toggles its appearance once muting succeeds, confirming the action visually.
- Muting is reversible — clicking the button again on a muted author's tweet will unmute them.
- On a user's **profile page**, a dedicated mute shortcut appears alongside the existing follow/unfollow controls, separate from the tweet buttons.
- If a user is already blocked, muting is unavailable and the button signals this with a brief animation.

### ⛔ Block User

Blocks the tweet's author so they can no longer see your posts or interact with your account.

- A confirmation step is triggered automatically in the background — you do not need to interact with a dialog.
- The button changes its appearance once blocking is confirmed.
- Blocking and muting are mutually exclusive: blocking an already-muted user will clear the mute state, reflected immediately in the button indicators.

### 🔇 Profile Page Mute Shortcut

Places a mute button directly on a user's profile, next to the standard action controls.

- Appears automatically whenever you visit a profile page on X.
- Behaves identically to the mute button on individual tweets — the action is silent and reversible.

---

## ⚙️ How to Open Settings

Hover over the **bottom-right corner** of any X page. A blue gear (⚙️) button will become visible as you move your cursor toward that corner. Clicking it opens the settings panel. Clicking anywhere outside the panel closes it.

> ⚠️ **Note on button placement:** The gear button currently sits very close to X's built-in Messages (chat) button in the bottom-right corner. This is a temporary position — a better location will be determined in a future update. If you need to open a direct message conversation, clicking the **outer edge** of the Messages button still works, as it is larger than the script's gear button.

---

## ⚠️ Known Limitations

- **For You tab only:** The Not Interested button appears exclusively when you are on the For You (recommended) tab. Switching to Following, Search, Bookmarks, or a profile automatically removes it, as the underlying action does not exist in those contexts.

- **Gear button overlaps with Messages button:** The settings gear button currently appears in the bottom-right corner, very close to X's native Messages button. This overlap is temporary. If the Messages button becomes difficult to click, aim for its outer edge — it is larger than the script's gear button and will still respond.

- **Regional mute detection:** Mute and unmute actions are identified by matching the text label of the menu item that appears behind the scenes. Detection covers several major languages but may not work correctly in all language and region settings not explicitly covered.

- **Page load timing:** If X takes longer than ten seconds to fully render after navigation, the script will not inject buttons on that page load. Refreshing the page resolves this.

---

## ⚙️ Additional Features

### Button Visibility

Each of the three action buttons can be turned on or off independently from the Settings panel.

- **Not Interested** is enabled by default; Mute and Block are off by default.
- Toggle any button at any time — the change takes effect immediately across all visible tweets without a page reload.

### Button Position

Choose where the action buttons sit on each tweet.

- **Header** (default): buttons appear in the top-right area of the tweet card, alongside the existing caret and Grok controls.
- **Action Bar**: buttons appear in the bottom row alongside Like, Repost, Reply, and Bookmark.
- Switching position updates all visible tweets instantly.

### Panel Theme

The settings panel supports a dark and a light colour scheme.

- The default theme is dark.
- Toggle using the circular button in the top-right corner of the settings panel.
- Your choice is saved locally and restored the next time you visit X.

---

*This userscript is primarily maintained on Greasy Fork.*  
*Built with AI assistance by a hobbyist developer. Bug fixes and updates may not be immediate.*  
*Feedback is welcome. Responses may be assisted by translation tools if needed.*
