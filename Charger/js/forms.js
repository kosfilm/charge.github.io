function forms(){function e(){$.each($("select"),function(e,t){var s=e;$(this).hide(),0==$(this).parent(".select-block").length?$(this).wrap("<div class='select-block "+$(this).attr("class")+"-select-block'></div>"):$(this).parent(".select-block").find(".select").remove();var a,i,l="",n="",r=$(this).parent(".select-block"),o="<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";"multiple"==$(this).attr("multiple")&&(l="multiple",n="check"),$.each($(this).find("option"),function(e,t){""!=$(this).attr("value")?o=o+"<div data-value='"+$(this).attr("value")+"' class='select-options__value_"+s+" select-options__value value_"+$(this).val()+" "+$(this).attr("class")+" "+n+"'>"+$(this).html()+"</div>":"on"==$(this).parent().attr("data-label")&&0==r.find(".select__label").length&&r.prepend('<div class="select__label">'+$(this).html()+"</div>")}),o+="</div></div></div>","search"==$(this).attr("data-type")?(r.append("<div data-type='search' class='select_"+s+" select "+$(this).attr("class")+"__select "+l+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><input data-value='"+$(this).find('option[selected="selected"]').html()+"' class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"' /></div>"+o+"</div>"),$(".select_"+s).find("input.select-title__value").jcOnPageFilter({parentSectionClass:"select-options_"+s,parentLookupClass:"select-options__value_"+s,childBlockClass:"select-options__value_"+s})):r.append("<div class='select_"+s+" select "+$(this).attr("class")+"__select "+l+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'>"+$(this).find('option[selected="selected"]').html()+"</div></div>"+o+"</div>"),""!=$(this).find('option[selected="selected"]').val()&&r.find(".select").addClass("focus"),"on"==$(this).attr("data-req")&&$(this).addClass("req"),$(".select_"+s+" .select-options-scroll").niceScroll(".select-options-list",(a=100,i=50,isMobile.any()&&(a=10,i=1),{cursorcolor:"#2078e5",cursorwidth:"3px",background:"",autohidemode:!1,bouncescroll:!1,cursorborderradius:"0px",scrollspeed:a,mousescrollstep:i,directionlockdeadzone:0,cursorborder:"0px solid #fff"}))})}function a(e,t){e.find(".rating__activeline").css({width:t+"%"})}0<$("select").length&&(e(),$("body").on("keyup","input.select-title__value",function(){$(".select").not($(this).parents(".select")).removeClass("active").find(".select-options").slideUp(50),$(this).parents(".select").addClass("active"),$(this).parents(".select").find(".select-options").slideDown(50,function(){$(this).find(".select-options-scroll").getNiceScroll().resize()}),$(this).parents(".select-block").find("select").val("")}),$("body").on("click",".select",function(){$(this).hasClass("disabled")||($(".select").not(this).removeClass("active").find(".select-options").slideUp(50),$(this).toggleClass("active"),$(this).find(".select-options").slideToggle(50,function(){$(this).find(".select-options-scroll").getNiceScroll().resize()}),"search"==$(this).attr("data-type")&&($(this).hasClass("active")||searchselectreset(),$(this).find(".select-options__value").show()))}),$("body").on("click",".select-options__value",function(){if($(this).parents(".select").hasClass("multiple"))return $(this).hasClass("active")?(0<$(this).parents(".select").find(".select-title__value span").length?$(this).parents(".select").find(".select-title__value").append('<span data-value="'+$(this).data("value")+'">, '+$(this).html()+"</span>"):($(this).parents(".select").find(".select-title__value").data("label",$(this).parents(".select").find(".select-title__value").html()),$(this).parents(".select").find(".select-title__value").html('<span data-value="'+$(this).data("value")+'">'+$(this).html()+"</span>")),$(this).parents(".select-block").find("select").find("option").eq($(this).index()+1).prop("selected",!0),$(this).parents(".select").addClass("focus")):($(this).parents(".select").find(".select-title__value").find('span[data-value="'+$(this).data("value")+'"]').remove(),0==$(this).parents(".select").find(".select-title__value span").length&&($(this).parents(".select").find(".select-title__value").html($(this).parents(".select").find(".select-title__value").data("label")),$(this).parents(".select").removeClass("focus")),$(this).parents(".select-block").find("select").find("option").eq($(this).index()+1).prop("selected",!1)),!1;"search"==$(this).parents(".select").attr("data-type")?($(this).parents(".select").find(".select-title__value").val($(this).html()),$(this).parents(".select").find(".select-title__value").attr("data-value",$(this).html())):($(this).parents(".select").find(".select-title__value").attr("class","select-title__value value_"+$(this).data("value")),$(this).parents(".select").find(".select-title__value").html($(this).html())),$(this).parents(".select-block").find("select").find("option").removeAttr("selected"),""!=$.trim($(this).data("value"))?($(this).parents(".select-block").find("select").val($(this).data("value")),$(this).parents(".select-block").find("select").find('option[value="'+$(this).data("value")+'"]').attr("selected","selected")):($(this).parents(".select-block").find("select").val($(this).html()),$(this).parents(".select-block").find("select").find('option[value="'+$(this).html()+'"]').attr("selected","selected")),""!=$(this).parents(".select-block").find("select").val()?$(this).parents(".select-block").find(".select").addClass("focus"):($(this).parents(".select-block").find(".select").removeClass("focus"),$(this).parents(".select-block").find(".select").removeClass("err"),$(this).parents(".select-block").parent().removeClass("err"),$(this).parents(".select-block").removeClass("err").find(".form__error").remove()),""!=!$(this).parents(".select").data("tags")&&0==$(this).parents(".form-tags").find('.form-tags__item[data-value="'+$(this).data("value")+'"]').length&&$(this).parents(".form-tags").find(".form-tags-items").append('<a data-value="'+$(this).data("value")+'" href="" class="form-tags__item">'+$(this).html()+'<span class="fa fa-times"></span></a>'),$(this).parents(".select-block").find("select").change(),"on"==$(this).parents(".select-block").find("select").data("update")&&e()}),$(document).on("click touchstart",function(e){$(e.target).is(".select *")||$(e.target).is(".select")||($(".select").removeClass("active"),$(".select-options").slideUp(50,function(){}),searchselectreset())}),$(document).on("keydown",function(e){27==e.which&&($(".select").removeClass("active"),$(".select-options").slideUp(50,function(){}),searchselectreset())})),$("input,textarea").focus(function(){$(this).val()==$(this).attr("data-value")&&($(this).addClass("focus"),$(this).parent().addClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","password"),$(this).val("")),removeError($(this))}),$("input[data-value], textarea[data-value]").each(function(){""!=this.value&&this.value!=$(this).attr("data-value")||(this.value=$(this).attr("data-value"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),this.value!=$(this).attr("data-value")&&""!=this.value&&($(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),$(this).click(function(){this.value==$(this).attr("data-value")&&("pass"==$(this).attr("data-type")&&$(this).attr("type","password"),this.value="")}),$(this).blur(function(){""==this.value&&(this.value=$(this).attr("data-value"),$(this).removeClass("focus"),$(this).parent().removeClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","text"))})}),$(".form-input__viewpass").click(function(e){$(this).hasClass("active")?$(this).parent().find("input").attr("type","password"):$(this).parent().find("input").attr("type","text"),$(this).toggleClass("active")}),$.each($("input.phone"),function(e,t){$(this).attr("type","tel"),$(this).focus(function(){$(this).inputmask("+7(999) 999 9999",{clearIncomplete:!0,clearMaskOnLostFocus:!0,onincomplete:function(){maskclear($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")})}),$("input.phone").focusout(function(e){maskclear($(this))}),$.each($("input.num"),function(e,t){$(this).focus(function(){$(this).inputmask("9{1,1000}",{clearIncomplete:!0,placeholder:"",clearMaskOnLostFocus:!0,onincomplete:function(){maskclear($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")})}),$("input.num").focusout(function(e){maskclear($(this))}),$.each($(".check"),function(e,t){1==$(this).find("input").prop("checked")&&$(this).addClass("active")}),$("body").off("click",".check",function(e){}),$("body").on("click",".check",function(e){$(this).hasClass("disable")||($(e.target).is("a")||($(this).toggleClass("active"),$(this).hasClass("active")?$(this).find("input").prop("checked",!0):$(this).find("input").prop("checked",!1)))}),$.each($(".option.active"),function(e,t){$(this).find("input").prop("checked",!0)}),$(".option").click(function(e){$(this).hasClass("disable")||($(this).hasClass("active")&&$(this).hasClass("order")&&$(this).toggleClass("orderactive"),$(this).parents(".options").find(".option").removeClass("active"),$(this).toggleClass("active"),$(this).children("input").prop("checked",!0))}),$(".rating.edit .star").hover(function(){var e=$(this).parents(".rating");e.find(".rating__activeline").css({width:"0%"}),a(e,($(this).index()+1)/e.find(".star").length*100)},function(){var e=$(this).parents(".rating");e.find(".star").removeClass("active"),a(e,e.find("input").val()/e.find(".star").length*100)}),$(".rating.edit .star").click(function(e){var t=$(this).parents(".rating"),s=$(this).index()+1;t.find("input").val(s),a(t,s/t.find(".star").length*100)}),$.each($(".rating"),function(e,t){var s=$(this).find("input").val()/$(this).parent().find(".star").length*100;a($(this),s)}),$(".quantity__btn").click(function(e){var t=parseInt($(this).parent().find(".quantity__input").val());return $(this).hasClass("dwn")?(t-=1)<1&&(t=1):t+=1,$(this).parent().find(".quantity__input").val(t),!1}),0<$("#range").length&&($("#range").slider({range:!0,min:0,max:5e3,values:[0,5e3],slide:function(e,t){$("#rangefrom").val(t.values[0]),$("#rangeto").val(t.values[1]),$(this).find(".ui-slider-handle").eq(0).html("<span>"+t.values[0]+"</span>"),$(this).find(".ui-slider-handle").eq(1).html("<span>"+t.values[1]+"</span>")},change:function(e,t){t.values[0]!=$("#range").slider("option","min")||t.values[1]!=$("#range").slider("option","max")?$("#range").addClass("act"):$("#range").removeClass("act")}}),$("#rangefrom").val($("#range").slider("values",0)),$("#rangeto").val($("#range").slider("values",1)),$("#range").find(".ui-slider-handle").eq(0).html("<span>"+$("#range").slider("option","min")+"</span>"),$("#range").find(".ui-slider-handle").eq(1).html("<span>"+$("#range").slider("option","max")+"</span>"),$("#rangefrom").bind("change",function(){1*$(this).val()>1*$("#range").slider("option","max")&&$(this).val($("#range").slider("option","max")),1*$(this).val()<1*$("#range").slider("option","min")&&$(this).val($("#range").slider("option","min")),$("#range").slider("values",0,$(this).val())}),$("#rangeto").bind("change",function(){1*$(this).val()>1*$("#range").slider("option","max")&&$(this).val($("#range").slider("option","max")),1*$(this).val()<1*$("#range").slider("option","min")&&$(this).val($("#range").slider("option","min")),$("#range").slider("values",1,$(this).val())}),$("#range").find(".ui-slider-handle").eq(0).addClass("left"),$("#range").find(".ui-slider-handle").eq(1).addClass("right")),$(".form-addfile__input").change(function(s){if(""!=$(this).val()){var a=$(this);a.parents(".form-addfile").find("ul.form-addfile-list").html(""),$.each(s.target.files,function(e,t){0==a.parents(".form-addfile").find('ul.form-addfile-list>li:contains("'+s.target.files[e].name+'")').length&&a.parents(".form-addfile").find("ul.form-addfile-list").append("<li>"+s.target.files[e].name+"</li>")})}})}function digi(e){return e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")}function formValidate(e){var t=0,s=e.parents("form");if("email"==e.attr("name")||e.hasClass("email")){if(e.val()!=e.attr("data-value")){var a=e.val().replace(" ","");e.val(a)}/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(e.val())&&e.val()!=e.attr("data-value")?removeError(e):(t++,addError(e))}else""==e.val()||e.val()==e.attr("data-value")?(t++,addError(e)):removeError(e);return"checkbox"==e.attr("type")&&(1==e.prop("checked")?e.removeClass("err").parent().removeClass("err"):(t++,e.addClass("err").parent().addClass("err"))),e.hasClass("name")&&(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(e.val())||(t++,addError(e))),e.hasClass("pass-2")&&(s.find(".pass-1").val()!=s.find(".pass-2").val()?addError(e):removeError(e)),t}function formLoad(){$(".popup").hide(),$(".popup-message-body").hide(),$(".popup-message .popup-body").append('<div class="popup-loading"><div class="popup-loading__title">Идет загрузка...</div><div class="popup-loading__icon"></div></div>'),$(".popup-message").addClass("active").fadeIn(300)}function showMessageByClass(e){$(".popup").hide(),popupOpen("message."+e,"")}function showMessage(e){$(".popup-loading").remove(),$(".popup-message-body").show().html(e)}function clearForm(e){$.each(e.find(".input"),function(e,t){$(this).removeClass("focus").val($(this).data("value")),$(this).parent().removeClass("focus"),$(this).hasClass("phone")&&maskclear($(this))})}function addError(e){if(e.addClass("err"),e.parent().addClass("err"),e.parent().find(".form__error").remove(),e.hasClass("email")){var t="";null!=(t=(""==e.val()||(e.val(),e.attr("data-value")),e.data("error")))&&e.parent().append('<div class="form__error">'+t+"</div>")}else null!=e.data("error")&&0==e.parent().find(".form__error").length&&e.parent().append('<div class="form__error">'+e.data("error")+"</div>");0<e.parents(".select-block").length&&(e.parents(".select-block").parent().addClass("err"),e.parents(".select-block").find(".select").addClass("err"))}function addErrorByName(e,t,s){var a=e.find('[name="'+t+'"]');a.attr("data-error",s),addError(a)}function addFormError(e,t){e.find(".form__generalerror").show().html(t)}function removeFormError(e){e.find(".form__generalerror").hide().html("")}function removeError(e){e.removeClass("err"),e.parent().removeClass("err"),e.parent().find(".form__error").remove(),0<e.parents(".select-block").length&&(e.parents(".select-block").parent().removeClass("err"),e.parents(".select-block").find(".select").removeClass("err").removeClass("active"))}function removeFormErrors(e){e.find(".err").removeClass("err"),e.find(".form__error").remove()}function maskclear(e){""==e.val()&&(e.inputmask("remove"),e.val(e.attr("data-value")),e.removeClass("focus"),e.parent().removeClass("focus"))}function searchselectreset(){$.each($('.select[data-type="search"]'),function(e,t){var s=$(this).parent(),a=$(this).parent().find("select");1==$(this).find(".select-options__value:visible").length?($(this).addClass("focus"),$(this).parents(".select-block").find("select").val($(".select-options__value:visible").data("value")),$(this).find(".select-title__value").val($(".select-options__value:visible").html()),$(this).find(".select-title__value").attr("data-value",$(".select-options__value:visible").html())):""==a.val()&&($(this).removeClass("focus"),s.find("input.select-title__value").val(a.find('option[selected="selected"]').html()),s.find("input.select-title__value").attr("data-value",a.find('option[selected="selected"]').html()))})}forms(),$("form button[type=submit]").click(function(){var s=0,e=$(this).parents("form"),t=e.data("ms");return $.each(e.find(".req"),function(e,t){s+=formValidate($(this))}),0==s&&(removeFormError(e),null!=t&&""!=t?(showMessageByClass(t),!1):void 0)});