let abc_ar = ["a","b","c","d","e"]
products_ar = [{name:"orange", price:12},{name:"apple", price:6},{name:"banana", price:4},{name:"kiwi", price:5},];

window.onload = () => {
    init();
}

const init = () => {
    //shuffle to array - עירבוב מערך}4
    let shuffle_arr= _.shuffle(abc_ar);
    console.log(shuffle_arr);

    let num_rand= _.random(5,9);
    document.querySelector("#id_span").innerHTML=num_rand;
   
    //sort by price
    products_ar=_.sortBy(products_ar,"price");
    //sort DESC (only after regular sortBy)
    products_ar.reverse();
    let ul=  document.querySelector("#id_ul");

    products_ar.forEach(element => {
        ul.innerHTML+= `<li>${element.name} - ${element.price} nis</li>`
    });

}


