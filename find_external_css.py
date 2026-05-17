import re, glob, os

html_files = glob.glob(r'c:\Users\PC\Desktop\dance\clone\**\*.html', recursive=True)
all_urls = set()
for f in html_files:
    t = open(f, encoding='utf-8', errors='ignore').read()
    for u in re.findall(r'https?://tempsdance\.fr[^\s"\']+\.css[^\s"\']*', t):
        all_urls.add(u)

print(f"Total external CSS URLs from tempsdance.fr: {len(all_urls)}")
for u in sorted(all_urls):
    print(u)
