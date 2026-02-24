import os
import re

# Directory to search
target_dir = '/Users/christian/Christian 2022/Cistac/Webpage 2024'

# Regex to match the img tag containing YumYum.png, handling multiline
# We look for <img ... src="...YumYum.png"... /> or similar
pattern = re.compile(r'<img[^>]*?YumYum\.png[^>]*?>', re.IGNORECASE | re.DOTALL)

count = 0
for root, dirs, files in os.walk(target_dir):
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Sub the matched image tag out
            new_content = pattern.sub('', content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                count += 1
                print(f"Removed from {filepath}")

print(f"Total files modified: {count}")
