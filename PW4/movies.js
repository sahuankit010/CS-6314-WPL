const getMovieData = () => {
    return new Promise((resolve, reject) => {
            fetch('movies.xml')
                .then(response => response.text())
                .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
                .then((data) => {
                    resolve(data)
                });
    })
}
function loadDoc() {
    getMovieData().then((d) => {
        console.log(d)
        var i;
        var table = "<tr><th>Title</th><th>Genre</th><th>Year</th><th>Cast</th><th>Summary</th></tr>";
        var x = d.getElementsByTagName("movie");
        for (i = 0; i < x.length; i++) {
            var actorData = []
            var actorTag = x[i].getElementsByTagName("actor");
            for(var j=0; j<actorTag.length; j++){
                var f = actorTag[j].getElementsByTagName("first_name");
                var l = actorTag[j].getElementsByTagName("last_name");
                actorData.push(f[0].childNodes[0].nodeValue + ' '+ l[0].childNodes[0].nodeValue);
            }
            table += "<tr><td>" +
                x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
                "</td><td>" +
                actorData.join(',') +
                "</td><td>" +
                ((x[i].getElementsByTagName("summary")[0] == undefined)?"Custom Summary: I will watch all these movies some day.": x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue ) +
                "</td></tr>";
        }
        document.getElementById("demo").innerHTML = table;
    })
}