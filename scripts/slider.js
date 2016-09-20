function Slider (sSelector) {
    var s = this; 

    
    /* ------------- properties ------------- */
    
    s.review = $(sSelector);
    
    s.slider = s.review.find('#slider_wrapper');
    s.images = s.review.find('.img_review');
    s.texts = s.review.find('.review_text');
    s.buttons = s.review.find('.slider_listitem');
    s.dispContent = s.review.find('div[class^="reviewdiv"]');
    s.currentImg = null;
    s.currentBtn = null;
    s.leftBtn = s.review.find('#left');
    s.rightBtn = s.review.find('#right');
    s.maxImg = s.images.length;
    s.sliderWidth = s.dispContent.width();
    
    
    /* -------------- methods -------------- */

    $(document).ready(function(){
        s.slider.width(s.sliderWidth);
    })
        
    s.highlightBtn = function() {
        s.currentBtn = $(this);
        s.buttons.removeClass('active');
        s.currentBtn.addClass('active');     
    }
    
    s.moveRight = function() {
        s.showContent(s.sliderWidth); 
    }
    
    s.moveLeft = function() {
        s.showContent(-s.sliderWidth); 
    }
    
    s.showContent = function(width) {
        s.currentImg = 
        s.dispContent.each(function(i, el) {
            $(el).animate({
                left: width
            }, 700);
        });
    }
        
//        s.dispContent.css('display', 'none');
//        
//        s.dispContent.each(function(i, el) {
//            if(s.currentImg == $(el).attr('class').slice(-1)) {
//                console.log($(el).attr('class').slice(-1));
//                $(el).css('display', 'block');
//            }
//        });

    
    /* -------------- events -------------- */
    
    s.buttons.click(s.highlightBtn);
    s.buttons.click(s.showContent);
    s.leftBtn.click(s.moveLeft);
    s.rightBtn.click(s.moveRight);
    
}