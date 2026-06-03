// The toolbar/keyboard configuration — button_meta, keyboard_keys,
// ME_DEFAULT_TOOLBAR_BUTTONS, and ME_DEFAULT_TOOLBAR_TABS — is defined in
// config.js, which must be loaded with a <script> tag before this file.
// (Using a script-loaded config rather than fetched JSON lets the editor work
// when the page is opened directly from file://.)


function MathEditor(id) {
    this.isMobile = false; // set to true below if a mobile device is detected

    // Mobile-device detection via user-agent sniffing. These two regexes are the
    // well-known detectmobilebrowsers.com patterns, left verbatim — do not edit:
    //   mobileUserAgent       is matched against the full user-agent string
    //   mobileUserAgentPrefix is matched against only its first 4 characters
    var ua = navigator.userAgent;
    var mobileUserAgent = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
    var mobileUserAgentPrefix = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
    if (mobileUserAgent.test(ua) || mobileUserAgentPrefix.test(ua.substr(0, 4))) {
        this.isMobile = true;
    }
    this.MQ = null;
    jq = window.jQuery;
    this.tabEnabled = true;
    this.answerMathField = ((typeof this.answerMathField != 'undefined') ? this.answerMathField : {});
    this.answerSpan = ((typeof this.answerSpan != 'undefined') ? this.answerSpan : {});
    this.topElements = {
        wrapper: null,
        toolbar: null,
        buttons: null
    }
    mathed_tmp = ((typeof mathed_tmp != 'undefined') ? mathed_tmp : {});
    this.template = 'default';

    this.default_toolbar_buttons = ME_DEFAULT_TOOLBAR_BUTTONS.slice();
    this.default_toolbar_tabs = ME_DEFAULT_TOOLBAR_TABS.slice();
    this.MQ = MathQuill.getInterface(2);
    this.answerSpan = document.getElementById(id);
    jq(this.answerSpan).addClass('me-container'); // single outer box around all lines
    this.editorId = id;
    this.lines = [];            // [{ field, span }] kept in DOM order
    this.activeField = null;    // last-focused line; toolbar/keyboard target it

    var self = this;
    var firstLine = this._createLine('', null);
    this.activeField = firstLine.field;
    this.answerMathField = firstLine.field; // backward-compat alias

    // Clicking the blank container area focuses the last line (document-like).
    jq(this.answerSpan).on('mousedown', function (e) {
        if (e.target === self.answerSpan) {
            e.preventDefault();
            var last = self.lines[self.lines.length - 1];
            if (last) { last.field.focus(); last.field.moveToRightEnd(); }
        }
    });

    setToolbar(this.default_toolbar_buttons, this.answerSpan, this, this.topElements, this.default_toolbar_tabs, this.tabEnabled, this.isMobile);
}

MathEditor.LINE_SEP = "\\\\"; // LaTeX newline used to join/split multiple lines

// Build the MathQuill config for one line. The handlers move/split/merge between
// lines; `lineRecord` ({field, span}) is captured so each handler knows which line
// it belongs to regardless of the transient API wrappers MathQuill passes in.
MathEditor.prototype._lineConfig = function (lineRecord) {
    var self = this;
    return {
        handlers: {
            edit: function () { },                                  // fires constantly: keep empty
            enter: function () { self._handleEnter(lineRecord); },
            upOutOf: function () { self._moveToLine(lineRecord, -1); },
            downOutOf: function () { self._moveToLine(lineRecord, 1); },
            // moveOutOf/deleteOutOf receive MathQuill's direction sentinel (-1 = Left, 1 = Right).
            moveOutOf: function (dir) { self._handleMoveOut(lineRecord, dir); },
            deleteOutOf: function (dir) { self._handleDeleteOut(lineRecord, dir); }
        }
    };
};

