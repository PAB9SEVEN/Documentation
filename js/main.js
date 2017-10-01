var form=document.getElementById("myform");
var submit = document.getElementById("submit");


submit.addEventListener("click",function(){
   // alert(language.value);
    var language=document.getElementById("language");
    var lan=language.value;
    var url='http://devdocs.io/'+language.value.toLowerCase()+'/';
   // alert(url);
    // window.open(url, "_blank",);
    window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
var bookmark={
  name:lan,
  url:url
}
 //                console.log(bookmark);
//localStorage.setItem("test","hee");
    //var y=localStorage.getItem("test");
  //  alert(y);
if(localStorage.getItem("docs")==null){
    var docs=[];
    docs.push(bookmark);
    localStorage.setItem("docs",JSON.stringify(docs));
    
}
    else{
        var docs=JSON.parse(localStorage.getItem("docs"));
        docs.push(bookmark);
    localStorage.setItem("docs",JSON.stringify(docs));
        
    }
    document.getElementById("myform").reset();

    fetch();
 
    
});
function fetch(){
    var docs=JSON.parse(localStorage.getItem("docs"));
    var visited=document.getElementById('visited');
    visited.innerHTML="";
    for(var i=0;i<docs.length;i++){
        var lan=docs[i].name;
        var url=docs[i].url;
        visited.innerHTML += '<div class="jumbotron">'+
                                 '<h3>'+lan+
                                  ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> '+'</h3>'+
                                  '</div>';
}
    }
