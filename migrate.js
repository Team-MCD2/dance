const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

function processFile(filePath) {
    if (!filePath.endsWith('.js') && !filePath.endsWith('.jsx')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Use a simpler approach: regex replace for the entire tag if it has an internal link
    // Because Elementor blocks don't have nested <a> tags inside <a>, we can use a non-greedy match.
    // We match <a ...>...</a> where href starts with / or #
    
    content = content.replace(/<a([^>]+href=["'](\/|#)[^"']*["'][^>]*)>([\s\S]*?)<\/a>/g, (match, p1, p2, p3) => {
        return `<Link${p1}>${p3}</Link>`;
    });

    // Add import Link if not present and we used <Link
    if (content !== original) {
        if (!content.includes("import Link from 'next/link'")) {
            content = content.replace(/("use client";\s*)/, '$1\nimport Link from \'next/link\';\n');
            if (!content.includes("import Link from")) { // if no "use client"
                content = "import Link from 'next/link';\n" + content;
            }
        }
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else {
            processFile(fullPath);
        }
    }
}

walkDir(appDir);
console.log('Migration complete.');