// Create a line: a .me-line span turned into a MathField, inserted into the
// container (after `afterSpan` if given, else appended) and tracked in this.lines.
MathEditor.prototype._createLine = function (latexContent, afterSpan) {
    var self = this;
    var span = document.createElement('span');
    span.className = 'me-line';
    if (afterSpan && afterSpan.parentNode) {
        afterSpan.parentNode.insertBefore(span, afterSpan.nextSibling);
    } else {
        this.answerSpan.appendChild(span);
    }

    var lineRecord = { field: null, span: span };
    var field = this.MQ.MathField(span, this._lineConfig(lineRecord));
    lineRecord.field = field;
    if (latexContent) field.latex(latexContent);

    jq(span).on('focusin', function () { self.activeField = field; });

    // On mobile with the virtual keyboard active, suppress the OS keyboard for new lines.
    if (this.isMobile && jq('#keys-' + this.editorId).length) {
        jq(span).find('textarea').attr('readonly', 'readonly');
    }

    var at = afterSpan ? this._lineIndexOfSpan(afterSpan) : -1;
    if (at >= 0) { this.lines.splice(at + 1, 0, lineRecord); }
    else { this.lines.push(lineRecord); }
    return lineRecord;
};

MathEditor.prototype._lineIndexOfSpan = function (span) {
    for (var i = 0; i < this.lines.length; i++) {
        if (this.lines[i].span === span) return i;
    }
    return -1;
};

MathEditor.prototype._removeLine = function (index) {
    var rec = this.lines[index];
    if (!rec) return;
    jq(rec.span).remove();
    this.lines.splice(index, 1);
    if (this.activeField === rec.field) {
        this.activeField = this.lines.length
            ? this.lines[Math.min(index, this.lines.length - 1)].field
            : null;
    }
};

// Enter: split the current line at the cursor. Everything from the cursor to the
// end of the line (crossing nested blocks via Ctrl-Shift-End) moves to a new line.
MathEditor.prototype._handleEnter = function (lineRecord) {
    var field = lineRecord.field;
    var trailing = '';
    try {
        field.keystroke('Ctrl-Shift-End');                  // select cursor -> end of whole line
        var sel = field.__controller && field.__controller.cursor
            && field.__controller.cursor.selection;          // synchronous source of truth
        trailing = sel ? sel.join('latex') : '';
        if (trailing) { field.keystroke('Backspace'); }       // remove the moved-down part
    } catch (e) {
        trailing = '';                                        // pinned-build internals changed: degrade to empty line
    }
    var newRec = this._createLine(trailing, lineRecord.span);
    newRec.field.focus();
    newRec.field.moveToLeftEnd();
};

// Up/Down: move to the adjacent line (no-op at the document boundaries).
MathEditor.prototype._moveToLine = function (lineRecord, delta) {
    var idx = this.lines.indexOf(lineRecord);
    var t = idx + delta;
    if (t < 0 || t >= this.lines.length) return;
    var f = this.lines[t].field;
    f.focus();
    if (delta < 0) { f.moveToRightEnd(); } else { f.moveToLeftEnd(); }
};

// Left at line start -> end of previous line; Right at line end -> start of next line.
MathEditor.prototype._handleMoveOut = function (lineRecord, dir) {
    var idx = this.lines.indexOf(lineRecord);
    if (dir === -1) {
        if (idx <= 0) return;
        var prev = this.lines[idx - 1].field;
        prev.focus(); prev.moveToRightEnd();
    } else {
        if (idx >= this.lines.length - 1) return;
        var next = this.lines[idx + 1].field;
        next.focus(); next.moveToLeftEnd();
    }
};

