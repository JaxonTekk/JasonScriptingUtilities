---
sidebar_position: 2
---

# Custom Discord Presence
:::tip Want to help improve the documenation?

Click on Edit This Page to improve the documentation.

:::

## 1. Retrieve an Application ID From Discord

1. Head over to https://discord.com/developers/applications. Make sure that you are logged in.
2. Press `New Application`in the top right of the website.
3. After doing so, copy and paste the `Application ID` in the General Information tab.
4. Copy and paste that into the `Application ID:` section of `JasonScriptingUtilities`.
5. Press initialize in `JasonScriptingUtilities`.

## 2. Fill out your desired information

|    Option Name   | Definition                               |
|:----------------:|------------------------------------------|
|       Text1      | Sets the Details                         |
|       Text2      | Sets the State                           |
| Large Image Key  | Sets the Large Image                     |
| Large Image Text | Sets the Large Image Text after hovering |
| Small Image Key  | Sets the Small Image                     |
| Small Image Text | Sets the Small Image Text after hovering |

## 3. Add Image Keys onto your Custom Presence
:::danger Discord Bug

Assets may take a while to be recognized in `JasonScriptingUtilities` due to discord's limitations. To check when they'll be recognize, refresh the page in the `rich-presence/assets` page.

:::
1. Go to `https://discord.com/developers/applications/[YOUR APPLICATION ID]/rich-presence/assets`
2. Press `Add Image(s)` and upload your image. **THIS MAY TAKE A FEW MINUTES - HOURS** for discord to recognize these assets.
3. Press initialize again in `JasonScriptingUtilities`.

## 4. Press Start