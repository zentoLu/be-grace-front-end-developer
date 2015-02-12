/*
* jQuery's clone() method works in most cases, but it fails to copy the value of textareas and select elements
*　具体bug见 fix jquery http://bugs.jquery.com/ticket/3016
* 另一个解决方案 https://github.com/spencertipping/jquery.fix.clone/blob/master/jquery.fix.clone.js
*/
$(function() {
    $.fn.cloneForm = function() {
    	var $form = $(this);
        var $clonedForm = $form.clone();
        var $missingClonedInput = $clonedForm.find('textarea,select');
        $form.find('textarea,select').each(function(index) {
            $missingClonedInput.eq(index).val($(this).val());
        });
        return $clonedForm;
    }
})();