// Backspace at line start -> merge into previous line; Delete at line end -> pull
// the next line up. No-op at the matching document boundary.
MathEditor.prototype._handleDeleteOut = function (lineRecord, dir) {
    var idx = this.lines.indexOf(lineRecord);
    if (dir === -1) {
        if (idx <= 0) return;
        var cur = lineRecord.field.latex();
        var prev = this.lines[idx - 1].field;
        this._removeLine(idx);
        prev.focus(); prev.moveToRightEnd();   // caret at the seam
        if (cur) { prev.write(cur); }          // write advances the caret past the merged content
    } else {
        if (idx >= this.lines.length - 1) return;
        var nextLatex = this.lines[idx + 1].field.latex();
        this._removeLine(idx + 1);
        var field = lineRecord.field;
        field.focus(); field.moveToRightEnd();
        if (nextLatex) { field.write(nextLatex); }
    }
};

// Lossless per-line access (the recommended API for multi-line consumers).
MathEditor.prototype.getLines = function () {
    return this.lines.map(function (l) { return l.field.latex(); });
};

MathEditor.prototype.getValue = function () {
    var lines = this.getLines();
    // Single line: byte-for-byte unchanged. Multiple lines: join with the LaTeX newline.
    return lines.length <= 1 ? (lines[0] || '') : lines.join(MathEditor.LINE_SEP);
};

MathEditor.prototype.getLatex = function () {
    return this.getValue();
};

MathEditor.prototype.setLatex = function (latex) {
    var src = (latex == null) ? '' : String(latex);
    // Accept either a "\\"-joined string or a printable \begin{array}...\end{array} block.
    var arr = src.match(/\\begin\{array\}(?:\{[^}]*\})?([\s\S]*?)\\end\{array\}/);
    if (arr) { src = arr[1]; }
    var parts = src.split(/\\\\/);
    while (this.lines.length) { this._removeLine(0); }
    var self = this;
    parts.forEach(function (p) {
        var t = p.trim();
        self._createLine(t === '\\,' ? '' : t, null); // '\,' is the empty-row placeholder
    });
    if (!this.lines.length) { this._createLine('', null); }
    this.activeField = this.lines[this.lines.length - 1].field;
    this.answerMathField = this.lines[0].field;
};

MathEditor.prototype.getPrintableValue = function () {
    var lines = this.getLines();
    // Single line: unchanged. Multiple lines: stack them left-aligned for LaTeX rendering.
    if (lines.length <= 1) { return "$$" + (lines[0] || '') + "$$"; }
    var body = lines.map(function (l) { return l === '' ? '\\,' : l; }).join(' \\\\ ');
    return "$$\\begin{array}{l} " + body + " \\end{array}$$";
};

MathEditor.prototype.addButtons = function (btns) {
    this.default_toolbar_buttons = btns;
    setToolbar(this.default_toolbar_buttons, this.answerSpan, this, this.topElements, this.default_toolbar_tabs, this.tabEnabled);
};

MathEditor.prototype.removeButtons = function (btns) {
    var default_toolbar_buttons = this.default_toolbar_buttons;
    btns.forEach(function (o) {
        var index = default_toolbar_buttons.indexOf(o);
        if (index >= 0)
            default_toolbar_buttons.splice(index, 1);
    });
    setToolbar(default_toolbar_buttons, this.answerSpan, this, this.topElements, this.default_toolbar_tabs, this.tabEnabled);
};

MathEditor.prototype.styleMe = function (options) {
    jq(this.answerSpan)
        .css('background', options.textarea_background)
        .css('color', options.textarea_foreground)
        .css('border-color', options.textarea_border)
        .css('width', options.width)
        .css('min-width', options.width)
        .css('min-height', options.height)
        .css('height', options.height);
    answerSpanWidth = jq(this.answerSpan).width();
    this.topElements.wrapper.css('width', parseInt(options.width) + 10)
        .css('min-width', parseInt(options.width) + 10);
    this.topElements.toolbar
        .css('background', options.toolbar_background)
        .css('color', options.toolbar_foreground)
        .css('border-color', options.toolbar_border)
        .css('min-width', options.width)
        .css('width', parseInt(options.width));
    this.topElements.buttons
        .css('background', options.button_background)
        .css('border-color', options.button_border);
};

