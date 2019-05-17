//1.
function Big_prod(arr){
debugger;
let p1,p2,res;
for(let i = 0;i < arr.length-2; i++ ){
p1 = arr[i]*arr[i+1]; p2 = arr[i+1]*arr[i+2];
if(p1<p2){
if(res>p2){continue;}
res = p2;
}
else{
if(res>p1){continue;}
res = p1

} 

}
return res;
}


//2.
function f1(arr){
	let count= 0;
		let tmp = arr.sort((a,b)=> a-b)
			for(let i = tmp[0];i<tmp[tmp.length-1];i++){
		if(arr.indexOf(i)== -1){count++}
}
	return count;
}

//3.
function f1(str){

let tmp = str.split(' ')
let res= '';
for(let i = 0 ;i <= tmp.length - 1 ; i++){
res+=tmp[i][0]
}
return res.toUpperCase();
}

//4. 

function f1(str,n,arr = []){
    let tmp = str.slice(0,n);
        arr.push(tmp);
            if(str.length > n){
        f1(str.slice(1),n,arr);
}
return arr.join()
}











































