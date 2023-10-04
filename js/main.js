var allItems = localStorage.getItem("database") || null;

var gallery = document.querySelector('.gallery');

var upload = document.querySelector('#upload');

var uploadBtn = document.querySelector('.custom-file-upload');

var search = document.querySelector('#search');

var botttomBar = document.querySelector('.bottom-bar');

var del = document.querySelector('.delete');

var body = document.querySelector('body');

 

 

window.addEventListener("DOMContentLoaded", () => {

                if(allItems == null) {

                                uploadBtn.style.display = "show";

                                search.style.display = "none";

                                botttomBar.style.display = "none";

                } else {

                                let itemsJSON = JSON.parse(allItems);

                                uploadBtn.style.display = "none";

                                search.style.display = "show";

                                botttomBar.style.display = "show";                         

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

                                                                let divbtn = document.createElement('div');

                                                                divbtn.classList.add('copy');

                                                                divbtn.setAttribute('onclick', 'copyText(this)');

                                                                let img = document.createElement('img');

                                                                img.src = "./images/copy.png";

                                                                divbtn.appendChild(img);

                                                                p.appendChild(divbtn);

                                                                div.appendChild(p);

                                                })

                                               

                                                //h3 ce trebuie pus in "content" - categoria de umezeala

                                                let h3 = document.createElement('h3');

                                                h3.innerText = item.Category;

                                                div.appendChild(h3);

                                               

                                                //h4 ce trebuie pus in "content" - substantele ca si titlu                  

                                                let h4unu = document.createElement('h4');

                                                h4unu.innerText = 'Substante:';

                                                div.appendChild(h4unu);

                                               

                                                //ul ce trebuie pus in "content" - substantele ca si denumire       

                                                let ul = document.createElement('ul');

                                                item.Substance.forEach( subst => {

                                                                let li = document.createElement('li');

                                                                li.innerText = subst;

                                                                let divbtn = document.createElement('div');

                                                                divbtn.classList.add('copy');

                                                                divbtn.setAttribute('onclick', 'copyText(this)');

                                                                let img = document.createElement('img');

                                                                img.src = "./images/copy.png";

                                                                divbtn.appendChild(img);

                                                                li.appendChild(divbtn);

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

                                                                let divbtn = document.createElement('div');

                                                                divbtn.classList.add('copy');

                                                                divbtn.setAttribute('onclick', 'copyText(this)');

                                                                let img = document.createElement('img');

                                                                img.src = "./images/copy.png";

                                                                divbtn.appendChild(img);

                                                                li.appendChild(divbtn);

                                                                ul2.appendChild(li);

                                                })

                                                div.appendChild(ul2);

                                               

                                                //buton ce trebuie pus in "content"

                                                let btn = document.createElement('button');

                                                btn.innerText = 'update';

                                                btn.onclick= updateOS;

                                                div.appendChild(btn);

                               

                                gallery.appendChild(div);

                });

}

 

function updateOS(){

                let edit = this.parentElement;

                body.innerHTML = '';

               

                // creerea pagini

                let div1 = document.createElement('div');

                div1.classList.add('gallery');

                let div2 = document.createElement('div')

                div2.classList.add('content');

               

                // adaugarea in pagina h2 - OS code

                let h2 = document.createElement('h2');

                h2.innerText = edit.querySelector('h2').innerText;                           

                div2.appendChild(h2);  

               

                // i adaugarea in pagina p - descriere OS

                let p = document.createElement('p');

                let inputp  = document.createElement('input');

                inputp.type = "text";

                inputp.placeholder = edit.querySelector('p').innerText; 

                p.appendChild(inputp);

                div2.appendChild(p);

               

                //  adaugarea in pagina h3 - categoria de umezeala

                let h3 = document.createElement('h3');

                h3.innerText = edit.querySelector('h3').innerText             

                div2.appendChild(h3);

               

                // adaugarea in paginah4 - "Substante"

                let h4unu = document.createElement('h4');

                h4unu.innerText = "Substante:";

                div2.appendChild(h4unu);

               

                //definirea celor doua liste - uls[0], uls[1]             

                let uls = edit.querySelectorAll('ul');         

                let list0 = uls[0].querySelectorAll('li');

                let list1 = uls[1].querySelectorAll('li');

 

                //  adaugarea in pagina substantelor - uls[0]

                let ul1 = document.createElement('ul');

                list0.forEach(li => {

                                let line = document.createElement('li');

                                let inputline = document.createElement('input');

                                inputline.placeholder = li.innerText;

                                line.appendChild(inputline);      

                                ul1.appendChild(line);

                })

                div2.appendChild(ul1);

               

                // adaugarea in paginah4 - "Nome"

                let h4doi = document.createElement('h4');

                h4doi.innerText = "Norme:";

                div2.appendChild(h4doi);

               

                //  adaugarea in pagina substantelor - uls[1]

                let ul2 = document.createElement('ul');

                list1.forEach(li => {

                                let line = document.createElement('li');

                                let inputline = document.createElement('input');

                                inputline.placeholder = li.innerText;

                                line.appendChild(inputline);      

                                ul2.appendChild(line);

                })

                div2.appendChild(ul2); 

               

                //buton de salvat "save"

                let btnsave = document.createElement('button');

                btnsave.innerText = 'save';

                btnsave.onclick= saveOS;

                btnsave.style.background = "lightgreen";

                div2.appendChild(btnsave);

               

                //buton de inchidere "x"

                let btnclose = document.createElement('button');

                btnclose.innerText = 'X';

                btnclose.setAttribute('id', 'x')

                btnclose.onclick= closeOS;

                div2.appendChild(btnclose);

               

                // adaugarea componentei

                div1.appendChild(div2);

                body.appendChild(div1);                             

}

 

function saveOS(){

                let save = this.parentElement;

                let uls = save.querySelectorAll('ul');

               

                let uls0 = uls[0].querySelectorAll('li');

                let li0 = [];

                uls0.forEach(li => li0.push(li.querySelector('input').value));

               

                let uls1 = uls[1].querySelectorAll('li');

                let li1 = [];

                uls1.forEach(li => li1.push(li.querySelector('input').value));          

               

                let saveJSON = {

                                'Category' : save.querySelector('h3').innerText,

                                'Cod' : save.querySelector('h2').innerText,

                                'Norms' : li1,

                                'Substance' : li0,

                                'Title' : save.querySelector('p').querySelector('input').value                         

                };

                copyText(saveJSON);

                //location.reload();

}

 

function closeOS(){

                location.reload();

}

 

del.addEventListener('click', () => {

                localStorage.removeItem("database");

                location.reload();

})

 

function copyText(elem){

                if(elem.tagName == 'DIV') navigator.clipboard.writeText(elem.parentElement.innerText);             

                if (elem.tagName ==  undefined) navigator.clipboard.writeText(JSON.stringify(elem));

                document.execCommand("copy");

}