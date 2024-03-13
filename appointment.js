
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://slg.xianmaigu.com/api/seatAppointment/seaAappointment.html`;
const method = `POST`;
const headers = {
'Accept' : `*/*`,
'Accept-Encoding' : `gzip,compress,br,deflate`,
'Connection' : `keep-alive`,
'Referer' : ``,
'Content-Type' : `application/x-www-form-urlencoded`,
'Host' : `slg.xianmaigu.com`,
'User-Agent' : ``,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
