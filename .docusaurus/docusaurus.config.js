export default {
  "title": "JasonScriptingUtilities",
  "tagline": "⚙️A Powerful Client with Multiple Exclusive Features",
  "url": "https://jaxontekk.github.io/",
  "baseUrl": "/JasonScriptingUtilities/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "JaxonTekk",
  "projectName": "JasonScriptingUtilities",
  "themeConfig": {
    "navbar": {
      "title": "JasonScriptingUtilities",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/jaxontekk.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Installation",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/JaxonTekk/JasonScriptingUtilities",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Introduction",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Discord",
              "href": "https://discord.gg/ZEDUWwJZPy"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Updates",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/JaxonTekk/JasonScriptingUtilities"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Jason Chen, Inc. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "D:\\jsuDocs\\sidebars.js",
          "editUrl": "https://github.com/JaxonTekk/JasonScriptingUtilities"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/JaxonTekk/JasonScriptingUtilities/blog/"
        },
        "theme": {
          "customCss": "D:\\jsuDocs\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};