MathEditor.prototype.setTemplate = function (name) {
    if (name == 'floating-toolbar') {
        editor_id = jq(this.answerSpan).attr('id')
        this.tabEnabled = false;
        this.template = 'floating-toolbar'
        setToolbar(
            this.default_toolbar_buttons,
            this.answerSpan,
            this,
            this.topElements,
            this.default_toolbar_tabs,
            this.tabEnabled
        );
        setCloseButton(this.topElements, this.answerSpan);
        jq(this.answerSpan).css('position', 'absolute');
        this.topElements.toolbar
            .css('position', 'absolute')
            .css('min-width', '315')
            .css('width', jq(this.answerSpan).width())
            .css('z-index', 999999);
        answerSpanHeight = jq(this.answerSpan).height();
        this.topElements.toolbar.css('margin-top', answerSpanHeight + 13).hide();
        this.topElements.buttons.css('margin-right', '5').css('margin-bottom', '5');
        mathed_tmp[editor_id] = this.topElements
        jq(this.answerSpan).focusin(function (o) {
            jq.each(mathed_tmp, function (k, v) {
                v.toolbar.hide();
            });
            mathed_tmp[$(o.currentTarget).attr('id')].toolbar.show();
        });
    } else {
        console.warn("MathEditor: " + name + " is an invalid template name");
    }
};

MathEditor.prototype.noKeyboard = function () {
    editor_id = jq(this.answerSpan).attr('id');
    jq(this.answerSpan).find('textarea').removeAttr('readonly')
    jq('#keys-' + editor_id).remove();
}

setVirtualKeyboard = function (top_elements, answer_span, editor, keyboard_type, count) {
    editor_id = jq(answer_span).attr('id')
    jq('#keys-' + editor_id).remove();
    html = keyboardButtons(keyboard_type, editor_id);
    jq(html).insertAfter(answer_span);
    jq(answer_span).find('textarea').attr('readonly', 'readonly');
    jq(answer_span).focusin(function (o) {
        jq("[id^=keys-]").find('a').css('width', (jq(window).width() / count));
        jq("[id^=keys-]").find('.too_long').css('width', (jq(window).width() / count) * 5);
        jq('#keys-' + jq(this).attr('id')).slideDown();
    });
    jq("[id^=keys-]").find('a').css('width', (jq(window).width() / count));
    jq("[id^=keys-]").find('.too_long').css('width', (jq(window).width() / count) * 5);
    keyboardAction(top_elements, answer_span, editor);
}

keyboardButtons = function (type, editor_id) {
    var html = "<div id='keys-" + editor_id + "'> \
        <div class='keyboard-" + type + "-" + editor_id + "'>";
    keyboard_keys[type].forEach(function (obj) {
        html += "<a data-type='"
            + obj.type
            + "' data-value='"
            + obj.value
            + "' class='"
            + obj.class
            + "'>"
            + obj.display
            + "</a>";
        if (obj.new_line) { html += "<br/>" };
    });
    html += "</div></div>"
    return html;
}

