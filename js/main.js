let saturate = document.getElementById("saturat");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let  blur = document.getElementById("bulr");
let hueRotate = document.getElementById("hue-rotate");
let img = document.getElementById("img");
let upload = document.getElementById("upload");
let download = document.getElementById("download");
// let reset= document.getElementsByTagName(span)
// console.log(reset)
let reset = document.querySelector("span");
let imgBox = document.querySelector(".img-box");
// 

// window.onload = function(){
//     download.style.display ='none';
//     reset.style.display ='none';
//     imgBox.style.display ='none';

// };
window.onload = function (){
    download.style.display = ' none'
    reset.style.display = 'none'
    imgBox.style.display = 'none'
}
function restValu(){
    img.style.filter="none"
};
upload.onchange = function (){
     restValu();
    
    download.style.display ='block';
    reset.style.display ='block';
    imgBox.style.display ='block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result
    }
}
let filters = document.querySelectorAll('ul li input')
filters.forEach ( filter=>{
    filter.addEventListener('input',function(){
        img.style.filter= `
        saturate(${saturat.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        
        `
    })
} )
download.onclick = function(){
download.href = img.src
}