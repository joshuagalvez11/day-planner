var today = moment();
var hour = today.format('H');

var timeBlocks = $(".container");
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


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

