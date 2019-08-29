var favorite=document.querySelector('.changef');
favorite.addEventListener('click',fav);

function fav(){
    let changef=document.querySelector('.changef').innerHTML;
    if(changef=="<i class="+far +fa-heart +unfavorite+"></i>"){
        changef="<i class="+fas +fa-heart +unfavorite+"></i>";
    }else if(changef=="<i class="+fas +fa-heart +unfavorite+"></i>"){
        changef="<i class="+far +fa-heart +unfavorite+"></i>";
    }
}