keyboardAction = function (top_elements, answer_span, editor) {
    caps = false;
    editor_id = jq(answer_span).attr('id')
    jq('#keys-' + editor_id).find('a').on('click', function (o) {
        editor_id = jq(this).parent().parent().attr('id').split('-')[1];
        type = jq(this).data('type');
        value = jq(this).data('value');
        var field = editor.activeField; // act on the currently focused line
        if (type == 'keystroke') {
            if (!field) return;
            // Enter is not a MathQuill keystroke; it is delivered as typed "\n",
            // which triggers the per-line `enter` handler (creates a new line).
            if (value == 'Enter') { field.typedText('\n'); } else { field.keystroke(value); }
            field.focus();
        } else if (type == 'write') {
            if (typeof value == 'string') {
                if (caps) { value = value.toUpperCase() } else { value = value.toLowerCase() }
            }
            if (!field) return;
            field.write(value);
            field.focus();
        } else if (type == 'custom') {
            if (value == 'CapsLock') {
                caps = !caps;
                if (caps) {
                    jq(this).css('background', '#bbbbbb');
                    jq(this).css('color', '#428bca');
                    jq('.ks').css('text-transform', 'uppercase')
                } else {
                    jq(this).css('background', '#f5f5f5');
                    jq(this).css('color', '#000000');
                    jq('.ks').css('text-transform', 'lowercase');
                }
                if (field) field.focus();
            } else if (value == 'numpad') {
                jq('.keyboard-letters-' + editor_id).remove();
                setVirtualKeyboard(top_elements, answer_span, editor, "numbers", 5);
                jq('.keyboard-numbers-' + editor_id).parent().show();
            } else if (value == 'letters') {
                jq('.keyboard-numbers-' + editor_id).remove();
                setVirtualKeyboard(top_elements, answer_span, editor, "letters", 10);
                jq('.keyboard-letters-' + editor_id).parent().show();
            } else if (value == 'close') {
                jq(this).parent().parent().slideUp();
            }
        }
    });
}

setCloseButton = function (top_elements, answer_span) {
    editor_id = jq(answer_span).attr('id')
    btnhtml = "<div class='close-btn'><span id='close-btn-" + editor_id + "'>X</span></div>"
    jq(btnhtml).insertBefore(top_elements.wrapper.find('.matheditor-btn-span:first'));
    jq('#close-btn-' + editor_id).on('click', function (e) {
        top_elements.toolbar.hide();
    });
}

setToolbar = function (
    btns, answer_span, editor, top_elements, tabs, tabEnabled, isMobile
) {
    if (answer_span && top_elements.toolbar) {
        jq(answer_span).unwrap();
        top_elements.toolbar.remove();
    }
    required_buttons = getUniq(btns);
    required_tabs = getUniq(tabs);
    editor_id = jq(answer_span).attr('id')
    wrapper_html = "<div class='matheditor-wrapper-" + editor_id + "'></div>";
    html = "<div class='matheditor-toolbar-" + editor_id + "'>";
    if (tabEnabled) {
        html += "<ul class='tabs-" + editor_id + "'>";
        required_tabs.forEach(function (o, idx) {
            if (idx == 0) {
                html += "<li class='tab-link current' data-wrapperid='"
                    + editor_id + "' data-tab='tab-"
                    + (idx + 1).toString() + "-"
                    + editor_id + "'>" + o + "</li>";
            } else {
                html += "<li class='tab-link' data-wrapperid='"
                    + editor_id + "' data-tab='tab-"
                    + (idx + 1).toString() + "-"
                    + editor_id + "'>" + o + "</li>";
            }
        });
        html += "</ul>";
        required_tabs.forEach(function (o, idx) {
            if (idx == 0) {
                html += "<div id='tab-" + (idx + 1).toString()
                    + "-" + editor_id + "' class='tab-content-me current'>";
            } else {
                html += "<div id='tab-" + (idx + 1).toString()
                    + "-" + editor_id + "' class='tab-content-me'>";
            }
            required_buttons.forEach(function (b) {
                if (button_meta[b].tab == idx + 1) {
                    if (button_meta[b]) {
                        html += "<span class='matheditor-btn-span'><i title='"
                            + b.replace(/\w\S*/g, function (txt) {
                                return txt.charAt(0).toUpperCase()
                                    + txt.substr(1).toLowerCase();
                            }).replace('_', ' ')
                            + "' data-latex='" + button_meta[b].latex
                            + "' data-cmd='" + button_meta[b].cmd
                            + "' data-moveto='" + button_meta[b].moveto
                            + "' data-movefor='" + button_meta[b].movefor
                            + "' id='matheditor-btn-"
                            + b + "' class='op-btn'><span id='selectable-"
                            + b + "-" + editor_id + "' class='op-btn-icon'>"
                            + button_meta[b].icon + "</span></i></span>";
                    } else {
                        console.warn("MathEditor: '" + b + "' is an invalid button");
                    }
                }
            });
            html += "</div>"
        });

    } else {
        required_buttons.forEach(function (b) {
            if (button_meta[b]) {
                html += "<span class='matheditor-btn-span'><a title='"
                    + b.replace(/\w\S*/g, function (txt) {
                        return txt.charAt(0).toUpperCase()
                            + txt.substr(1).toLowerCase();
                    }).replace('_', ' ')
                    + "' data-latex='" + button_meta[b].latex
                    + "' data-cmd='" + button_meta[b].cmd
                    + "' data-moveto='" + button_meta[b].moveto
                    + "' data-movefor='" + button_meta[b].movefor
                    + "' id='matheditor-btn-" + b
                    + "' class='op-btn'><span id='selectable-"
                    + b + "-" + editor_id + "' class='op-btn-icon'>"
                    + button_meta[b].icon + "</span></a></span>";
            } else {
                console.warn("MathEditor: '" + b + "' is an invalid button");
            }
        });
    }
    html += "</div>"

    jq(answer_span).wrap(wrapper_html);
    jq(html).insertBefore(answer_span);
    top_elements.wrapper = jq(answer_span.parentElement);
    top_elements.toolbar = jq(answer_span.parentElement.firstChild);
    top_elements.buttons = top_elements.toolbar.find('.op-btn');
    button_task(editor, top_elements);

    MQN = MathQuill.getInterface(2);
    required_buttons.forEach(function (b, idx) {
        if (button_meta[b]) {
            var problemSpan = document.getElementById('selectable-' + b + '-' + editor_id);
            MQN.StaticMath(problemSpan);
        }
    });
    jq('ul.tabs-' + editor_id + ' li').click(function () {
        var tab_id = jq(this).attr('data-tab');
        var wraper_id = jq(this).attr('data-wrapperid');

        jq('ul.tabs-' + wraper_id + ' li').removeClass('current');
        jq('.matheditor-toolbar-' + wraper_id + ' .tab-content-me').removeClass('current');

        jq(this).addClass('current');
        jq("#" + tab_id).addClass('current');
    });
    if (isMobile) {
        setVirtualKeyboard(top_elements, answer_span, editor, 'letters', 10);
    }
    basicStyling(answer_span, top_elements);
};

