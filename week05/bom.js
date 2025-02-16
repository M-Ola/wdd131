const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || []

chaptersArray.array.forEach(chapter => {
    displayList(chapter)
    
});







button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
         
        displayList(input.value);
        chaptersArray.push(input.value);

        setChapterList();
        input.value = "";
        input.focus();


        
        
         
    
 } 
    
    
   });


   



function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;

    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li)
    input.value = ''
    input.focus();


    deleteButton.addEventListener('click', function () {
        list.removeChild(li);

    }); 
  }

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray)
    

    )
}


function getChapterList() {
    
    return JSON.parse(localStorage.getItem('myFavBOMList'));


}

function deleChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1)
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
    


}
