/**
 * Visual Blocks Editor
 *
 * Copyright 2013 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Inject Blockly's CSS synchronously.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Css');

goog.require('goog.cssom');


/**
 * Inject the CSS into the DOM.  This is preferable over using a regular CSS
 * file since:
 * a) It loads synchronously and doesn't force a redraw later.
 * b) It speeds up loading by not blocking on a separate HTTP transfer.
 * c) The CSS content may be made dynamic depending on init options.
 */
Blockly.Css.inject = function() {
  var text = Blockly.Css.CONTENT.join('\n');
  // Expand paths.
  text = text.replace(
      '%HAND_OPEN_PATH%',
      Blockly.assetUrl('media/handopen.cur'));
  goog.cssom.addCssText(text);
  
  // Pass styles to svgweb manualy. No way to do it automatic
  if (window.svgweb) {
	  window.svgweb.updateCssStyleSheets();	  
  }
  
};

/**
 * Array making up the CSS content for Blockly.
 */
Blockly.Css.CONTENT = [
  '.blocklySvg {',
  '  background-color: #fff;',
  '  border: 1px solid #ddd;',
  '}',
  '.blocklyWidgetDiv {',
  '  position: absolute;',
  '  display: none;',
  '  z-index: 999;',
  '}',
  '.blocklyDraggable {',
  '  /* Hotspot coordinates are baked into the CUR file, but they are still',
  '     required in the CSS due to a Chrome bug.',
  '     http://code.google.com/p/chromium/issues/detail?id=1446 */',
  (window.svgweb) ? '  cursor: move;' : '  cursor: url(%HAND_OPEN_PATH%) 8 5, auto;',
  '}',
  '.blocklyResizeSE {',
  '  fill: #aaa;',
  '  cursor: se-resize;',
  '}',
  '.blocklyResizeSW {',
  '  fill: #aaa;',
  '  cursor: sw-resize;',
  '}',
  '.blocklyResizeLine {',
  '  stroke-width: 1;',
  '  stroke: #888;',
  '}',
  '.blocklyHighlightedConnectionPath {',
  '  stroke-width: 4px;',
  '  stroke: #fc3;',
  '  fill: none;',
  '}',
  '.blocklyPathLight {',
  '  fill: none;',
  '  stroke-width: 2;',
  '  stroke-linecap: round;',
  '}',
  '.blocklySelected>.blocklyPath {',
  '  stroke-width: 3px;',
  '  stroke: #fc3;',
  '}',
  '.blocklySelected>.blocklyPathLight {',
  '  display: none;',
  '}',
  '.blocklyDragging>.blocklyPath,',
  '.blocklyDragging>.blocklyPathLight {',
  '  fill-opacity: 0.8;',
  '  stroke-opacity: 0.8;',
  '}',
  '.blocklyDragging>.blocklyPathDark {',
  '  display: none;',
  '}',
  '.blocklyDisabled>.blocklyPath {',
  '  fill-opacity: 0.50;',
  '  stroke-opacity: 0.50;',
  '}',
  '.blocklyDisabled>.blocklyPathLight,',
  '.blocklyDisabled>.blocklyPathDark {',
  '  display: none;',
  '}',
  '.blocklyText {',
  '  cursor: default;',
  (window.svgweb) ? '  font-family: arial;' : '  font-family: sans-serif;',
  (window.svgweb) ? '  font-size: 14pt;' : '  font-size: 11pt;',
  '  fill: #fff;',
  '}',
  '.blocklyNonEditableText>text {',
  '  pointer-events: none;',
  '}',
  '.blocklyNonEditableText>rect,',
  '.blocklyEditableText>rect {',
  '  fill: #fff;',
  '  fill-opacity: 0.6;',
  '}',
  '.blocklyNonEditableText>text,',
  '.blocklyEditableText>text {',
  '  fill: #000;',
  '}',
  '.blocklyEditableText:hover>rect {',
  '  stroke-width: 2;',
  '  stroke: #fff;',
  '}',
  '/*',
  ' * Don\'t allow users to select text.  It gets annoying when trying to',
  ' * drag a block and selected text moves instead.',
  ' */',
  '.blocklySvg text {',
  '  -moz-user-select: none;',
  '  -webkit-user-select: none;',
  '  user-select: none;',
  '  cursor: inherit;',
  '}',
  '',
  '.blocklyHidden {',
  '  display: none;',
  '}',
  '.blocklyFieldDropdown:not(.blocklyHidden) {',
  '  display: block;',
  '}',
  '.blocklyTooltipBackground {',
  '  fill: #ffffc7;',
  '  stroke-width: 1px;',
  '  stroke: #d8d8d8;',
  '}',
  '.blocklyTooltipShadow,',
  '.blocklyContextMenuShadow,',
  '.blocklyDropdownMenuShadow {',
  '  fill: #bbb;',
  (window.svgweb) ? '' : '  filter: url(#blocklyShadowFilter);', 
  '}',
  '.blocklyTooltipText {',
  (window.svgweb) ? '  font-family: arial;' : '  font-family: sans-serif;',
  (window.svgweb) ? '  font-size: 12pt;' : '  font-size: 9pt;', 
  '  fill: #000;',
  '}',
  '',
  '.blocklyIconShield {',
  '  cursor: default;',
  '  fill: #00c;',
  '  stroke-width: 1px;',
  '  stroke: #ccc;',
  '}',
  '.blocklyIconGroup:hover>.blocklyIconShield {',
  '  fill: #00f;',
  '  stroke: #fff;',
  '}',
  '.blocklyIconGroup:hover>.blocklyIconMark {',
  '  fill: #fff;',
  '}',
  '.blocklyIconMark {',
  '  cursor: default !important;',
  '  font-family: sans-serif;',
  '  font-size: 9pt;',
  '  font-weight: bold;',
  '  fill: #ccc;',
  '  text-anchor: middle;',
  '}',
  '.blocklyWarningBody {',
  '}',
  '.blocklyMinimalBody {',
  '  margin: 0;',
  '  padding: 0;',
  '}',
  '.blocklyCommentTextarea {',
  '  margin: 0;',
  '  padding: 2px;',
  '  border: 0;',
  '  resize: none;',
  '  background-color: #ffc;',
  '}',
  '.blocklyHtmlInput {',
  '  font-family: sans-serif;',
  '  font-size: 11pt;',
  '  border: none;',
  '  outline: none;',
  '  width: 100%',
  '}',
  '.blocklyContextMenuBackground,',
  '.blocklyMutatorBackground {',
  '  fill: #fff;',
  '  stroke-width: 1;',
  '  stroke: #ddd;',
  '}',
  '.blocklyContextMenuOptions>.blocklyMenuDiv,',
  '.blocklyContextMenuOptions>.blocklyMenuDivDisabled,',
  '.blocklyDropdownMenuOptions>.blocklyMenuDiv {',
  '  fill: #fff;',
  '}',
  '.blocklyContextMenuOptions>.blocklyMenuDiv:hover>rect,',
  '.blocklyDropdownMenuOptions>.blocklyMenuDiv:hover>rect {',
  '  fill: #57e;',
  '}',
  '.blocklyMenuSelected>rect {',
  '  fill: #57e;',
  '}',
  '.blocklyMenuText {',
  '  cursor: default !important;',
  '  font-family: sans-serif;',
  '  font-size: 15px; /* All context menu sizes are based on pixels. */',
  '  fill: #000;',
  '}',
  '.blocklyContextMenuOptions>.blocklyMenuDiv:hover>.blocklyMenuText,',
  '.blocklyDropdownMenuOptions>.blocklyMenuDiv:hover>.blocklyMenuText {',
  '  fill: #fff;',
  '}',
  '.blocklyMenuSelected>.blocklyMenuText {',
  '  fill: #fff;',
  '}',
  '.blocklyMenuDivDisabled>.blocklyMenuText {',
  '  fill: #ccc;',
  '}',
  '.blocklyFlyoutBackground {',
  '  fill: #ddd;',
  '  fill-opacity: 0.8;',
  '}',
  '.blocklyColourBackground {',
  '  fill: #666;',
  '}',
  '.blocklyScrollbarBackground {',
  '  fill: #fff;',
  '  stroke-width: 1;',
  '  stroke: #e4e4e4;',
  '}',
  '.blocklyScrollbarKnob {',
  '  fill: #ccc;',
  '}',
  '.blocklyScrollbarBackground:hover+.blocklyScrollbarKnob,',
  '.blocklyScrollbarKnob:hover {',
  '  fill: #bbb;',
  '}',
  '.blocklyInvalidInput {',
  '  background: #faa;',
  '}',
  '.blocklyAngleCircle {',
  '  stroke: #444;',
  '  stroke-width: 1;',
  '  fill: #ddd;',
  '  fill-opacity: 0.8;',
  '}',
  '.blocklyAngleMarks {',
  '  stroke: #444;',
  '  stroke-width: 1;',
  '}',
  '.blocklyAngleGuage {',
  '  fill: #d00;',
  '  fill-opacity: 0.8;  ',
  '}',
  '',
  '/* Category tree in Toolbox. */',
  '.blocklyToolboxDiv {',
  '  background-color: #ddd;',
  '  display: none;',
  '  overflow-x: visible;',
  '  overflow-y: auto;',
  '  position: absolute;',
  '}',
  '.blocklyTreeRoot {',
  '  padding: 4px 0;',
  '}',
  '.blocklyTreeRoot:focus {',
  '  outline: none;',
  '}',
  '.blocklyTreeRow {',
  '  line-height: 22px;',
  '  height: 22px;',
  '  padding-right: 1em;',
  '  white-space: nowrap;',
  '}',
  '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {',
  '  padding-right: 0;',
  '  padding-left: 1em !important;',
  '}',
  '.blocklyTreeRow:hover {',
  '  background-color: #e4e4e4;',
  '}',
  '.blocklyTreeIcon {',
  '  height: 16px;',
  '  width: 16px;',
  '  vertical-align: middle;',
  '  background-image: url(<<<PATH>>>/media/tree.png);',
  '}',
  '.blocklyTreeIconClosedLtr {',
  '  background-position: -32px -1px;',
  '}',
  '.blocklyTreeIconClosedRtl {',
  '  background-position: 0px -1px;',
  '}',
  '.blocklyTreeIconOpen {',
  '  background-position: -16px -1px;',
  '}',
  '.blocklyTreeIconNone {',
  '  background-position: -48px -1px;',
  '}',
  '.blocklyTreeSelected>.blocklyTreeIconClosedLtr {',
  '  background-position: -32px -17px;',
  '}',
  '.blocklyTreeSelected>.blocklyTreeIconClosedRtl {',
  '  background-position: 0px -17px;',
  '}',
  '.blocklyTreeSelected>.blocklyTreeIconOpen {',
  '  background-position: -16px -17px;',
  '}',
  '.blocklyTreeSelected>.blocklyTreeIconNone {',
  '  background-position: -48px -17px;',
  '}',
  '.blocklyTreeLabel {',
  '  cursor: default;',
  '  font-family: sans-serif;',
  '  font-size: 16px;',
  '  padding: 0 3px;',
  '  vertical-align: middle;',
  '}',
  '.blocklyTreeSelected  {',
  '  background-color: #57e !important;',
  '}',
  '.blocklyTreeSelected .blocklyTreeLabel {',
  '  color: #fff;',
  '}',
  '',
  '/*',
  ' * Copyright 2007 The Closure Library Authors. All Rights Reserved.',
  ' *',
  ' * Use of this source code is governed by the Apache License, Version 2.0.',
  ' * See the COPYING file for details.',
  ' */',
  '',
  '/* Author: pupius@google.com (Daniel Pupius) */',
  '',
  '/*',
  ' Styles to make the colorpicker look like the old gmail color picker',
  ' NOTE: without CSS scoping this will override styles defined in palette.css',
  '*/',
  '.goog-palette {',
  '  outline: none;',
  '  cursor: default;',
  '}',
  '',
  '.goog-palette-table {',
  '  border: 1px solid #666;',
  '  border-collapse: collapse;',
  '}',
  '',
  '.goog-palette-cell {',
  '  height: 13px;',
  '  width: 15px;',
  '  margin: 0;',
  '  border: 0;',
  '  text-align: center;',
  '  vertical-align: middle;',
  '  border-right: 1px solid #666;',
  '  font-size: 1px;',
  '}',
  '',
  '.goog-palette-colorswatch {',
  '  position: relative;',
  '  height: 13px;',
  '  width: 15px;',
  '  border: 1px solid #666;',
  '}',
  '',
  '.goog-palette-cell-hover .goog-palette-colorswatch {',
  '  border: 1px solid #FFF;',
  '}',
  '',
  '.goog-palette-cell-selected .goog-palette-colorswatch {',
  '  border: 1px solid #000;',
  '  color: #fff;',
  '}',
  ''
];
