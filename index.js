console.log("javascript 로딩")


window.onload = async function loadArticles(){
    const response = await fetch('http://127.0.0.1:8000/articles/', {method:'GET'})

    response_json = await response.json()
    console.log(response_json)

    // document = html 즉 'articles' 라는 ID를 가지고 있는 html에서 element를 가지고 와
    const articles = document.getElementById("articles")

    // For 문으로 element를 하나씩 가져올거야
    response_json.forEach(element => {
        const newArticle = document.createElement("div")
        newArticle.innerText = element.title
        articles.appendChild(newArticle)
    });
}