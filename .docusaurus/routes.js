
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/JasonScriptingUtilities/',
  component: ComponentCreator('/JasonScriptingUtilities/','0b7'),
  exact: true,
},
{
  path: '/JasonScriptingUtilities/blog',
  component: ComponentCreator('/JasonScriptingUtilities/blog','92e'),
  exact: true,
},
{
  path: '/JasonScriptingUtilities/blog/release',
  component: ComponentCreator('/JasonScriptingUtilities/blog/release','bd3'),
  exact: true,
},
{
  path: '/JasonScriptingUtilities/blog/tags',
  component: ComponentCreator('/JasonScriptingUtilities/blog/tags','a1d'),
  exact: true,
},
{
  path: '/JasonScriptingUtilities/blog/tags/release',
  component: ComponentCreator('/JasonScriptingUtilities/blog/tags/release','76c'),
  exact: true,
},
{
  path: '/JasonScriptingUtilities/markdown-page',
  component: ComponentCreator('/JasonScriptingUtilities/markdown-page','13e'),
  exact: true,
},
{
  path: '/JasonScriptingUtilities/docs',
  component: ComponentCreator('/JasonScriptingUtilities/docs','0c7'),
  
  routes: [
{
  path: '/JasonScriptingUtilities/docs/gettingstarted',
  component: ComponentCreator('/JasonScriptingUtilities/docs/gettingstarted','e6a'),
  exact: true,
},
{
  path: '/JasonScriptingUtilities/docs/intro',
  component: ComponentCreator('/JasonScriptingUtilities/docs/intro','34c'),
  exact: true,
},
{
  path: '/JasonScriptingUtilities/docs/utilities/autoClicker',
  component: ComponentCreator('/JasonScriptingUtilities/docs/utilities/autoClicker','880'),
  exact: true,
},
{
  path: '/JasonScriptingUtilities/docs/utilities/discordPresence',
  component: ComponentCreator('/JasonScriptingUtilities/docs/utilities/discordPresence','845'),
  exact: true,
},
{
  path: '/JasonScriptingUtilities/docs/utilities/spotifyAdBlocker',
  component: ComponentCreator('/JasonScriptingUtilities/docs/utilities/spotifyAdBlocker','0fe'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
