   $( document ).ready(function() {
     $('img')
     .filter(function() {
       return this.src.match(/customlink.png/);
     })
     .addClass("background_custom_link");

     $('img')
     .filter(function() {
       return this.src.match(/email.png/);
     })
     .addClass("background_mail_link");

	   $('[title]').removeAttr('title');

     $(".tmm_phover_promos-1_0").attr("id","tmanne");
     $(".tmm_phover_promos-1_1").attr("id","tmalexis");
     $(".tmm_phover_promos-1_2").attr("id","tmmdamien");
     $(".tmm_phover_promos-1_3").attr("id","tmmjohan");
     $(".tmm_phover_promos-1_4").attr("id","tmlucie");
     $(".tmm_phover_promos-1_5").attr("id","tmlaeti");
     $(".tmm_phover_promos-1_6").attr("id","tmmedo");
     $(".tmm_phover_promos-1_7").attr("id","tmnadege");
     $(".tmm_phover_promos-1_8").attr("id","tmnico");
     $(".tmm_phover_promos-1_9").attr("id","tmpierre");
     $(".tmm_phover_promos-1_10").attr("id","tmquentin");
     $(".tmm_phover_promos-1_11").attr("id","tmtheo");
     $(".tmm_phover_promos-1_12").attr("id","tmvirgil");
     $(".tmm_phover_promos-1_13").attr("id","tmxavier");
     $(".tmm_phover_promos-1_14").attr("id","tmchristopher");


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 200) {
        //clearHeader, not clearheader - caps H
        $(".navbar").addClass("navbarscrol");
    }  else {
        $(".navbar").removeClass("navbarscrol");
    }
});


   });
