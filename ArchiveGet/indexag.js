function getRequest() {
    const arcCI = document.getElementById('inputId').value

    fetch('http://localhost:3000/' + arcCI, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            document.getElementById('spanArcC').innerHTML = 'ARCHIVE CODE: --N/A-- NO INFO'
            document.getElementById('spanFLink').innerHTML = 'ARCHIVE LINK: --N/A-- NO INFO'
            document.getElementById('spanAddInfo').innerHTML = 'ADDITIONAL INFO: --N/A-- NO INFO'

            if(data == "{}") {
                document.getElementById('spanAddInfo').innerHTML = 'ADDITIONAL INFO: null'
            }

            document.getElementById('spanArcC').innerHTML = 'ARCHIVE CODE: ' + data.arcC
            document.getElementById('spanFLink').innerHTML = 'ARCHIVE LINK: ' + data.fLink
        })
        .catch((error) => {
            console.log(error)

            document.getElementById('spanArcC').innerHTML = 'ARCHIVE CODE: --N/A-- NO INFO'
            document.getElementById('spanFLink').innerHTML = 'ARCHIVE LINK: --N/A-- NO INFO'
            document.getElementById('spanAddInfo').innerHTML = 'ADDITIONAL INFO: --N/A-- NO INFO'

            document.getElementById('spanArcC').innerHTML = 'ARCHIVE CODE: ERROR'
            document.getElementById('spanFLink').innerHTML = 'ARCHIVE LINK: ERROR'

            document.getElementById('spanAddInfo').innerHTML = 'ADDITIONAL INFO: ' + error
        })


}