// ===========================================================================
// MathEditor configuration.
//
// Loaded via a plain <script> tag *before* matheditor.js, so the editor works
// even when index.html is opened directly from file:// (no web server needed).
// Edit these four data structures to customize the toolbar and keyboard:
//   button_meta                - definition of every toolbar button
//   keyboard_keys              - on-screen (mobile) keyboard layout
//   ME_DEFAULT_TOOLBAR_BUTTONS - default toolbar button order
//   ME_DEFAULT_TOOLBAR_TABS    - tab names
// ===========================================================================


var button_meta = {
    "fraction": {
        "latex": "\\frac{}{}",
        "moveto": "Up",
        "movefor": 1,
        "tab": 1,
        "icon": "\\frac{\\square}{\\square}"
    },
    "mix_fraction": {
        "latex": "\\frac{}{}",
        "moveto": "Up",
        "movefor": 1,
        "tab": 1,
        "icon": "\\frac{\\square}{\\square}"
    },
    "square_root": {
        "latex": "\\sqrt{}",
        "moveto": "Left",
        "movefor": 1,
        "tab": 1,
        "icon": "\\sqrt{\\square}"
    },
    "cube_root": {
        "latex": "\\sqrt[3]{}",
        "moveto": "Left",
        "movefor": 1,
        "tab": 1,
        "icon": "\\sqrt[3]{\\square}"
    },
    "root": {
        "latex": "\\sqrt[{}]{}",
        "moveto": "Left",
        "movefor": 2,
        "tab": 1,
        "icon": "\\sqrt[\\square]{\\square}"
    },
    "superscript": {
        "latex": "\\^{}",
        "moveto": "Up",
        "movefor": 1,
        "tab": 1,
        "icon": "\\square^\\square"
    },
    "subscript": {
        "latex": "\\_{}",
        "moveto": "Down",
        "movefor": 1,
        "tab": 1,
        "icon": "\\square_{\\square}"
    },
    "multiplication": {
        "latex": "\\times",
        "tab": 1,
        "icon": "\\times"
    },
    "division": {
        "latex": "\\div",
        "tab": 1,
        "icon": "\\div"
    },
    "plus_minus": {
        "latex": "\\pm",
        "tab": 1,
        "icon": "\\pm"
    },
    "plus": {
        "latex": "+",
        "tab": 1,
        "icon": "+"
    },
    "minus": {
        "latex": "-",
        "tab": 1,
        "icon": "-"
    },
    "not_equal": {
        "latex": "\\neq",
        "tab": 1,
        "icon": "\\neq"
    },
    "greater_equal": {
        "latex": "\\geq",
        "tab": 1,
        "icon": "\\geq"
    },
    "less_equal": {
        "latex": "\\leq",
        "tab": 1,
        "icon": "\\leq"
    },
    "greater_than": {
        "latex": "\\gt",
        "tab": 1,
        "icon": "\\gt"
    },
    "less_than": {
        "latex": "\\lt",
        "tab": 1,
        "icon": "\\lt"
    },
    "much_greater_than": {
        "latex": "\\gg",
        "tab": 1,
        "icon": "\\gg"
    },
    "much_less_than": {
        "latex": "\\ll",
        "tab": 1,
        "icon": "\\ll"
    },
    "round_brackets": {
        "latex": "\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 1,
        "icon": "\\left(\\square\\right)"
    },
    "curly_brackets": {
        "latex": "\\left\\{\\right\\}",
        "moveto": "Left",
        "movefor": 1,
        "tab": 1,
        "icon": "\\left\\{\\square\\right\\}"
    },
    "absolute_value": {
        "latex": "\\left|\\right|",
        "moveto": "Left",
        "movefor": 1,
        "tab": 1,
        "icon": "\\left|\\square\\right|"
    },
    "angle_brackets": {
        "cmd": "\\langle",
        "tab": 1,
        "icon": "\u27e8\\square\u27e9"
    },
    "floor_brackets": {
        "latex": "\\lfloor\\rfloor",
        "moveto": "Left",
        "movefor": 1,
        "tab": 1,
        "icon": "\\lfloor\\square\\rfloor"
    },
    "ceil_brackets": {
        "latex": "\\lceil\\rceil",
        "moveto": "Left",
        "movefor": 1,
        "tab": 1,
        "icon": "\\lceil\\square\\rceil"
    },
    "pi": {
        "latex": "\\pi",
        "tab": 2,
        "icon": "\\pi"
    },
    "degree": {
        "latex": "\\degree",
        "tab": 2,
        "icon": "\\degree"
    },
    "proportional_to": {
        "latex": "\\propto",
        "tab": 2,
        "icon": "\\propto"
    },
    "infinity": {
        "latex": "\\infty",
        "tab": 2,
        "icon": "\\infty"
    },
    "alpha": {
        "latex": "\\alpha",
        "tab": 2,
        "icon": "\\alpha"
    },
    "beta": {
        "latex": "\\beta",
        "tab": 2,
        "icon": "\\beta"
    },
    "gamma": {
        "latex": "\\gamma",
        "tab": 2,
        "icon": "\\gamma"
    },
    "theta": {
        "latex": "\\theta",
        "tab": 2,
        "icon": "\\theta"
    },
    "Delta": {
        "latex": "\\Delta",
        "tab": 2,
        "icon": "\\Delta"
    },
    "sigma": {
        "latex": "\\sigma",
        "tab": 2,
        "icon": "\\sigma"
    },
    "lambda": {
        "latex": "\\lambda",
        "tab": 2,
        "icon": "\\lambda"
    },
    "mu": {
        "latex": "\\mu",
        "tab": 2,
        "icon": "\\mu"
    },
    "nu": {
        "latex": "\\nu",
        "tab": 2,
        "icon": "\\nu"
    },
    "xi": {
        "latex": "\\xi",
        "tab": 2,
        "icon": "\\xi"
    },
    "rho": {
        "latex": "\\rho",
        "tab": 2,
        "icon": "\\rho"
    },
    "phi": {
        "latex": "\\phi",
        "tab": 2,
        "icon": "\\phi"
    },
    "psi": {
        "latex": "\\psi",
        "tab": 2,
        "icon": "\\psi"
    },
    "omega": {
        "latex": "\\omega",
        "tab": 2,
        "icon": "\\omega"
    },
    "Omega": {
        "latex": "\\Omega",
        "tab": 2,
        "icon": "\\Omega"
    },
    "epsilon": {
        "latex": "\\epsilon",
        "tab": 2,
        "icon": "\\epsilon"
    },
    "zeta": {
        "latex": "\\zeta",
        "tab": 2,
        "icon": "\\zeta"
    },
    "eta": {
        "latex": "\\eta",
        "tab": 2,
        "icon": "\\eta"
    },
    "kappa": {
        "latex": "\\kappa",
        "tab": 2,
        "icon": "\\kappa"
    },
    "chi": {
        "latex": "\\chi",
        "tab": 2,
        "icon": "\\chi"
    },
    "Sigma": {
        "latex": "\\Sigma",
        "tab": 2,
        "icon": "\\Sigma"
    },
    "Pi": {
        "latex": "\\Pi",
        "tab": 2,
        "icon": "\\Pi"
    },
    "Gamma": {
        "latex": "\\Gamma",
        "tab": 2,
        "icon": "\\Gamma"
    },
    "Lambda": {
        "latex": "\\Lambda",
        "tab": 2,
        "icon": "\\Lambda"
    },
    "Phi": {
        "latex": "\\Phi",
        "tab": 2,
        "icon": "\\Phi"
    },
    "angle": {
        "latex": "\\angle",
        "tab": 3,
        "icon": "\\angle"
    },
    "parallel_to": {
        "latex": "\\parallel",
        "tab": 3,
        "icon": "\\parallel"
    },
    "perpendicular": {
        "latex": "\\perpendicular",
        "tab": 3,
        "icon": "\\perpendicular"
    },
    "triangle": {
        "latex": "\\triangle",
        "tab": 3,
        "icon": "\\triangle"
    },
    "parallelogram": {
        "latex": "\\parallelogram",
        "tab": 3,
        "icon": "\\parallelogram"
    },
    "square": {
        "latex": "\\square",
        "tab": 3,
        "icon": "\\square"
    },
    "sum": {
        "latex": "\\sum_{n={}}^{}",
        "moveto": "Left",
        "movefor": 1,
        "tab": 4,
        "icon": "\\sum_{\\square}^{\\square}\\square"
    },
    "sum_limits": {
        "latex": "\\sum_{}^{}",
        "moveto": "Left",
        "movefor": 2,
        "tab": 4,
        "icon": "\\sum_{\\square}^{\\square}"
    },
    "product": {
        "latex": "\\prod_{n={}}^{}",
        "moveto": "Left",
        "movefor": 1,
        "tab": 4,
        "icon": "\\prod_{\\square}^{\\square}\\square"
    },
    "product_limits": {
        "latex": "\\prod_{}^{}",
        "moveto": "Left",
        "movefor": 2,
        "tab": 4,
        "icon": "\\prod_{\\square}^{\\square}"
    },
    "mean": {
        "latex": "\\bar{}",
        "moveto": "Left",
        "movefor": 1,
        "tab": 4,
        "icon": "\\bar{\\square}"
    },
    "probability": {
        "latex": "P\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 4,
        "icon": "P(\\square)"
    },
    "log": {
        "latex": "\\log\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 4,
        "icon": "\\log\\left(\\square\\right)"
    },
    "ln": {
        "latex": "\\ln",
        "tab": 4,
        "icon": "\\ln"
    },
    "derivative": {
        "latex": "\\frac{d}{dx}",
        "tab": 4,
        "icon": "\\frac{d}{dx}"
    },
    "integral": {
        "latex": "\\int",
        "tab": 4,
        "icon": "\\int"
    },
    "definite_integral": {
        "latex": "\\int_{}^{}",
        "moveto": "Left",
        "movefor": 2,
        "tab": 4,
        "icon": "\\int_{\\square}^{\\square}"
    },
    "partial_derivative": {
        "latex": "\\frac{\\partial}{\\partial x}",
        "tab": 4,
        "icon": "\\frac{\\partial}{\\partial x}"
    },
    "nabla": {
        "latex": "\\nabla",
        "tab": 4,
        "icon": "\\nabla"
    },
    "laplacian": {
        "latex": "\\nabla^2",
        "tab": 4,
        "icon": "\\nabla^2"
    },
    "limit": {
        "latex": "\\lim_{{} \\to {}}",
        "moveto": "Left",
        "movefor": 2,
        "tab": 4,
        "icon": "\\lim_{x\\to\\square}"
    },
    "log_n": {
        "latex": "\\log_{ }\\left(\\right)",
        "moveto": "Left",
        "movefor": 3,
        "tab": 4,
        "icon": "\\log_{\\square}\\left(\\square\\right)"
    },
    "sin": {
        "latex": "\\sin\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\sin\\left(\\square\\right)"
    },
    "cos": {
        "latex": "\\cos\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\cos\\left(\\square\\right)"
    },
    "tan": {
        "latex": "\\tan\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\tan\\left(\\square\\right)"
    },
    "cot": {
        "latex": "\\cot\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\cot\\left(\\square\\right)"
    },
    "sec": {
        "latex": "\\sec\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\sec\\left(\\square\\right)"
    },
    "csc": {
        "latex": "\\csc\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\csc\\left(\\square\\right)"
    },
    "sin^-1": {
        "latex": "\\sin^{-1}\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\sin^{-1}\\left(\\square\\right)"
    },
    "cos^-1": {
        "latex": "\\cos^{-1}\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\cos^{-1}\\left(\\square\\right)"
    },
    "tan^-1": {
        "latex": "\\tan^{-1}\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\tan^{-1}\\left(\\square\\right)"
    },
    "cot^-1": {
        "latex": "\\cot^{-1}\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\cot^{-1}\\left(\\square\\right)"
    },
    "sec^-1": {
        "latex": "\\sec^{-1}\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\sec^{-1}\\left(\\square\\right)"
    },
    "csc^-1": {
        "latex": "\\csc^{-1}\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\csc^{-1}\\left(\\square\\right)"
    },
    "sin^2": {
        "latex": "\\sin^2\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\sin^2\\left(\\square\\right)"
    },
    "cos^2": {
        "latex": "\\cos^2\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\cos^2\\left(\\square\\right)"
    },
    "tan^2": {
        "latex": "\\tan^2\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\tan^2\\left(\\square\\right)"
    },
    "cot^2": {
        "latex": "\\cot^2\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\cot^2\\left(\\square\\right)"
    },
    "sec^2": {
        "latex": "\\sec^2\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\sec^2\\left(\\square\\right)"
    },
    "csc^2": {
        "latex": "\\csc^2\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\csc^2\\left(\\square\\right)"
    },
    "sin^x": {
        "latex": "\\sin^{}\\left(\\right)",
        "moveto": "Left",
        "movefor": 3,
        "tab": 5,
        "icon": "\\sin^\\square\\left(\\square\\right)"
    },
    "cos^x": {
        "latex": "\\cos^{}\\left(\\right)",
        "moveto": "Left",
        "movefor": 3,
        "tab": 5,
        "icon": "\\cos^\\square\\left(\\square\\right)"
    },
    "tan^x": {
        "latex": "\\tan^{}\\left(\\right)",
        "moveto": "Left",
        "movefor": 3,
        "tab": 5,
        "icon": "\\tan^\\square\\left(\\square\\right)"
    },
    "cot^x": {
        "latex": "\\cot^{}\\left(\\right)",
        "moveto": "Left",
        "movefor": 3,
        "tab": 5,
        "icon": "\\cot^\\square\\left(\\square\\right)"
    },
    "sec^x": {
        "latex": "\\sec^{}\\left(\\right)",
        "moveto": "Left",
        "movefor": 3,
        "tab": 5,
        "icon": "\\sec^\\square\\left(\\square\\right)"
    },
    "csc^x": {
        "latex": "\\csc^{}\\left(\\right)",
        "moveto": "Left",
        "movefor": 3,
        "tab": 5,
        "icon": "\\csc^\\square\\left(\\square\\right)"
    },
    "sinh": {
        "latex": "\\sinh\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\sinh\\left(\\square\\right)"
    },
    "cosh": {
        "latex": "\\cosh\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\cosh\\left(\\square\\right)"
    },
    "tanh": {
        "latex": "\\tanh\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\tanh\\left(\\square\\right)"
    },
    "coth": {
        "latex": "\\coth\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\coth\\left(\\square\\right)"
    },
    "sech": {
        "latex": "\\sech\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\sech\\left(\\square\\right)"
    },
    "csch": {
        "latex": "\\csch\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\csch\\left(\\square\\right)"
    },
    "sinh^-1": {
        "latex": "\\sinh^{-1}\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\sinh^{-1}\\left(\\square\\right)"
    },
    "cosh^-1": {
        "latex": "\\cosh^{-1}\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\cosh^{-1}\\left(\\square\\right)"
    },
    "tanh^-1": {
        "latex": "\\tanh^{-1}\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\tanh^{-1}\\left(\\square\\right)"
    },
    "coth^-1": {
        "latex": "\\coth^{-1}\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\coth^{-1}\\left(\\square\\right)"
    },
    "sech^-1": {
        "latex": "\\sech^{-1}\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\sech^{-1}\\left(\\square\\right)"
    },
    "csch^-1": {
        "latex": "\\csch^{-1}\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\csch^{-1}\\left(\\square\\right)"
    },
    "sinh^2": {
        "latex": "\\sinh^2\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\sinh^2\\left(\\square\\right)"
    },
    "cosh^2": {
        "latex": "\\cosh^2\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\cosh^2\\left(\\square\\right)"
    },
    "tanh^2": {
        "latex": "\\tanh^2\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\tanh^2\\left(\\square\\right)"
    },
    "coth^2": {
        "latex": "\\coth^2\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\coth^2\\left(\\square\\right)"
    },
    "sech^2": {
        "latex": "\\sech^2\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\sech^2\\left(\\square\\right)"
    },
    "csch^2": {
        "latex": "\\csch^2\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 5,
        "icon": "\\csch^2\\left(\\square\\right)"
    },
    "sinh^x": {
        "latex": "\\sinh^{}\\left(\\right)",
        "moveto": "Left",
        "movefor": 3,
        "tab": 5,
        "icon": "\\sinh^\\square\\left(\\square\\right)"
    },
    "cosh^x": {
        "latex": "\\cosh^{}\\left(\\right)",
        "moveto": "Left",
        "movefor": 3,
        "tab": 5,
        "icon": "\\cosh^\\square\\left(\\square\\right)"
    },
    "tanh^x": {
        "latex": "\\tanh^{}\\left(\\right)",
        "moveto": "Left",
        "movefor": 3,
        "tab": 5,
        "icon": "\\tanh^\\square\\left(\\square\\right)"
    },
    "coth^x": {
        "latex": "\\coth^{}\\left(\\right)",
        "moveto": "Left",
        "movefor": 3,
        "tab": 5,
        "icon": "\\coth^\\square\\left(\\square\\right)"
    },
    "sech^x": {
        "latex": "\\sech^{}\\left(\\right)",
        "moveto": "Left",
        "movefor": 3,
        "tab": 5,
        "icon": "\\sech^\\square\\left(\\square\\right)"
    },
    "csch^x": {
        "latex": "\\csch^{}\\left(\\right)",
        "moveto": "Left",
        "movefor": 3,
        "tab": 5,
        "icon": "\\csch^\\square\\left(\\square\\right)"
    },
    "element_of": {
        "latex": "\\in",
        "tab": 6,
        "icon": "\\in"
    },
    "not_element_of": {
        "latex": "\\notin",
        "tab": 6,
        "icon": "\\notin"
    },
    "subset": {
        "latex": "\\subset",
        "tab": 6,
        "icon": "\\subset"
    },
    "subset_eq": {
        "latex": "\\subseteq",
        "tab": 6,
        "icon": "\\subseteq"
    },
    "superset": {
        "latex": "\\supset",
        "tab": 6,
        "icon": "\\supset"
    },
    "superset_eq": {
        "latex": "\\supseteq",
        "tab": 6,
        "icon": "\\supseteq"
    },
    "union": {
        "latex": "\\cup",
        "tab": 6,
        "icon": "\\cup"
    },
    "intersection": {
        "latex": "\\cap",
        "tab": 6,
        "icon": "\\cap"
    },
    "emptyset": {
        "latex": "\\emptyset",
        "tab": 6,
        "icon": "\\emptyset"
    },
    "complement": {
        "latex": "\\prime",
        "tab": 6,
        "icon": "\\square'"
    },
    "set_difference": {
        "latex": "\\setminus",
        "tab": 6,
        "icon": "\\setminus"
    },
    "cartesian_product": {
        "latex": "\\times",
        "tab": 6,
        "icon": "A\\times B"
    },
    "natural_numbers": {
        "latex": "\\N",
        "tab": 6,
        "icon": "\\N"
    },
    "integers": {
        "latex": "\\Z",
        "tab": 6,
        "icon": "\\Z"
    },
    "rationals": {
        "latex": "\\Q",
        "tab": 6,
        "icon": "\\Q"
    },
    "reals": {
        "latex": "\\R",
        "tab": 6,
        "icon": "\\R"
    },
    "complex_numbers": {
        "latex": "\\C",
        "tab": 6,
        "icon": "\\C"
    },
    "leftarrow": {
        "latex": "\\leftarrow",
        "tab": 7,
        "icon": "\\leftarrow"
    },
    "rightarrow": {
        "latex": "\\rightarrow",
        "tab": 7,
        "icon": "\\rightarrow"
    },
    "leftrightarrow": {
        "latex": "\\leftrightarrow",
        "tab": 7,
        "icon": "\\leftrightarrow"
    },
    "uparrow": {
        "latex": "\\uparrow",
        "tab": 7,
        "icon": "\\uparrow"
    },
    "downarrow": {
        "latex": "\\downarrow",
        "tab": 7,
        "icon": "\\downarrow"
    },
    "updownarrow": {
        "latex": "\\updownarrow",
        "tab": 7,
        "icon": "\\updownarrow"
    },
    "factorial": {
        "latex": "{}!",
        "moveto": "Left",
        "movefor": 1,
        "tab": 8,
        "icon": "\\square!"
    },
    "combination": {
        "latex": "\\binom{}{}",
        "moveto": "Up",
        "movefor": 1,
        "tab": 8,
        "icon": "\\binom{n}{r}"
    },
    "permutation": {
        "latex": "{\\left(\\right)}P{\\left(\\right)}",
        "moveto": "Left",
        "movefor": 1,
        "tab": 8,
        "icon": "{n}P{r}"
    },
    "expected_value": {
        "latex": "E\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 8,
        "icon": "E(\\square)"
    },
    "variance": {
        "latex": "Var\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 8,
        "icon": "Var(\\square)"
    },
    "std_dev": {
        "latex": "\\sqrt{Var\\left(\\right)}",
        "moveto": "Left",
        "movefor": 1,
        "tab": 8,
        "icon": "\\sigma(\\square)"
    },
    "approx": {
        "latex": "\\approx",
        "tab": 8,
        "icon": "\\approx"
    },
    "logical_and": {
        "latex": "\\wedge",
        "tab": 9,
        "icon": "\\wedge"
    },
    "logical_or": {
        "latex": "\\vee",
        "tab": 9,
        "icon": "\\vee"
    },
    "logical_not": {
        "latex": "\\neg",
        "tab": 9,
        "icon": "\\neg"
    },
    "logical_implies": {
        "latex": "\\Rightarrow",
        "tab": 9,
        "icon": "\\Rightarrow"
    },
    "logical_iff": {
        "latex": "\\Leftrightarrow",
        "tab": 9,
        "icon": "\\Leftrightarrow"
    },
    "logical_forall": {
        "latex": "\\forall",
        "tab": 9,
        "icon": "\\forall"
    },
    "logical_exists": {
        "latex": "\\exists",
        "tab": 9,
        "icon": "\\exists"
    },
    "logical_therefore": {
        "latex": "\\therefore",
        "tab": 9,
        "icon": "\\therefore"
    },
    "logical_because": {
        "latex": "\\because",
        "tab": 9,
        "icon": "\\because"
    },
    "logical_xor": {
        "latex": "\\oplus",
        "tab": 9,
        "icon": "\\oplus"
    },
    "divides": {
        "latex": "\\mid",
        "tab": 9,
        "icon": "\\mid"
    },
    "modulo": {
        "latex": "\\ \\mathrm{mod}\\ ",
        "tab": 9,
        "icon": "\\mathrm{mod}"
    },
    "gcd": {
        "latex": "\\gcd(,)",
        "moveto": "Left",
        "movefor": 2,
        "tab": 9,
        "icon": "\\gcd(\\square,\\square)"
    },
    "lcm": {
        "latex": "\\lcm(,)",
        "moveto": "Left",
        "movefor": 2,
        "tab": 9,
        "icon": "\\lcm(\\square,\\square)"
    },
    "determinant": {
        "latex": "\\det\\left(\\right)",
        "moveto": "Left",
        "movefor": 1,
        "tab": 10,
        "icon": "\\det(\\square)"
    },
    "transpose": {
        "latex": "{}^{T}",
        "moveto": "Left",
        "movefor": 1,
        "tab": 10,
        "icon": "\\square^T"
    },
    "inverse": {
        "latex": "{}^{-1}",
        "moveto": "Left",
        "movefor": 1,
        "tab": 10,
        "icon": "\\square^{-1}"
    }
};

