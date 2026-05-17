import os, glob, re

ROOT = os.path.dirname(__file__)
clone_dir = os.path.join(ROOT, 'clone')
files = glob.glob(os.path.join(clone_dir, '**', '*.html'), recursive=True)

for f in files:
    file_dir = os.path.dirname(f)
    assets_dir = os.path.join(clone_dir, 'assets')
    rel_assets = os.path.relpath(assets_dir, file_dir).replace('\\', '/')

    with open(f, 'r', encoding='utf-8') as fh:
        html = fh.read()
    changed = False

    # Inject or update CSS
    if 'custom-navbar.css' not in html:
        link = f'<link href="{rel_assets}/custom-navbar.css?v=10" rel="stylesheet" id="custom-navbar-css"/>'
        html = html.replace('</head>', link + '</head>', 1)
        changed = True
    else:
        new_link = f'<link href="{rel_assets}/custom-navbar.css?v=10" rel="stylesheet" id="custom-navbar-css"/>'
        new_html = re.sub(r'<link[^>]*custom-navbar\.css[^>]*>', new_link, html)
        if new_html != html:
            html = new_html
            changed = True

    # Inject or update JS
    if 'custom-navbar.js' not in html:
        script = f'<script src="{rel_assets}/custom-navbar.js?v=3"></script>'
        html = html.replace('</body>', script + '</body>', 1)
        changed = True
    else:
        new_script = f'<script src="{rel_assets}/custom-navbar.js?v=3"></script>'
        new_html = re.sub(r'<script[^>]*custom-navbar\.js[^>]*>.*?</script>', new_script, html, flags=re.DOTALL)
        if new_html != html:
            html = new_html
            changed = True

    if changed:
        with open(f, 'w', encoding='utf-8') as fh:
            fh.write(html)
        print(f'updated: {f}')
print('done')

