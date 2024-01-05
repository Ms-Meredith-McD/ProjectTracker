var today = dayjs();

function updateTime() {
    today = dayjs();
    var reformatDate = today.format('dddd, MMMM D YYYY, h:mm:ss a');
    $('#3a').text(reformatDate);
}
interval = setInterval(() => {
    updateTime()
}, 1000);

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})

