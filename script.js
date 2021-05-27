var today = moment();
var hour = today.format('H');

var timeBlocks = $(".container");
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

if(localStorage.getItem("plans")){
    plans = JSON.parse(localStorage.getItem("plans"));
}else{
    var plans = ['', '', '', '', '', '', '', '', ''];
}
displayPlans();

if(hour < 9){
    for(var i = 0; i < timeBlocks.children().length; i++){
        timeBlocks.children().eq(i).children().eq(1).addClass('future');
    }
}else if(hour > 17){
    for(var i = 0; i < timeBlocks.children().length; i++){
        timeBlocks.children().eq(i).children().eq(1).addClass('past');
    }
}else{
    for(var i = 0; i < timeBlocks.children().length; i++){
        if(hour - 9 > i){
            timeBlocks.children().eq(i).children().eq(1).addClass('past');
        }else if(hour - 9 == i){
            timeBlocks.children().eq(i).children().eq(1).addClass('present');
        }else{
            timeBlocks.children().eq(i).children().eq(1).addClass('future');
        }
    }
}

function displayPlans(){
    for(var i = 0; i < plans.length; i++){
        timeBlocks.children().eq(i).children().eq(1).attr('value', plans[i]);
        console.log(timeBlocks.children().eq(i).children().eq(1));
    }
}


var save = $(".saveBtn");

for(var i = 0; i < save.length; i++){
    console.log('hi');
    save[i].addEventListener('click', function () {
        var btnNum = $(this).parent().index();
        plans[btnNum] = $(this).siblings('input').val();
        console.log(plans);
        console.log($(this).siblings('input').val());
        console.log(btnNum);
        localStorage.setItem('plans', JSON.stringify(plans));
    });
}
