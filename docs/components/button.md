---
id: button
title: Button
sidebar_label: Button
---

Use this widget when you want your user to trigger an action.

## Examples

<div
    frameHeight="100px"
    class="code-preview"
    url="https://flutter-awesome-libs.github.io/flutter_awesome_button/#/"
    title="Button types"
    text="There are 3 types of buttons - <code>default</code>, <code>outline</code> and <code>destructive</code>."
    gist="https://gist.github.com/nkshah2/c9169f99cdb48bde45c6171b6c50aa5f">
</div>


<div style="margin-top: 30px; margin-bottom: 30px"></div>


<div
    frameHeight="400px"
    class="code-preview"
    url="https://flutter-awesome-libs.github.io/flutter_awesome_button/#/sized"
    title="Button sizes"
    text="Buttons can be <code>small</code>, <code>normal</code>, <code>large</code> and <code>full width</code>."
    gist="https://gist.github.com/nkshah2/293ba7453f4511803d101ca2d088b1a5">
</div>

<div
    frameHeight="200px"
    class="code-preview"
    url="https://flutter-awesome-libs.github.io/flutter_awesome_button/#/interact"
    title="Interaction"
    text="The interaction can be set to <code>default</code> or <code>opacity</code>.<br/><br/><b>Note that <code>outline</code> buttons always use opacity</b>."
    gist="https://gist.github.com/nkshah2/2eda755e2a0ddc2bb3c2a18e420f6068">
</div>

## Types

#### ButtonSize

This is used to set the size of the button to be displayed.

```java
enum ButtonSize {
  SMALL,
  LARGE,
  NORMAL,
  FULL_WIDTH,
}
```

#### InteractMode

This is used to set the type of interaction and animation the button should have when the user clicks on the button. By default the button background darkens and an animation plays after the pointer is lifted. By setting the mode to opacity you can change this behavior, the button now reduces in opacity when the pointer is in contact with the button, the background animation does not change depending on the mode.

```java
enum InteractMode {
  DEFAULT,
  OPACITY,
}
```

## API

Property | Description | Type | Default | Version<sup class="note-sup">*</sup>
---------|-------------|------|---------|--------------
text<sup class="required-sup">*</sup> | The text to be displayed inside the button | <div class="type">String</div> | - | -
size | The size of the button | <div class="type">ButtonSize</div> | ```NORMAL``` | -
interactMode | The type of interaction the button should use when clicked | <div class="type">InteractMode</div> | ```DEFAULT``` | -
onTapUp | Callback that is executed when the pointer is no longer in contact with the button | <a class="external-docs-link" href="https://api.flutter.dev/flutter/gestures/GestureTapUpCallback.html" target="_blank">GestureTapUpCallback</a> | - | -
onTapDown | Callback that is executed when a pointer has contacted the button | <a class="external-docs-link" href="https://api.flutter.dev/flutter/gestures/GestureTapDownCallback.html" target="_blank">GestureTapDownCallback</a> | - | -
disabled | Indicates whether or not the button should be disabled | <div class="type">boolean</div> | ```false``` | -
key | Key to be used for the button | <a class="external-docs-link" href="https://api.flutter.dev/flutter/foundation/Key-class.html" target="_blank">Key</a> | - | -
backgroundColor | Background color to be used for the button, also applies to the background animation | <a class="external-docs-link" href="https://api.flutter.dev/flutter/dart-ui/Color-class.html" target="_blank">Color</a> | ```#1890FF or #FF4D4F``` | -
textColor | Color for the text | <a class="external-docs-link" href="https://api.flutter.dev/flutter/dart-ui/Color-class.html" target="_blank">Color</a> | ```#ffffff``` | -
fontSize | Size of the text | <div class="type">double</div> | ```12, 14 or 16 based on size``` | -
padding | Padding to be used for the button | <a class="external-docs-link" href="https://api.flutter.dev/flutter/painting/EdgeInsets-class.html" target="_blank">EdgeInsets</a> | ```based on size``` | -
disabledColor | Color of the button when it is disabled | <a class="external-docs-link" href="https://api.flutter.dev/flutter/dart-ui/Color-class.html" target="_blank">Color</a> | ```#F5F5F5``` | -
borderRadius | Border radius of the button | <div class="type">double</div> | ```4``` | -
activeOpacity | The opacity of the button when the user interacts with it, only applicable with ```interactMode``` opacity | <div class="type">double</div> | ```0.3``` | -
activeColor | The color of the button when the user presses down | <a class="external-docs-link" href="https://api.flutter.dev/flutter/dart-ui/Color-class.html" target="_blank">Color</a> | ```based on type``` | -

<sup class="note-sup">*</sup> : The version when this property was added. '-' indicates this property was present since 1.0.0

<sup class="required-sup">*</sup> : Property is required