var keyboard_keys = {
    "letters": [
        {
            "value": "q",
            "type": "write",
            "class": "ks",
            "display": "q",
            "new_line": false
        },
        {
            "value": "w",
            "type": "write",
            "class": "ks",
            "display": "w",
            "new_line": false
        },
        {
            "value": "e",
            "type": "write",
            "class": "ks",
            "display": "e",
            "new_line": false
        },
        {
            "value": "r",
            "type": "write",
            "class": "ks",
            "display": "r",
            "new_line": false
        },
        {
            "value": "t",
            "type": "write",
            "class": "ks",
            "display": "t",
            "new_line": false
        },
        {
            "value": "y",
            "type": "write",
            "class": "ks",
            "display": "y",
            "new_line": false
        },
        {
            "value": "u",
            "type": "write",
            "class": "ks",
            "display": "u",
            "new_line": false
        },
        {
            "value": "i",
            "type": "write",
            "class": "ks",
            "display": "i",
            "new_line": false
        },
        {
            "value": "o",
            "type": "write",
            "class": "ks",
            "display": "o",
            "new_line": false
        },
        {
            "value": "p",
            "type": "write",
            "class": "ks",
            "display": "p",
            "new_line": true
        },
        {
            "value": "a",
            "type": "write",
            "class": "ks",
            "display": "a",
            "new_line": false
        },
        {
            "value": "s",
            "type": "write",
            "class": "ks",
            "display": "s",
            "new_line": false
        },
        {
            "value": "d",
            "type": "write",
            "class": "ks",
            "display": "d",
            "new_line": false
        },
        {
            "value": "f",
            "type": "write",
            "class": "ks",
            "display": "f",
            "new_line": false
        },
        {
            "value": "g",
            "type": "write",
            "class": "ks",
            "display": "g",
            "new_line": false
        },
        {
            "value": "h",
            "type": "write",
            "class": "ks",
            "display": "h",
            "new_line": false
        },
        {
            "value": "j",
            "type": "write",
            "class": "ks",
            "display": "j",
            "new_line": false
        },
        {
            "value": "k",
            "type": "write",
            "class": "ks",
            "display": "k",
            "new_line": false
        },
        {
            "value": "l",
            "type": "write",
            "class": "ks",
            "display": "l",
            "new_line": true
        },
        {
            "value": "CapsLock",
            "type": "custom",
            "class": "ks long icon",
            "display": "&#8673;",
            "new_line": false
        },
        {
            "value": "z",
            "type": "write",
            "class": "ks",
            "display": "z",
            "new_line": false
        },
        {
            "value": "x",
            "type": "write",
            "class": "ks",
            "display": "x",
            "new_line": false
        },
        {
            "value": "c",
            "type": "write",
            "class": "ks",
            "display": "c",
            "new_line": false
        },
        {
            "value": "v",
            "type": "write",
            "class": "ks",
            "display": "v",
            "new_line": false
        },
        {
            "value": "b",
            "type": "write",
            "class": "ks",
            "display": "b",
            "new_line": false
        },
        {
            "value": "n",
            "type": "write",
            "class": "ks",
            "display": "n",
            "new_line": false
        },
        {
            "value": "m",
            "type": "write",
            "class": "ks",
            "display": "m",
            "new_line": false
        },
        {
            "value": "Backspace",
            "type": "keystroke",
            "class": "ks long icon",
            "display": "&#8678;",
            "new_line": false
        },
        {
            "value": "Enter",
            "type": "keystroke",
            "class": "ks long icon",
            "display": "&#9166;",
            "new_line": true
        },
        {
            "value": "numpad",
            "type": "custom",
            "class": "ks long",
            "display": "123",
            "new_line": false
        },
        {
            "value": ",",
            "type": "write",
            "class": "ks",
            "display": ",",
            "new_line": false
        },
        {
            "value": "\\ ",
            "type": "write",
            "class": "ks too_long",
            "display": "Space",
            "new_line": false
        },
        {
            "value": ".",
            "type": "write",
            "class": "ks",
            "display": ".",
            "new_line": false
        },
        {
            "value": "close",
            "type": "custom",
            "class": "ks long takeup",
            "display": "X",
            "new_line": false
        }
    ],
    "numbers": [
        {
            "value": "1",
            "type": "write",
            "class": "ks",
            "display": "1",
            "new_line": false
        },
        {
            "value": "2",
            "type": "write",
            "class": "ks",
            "display": "2",
            "new_line": false
        },
        {
            "value": "3",
            "type": "write",
            "class": "ks",
            "display": "3",
            "new_line": false
        },
        {
            "value": "+",
            "type": "write",
            "class": "ks",
            "display": "+",
            "new_line": false
        },
        {
            "value": "-",
            "type": "write",
            "class": "ks",
            "display": "-",
            "new_line": true
        },
        {
            "value": "4",
            "type": "write",
            "class": "ks",
            "display": "4",
            "new_line": false
        },
        {
            "value": "5",
            "type": "write",
            "class": "ks",
            "display": "5",
            "new_line": false
        },
        {
            "value": "6",
            "type": "write",
            "class": "ks",
            "display": "6",
            "new_line": false
        },
        {
            "value": "\\times",
            "type": "write",
            "class": "ks",
            "display": "&times;",
            "new_line": false
        },
        {
            "value": "/",
            "type": "write",
            "class": "ks",
            "display": "&#247;",
            "new_line": true
        },
        {
            "value": "7",
            "type": "write",
            "class": "ks",
            "display": "7",
            "new_line": false
        },
        {
            "value": "8",
            "type": "write",
            "class": "ks",
            "display": "8",
            "new_line": false
        },
        {
            "value": "9",
            "type": "write",
            "class": "ks",
            "display": "9",
            "new_line": false
        },
        {
            "value": "=",
            "type": "write",
            "class": "ks",
            "display": "=",
            "new_line": false
        },
        {
            "value": "Backspace",
            "type": "keystroke",
            "class": "ks long icon",
            "display": "&#8678;",
            "new_line": false
        },
        {
            "value": "Enter",
            "type": "keystroke",
            "class": "ks long icon",
            "display": "&#9166;",
            "new_line": true
        },
        {
            "value": "letters",
            "type": "custom",
            "class": "ks long",
            "display": "ABC",
            "new_line": false
        },
        {
            "value": "0",
            "type": "write",
            "class": "ks",
            "display": "0",
            "new_line": false
        },
        {
            "value": "?",
            "type": "write",
            "class": "ks",
            "display": "?",
            "new_line": false
        },
        {
            "value": "%",
            "type": "write",
            "class": "ks",
            "display": "%",
            "new_line": false
        },
        {
            "value": "close",
            "type": "custom",
            "class": "ks long takeup",
            "display": "X",
            "new_line": false
        }
    ]
};

