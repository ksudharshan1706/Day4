const request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send(null)
request.onload = function() {
    const response = JSON.parse(request.responseText)
    for(var country of response){
        var {flag} = country
        console.log(`Country Flag = ${flag}`)
    }
}