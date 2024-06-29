let a = prompt("Enter a word").split('');
console.log(a.length);
for(let i = 0;i<a.length;i++){
    for(let j = 0;j<a.length-i-1;j++){
        if(a[j]>a[j+1]){
            let temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
        }
    }
}

alert(a.join(''))