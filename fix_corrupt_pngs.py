import os, urllib.request, glob

ROOT = os.path.join(os.path.dirname(__file__), 'clone', 'assets', 'wp-content', 'uploads')
BASE = 'https://tempsdance.fr/wp-content/uploads'
PNG_HEADER = b'\x89PNG\r\n\x1a\n'
BAD_PREFIX = b'\xef\xbf\xbd'  # UTF-8 replacement char

fixed, failed, skipped = 0, [], 0
for path in glob.glob(os.path.join(ROOT, '**', '*.png'), recursive=True) + \
            glob.glob(os.path.join(ROOT, '**', '*.jpg'), recursive=True) + \
            glob.glob(os.path.join(ROOT, '**', '*.jpeg'), recursive=True):
    with open(path, 'rb') as f:
        head = f.read(8)
    if not head.startswith(BAD_PREFIX):
        skipped += 1
        continue
    rel = os.path.relpath(path, ROOT).replace('\\', '/')
    url = f"{BASE}/{rel}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=30) as r:
            data = r.read()
        if not (data.startswith(PNG_HEADER) or data[:3] == b'\xff\xd8\xff'):
            failed.append((path, 'bad_header_after_dl'))
            continue
        with open(path, 'wb') as f:
            f.write(data)
        fixed += 1
        print(f'OK  {rel}')
    except Exception as e:
        failed.append((path, str(e)))
        print(f'ERR {rel}: {e}')

print(f'\nfixed={fixed} skipped={skipped} failed={len(failed)}')
for p, e in failed[:20]:
    print(' -', p, e)