button_task = function (editor, top_elements) {
    top_elements.buttons.on('click', function (o) {
        var field = editor.activeField; // act on the currently focused line
        if (!field) return;
        var cmdSeq = jq(this).data('cmd');
        if (cmdSeq && cmdSeq !== 'undefined') {
            // Bracket commands (e.g. \langle) must be inserted via cmd(), not write();
            // cmd() leaves the cursor inside the new structure, so no moveto is needed.
            field.cmd(cmdSeq);
        } else {
            latex = jq(this).data('latex');
            field.write(latex);
        }
        field.focus();
        for (var i = 1; i <= jq(this).data('movefor'); i++) {
            field.keystroke(jq(this).data('moveto'));
        }
    });
};

getUniq = function (arr) {
    var uniqueNames = [];
    jq.each(arr, function (i, el) {
        if (jq.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
    });
    return uniqueNames;
};

removeFromArray = function (arr) {
    arr.forEach(function (o) {
        var index = this.default_toolbar_buttons.indexOf(o);
        if (o >= 0)
            this.default_toolbar_buttons.splice(index, 1);
    });
};

basicStyling = function (answer_span, top_elements) {
    jq(answer_span).css('width', '-webkit-fill-available');
    jq(answer_span).css('min-height', 40);
    jq(answer_span).css('padding', 5);
    jq(answer_span).css('background', '#fbfafa');
    jq(answer_span).css('font-size', '15pt');
    answerSpanWidth = jq(answer_span).width();
    top_elements.wrapper.css('width', '100%');
    top_elements.toolbar.css('width', '-webkit-fill-available');
};
