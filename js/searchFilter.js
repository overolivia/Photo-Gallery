
const search = document.getElementById('search');

function mySearchFunction() {
    var input, filter, gallery, a, data;
    input = document.getElementById('search');
    filter = input.value.toLowerCase(); 
    gallery = document.getElementsByClassName('main-content');
    a = gallery[0].getElementsByTagName('a');
    for (var i = 0; i < a.length; i++) {
        data = a[i].getAttribute('data-caption');
        if (data.indexOf(filter) > -1) {
            a[i].style.display = '';
        } else {
            a[i].style.display = 'none';
        } 
    }
} 

search.addEventListener('keyup', (e) => { 
    const userSearch = e.target.value.toLowerCase(); 
    mySearchFunction();
});