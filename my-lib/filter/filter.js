(function() {
    var Filter = function(param) {
        extend(this, param);
        this.init(this);
    };

    extend(Filter.prototype, {
        url: '',
        init: function() {

        },
        getSerchStr: function() {

        },
        render: function(data, scope) {

        },
        search: function() {
            var self = this;
            var url = this.url;
            if (typeof url === 'function') {
                url = url(this);
            }
            var searchStr = this.getSerchStr(this);
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
