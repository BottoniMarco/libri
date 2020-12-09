const books = [
	{
		title: "Il vecchio e il mare",
		author: "Ernest Hemingway",
		year: 1951
	},
	{
		title: "La forma dell'acqua",
		author: "Andrea Camilleri",
		year: 1994
	},
	{
		title: "Elogio della follia",
		author: "Henri Laborit",
		year: 1976
	},
	{
		title: "La camera azzurra",
		author: "George Simenon",
		year: 1964
	}
]
// #milestone-1
const container = $("#titles");

books.forEach((item) => {


  container.append(`
    <div id="titles"> ${item.title}</div>

    `);

});


// #milestone-2

var agg = {
  title : "Il padiglione",
  author : "yukio mishima",
  year : 2015
};
container.append(`
  <div id="titles"> ${agg.title}</div>

  `);

books.push(agg);



var root = new Vue({
  el: '#root',
  data: {
    search: ''
  }
})
$("#btn").click(
  function() {
    console.log(root.search);
    books.forEach((item, i) => {
      if (item.title == root.search) {
        console.log("TROVATO --> ",root.search);
      }
    });
  }
);
