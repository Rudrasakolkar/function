var cl = console.log;

//1
//length
var str ="Hello World";
var strLength=str.length;
cl(strLength);


//2
//replace
var str ="Welcome in the beautiful world of javascript";
var strR=str.replace("javascript" , "HTML");
cl(strR);

//3
//replace
var str01 ="Welcome in the beautiful world of javascript and Javascript is suitable for large application , i love javascript";
var strR=str01.replace(/javascript/ig, "Angular");
cl(strR);


//4
//replaceAll
var str01 ="Welcome in the beautiful world of javascript and Javascript is suitable for large application , i love javascript";
var strR=str01.replaceAll(/javascript/ig, "HTML");
cl(strR);


//5
//replaceAll
var str01 ="Welcome in the beautiful world of javascript and Javascript is suitable for large application , i love javascript";
var strR=str01.replaceAll("javascript", "Angular");
cl(strR);

//6
//upperCase
var str1="Welcome in the beautiful world of javascript ";
var strUp= str1.toUpperCase();
cl(strUp);

//7
//lowercase
var str2="WELCOME IN THE BEAUTIFUL WORLD OF JAVASCRIPT ";
var strLo=str2.toLowerCase();
cl(strLo);

//8
//trim
var str3="  Javascript  ";
var strtri=str3.trim();
cl(strtri);



//9
//concat
var str4="Welcome in the beautiful world of javascript ";
var str5="and Javascript is suitable for large application , ";
var str6="i love javascript";

var result=str4.concat(str5 , str3);;
cl(result);


//10
//chatAt
var str7="Javascript is My current learing language"
cl(str7.charAt(11));

//11
//indexof
var str02="Welcome in the beautiful world of javascript and Javascript is suitable for large application , i love javascript";
var strIndexof=str02.indexOf("javascript");
cl(strIndexof);


//12
 str02="Welcome in the beautiful world of javascript and Javascript is suitable for large application , i love javascript";
var strIndex1=str02.indexOf("angular");
cl(strIndex1);


//13
str03="Welcome in the beautiful world of javascript and Javascript is suitable for large application , i love javascript";
var strindex01=str03.indexOf("javascript" );
cl(strindex01);


//14
str04="Welcome in the beautiful world of javascript and Javascript is suitable for large application , i love javascript";
var strindex02=str04.indexOf( "suitable");
cl(strindex02);



//15
//lastindex
str04="Welcome in the beautiful world of javascript and Javascript is suitable for large application , i love javascript";
var lastindex02 = str04.lastIndexOf("javascript");
console.log(lastindex02);

//16
//slice
var skills=["Apple","Banana","Mango","papaya"," gava","kivi", "chiku"];
var skillsslice=skills.slice(4,10);
cl(skillsslice);

//17
//substring
var skills01=["Apple","Banana","Mango","papaya"," gava","kivi", "chiku"];
var subskills01=skills01.subString(5,10);
cl(subskills01);

//18
//substr
var skills02=["Apple","Banana","Mango","papaya"," gava","kivi", "chiku"];
var subskills02=skills02.substr(5,10);
cl(subskills02);












