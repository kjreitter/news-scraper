$(document).ready(function ()
{
    $('.button-collapse').sideNav();

    $('#noteButton').on('click', function (noteRet)
    {
    note.RetstopImmediatePropagation();

    var currentButton = $(this).attr('id');

    populateNote(currentButton);

$('#noteModal').modal('open');
$('#noteButton').on('click', function (noteRet){
    noteRet.preventDefault();

 var noteText = $('#noteText');
 
 $.post("/note/" + currentButton, $('#noteForm').serialize())
 .done(function (data){
     populateNote(currentButton);

 });
 noteText.val('');

 return false;
});
    });
})

function populateNote(id)
{
    $('.message').empty();

    $.get('/note/' + id, function (data)
    {
        for (var i = 0; i < data.length; i++)
        {
            var note = $(
                '<li class ="note collection-item">'
                +'<p>'
                + (i+1) + ':' + data[i].noteText + '<p>'
                + '<button class = "individualNoteButton waves-effect waves-purple btin-flat blue" data-currentButtonId="' + data[i]._id + 
                + '</id>'
            );
            $('.messages').append(note);
        }
    })
    .then(function()
    {
        $(".individualNoteButton").on("click", function()
        {
            var currentButtonId = $(this).data(currentButtonId);

            $.post("/deletNote/" + currentButtonId.currentbuttonid, $('#noteForm').serialize())
            .done(function (data){

                $('#noteModal').modal('close');
            })
            .fail(function (){
            });
        });
    })
}
