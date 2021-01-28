const hash = '?ID=some_info';
const example = "http://generatorinchief.github.io/test/" + hash;

(new URL(example)).searchParams.forEach((x, y) =>
    document.getElementById(y).value = x);
