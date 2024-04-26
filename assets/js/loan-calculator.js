function loancalculate(){var e=jQuery("#principal-show").text(),n=jQuery("#totalyear-show").text(),l=jQuery("#intrest").text()/100/12,t=Math.pow(1+l,n),a=e*l*(t/(t-1)),l=n*a,t=l-e,n=t/l*100;$("#tbl_int-pge").html(n.toFixed(2)+" %"),$("#tbl_loan_pge").html(100-n.toFixed(2)+" %");a=a.toFixed(2).toString().replace(/,/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","),e.toString().replace(/,/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","),l=l.toFixed(2).toString().replace(/,/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","),t=t.toFixed(2).toString().replace(/,/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",");$input_principal=$("#principal-input").val().toString().replace(/,/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","),jQuery("#monthly-emi").html(a),jQuery("#total-interest").html(t),jQuery("#total-amount").html(l),jQuery("#principal-input").val($input_principal),$("#loan-chart").length}function principal_value(){$text_val=$("#principal-input").val().toString(),$new_text_val=parseInt($text_val.replace(/,/g,""));var e=$("#finlon-principal-slide").slider("option","max");$new_text_val>e&&$("#principal-input").val(e);e=$("#finlon-principal-slide").slider("option","min");$new_text_val<e&&$("#principal-input").val(e),$("#finlon-principal-slide").slider({range:"min",min:3e4,max:5e5,value:$new_text_val,step:1e3,slide:function(e,n){$("#principal-show").text(n.value),$("#principal-input").val(n.value),loancalculate()}}),$("#principal-show").text($("#finlon-principal-slide").slider("value")),loancalculate(),chart_render()}function loan_year_value(){$loan_year=$("#loan-year-input").val();var e=$("#finlon-year-slide").slider("option","max");$loan_year>e&&$("#loan-year-input").val(e);e=$("#finlon-year-slide").slider("option","min");$loan_year<e&&$("#loan-year-input").val(e),$("#finlon-year-slide").slider({range:"min",min:6,max:60,step:1,value:$loan_year,slide:function(e,n){$("#totalyear-show").text(n.value),$("#loan-year-input").val(n.value),loancalculate()}}),$("#totalyear-show").text($("#finlon-year-slide").slider("value")),loancalculate(),chart_render()}function interest_rate_value(){$loan_rate=$("#interest-rate-input").val();var e=$("#finlon-year-slide").slider("option","max");$loan_rate>e&&$("#interest-rate-input").val(e),$("#finlon-intrest-slide").slider({range:"min",min:8,max:24,step:.1,value:$loan_rate,slide:function(e,n){$("#intrest").text(n.value),$("#interest-rate-input").val(n.value),loancalculate()}}),$("#intrest").text($("#finlon-intrest-slide").slider("value")),$("#interest-rate-input").val($("#finlon-intrest-slide").slider("value")),loancalculate(),chart_render()}function chart_render(){var e=chart_options();Highcharts.chart("loan-chart",e),$(window).width()}function chart_options(){var e=parseInt($("#principal-show").text()),n=$("#total-interest").text().toString();return{chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:!1},title:{text:"",align:"center",verticalAlign:"middle",y:40},colors:["#e63a27","#1c1c27"],plotOptions:{pie:{dataLabels:{enabled:!0,distance:-50,style:{fontWeight:"bold",color:"white"}},startAngle:-90,endAngle:90,center:["50%","120%"],size:"230%"}},series:[{type:"pie",name:"",innerSize:"50%",data:[["Principal value",e],["Interest Value",parseFloat(n.replace(/,/g,""))],{dataLabels:{enabled:!0}}]}]}}function value(){$text_val=$("#principal-input").val().toString(),$input_value=$text_val.replace(/,/g,""),console.log($.isNumeric($input_value)),console.log($input_value),0==$.isNumeric($input_value)&&$("#principal-input").val($("#principal-show").text())}function onlynumeric(e){e=e.which||e.keycode;return 48<=e&&e<=57&&190==e}$("#personal-loan-calculator").length&&jQuery(function(l){l("#finlon-principal-slide").slider({range:"min",min:3e4,max:5e5,value:1e5,step:1e3,slide:function(e,n){l("#principal-show").text(n.value),l("#principal-input").val(n.value),loancalculate()},change:function(){chart_render()}}),l("#principal-show").text(l("#finlon-principal-slide").slider("value")),l("#principal-input").val(l("#finlon-principal-slide").slider("value")),l("#principal-input").on("keyup",function(e){13===e.keyCode&&principal_value()}),l("#principal-input").blur(function(e){principal_value()}),l("#finlon-year-slide").slider({range:"min",min:6,max:60,step:1,value:12,slide:function(e,n){l("#totalyear-show").text(n.value),l("#loan-year-input").val(n.value),loancalculate()},change:function(){chart_render()}}),l("#totalyear-show").text(l("#finlon-year-slide").slider("value")),l("#loan-year-input").val(l("#finlon-year-slide").slider("value")),l("#loan-year-input").blur(function(){loan_year_value()}),l("#loan-year-input").on("keyup",function(e){13===e.keyCode&&loan_year_value()}),l("#finlon-intrest-slide").slider({range:"min",min:8,max:24,step:.01,value:10,slide:function(e,n){l("#intrest").text(n.value),l("#interest-rate-input").val(n.value),loancalculate()},change:function(){chart_render()}}),l("#intrest").text(l("#finlon-intrest-slide").slider("value")),l("#interest-rate-input").val(l("#finlon-intrest-slide").slider("value")),l("#interest-rate-input").blur(function(){interest_rate_value()}),l("#interest-rate-input").on("keyup",function(e){13===e.keyCode&&interest_rate_value()}),loancalculate(),chart_render()});