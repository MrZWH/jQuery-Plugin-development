(function($) {
    var privateFun = function() {

    };

    var PageSwitch = (function() {
        function PageSwitch(element, options) {
            this.settings = $.extend(true, $.fn.PageSwitch.default, options || {});
            this.element = element;
            this.init();
        }

        PageSwitch.prototype = {
            init: function() {
                var me = this;
                me.selectors = me.settings.selectors;
                me.sections = me.settings.sections;
                me.section = me.settings.section;
                me.direction = me.settings.direction == "vertical" ? true : false;
            },

            pagesCount: function() {
                
            }

        }

        return PageSwitch;
    })();

    $.fn.PageSwitch = function(options) {
        return this.each(function() {
            var me = $(this),
            instance = me.data("PageSwitch");
            if (!instance) {
                instance = new PageSwitch(me, options);
                me.data("PageSwitch", instance);
            }

            if ($.type(options) === "string") return instance[options]();
        })
    };

    $.fn.PageSwitch.default = {
        selectors: {
            sections: ".sections",
            section: ".section",
            page: ".pages",
            active: ".active"
        },
        index: 0,
        easing: "ease",
        duration: 500,
        loop: false,
        pagination: true,
        keyboard: true,
        direction: "vartical",
        callback: ""
    };

    $(function() {
        $("[data-pageswitch]").PageSwitch();
    })
})(jQuery)