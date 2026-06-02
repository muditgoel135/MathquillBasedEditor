## Mathquill based WUSIWYG editor

> MathQuill is an awesome formula editor. We have put some effort and made WUSIWUG editor on top of that.

## What is this?
> This is a javascript library that provides you a simple math editor that you can easily integrate to your webpage. It supports multi-line, word-processor-style editing — press Enter to add a new line. See [Multi-line editing](#multi-line-editing).

## Dependencies
> - [jQuery](https://jquery.com/download/)
- [MathQuill](https://github.com/mathquill/mathquill)

## Getting Started
Download this package and extract files to your project lib folder.

Include required JS and CSS files to your webpage.
```
<html>
<head>
<link href="./path/to/mathquill.css" rel="stylesheet">
<link href="./path/to/matheditor.css" rel="stylesheet">

<script src="./path/to/jquery.js"></script>
<script src="./path/to/mathquill.min.js"></script>
<script src="./path/to/matheditor.js"></script>
</head>
<body>
.
.
.
.
</body>
</html>
```

Create MathEditor Instance and set all the options you required.
```javascript

var mathEditor = new MathEditor('some_id');

mathEditor.addButtons(["fraction","square_root","cube_root","root",'superscript','subscript']);
// If you dont write this line editor will display default buttons. 

mathEditor.removeButtons(["fraction","square_root"])
// If you want to remove some buttons from default list.

mathEditor.styleMe({
    width: '500',
    height: '80'
});
// List of other options are mentioned bellow.

mathEditor.setTemplate('floating-toolbar');
// It will make button toolbar floating.

mathEditor.getLatex();
// It will return letex for input formula.
// For a multi-line editor, lines are joined with "\\" (the LaTeX newline).

mathEditor.setLatex('\\frac{1}{2}');
// It will set letex in input area.
// It accepts any latex string. A "\\"-joined string is split back into lines.

mathEditor.getLines();
// Returns an array with the latex of each line, e.g. ['x+1', 'y-2'].
// This is the lossless way to read a multi-line editor.

mathEditor.getValue();
// Same as getLatex().

mathEditor.getPrintableValue();
// Returns the latex wrapped for rendering. Single line -> "$$...$$".
// Multiple lines -> "$$\begin{array}{l} line1 \\ line2 ... \end{array}$$".
```

## Multi-line editing
The editor behaves like a word processor and supports multiple lines:

- Press **Enter** to start a new line. Content to the right of the cursor moves
  down to the new line (the line is split at the cursor).
- Navigation is unchanged within a line, and now also crosses between lines:
  - **Up / Down** move to the line above / below.
  - **Left** at the start of a line jumps to the end of the previous line;
    **Right** at the end of a line jumps to the start of the next line.
  - **Backspace** at the start of a line merges it into the previous line.
- Lines are shown as one continuous document — there is no border between
  lines, and the whole editor sits inside a single outer box.

Read and write multi-line content with `getLines()` (an array, recommended),
or with `getLatex()` / `setLatex()` which join and split lines on `"\\"`. The
delimiter is exposed as `MathEditor.LINE_SEP` if you need it directly. For a
single line, all of these return exactly what they did before.

## Options
### styleMe()
Attribute | Type | Default | Description
--------- | ---- | ------- | -----------
width|`string`|`500`|It will define minimum width for your editor
height|`string`|`40`|It will define minimum height for your editor
textarea_background|`string`|`#FFFFFF`|Background color for your editor textarea<br>eg. 'white', '#FFFFFF', 'rgba(255,255,255,0.5)'
textarea_foreground|`string`|`#000000`|Text color for your editor textarea<br>eg. 'white', '#FFFFFF', 'rgba(255,255,255,0.5)'
textarea_border|`string`|`#000000`|Border color for your editor textarea<br>eg. 'white', '#FFFFFF', 'rgba(255,255,255,0.5)'
toolbar_background|`string`|`#FFFFFF`|Background color for your editor toolbar<br>eg. 'white', '#FFFFFF', 'rgba(255,255,255,0.5)'
toolbar_foreground|`string`|`#000000`|Text color for your editor toolbar<br>eg. 'white', '#FFFFFF', 'rgba(255,255,255,0.5)'
toolbar_border|`string`|`#000000`|Border color for your editor toolbar<br>eg. 'white', '#FFFFFF', 'rgba(255,255,255,0.5)'
button_background|`string`|`#FFFFFF`|Background color for your editor toolbar button<br>eg. 'white', '#FFFFFF', 'rgba(255,255,255,0.5)'
button_border|`string`|`#000000`|Border color for your editor toolbar button<br>eg. 'white', '#FFFFFF', 'rgba(255,255,255,0.5)'

## TinyMCE Support
- You can integrate our MathEditor to tinyMCE with easy implementation.
- [Click here](https://github.com/SinghSatyam/math_editor) for documentation.

## Help us Improve
#### [Donate us](https://www.paypal.me/KBhutwala)

