(function() {
    var Filter = function(param) {
        extend(this, param);
        this.init(this);
    };

    extend(Filter.prototype, {
        url: '',
        init: function() {

        },
        getSearchStr: function() {
            // example
            // var queryArr = [];
            // var $el = this.$el;
            // if ($el) {
            //     var $querys = $el.find('.search-condition .condition-item');
            //     queryArr.push([this.pageParamName, this.pageAt].join('='));
            //     $querys.each(function() {
            //         var $this = $(this);
            //         var $selected = $this.find('.selected');
            //         var val = $selected.data('id');
            //         if (val !== undefined) {
            //             queryArr.push([$this.data('type-id'), val].join('='));
            //         }
            //     });
            //     var $searchText = $el.find('.search-condition .text-query-item :text');
            //     $searchText.each(function() {
            //         var $this = $(this);
            //         var val = $this.val();
            //         if ($.trim(val) !== '') {
            //             queryArr.push([$this.attr('name'), val].join('='));
            //         }
            //     });

            //     var $sortBtn = $('.selected.sort-btn', $el);
            //     $sortBtn.each(function() {
            //         var $this = $(this);
            //         queryArr.push([$this.data('type-id'), $this.data('id')].join('='));
            //     });

            //     var $checkbox = $('.checkbox:checked', $el);
            //     $checkbox.each(function() {
            //         var $this = $(this);
            //         queryArr.push([$this.attr('name'), $this.val()].join('='));
            //     });

            //     var res = queryArr.join('&');
            //     var url = this.getUrl();
            //     if (url.indexOf('?') > -1) {
            //         res = '&' + res;
            //     } else {
            //         res = '?' + res;
            //     }
            //     return res;
            // }
        },
        render: function(data, scope) {

        },
        search: function() {
            var self = this;
            var url = this.url;
            if (typeof url === 'function') {
                url = url(this);
            }
            var searchStr = this.getSearchStr(this);
            url = url + searchStr;
            url = encodeURI(url);
            $.ajax({
                url: url
            }).done(function(data) {
                self.render(data, self);
            });
        }
    });

    function extend(target, obj){
        for(var key in obj){
            target[key] = obj[key];
        }
    }
    window.Filter = Filter;
})();
