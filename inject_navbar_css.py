import glob, os
ROOT = os.path.join(os.path.dirname(__file__), 'clone')
MARKER = '</link></meta></meta></link></meta></head>'

targets = [
    (glob.glob(os.path.join(ROOT, 'pages', '*.html')), '../assets/custom-navbar.css'),
    (glob.glob(os.path.join(ROOT, 'pages', 'team-member', '*.html')), '../../assets/custom-navbar.css'),
]

for files, href in targets:
    for p in files:
        with open(p, 'r', encoding='utf-8') as f:
            txt = f.read()
        if 'custom-navbar.css' in txt:
            continue
        new = txt.replace(MARKER, f'<link href="{href}" rel="stylesheet" media="all" id="custom-navbar-css"/>{MARKER}', 1)
        if new != txt:
            with open(p, 'w', encoding='utf-8') as f:
                f.write(new)
            print('patched', p)
        else:
            print('skip (no marker)', p)
