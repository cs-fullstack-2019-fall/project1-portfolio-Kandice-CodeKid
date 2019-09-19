// $(document).ready(function() {
//     $('#button1').click(function() {
//         $('#form1').attr('action',
//             'mailto:theharrisway@outlook.com?subject=' +
//             $('#fname').val() + '&body=' + $('#emailAdd').val()+ '&body=' + $('#message').val());
//         $('#form1').submit();
//     });
// });

function submitForm()
{
    document.getElementById("form1").onsubmit("mailto:theharrisway@outlook.com");
    alert("Thank you for the message!")
}

submitForm()