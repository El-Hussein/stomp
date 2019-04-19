var client = Stomp.client('ws://localhost:15674/ws');
var on_connect = function (x) {
    id = client.subscribe("/exchange/logs", function (d) {
        console.log(d.body)
        var data = JSON.parse(d.body);
        console.log(data.content)
        document.getElementById("chatbody").innerHTML +=("<div>" + data.name + " : " + data.content + "</div>")
    });
};
var on_error = function () {
    console.log('error');
};
client.connect('guest', 'guest', on_connect, on_error, '/');

function send(argument) {
client.send("/exchange/logs", {}, JSON.stringify({name:$('#name').val(), content:$('#content').val()}));
}