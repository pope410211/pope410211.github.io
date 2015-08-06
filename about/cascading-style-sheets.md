# THE CSS of things!

#rules
1. `at-rule`-
  * CSS statement beginning with an at sign, `@`, followed by an identifier, and ending at the first semi-colon, `;`, outside of a block, or at the end of the first CSS block.

##stuff

1. `background`-
  * A shorthand for setting the individual background values in a single place in the style sheet.
2. `hover`-
  * pseudo-classes matches when the user designates an element with a pointing device, but does not necessarily activate it. This style may be overridden by any other link-related pseudo-classes, that is:link, :visited, and :active, appearing in subsequent rules. In order to style appropriately links, you need to put the :hover rule after the :link and :visited rules but before the :active one, as defined by the LVHA-order: :link — :visited — :hover — :active.
3. `blur`-
  * Applies a Gaussian blur to the input image. The value of ‘radius’ defines the value of the standard deviation to the Gaussian function, or how many pixels on the screen blend into each other, so a larger value will create more blur. If no parameter is provided, then a value 0 is used. The parameter is specified as a CSS length, but does not accept percentage values.
4. `border`-
   * is a shorthand property for setting the individual border property values in a single place in the style sheet.
5. `position`-
   * property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects.

##Mediq query
A media query consists of a media type and at least one expression that limits the style sheets' scope by using media features, such as width, height, and color. Media queries, added in CSS3, let the presentation of content be tailored to a specific range of output devices without having to change the content itself.
1. `media-query-list`-
   * object maintains a list of media queries on a document, and handles sending notifications to listeners when the media queries on the document change.
2. `media-query-list-listener`-
   * object maintains a list of media queries on a document, and handles sending notifications to listeners when the media queries on the document change.





##Padding-
The padding property is a shorthand to avoid setting each side separately (padding-top, padding-right, padding-bottom, padding-left).
1. Padding Area
   * extends the content area with the empty area between the content and the eventual borders surrounding it. It often has a background, a color or an image (in that order, an opaque image hiding the background color), and is located inside the padding edge. Its dimensions are the padding-box width and the padding-box height.
2. Padding top, bottom, left, right-
   * The padding-top CSS property of an element sets the padding space required in a particular area of an element.
3. float-
   * specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it.

##Fonts
1. `font-size`-
   * CSS property specifies the size of the font.
2. `font-style`-
   * CSS property lets you select italic or oblique faces within a font-family
3. `font-family`-
   * CSS property lets you specify a prioritized list of font family names and/or generic family names for the selected element.
4. `font-weight` -
   * CSS property specifies the weight or boldness of the font. Some fonts are only available in normal and bold.
5. `font-kerning` -
   * CSS property controls the usage of the kerning information; that is, it controls how letters are spaced.
6. `font-stretch`-
   * CSS property selects a normal, condensed, or expanded face from a font.
7. `font-variant`-
   * CSS property selects a normal, or small-caps face from a font family.
8. `font-synthesis`-
   * CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.
9. `font-size-adjust`-
   * CSS property specifies that font size should be chosen based on the height of lowercase letters rather than the height of capital letters.
10. `font-feature-settings`-
   * CSS property gives you control over advanced typographic features in OpenType fonts.

##@-Rule
1. `@font-face`-
   *  CSS at-rule allows authors to specify online fonts to display text on their web pages.
2. `@font-feature-values`-
   * CSS at-rule allows authors to use a common name in font-variant-alternates for feature activated differently in OpenType.
3. `@media`-
   * A conditional group rule which will apply its content if the device meets the criteria of the condition defined using a media query.
4. `@page`-
   * Describes the aspect of layout changes which will be applied when printing the document
5. `@keyframes`-
   * Describes the aspect of intermediate steps in a CSS animation sequence.
6. `@supports`-
   * A conditional group rule which will apply its content if the browser meets the criteria of the given condition.
7. `@document`-
   * A conditional group rule which will apply its content if the document in which the style sheet is applied to meets the criteria of the given condition.
