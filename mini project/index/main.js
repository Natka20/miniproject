// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        let mainDiv = document.createElement('div')
        mainDiv.classList.add('mainDiv')
        document.body.appendChild(mainDiv)
        for (const user of users) {
            let div = document.createElement('div')
            div.innerText = `${user.id} - ${user.name}`
            div.classList.add('users')
            let btn = document.createElement('button')
            btn.classList.add('btn')
            btn.innerText = 'show more'
            btn.onclick = function (){
                location.href = `../user-details/user-details.html?id=${user.id}`
            }
            div.appendChild(btn)
            mainDiv.appendChild(div)
        }
    })

