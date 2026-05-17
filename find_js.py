import re
t = open(r'c:\Users\PC\Desktop\dance\clone\index.html', encoding='utf-8', errors='ignore').read()
scripts = re.findall(r'<script[^>]+src=["\']([^"\']+)["\'][^>]*>', t)
print("=== LOCAL JS (assets/) ===")
for s in scripts:
    if s.startswith('assets/') or 'localhost' in s:
        print(s)
print("\n=== NAVIGATION/MENU related ===")
for s in scripts:
    if any(k in s.lower() for k in ['nav', 'menu', 'sticky', 'scroll', 'theme', 'custom']):
        print(s)
