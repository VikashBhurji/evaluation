async function apiCall(url) {
    try {
        let res=await fetch(url);
        let maindata=await res.json();
        return maindata;
    } catch (error) {
        console.log("error",error);
    }

    //add api call logic here
   

}


function appendArticles(articles,main) {
    articles.forEach((element) => {
        let div=document.createElement("div");

        let image=document.createElement("img");
        image.src=element.urlToImage;
        let p=document.createElement("p");
        p.innerText=element.title;

        let p2=document.createElement("p");
        p2.innerText=element.description;
        div.append(p,p2,image);
        div.onclick=()=>{
            localStorage.setItem("clicked_image",JSON.stringify(element));
            window.location.href="news.html";
        }

        main.append(div);
        div.setAttribute("class","maindiv");
    });
    //add append logic here

}

export { apiCall, appendArticles };