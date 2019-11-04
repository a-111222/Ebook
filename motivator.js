var question={
"one":{
    open:false,
question:'What will you archive by reading this book',
answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
},
"two":{
    open:false,

question:'Why am I writing this book',
answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
},
"three":{
    open:false,
    question:'When, while the lovely valley',
    answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
},
"four":{
    open:false,
    question:'I feel the presence of the Almightyy',
    answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
},
}

var answer = {
    "one":{
        close:false,
    question:'What will you archive by reading this book',
    answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
    },
    "two":{
        close:false,
    question:'Why am I writing this book',
    answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
    },
    "three":{
        close:false,    
        question:'When, while the lovely valley',
        answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
    },
    "four":{
        close:false,
        question:'I feel the presence of the Almightyy',
        answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
    }, 
}
var testion = {
    "one":{
    nf:false,
    question:'What will you archive by reading this book',
    answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
    },
    "two":{
    nf:false,
    question:'Why am I writing this book',
    answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
    },
    "three":{
        nf:false,    
        question:'When, while the lovely valley',
        answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
    },
    "four":{
        nf:false,
        question:'I feel the presence of the Almightyy',
        answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
    }, 
}
var too = {
    "one":{
    vf:false,
    question:'What will you archive by reading this book',
    answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
    },
    "two":{
    vf:false,
    question:'Why am I writing this book',
    answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
    },
    "three":{
        vf:false,    
        question:'When, while the lovely valley',
        answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
    },
    "four":{
        vf:false,
        question:'I feel the presence of the Almightyy',
        answer:'“The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me? ” he thought. It wasn’t a dream and maybe something else',
    }, 
}


var app = new Vue({
el:'#elz',
data:{
    open:false,
    question:question,
   close:false,
    answer:answer,
    testion:testion,
    nf:false,
    too:too,
    vf:false
}
});

/***************************************/
/*start loading page*/

$(window).on('load',function(){
$('.loading').fadeOut(3000,function(){
$("body").css("overflow","auto");
});
});
/***************************************/
//hover for mobile-media//
function watchForHover() {
    var hasHoverClass = false;
    var container = document.body;
    var lastTouchTime = 0;

    function enableHover() {
        // filter emulated events coming from touch events
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;

        container.className += ' hasHover';
        hasHoverClass = true;
    }

    function disableHover() {
        if (!hasHoverClass) return;

        container.className = container.className.replace(' hasHover', '');
        hasHoverClass = false;
    }

    function updateLastTouchTime() {
        lastTouchTime = new Date();
    }

    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);

    enableHover();
}

watchForHover();
  