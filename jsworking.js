var listName=new Array();
listName[0]="yogesh";                                                                             
listName[1]="Johni"; 
listName[2]="jagesh";  
listName[3]="rahul";  
listName[4]="Jack";  
listName[5]="paul";  
listName[6]="jim";  
listName[7]="Atif";  
listName[8]="Salman";  
listName[9]="John";  

for(var i=0 ; i < listName.length ; i++)
{
    if(listName[i].charAt(0)==='J'||listName[i].charAt(0)==='j')
    {
        console.log("Goodbye  "+listName[i])
    }
    else{
        console.log("hello  "+listName[i])
    }
}