var ME_DEFAULT_TOOLBAR_BUTTONS = [
    "plus",
    "minus",
    "multiplication",
    "division",
    "plus_minus",
    "not_equal",
    "greater_than",
    "less_than",
    "greater_equal",
    "less_equal",
    "much_greater_than",
    "much_less_than",
    "pi",
    "degree",
    "fraction",
    "superscript",
    "subscript",
    "square_root",
    "cube_root",
    "root",
    "proportional_to",
    "angle",
    "triangle",
    "parallel_to",
    "perpendicular",
    "parallelogram",
    "square",
    "alpha",
    "beta",
    "gamma",
    "theta",
    "Delta",
    "infinity",
    "lambda",
    "mu",
    "nu",
    "xi",
    "rho",
    "phi",
    "psi",
    "omega",
    "Omega",
    "epsilon",
    "zeta",
    "eta",
    "kappa",
    "chi",
    "Sigma",
    "Pi",
    "Gamma",
    "Lambda",
    "Phi",
    "element_of",
    "not_element_of",
    "subset",
    "subset_eq",
    "superset",
    "superset_eq",
    "union",
    "intersection",
    "emptyset",
    "complement",
    "set_difference",
    "cartesian_product",
    "natural_numbers",
    "integers",
    "rationals",
    "reals",
    "complex_numbers",
    "sum",
    "sigma",
    "mean",
    "probability",
    "factorial",
    "combination",
    "permutation",
    "expected_value",
    "variance",
    "std_dev",
    "approx",
    "log",
    "log_n",
    "ln",
    "derivative",
    "integral",
    "limit",
    "definite_integral",
    "partial_derivative",
    "nabla",
    "laplacian",
    "sum_limits",
    "product",
    "product_limits",
    "round_brackets",
    "curly_brackets",
    "absolute_value",
    "angle_brackets",
    "floor_brackets",
    "ceil_brackets",
    "sin",
    "cos",
    "tan",
    "cot",
    "sec",
    "csc",
    "sin^-1",
    "cos^-1",
    "tan^-1",
    "cot^-1",
    "sec^-1",
    "csc^-1",
    "sin^2",
    "cos^2",
    "tan^2",
    "cot^2",
    "sec^2",
    "csc^2",
    "sin^x",
    "cos^x",
    "tan^x",
    "cot^x",
    "sec^x",
    "csc^x",
    "sinh",
    "cosh",
    "tanh",
    "coth",
    "sech",
    "csch",
    "sinh^-1",
    "cosh^-1",
    "tanh^-1",
    "coth^-1",
    "sech^-1",
    "csch^-1",
    "sinh^2",
    "cosh^2",
    "tanh^2",
    "coth^2",
    "sech^2",
    "csch^2",
    "sinh^x",
    "cosh^x",
    "tanh^x",
    "coth^x",
    "sech^x",
    "csch^x",
    "logical_and",
    "logical_or",
    "logical_not",
    "logical_implies",
    "logical_iff",
    "logical_forall",
    "logical_exists",
    "logical_therefore",
    "logical_because",
    "logical_xor",
    "determinant",
    "transpose",
    "inverse",
    "divides",
    "modulo",
    "gcd",
    "lcm",
    "leftarrow",
    "rightarrow",
    "leftrightarrow",
    "uparrow",
    "downarrow",
    "updownarrow"
];

var ME_DEFAULT_TOOLBAR_TABS = [
    "General",
    "Symbols",
    "Geometry",
    "Calculus",
    "Trigonometry",
    "Set Theory",
    "Chemistry",
    "Statistics",
    "Logic",
    "Matrices"
];
