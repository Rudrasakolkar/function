var cl=console.log;


//1
//pop
var skills=['HTML ',' Css' ,'javascript', ' angular'];
var skillsPop=skills.pop();
cl(skills);

//2
//push
var skills=['HTML ',' Css' ,'javascript'];
var skiilsPush=skills.push("angular");
cl(skills);


//3
//unshift
var skills=['HTML ',' Css' ,'javascript', ' angular'];
var skillsUnshift=skills.unshift("sass");
cl(skills);


//4
//shift
var skills=['HTML ',' Css' ,'javascript', ' angular'];
var skillsShift=skills.shift();
cl(skills);


//5
//join
var skills=['HTML ',' Css' ,'javascript', ' angular'];
var skillsStr=skills.join(' * ');
cl(skillsStr)

//6
var skills=['HTML ',' Css' ,'javascript', ' angular'];
var skillsStrs=skills.join(' & ');
cl(skillsStrs);

//7
//splice
var skills=["Apple","Banana","Mango","papaya"];
skills.splice(2,1);
cl(skills)

//8
//slice
var skills=["Apple","Banana","Mango","papaya"," gava","kivi", "chiku"];
var result=skills.slice(1,5);
cl(result);

//9
//reverse
var skills=["Apple","Banana","Mango","papaya"," gava","kivi", "chiku"];
skills.reverse();
cl(skills);


//10
//sort
var skills=[10,,2,3,75,34,23,98,2,3,4,5,75,11];
skills.sort();
cl(skills);

///11
//length
var skills=["Apple","Banana","Mango","papaya"," gava","kivi", "chiku"];
var skillsLength=skills[5].length;
cl(skillsLength);

//12
//indexof
var skills=["Apple","Banana","Mango","papaya"," gava","kivi", "chiku"];
var skillsIndexof=skills.indexOf("papaya");
cl(skillsIndexof);

//13
cl(skills[3]);