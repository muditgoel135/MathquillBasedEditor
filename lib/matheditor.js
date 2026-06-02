function MathEditor(id) {
    this.isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) { this.isMobile = true; }
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

    this.default_toolbar_buttons = [
        // Algebra & arithmetic
        'plus', 'minus', 'multiplication', 'division', 'plus_minus',
        'not_equal', 'greater_than', 'less_than', 'greater_equal', 'less_equal',
        'much_greater_than', 'much_less_than',
        'pi', 'degree', 'fraction', 'superscript', 'subscript', 'square_root',
        'cube_root', 'root', 'proportional_to',

        // Geometry
        'angle', 'triangle', 'parallel_to', 'perpendicular', 'parallelogram', 'square',

        // Symbols
        'alpha', 'beta', 'gamma', 'theta', 'Delta', 'infinity',
        'lambda', 'mu', 'nu', 'xi', 'rho', 'phi', 'psi', 'omega', 'Omega',
        'epsilon', 'zeta', 'eta', 'kappa', 'chi', 'Sigma', 'Pi', 'Gamma', 'Lambda', 'Phi',

        // Set theory
        'element_of', 'not_element_of', 'subset', 'subset_eq', 'superset',
        'superset_eq', 'union', 'intersection', 'emptyset',
        'complement', 'set_difference', 'cartesian_product',
        'natural_numbers', 'integers', 'rationals', 'reals', 'complex_numbers',

        // Statistics & probability
        'sum', 'sigma', 'mean', 'probability',
        'factorial', 'combination', 'permutation',
        'expected_value', 'variance', 'std_dev',
        'approx', 'floor', 'ceil',

        // Functions & calculus
        'log', 'log_n', 'ln', 'derivative', 'integral', 'limit',
        'definite_integral', 'partial_derivative',
        'nabla', 'laplacian',
        'sum_limits', 'product', 'product_limits',

        // Brackets
        'round_brackets', 'curly_brackets', 'absolute_value',
        'floor_brackets', 'ceil_brackets',

        // Trigonometry
        'sin', 'cos', 'tan',
        'cot', 'sec', 'csc',
        'sin^-1', 'cos^-1', 'tan^-1',
        'cot^-1', 'sec^-1', 'csc^-1',
        'sin^2', 'cos^2', 'tan^2',
        'cot^2', 'sec^2', 'csc^2',
        'sin^x', 'cos^x', 'tan^x',
        'cot^x', 'sec^x', 'csc^x',
        'sinh', 'cosh', 'tanh',
        'coth', 'sech', 'csch',
        'sinh^-1', 'cosh^-1', 'tanh^-1',
        'coth^-1', 'sech^-1', 'csch^-1',
        'sinh^2', 'cosh^2', 'tanh^2',
        'coth^2', 'sech^2', 'csch^2',
        'sinh^x', 'cosh^x', 'tanh^x',
        'coth^x', 'sech^x', 'csch^x',

        // Logic
        'logical_and', 'logical_or', 'logical_not', 'logical_implies',
        'logical_iff', 'logical_forall', 'logical_exists',
        'logical_therefore', 'logical_because',
        'logical_xor',

        // Matrices
        'determinant', 'transpose', 'inverse',

        // Number theory
        'divides', 'modulo', 'gcd', 'lcm',

        // Chemistry
        'leftarrow', 'rightarrow', 'leftrightarrow', 'uparrow', 'downarrow', 'updownarrow',
    ];

    this.default_toolbar_tabs = [
        "General",
        "Symbols",
        "Geometry",
        "Calculus",
        "Trigonometry",
        "Set Theory",
        "Chemistry",
        "Statistics",
        "Logic",
        "Matrices",
    ];

    button_meta = {
        // ── TAB 1: General ──────────────────────────────────────────
        "fraction": {
            latex: "\\frac{}{}",
            moveto: "Up", movefor: 1, tab: 1,
            icon: '\\frac{\\square}{\\square}'
        },
        "mix_fraction": {
            latex: "\\frac{}{}",
            moveto: "Up", movefor: 1, tab: 1,
            icon: '\\frac{\\square}{\\square}'
        },
        "square_root": {
            latex: "\\sqrt{}",
            moveto: "Left", movefor: 1, tab: 1,
            icon: '\\sqrt{\\square}'
        },
        "cube_root": {
            latex: "\\sqrt[3]{}",
            moveto: "Left", movefor: 1, tab: 1,
            icon: '\\sqrt[3]{\\square}'
        },
        "root": {
            latex: "\\sqrt[{}]{}",
            moveto: "Left", movefor: 2, tab: 1,
            icon: '\\sqrt[\\square]{\\square}'
        },
        "superscript": {
            latex: "\\^{}",
            moveto: "Up", movefor: 1, tab: 1,
            icon: '\\square^\\square'
        },
        "subscript": {
            latex: "\\_{}",
            moveto: "Down", movefor: 1, tab: 1,
            icon: '\\square_{\\square}'
        },
        "multiplication": { latex: "\\times", tab: 1, icon: '\\times' },
        "division": { latex: "\\div", tab: 1, icon: '\\div' },
        "plus_minus": { latex: "\\pm", tab: 1, icon: '\\pm' },
        "plus": { latex: "+", tab: 1, icon: '+' },
        "minus": { latex: "-", tab: 1, icon: '-' },
        "not_equal": { latex: "\\neq", tab: 1, icon: '\\neq' },
        "greater_equal": { latex: "\\geq", tab: 1, icon: '\\geq' },
        "less_equal": { latex: "\\leq", tab: 1, icon: '\\leq' },
        "greater_than": { latex: "\\gt", tab: 1, icon: '\\gt' },
        "less_than": { latex: "\\lt", tab: 1, icon: '\\lt' },
        "much_greater_than": { latex: "\\gg", tab: 1, icon: '\\gg' },
        "much_less_than": { latex: "\\ll", tab: 1, icon: '\\ll' },
        "round_brackets": {
            latex: "\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 1,
            icon: '\\left(\\square\\right)'
        },
        "curly_brackets": {
            latex: "\\left\\{\\right\\}",
            moveto: "Left", movefor: 1, tab: 1,
            icon: '\\left\\{\\square\\right\\}'
        },
        "absolute_value": {
            latex: "\\left|\\right|",
            moveto: "Left", movefor: 1, tab: 1,
            icon: '\\left|\\square\\right|'
        },
        "floor_brackets": {
            latex: "\\lfloor{}\\rfloor",
            moveto: "Left", movefor: 1, tab: 1,
            icon: '\\lfloor\\square\\rfloor'
        },
        "ceil_brackets": {
            latex: "\\left\\lceil\\right\\rceil",
            moveto: "Left", movefor: 1, tab: 1,
            icon: '\\lceil\\square\\rceil'
        },

        // ── TAB 2: Symbols ──────────────────────────────────────────
        "pi": { latex: "\\pi", tab: 2, icon: '\\pi' },
        "degree": { latex: "\\degree", tab: 2, icon: '\\degree' },
        "proportional_to": { latex: "\\propto", tab: 2, icon: '\\propto' },
        "infinity": { latex: "\\infty", tab: 2, icon: '\\infty' },
        "alpha": { latex: "\\alpha", tab: 2, icon: '\\alpha' },
        "beta": { latex: "\\beta", tab: 2, icon: '\\beta' },
        "gamma": { latex: "\\gamma", tab: 2, icon: '\\gamma' },
        "theta": { latex: "\\theta", tab: 2, icon: '\\theta' },
        "Delta": { latex: "\\Delta", tab: 2, icon: '\\Delta' },
        "sigma": { latex: "\\sigma", tab: 2, icon: '\\sigma' },
        "lambda": { latex: "\\lambda", tab: 2, icon: '\\lambda' },
        "mu": { latex: "\\mu", tab: 2, icon: '\\mu' },
        "nu": { latex: "\\nu", tab: 2, icon: '\\nu' },
        "xi": { latex: "\\xi", tab: 2, icon: '\\xi' },
        "rho": { latex: "\\rho", tab: 2, icon: '\\rho' },
        "phi": { latex: "\\phi", tab: 2, icon: '\\phi' },
        "psi": { latex: "\\psi", tab: 2, icon: '\\psi' },
        "omega": { latex: "\\omega", tab: 2, icon: '\\omega' },
        "Omega": { latex: "\\Omega", tab: 2, icon: '\\Omega' },
        "epsilon": { latex: "\\epsilon", tab: 2, icon: '\\epsilon' },
        "zeta": { latex: "\\zeta", tab: 2, icon: '\\zeta' },
        "eta": { latex: "\\eta", tab: 2, icon: '\\eta' },
        "kappa": { latex: "\\kappa", tab: 2, icon: '\\kappa' },
        "chi": { latex: "\\chi", tab: 2, icon: '\\chi' },
        "Sigma": { latex: "\\Sigma", tab: 2, icon: '\\Sigma' },
        "Pi": { latex: "\\Pi", tab: 2, icon: '\\Pi' },
        "Gamma": { latex: "\\Gamma", tab: 2, icon: '\\Gamma' },
        "Lambda": { latex: "\\Lambda", tab: 2, icon: '\\Lambda' },
        "Phi": { latex: "\\Phi", tab: 2, icon: '\\Phi' },

        // ── TAB 3: Geometry ─────────────────────────────────────────
        "angle": { latex: "\\angle", tab: 3, icon: '\\angle' },
        "parallel_to": { latex: "\\parallel", tab: 3, icon: '\\parallel' },
        "perpendicular": { latex: "\\perpendicular", tab: 3, icon: '\\perpendicular' },
        "triangle": { latex: "\\triangle", tab: 3, icon: '\\triangle' },
        "parallelogram": { latex: "\\parallelogram", tab: 3, icon: '\\parallelogram' },
        "square": { latex: "\\square", tab: 3, icon: '\\square' },

        // ── TAB 4: Calculus ─────────────────────────────────────────
        "sum": {
            latex: "\\sum_{n={}}^{}",
            moveto: "Left", movefor: 1, tab: 4,
            icon: '\\sum_{\\square}^{\\square}\\square'
        },
        "sum_limits": {
            latex: "\\sum_{}^{}",
            moveto: "Left", movefor: 2, tab: 4,
            icon: '\\sum_{\\square}^{\\square}'
        },
        "product": {
            latex: "\\prod_{n={}}^{}",
            moveto: "Left", movefor: 1, tab: 4,
            icon: '\\prod_{\\square}^{\\square}\\square'
        },
        "product_limits": {
            latex: "\\prod_{}^{}",
            moveto: "Left", movefor: 2, tab: 4,
            icon: '\\prod_{\\square}^{\\square}'
        },
        "mean": {
            latex: "\\bar{}",
            moveto: "Left", movefor: 1, tab: 4,
            icon: '\\bar{\\square}'
        },
        "probability": {
            latex: "P\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 4,
            icon: 'P(\\square)'
        },
        "log": {
            latex: "\\log\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 4,
            icon: '\\log\\left(\\square\\right)'
        },
        "ln": { latex: "\\ln", tab: 4, icon: '\\ln' },
        "derivative": { latex: "\\frac{d}{dx}", tab: 4, icon: '\\frac{d}{dx}' },
        "integral": { latex: "\\int", tab: 4, icon: '\\int' },
        "definite_integral": {
            latex: "\\int_{}^{}",
            moveto: "Left", movefor: 2, tab: 4,
            icon: '\\int_{\\square}^{\\square}'
        },
        "partial_derivative": {
            latex: "\\frac{\\partial}{\\partial x}",
            tab: 4, icon: '\\frac{\\partial}{\\partial x}'
        },
        "nabla": { latex: "\\nabla", tab: 4, icon: '\\nabla' },
        "laplacian": { latex: "\\nabla^2", tab: 4, icon: '\\nabla^2' },
        "limit": {
            latex: "\\lim_{{} \\to {}}",
            moveto: "Left", movefor: 2, tab: 4,
            icon: '\\lim_{x\\to\\square}'
        },
        "log_n": {
            latex: "\\log_{ }\\left(\\right)",
            moveto: "Left", movefor: 3, tab: 4,
            icon: '\\log_{\\square}\\left(\\square\\right)'
        },

        // ── TAB 5: Trigonometry ─────────────────────────────────────
        "sin": {
            latex: "\\sin\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\sin\\left(\\square\\right)'
        },
        "cos": {
            latex: "\\cos\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\cos\\left(\\square\\right)'
        },
        "tan": {
            latex: "\\tan\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\tan\\left(\\square\\right)'
        },
        "cot": {
            latex: "\\cot\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\cot\\left(\\square\\right)'
        },
        "sec": {
            latex: "\\sec\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\sec\\left(\\square\\right)'
        },
        "csc": {
            latex: "\\csc\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\csc\\left(\\square\\right)'
        },
        "sin^-1": {
            latex: "\\sin^{-1}\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\sin^{-1}\\left(\\square\\right)'
        },
        "cos^-1": {
            latex: "\\cos^{-1}\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\cos^{-1}\\left(\\square\\right)'
        },
        "tan^-1": {
            latex: "\\tan^{-1}\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\tan^{-1}\\left(\\square\\right)'
        },
        "cot^-1": {
            latex: "\\cot^{-1}\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\cot^{-1}\\left(\\square\\right)'
        },
        "sec^-1": {
            latex: "\\sec^{-1}\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\sec^{-1}\\left(\\square\\right)'
        },
        "csc^-1": {
            latex: "\\csc^{-1}\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\csc^{-1}\\left(\\square\\right)'
        },
        "sin^2": {
            latex: "\\sin^2\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\sin^2\\left(\\square\\right)'
        },
        "cos^2": {
            latex: "\\cos^2\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\cos^2\\left(\\square\\right)'
        },
        "tan^2": {
            latex: "\\tan^2\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\tan^2\\left(\\square\\right)'
        },
        "cot^2": {
            latex: "\\cot^2\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\cot^2\\left(\\square\\right)'
        },
        "sec^2": {
            latex: "\\sec^2\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\sec^2\\left(\\square\\right)'
        },
        "csc^2": {
            latex: "\\csc^2\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\csc^2\\left(\\square\\right)'
        },
        "sin^x": {
            latex: "\\sin^{}\\left(\\right)",
            moveto: "Left", movefor: 3, tab: 5,
            icon: '\\sin^\\square\\left(\\square\\right)'
        },
        "cos^x": {
            latex: "\\cos^{}\\left(\\right)",
            moveto: "Left", movefor: 3, tab: 5,
            icon: '\\cos^\\square\\left(\\square\\right)'
        },
        "tan^x": {
            latex: "\\tan^{}\\left(\\right)",
            moveto: "Left", movefor: 3, tab: 5,
            icon: '\\tan^\\square\\left(\\square\\right)'
        },
        "cot^x": {
            latex: "\\cot^{}\\left(\\right)",
            moveto: "Left", movefor: 3, tab: 5,
            icon: '\\cot^\\square\\left(\\square\\right)'
        },
        "sec^x": {
            latex: "\\sec^{}\\left(\\right)",
            moveto: "Left", movefor: 3, tab: 5,
            icon: '\\sec^\\square\\left(\\square\\right)'
        },
        "csc^x": {
            latex: "\\csc^{}\\left(\\right)",
            moveto: "Left", movefor: 3, tab: 5,
            icon: '\\csc^\\square\\left(\\square\\right)'
        },
        "sinh": {
            latex: "\\sinh\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\sinh\\left(\\square\\right)'
        },
        "cosh": {
            latex: "\\cosh\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\cosh\\left(\\square\\right)'
        },
        "tanh": {
            latex: "\\tanh\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\tanh\\left(\\square\\right)'
        },
        "coth": {
            latex: "\\coth\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\coth\\left(\\square\\right)'
        },
        "sech": {
            latex: "\\sech\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\sech\\left(\\square\\right)'
        },
        "csch": {
            latex: "\\csch\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\csch\\left(\\square\\right)'
        },
        "sinh^-1": {
            latex: "\\sinh^{-1}\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\sinh^{-1}\\left(\\square\\right)'
        },
        "cosh^-1": {
            latex: "\\cosh^{-1}\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\cosh^{-1}\\left(\\square\\right)'
        },
        "tanh^-1": {
            latex: "\\tanh^{-1}\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\tanh^{-1}\\left(\\square\\right)'
        },
        "coth^-1": {
            latex: "\\coth^{-1}\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\coth^{-1}\\left(\\square\\right)'
        },
        "sech^-1": {
            latex: "\\sech^{-1}\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\sech^{-1}\\left(\\square\\right)'
        },
        "csch^-1": {
            latex: "\\csch^{-1}\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\csch^{-1}\\left(\\square\\right)'
        },
        "sinh^2": {
            latex: "\\sinh^2\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\sinh^2\\left(\\square\\right)'
        },
        "cosh^2": {
            latex: "\\cosh^2\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\cosh^2\\left(\\square\\right)'
        },
        "tanh^2": {
            latex: "\\tanh^2\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\tanh^2\\left(\\square\\right)'
        },
        "coth^2": {
            latex: "\\coth^2\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\coth^2\\left(\\square\\right)'
        },
        "sech^2": {
            latex: "\\sech^2\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\sech^2\\left(\\square\\right)'
        },
        "csch^2": {
            latex: "\\csch^2\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 5,
            icon: '\\csch^2\\left(\\square\\right)'
        },
        "sinh^x": {
            latex: "\\sinh^{}\\left(\\right)",
            moveto: "Left", movefor: 3, tab: 5,
            icon: '\\sinh^\\square\\left(\\square\\right)'
        },
        "cosh^x": {
            latex: "\\cosh^{}\\left(\\right)",
            moveto: "Left", movefor: 3, tab: 5,
            icon: '\\cosh^\\square\\left(\\square\\right)'
        },
        "tanh^x": {
            latex: "\\tanh^{}\\left(\\right)",
            moveto: "Left", movefor: 3, tab: 5,
            icon: '\\tanh^\\square\\left(\\square\\right)'
        },
        "coth^x": {
            latex: "\\coth^{}\\left(\\right)",
            moveto: "Left", movefor: 3, tab: 5,
            icon: '\\coth^\\square\\left(\\square\\right)'
        },
        "sech^x": {
            latex: "\\sech^{}\\left(\\right)",
            moveto: "Left", movefor: 3, tab: 5,
            icon: '\\sech^\\square\\left(\\square\\right)'
        },
        "csch^x": {
            latex: "\\csch^{}\\left(\\right)",
            moveto: "Left", movefor: 3, tab: 5,
            icon: '\\csch^\\square\\left(\\square\\right)'
        },

        // ── TAB 6: Set Theory ────────────────────────────────────────
        "element_of": { latex: "\\in", tab: 6, icon: '\\in' },
        "not_element_of": { latex: "\\notin", tab: 6, icon: '\\notin' },
        "subset": { latex: "\\subset", tab: 6, icon: '\\subset' },
        "subset_eq": { latex: "\\subseteq", tab: 6, icon: '\\subseteq' },
        "superset": { latex: "\\supset", tab: 6, icon: '\\supset' },
        "superset_eq": { latex: "\\supseteq", tab: 6, icon: '\\supseteq' },
        "union": { latex: "\\cup", tab: 6, icon: '\\cup' },
        "intersection": { latex: "\\cap", tab: 6, icon: '\\cap' },
        "emptyset": { latex: "\\emptyset", tab: 6, icon: '\\emptyset' },
        "complement": { latex: "'", tab: 6, icon: "\\square'" },
        "set_difference": { latex: "\\setminus", tab: 6, icon: '\\setminus' },
        "cartesian_product": { latex: "\\times", tab: 6, icon: 'A\\times B' },
        "natural_numbers": { latex: "\\N", tab: 6, icon: '\\N' },
        "integers": { latex: "\\Z", tab: 6, icon: '\\Z' },
        "rationals": { latex: "\\Q", tab: 6, icon: '\\Q' },
        "reals": { latex: "\\R", tab: 6, icon: '\\R' },
        "complex_numbers": { latex: "\\C", tab: 6, icon: '\\C' },

        // ── TAB 7: Chemistry ────────────────────────────────────────
        "leftarrow": { latex: "\\leftarrow", tab: 7, icon: '\\leftarrow' },
        "rightarrow": { latex: "\\rightarrow", tab: 7, icon: '\\rightarrow' },
        "leftrightarrow": { latex: "\\leftrightarrow", tab: 7, icon: '\\leftrightarrow' },
        "uparrow": { latex: "\\uparrow", tab: 7, icon: '\\uparrow' },
        "downarrow": { latex: "\\downarrow", tab: 7, icon: '\\downarrow' },
        "updownarrow": { latex: "\\updownarrow", tab: 7, icon: '\\updownarrow' },

        // ── TAB 8: Statistics ───────────────────────────────────────
        "factorial": {
            latex: "{}!",
            moveto: "Left", movefor: 1, tab: 8,
            icon: '\\square!'
        },
        "combination": {
            latex: "\\binom{}{}",
            moveto: "Up", movefor: 1, tab: 8,
            icon: '\\binom{n}{r}'
        },
        "permutation": {
            latex: "{}P{}",
            moveto: "Left", movefor: 1, tab: 8,
            icon: 'nPr'
        },
        "expected_value": {
            latex: "E\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 8,
            icon: 'E(\\square)'
        },
        "variance": {
            latex: "Var\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 8,
            icon: 'Var(\\square)'
        },
        "std_dev": {
            latex: "\\sqrt{Var\\left(\\right)}",
            moveto: "Left", movefor: 1, tab: 8,
            icon: '\\sigma(\\square)'
        },
        "approx": { latex: "\\approx", tab: 8, icon: '\\approx' },
        "floor": {
            latex: "\\lfloor\\rfloor",
            moveto: "Left", movefor: 1, tab: 8,
            icon: '\\lfloor\\square\\rfloor'
        },
        "ceil": {
            latex: "\\lceil\\rceil",
            moveto: "Left", movefor: 1, tab: 8,
            icon: '\\lceil\\square\\rceil'
        },

        // ── TAB 9: Logic ────────────────────────────────────────────
        "logical_and": { latex: "\\wedge", tab: 9, icon: '\\wedge' },
        "logical_or": { latex: "\\vee", tab: 9, icon: '\\vee' },
        "logical_not": { latex: "\\neg", tab: 9, icon: '\\neg' },
        "logical_implies": { latex: "\\Rightarrow", tab: 9, icon: '\\Rightarrow' },
        "logical_iff": { latex: "\\Leftrightarrow", tab: 9, icon: '\\Leftrightarrow' },
        "logical_forall": { latex: "\\forall", tab: 9, icon: '\\forall' },
        "logical_exists": { latex: "\\exists", tab: 9, icon: '\\exists' },
        "logical_therefore": { latex: "\\therefore", tab: 9, icon: '\\therefore' },
        "logical_because": { latex: "\\because", tab: 9, icon: '\\because' },
        "logical_xor": { latex: "\\oplus", tab: 9, icon: '\\oplus' },
        "divides": { latex: "\\mid", tab: 9, icon: '\\mid' },
        "modulo": { latex: "\\mod", tab: 9, icon: '\\mod' },
        "gcd": {
            latex: "\\gcd(,)",
            moveto: "Left", movefor: 2, tab: 9,
            icon: '\\gcd(\\square,\\square)'
        },
        "lcm": {
            latex: "\\lcm(,)",
            moveto: "Left", movefor: 2, tab: 9,
            icon: '\\lcm(\\square,\\square)'
        },

        // ── TAB 10: Matrices ────────────────────────────────────────
        "determinant": {
            latex: "\\det\\left(\\right)",
            moveto: "Left", movefor: 1, tab: 10,
            icon: '\\det(\\square)'
        },
        "transpose": {
            latex: "{}^{T}",
            moveto: "Left", movefor: 1, tab: 10,
            icon: '\\square^T'
        },
        "inverse": {
            latex: "{}^{-1}",
            moveto: "Left", movefor: 1, tab: 10,
            icon: '\\square^{-1}'
        },
    };

    keyboard_keys = {
        'letters': [
            { 'value': 'q', 'type': 'write', 'class': 'ks', 'display': 'q', 'new_line': false },
            { 'value': 'w', 'type': 'write', 'class': 'ks', 'display': 'w', 'new_line': false },
            { 'value': 'e', 'type': 'write', 'class': 'ks', 'display': 'e', 'new_line': false },
            { 'value': 'r', 'type': 'write', 'class': 'ks', 'display': 'r', 'new_line': false },
            { 'value': 't', 'type': 'write', 'class': 'ks', 'display': 't', 'new_line': false },
            { 'value': 'y', 'type': 'write', 'class': 'ks', 'display': 'y', 'new_line': false },
            { 'value': 'u', 'type': 'write', 'class': 'ks', 'display': 'u', 'new_line': false },
            { 'value': 'i', 'type': 'write', 'class': 'ks', 'display': 'i', 'new_line': false },
            { 'value': 'o', 'type': 'write', 'class': 'ks', 'display': 'o', 'new_line': false },
            { 'value': 'p', 'type': 'write', 'class': 'ks', 'display': 'p', 'new_line': true },
            { 'value': 'a', 'type': 'write', 'class': 'ks', 'display': 'a', 'new_line': false },
            { 'value': 's', 'type': 'write', 'class': 'ks', 'display': 's', 'new_line': false },
            { 'value': 'd', 'type': 'write', 'class': 'ks', 'display': 'd', 'new_line': false },
            { 'value': 'f', 'type': 'write', 'class': 'ks', 'display': 'f', 'new_line': false },
            { 'value': 'g', 'type': 'write', 'class': 'ks', 'display': 'g', 'new_line': false },
            { 'value': 'h', 'type': 'write', 'class': 'ks', 'display': 'h', 'new_line': false },
            { 'value': 'j', 'type': 'write', 'class': 'ks', 'display': 'j', 'new_line': false },
            { 'value': 'k', 'type': 'write', 'class': 'ks', 'display': 'k', 'new_line': false },
            { 'value': 'l', 'type': 'write', 'class': 'ks', 'display': 'l', 'new_line': true },
            { 'value': 'CapsLock', 'type': 'custom', 'class': 'ks long icon', 'display': '&#8673;', 'new_line': false },
            { 'value': 'z', 'type': 'write', 'class': 'ks', 'display': 'z', 'new_line': false },
            { 'value': 'x', 'type': 'write', 'class': 'ks', 'display': 'x', 'new_line': false },
            { 'value': 'c', 'type': 'write', 'class': 'ks', 'display': 'c', 'new_line': false },
            { 'value': 'v', 'type': 'write', 'class': 'ks', 'display': 'v', 'new_line': false },
            { 'value': 'b', 'type': 'write', 'class': 'ks', 'display': 'b', 'new_line': false },
            { 'value': 'n', 'type': 'write', 'class': 'ks', 'display': 'n', 'new_line': false },
            { 'value': 'm', 'type': 'write', 'class': 'ks', 'display': 'm', 'new_line': false },
            { 'value': 'Backspace', 'type': 'keystroke', 'class': 'ks long icon', 'display': '&#8678;', 'new_line': true },
            { 'value': 'numpad', 'type': 'custom', 'class': 'ks long', 'display': '123', 'new_line': false },
            { 'value': ',', 'type': 'write', 'class': 'ks', 'display': ',', 'new_line': false }, { 'value': '\\ ', 'type': 'write', 'class': 'ks too_long', 'display': 'Space', 'new_line': false },
            { 'value': '.', 'type': 'write', 'class': 'ks', 'display': '.', 'new_line': false }, { 'value': 'close', 'type': 'custom', 'class': 'ks long takeup', 'display': 'X', 'new_line': false }
        ],
        'numbers': [
            { 'value': '1', 'type': 'write', 'class': 'ks', 'display': '1', 'new_line': false },
            { 'value': '2', 'type': 'write', 'class': 'ks', 'display': '2', 'new_line': false },
            { 'value': '3', 'type': 'write', 'class': 'ks', 'display': '3', 'new_line': false },
            { 'value': '+', 'type': 'write', 'class': 'ks', 'display': '+', 'new_line': false },
            { 'value': '-', 'type': 'write', 'class': 'ks', 'display': '&#8315;', 'new_line': true },
            { 'value': '4', 'type': 'write', 'class': 'ks', 'display': '4', 'new_line': false },
            { 'value': '5', 'type': 'write', 'class': 'ks', 'display': '5', 'new_line': false },
            { 'value': '6', 'type': 'write', 'class': 'ks', 'display': '6', 'new_line': false },
            { 'value': '\\times', 'type': 'write', 'class': 'ks', 'display': '&times;', 'new_line': false },
            { 'value': '/', 'type': 'write', 'class': 'ks', 'display': '&#247;', 'new_line': true },
            { 'value': '7', 'type': 'write', 'class': 'ks', 'display': '7', 'new_line': false },
            { 'value': '8', 'type': 'write', 'class': 'ks', 'display': '8', 'new_line': false },
            { 'value': '9', 'type': 'write', 'class': 'ks', 'display': '9', 'new_line': false },
            { 'value': '=', 'type': 'write', 'class': 'ks', 'display': '=', 'new_line': false },
            { 'value': 'Backspace', 'type': 'keystroke', 'class': 'ks long icon', 'display': '&#8678;', 'new_line': true },
            { 'value': 'letters', 'type': 'custom', 'class': 'ks long', 'display': 'ABC', 'new_line': false },
            { 'value': '0', 'type': 'write', 'class': 'ks', 'display': '0', 'new_line': false },
            { 'value': '?', 'type': 'write', 'class': 'ks', 'display': '?', 'new_line': false },
            { 'value': '%', 'type': 'write', 'class': 'ks', 'display': '%', 'new_line': false },
            { 'value': 'close', 'type': 'custom', 'class': 'ks long takeup', 'display': 'X', 'new_line': false }
        ]
    };
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
            field.keystroke(value);
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
        latex = jq(this).data('latex');
        field.write(latex);
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
