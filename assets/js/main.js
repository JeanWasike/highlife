(function ($) {
    // USE STRICT
    //"use strict";
/*
    $(".form-radio .radio-item").click(function(){
        //Spot switcher:
        $(this).parent().find(".radio-item").removeClass("active");
        $(this).addClass("active");
    });
  
    $('#course_type').parent().append('<ul class="list-item" id="newcourse_type" name="course_type"></ul>');
    $('#course_type option').each(function(){
        $('#newcourse_type').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#course_type').remove();
    $('#newcourse_type').attr('id', 'course_type');
    $('#course_type li').first().addClass('init');
    $("#course_type").on("click", ".init", function() {
        $(this).closest("#course_type").children('li:not(.init)').toggle('slow');
    });
*/
    $('#delivery').parent().append('<ul class="list-item" id="delivery" name="delivery"></ul>');
    $('#newdelivery option').each(function(){
        $('#newconfirm_type').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#delivery').remove();
    $('#newdelivery').attr('id', 'delivery');
    $('#delivery li').first().addClass('init');
    $("#delivery").on("click", ".init", function() {
        $(this).closest("#delivery").children('li:not(.init)').toggle('slow');
    });

    $('#day').parent().append('<ul class="list-item" id="day" name="day"></ul>');
    $('#newday option').each(function(){
        $('#newday').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#day').remove();
    $('#newday').attr('id', 'day');
    $('#day li').first().addClass('init');
    $("#day").on("click", ".init", function() {
        $(this).closest("#day").children('li:not(.init)').toggle('slow');
    });
    
    $('#hour_appointment').parent().append('<ul class="list-item" id="newhour_appointment" name="hour_appointment"></ul>');
    $('#hour_appointment option').each(function(){
        $('#newhour_appointment').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#hour_appointment').remove();
    $('#newhour_appointment').attr('id', 'hour_appointment');
    $('#hour_appointment li').first().addClass('init');
    $("#hour_appointment").on("click", ".init", function() {
        $(this).closest("#hour_appointment").children('li:not(.init)').toggle('slow');
    });

    var DayOptions = $("#day").children('li:not(.init)');
    $("#cday").on("click", "li:not(.init)", function() {
        DayOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#day").children('.init').html($(this).html());
        DayOptions.toggle('slow');
    });

    var DeliveryOptions = $("#delivery").children('li:not(.init)');
    $("#cdeliverye").on("click", "li:not(.init)", function() {
        DeliveryOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#delivery").children('.init').html($(this).html());
        DeliveryOptions.toggle('slow');
    });

    var AppointmentOptions = $("#hour_appointment").children('li:not(.init)');
    $("#hour_appointment").on("click", "li:not(.init)", function() {
        AppointmentOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#hour_appointment").children('.init').html($(this).html());
        AppointmentOptions.toggle('slow');
    });

  /*  $('#submit').click(function() {
        $('#appointment-form').submit();
    });
    
    */    $('#appointment-form').submit(function(event){
        event.preventDefault();
            alert("hi");
            
            return false;/*
            var data=$('#appointment-form').serializeArray();
            var username= data[0].value;
            var student_id= data[1].value;
            var phone= data[2].value;
            var school= data[3].value;
            var delivery= data[4].value;
            var day= data[5].value;
            var hour= data[6].value;
           
            var counselor;
    
            if(school=="Strathmore University"){
                if(hour=="8h-10h"){
                    counselor="Dr. Otieno";
                }else  if(hour=="10h-12h"){
                    counselor="Dr. Mulindi";
                }else  if(hour=="13h-15h"){
                    counselor="Fr. Jude";
                }else  if(hour=="15h-17h"){
                    counselor="Dr. Wairimu";
                }
            }else if(school=="Strathmore University"){
                if(hour=="8h-10h"){
                    counselor="Dr. Otieno";
                }else  if(hour=="10h-12h"){
                    counselor="Dr. Mulindi";
                }else  if(hour=="13h-15h"){
                    counselor="Fr. Jude";
                }else  if(hour=="15h-17h"){
                    counselor="Dr. Wairimu";
                }
            }else{
                counselor= "wrong inputs";
            }
    
            $('#counselor').append(counselor);
            console.log(counselor);
            event.preventDefault();
            return false;
         */ });
          
       /* $('[href="#finish"]').click(function() {
            $('#wizard').submit();
        });*/
  

});

