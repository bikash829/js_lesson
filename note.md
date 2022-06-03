# …or create a new repository on the command line
echo "# js_lesson" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/bikash829/js_lesson.git
git push -u origin main

# …or push an existing repository from the command line
git remote add origin https://github.com/bikash829/js_lesson.git
git branch -M main
git push -u origin main