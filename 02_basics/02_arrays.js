const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);//adds entire dc_heros and treat it as single element
console.log(marvel_heros[3][2]);//batman

//concat()=>can't add more than one value
const allHeros =marvel_heros.concat(dc_heros)
console.log(allHeros);

//spread operator=> can add multiple arrays
const all_new_heros =[...marvel_heros,...dc_heros]
console.log(all_new_heros);


//flat operator=>merge arrays 
const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr=another_arr.flat(Infinity)//in depth till end
console.log(real_another_arr);

const real_another_arr2=another_arr.flat(1)//till 1st depth
console.log(real_another_arr2);

console.log(Array.isArray("Sumaiyya"));
console.log(Array.from("Sumaiyya"));
console.log(Array.from({name:"Sumaiyya"}));//returns empty array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));




