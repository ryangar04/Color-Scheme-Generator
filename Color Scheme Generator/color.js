const colorSchemeButton = document.getElementById("my-btn")
const eyeDropper = document.getElementById("color-input") //eyeDropper.value
const schemeSelect = document.getElementById("color-scheme") //schemeSelect.value
const baseURL = 'https://www.thecolorapi.com'
let mode = ''
let colorCode = ''
colorSchemeButton.addEventListener("click", generateColors)

function generateColors() {
    mode = schemeSelect.value
    colorCode = eyeDropper.value
    fetch(baseURL + `/scheme?hex=${eyeDropper.value.substring(1)}&mode=${schemeSelect.value.toLowerCase()}&count=5`)
        .then(res => res.json())
        .then(data => {
            let colorHtml = ''
            for(let i = 0; i < data.colors.length; i++){
                colorHtml +=
                    `<div class="color">
                        <div class="display-color" style="background: ${data.colors[i].hex.value};">
                            <h2 class="hex wideflex">${data.colors[i].name.value}<br>${data.colors[i].hex.value}</h2>
                        </div>
                    </div>`
            }
            document.getElementById("colors").innerHTML = colorHtml
        })
}



