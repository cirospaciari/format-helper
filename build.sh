browserify format.js -o > bin/format.js
browserify format.js -o | uglifyjs > bin/format.min.js
pause
