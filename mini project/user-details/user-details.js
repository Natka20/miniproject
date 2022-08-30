let url = new URL(location.href)
let id = url.searchParams.get('id')


fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    .then(response=> response.json())
    .then(users =>{
        let div = document.createElement('div')
        div.classList.add('details')
        document.body.appendChild(div)

        function recursion(item){
            for (const itemElement in item) {
                if (typeof item[itemElement] !=='object'){
                    let a = document.createElement('a')
                    a.append(`${itemElement} - ${item[itemElement]}`)
                    div.appendChild(a)
                }else {
                    recursion(item[itemElement])
                }
            }
        }
        recursion(users)

        let btnDiv = document.createElement('div')
        btnDiv.classList.add('btnDiv')
        let btn = document.createElement("button")
        btn.classList.add('btnDetails')
        btn.innerText = 'post of current user'
        btnDiv.appendChild(btn)
        document.body.appendChild(btnDiv)

        btn.onclick = function (){
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(resp => resp.json())
                .then(comments =>{
                    let allDiv = document.createElement('div')
                    allDiv.classList.add('allDiv')
                    document.body.appendChild(allDiv)
                    for (const comment of comments) {
                        let div = document.createElement('div')
                        div.classList.add('divClass')
                        div.innerText = ` ID-${comment.id}, comment : ${comment.title}`
                        let btnPosts = document.createElement('button')
                        btnPosts.classList.add('btnPosts')
                        btnPosts.innerText = 'show more'
                        btnPosts.onclick = function (){
                            location.href = `./post-details/post-details.html?id=${comment.id}`
                        }
                        div.append(btnPosts)
                        allDiv.appendChild(div)
                    }
                })
        }

    })
