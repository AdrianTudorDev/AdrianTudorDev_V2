var allItems = localStorage.getItem("database") || null;

var gallery = document.querySelector('.gallery');

var upload = document.querySelector('#upload');

var uploadBtn = document.querySelector('.custom-file-upload');

var search = document.querySelector('#search');

 

 

 

window.addEventListener("DOMContentLoaded", () => {

                if(allItems == null) {

                                uploadBtn.style.display = "show";

                                search.style.display = "none";

                } else {

                                let itemsJSON = JSON.parse(allItems);

                                uploadBtn.style.display = "none";

                                search.style.display = "show";                   

                                displayOS(itemsJSON);

                }

});

 

 

upload.addEventListener("change", () => {

                let fr = new FileReader();

               

                fr.readAsText(upload.files[0]);

               

                fr.onload = function(){

                                               

                                localStorage.setItem('database', fr.result);                                          

                               

                                location.reload();

                }

});

 

   

function searchOS() {

  // Declare variables

  let filter, content, txtValue;

  filter = search.value.toUpperCase();

  content = document.querySelectorAll(".content");

 

  // Loop through all list items, and hide those who don't match the search query

  for (let i = 0; i < content.length; i++) {

 

    txtValue = content[i].getElementsByTagName("h2")[0].textContent;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {

      content[i].style.display = "";

    } else {

      content[i].style.display = "none";

    }

  }

}

 

function displayOS(items){

                console.log(items[2].Substance, typeof items)

                gallery.innerHTML = '';

               

                items.forEach( item => {

                                // div container numit si "content"

                                let div = document.createElement('div');

                                div.classList.add('content');

                               

                                                // h2 ce trebuie pus in "content" - numarul de OS

                                                let h2 = document.createElement('h2');

                                                h2.innerText = item.Cod;

                                                div.appendChild(h2);

                                               

                                                //imaginea inca nu e gata

                                               

                                                //paragraful care actioneaza ca titluri

                                                item.Title.forEach( title => {

                                                                let p = document.createElement('p');

                                                                p.innerText = title;

                                                                div.appendChild(p);

                                                })

                                               

                                                //h3 ce trebuie pus in "content" - categoria de umezeala

                                                let h3 = document.createElement('h3');

                                                h3.innerText = item.Category;

                                                div.appendChild(h3);

                                               

                                                //h4 ce trebuie pus in "content" - substantele ca si titlu                  

                                                let h4 = document.createElement('h4');

                                                h4.innerText = 'Substante:';

                                                div.appendChild(h4);

                                               

                                                //ul ce trebuie pus in "content" - substantele ca si denumire       

                                                let ul = document.createElement('ul');

                                                item.Substance.forEach( subst => {

                                                                let li = document.createElement('li');

                                                                li.innerText = subst;

                                                                ul.appendChild(li);

                                                })

                                                div.appendChild(ul);

                                               

                                                //h4 ce trebuie pus in "content" - norme ca si titlu                            

                                                let h4doi = document.createElement('h4');

                                                h4doi.innerText = 'Norme:';

                                                div.appendChild(h4doi);

                                               

                                                //ul ce trebuie pus in "content" - substantele ca si denumire       

                                                let ul2 = document.createElement('ul');

                                                item.Norms.forEach( norm => {

                                                                let li = document.createElement('li');

                                                                li.innerText = norm;

                                                                ul2.appendChild(li);

                                                })

                                                div.appendChild(ul2);

                                               

                                                //buton ce trebuie pus in "content"

                                                let btn = document.createElement('button');

                                                btn.innerText = 'look';

                                                div.appendChild(btn);

                               

                                gallery.appendChild(div);

                });

}