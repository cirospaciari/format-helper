browserify main.js -o > bin/format.js
browserify main.js -o | uglifyjs > bin/format.min.js
pause
