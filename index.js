let main_container = document.querySelector(".main_container")

fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=915f4fb5b5174a5f8ddcf383ed128ca1")
.then((respond) => respond.json())
.then((data) => {

    
    console.log(data)
    for (let index = 0; index < data.articles.length; index++) {
        
        let publised_date = data.articles[index].publishedAt
        let newsDiv = document.createElement("div")
        newsDiv.setAttribute("class", "news_div")
        let photoDiv = document.createElement("div")
        photoDiv.setAttribute("class", "photoDiv")
        let contentDiv = document.createElement("div")
        contentDiv.setAttribute("class", "contentDiv")
        let a = document.createElement("a")
        a.setAttribute("href", "")
        let mainImg = document.createElement("img")
        mainImg.setAttribute("class", "mainImg")
        let title = document.createElement("h1")
        title.setAttribute("class", "title")
        let content = document.createElement("p")
        content.setAttribute("class", "content")
        let published = document.createElement("p")
        published.setAttribute("class", "published")

        mainImg.src = data.articles[index].urlToImage
        a.href = data.articles[index].url
        main_container.append(newsDiv)
        newsDiv.append(photoDiv)
        newsDiv.append(contentDiv)
        photoDiv.append(a)
        a.append(mainImg)
        contentDiv.append(title)
        contentDiv.append(content)
        contentDiv.append(published)


        if(data.articles[index].urlToImage == null ){

            mainImg.src = "https://magicest.com/wp-content/themes/realestate-7/images/no-image.png"

        }

        title.innerHTML = data.articles[index].title
        content.innerHTML = data.articles[index].content
        published.innerHTML = " Published at " + publised_date.substring(0,10)
         
     }
    
})








