#!/usr/bin/env python3
"""Post-build script to restructure VitePress dist for GitHub Pages clean URLs."""
import os
import shutil

dist = '/root/skills-toolkit/docs/.vitepress/dist'

dirs = [d for d in os.listdir(dist)
        if os.path.isdir(os.path.join(dist, d))
        and not d.startswith('.')
        and d not in ['assets']]

for dir_name in dirs:
    dir_path = os.path.join(dist, dir_name)
    files = [f for f in os.listdir(dir_path) if f.endswith('.html') and f != '404.html']

    for file in files:
        src = os.path.join(dir_path, file)
        name = os.path.splitext(file)[0]

        if name == 'README':
            dst = os.path.join(dir_path, 'index.html')
            shutil.copy2(src, dst)
            print(f'Readme.html -> index.html in {dir_name}')
        else:
            other_dir = os.path.join(dir_path, name)
            os.makedirs(other_dir, exist_ok=True)
            dst = os.path.join(other_dir, 'index.html')
            shutil.copy2(src, dst)
            print(f'{file} -> {name}/index.html in {dir_name}')

print('Done!')