(function (win, doc, $) {
    var OptionManager = function (opts) {
        this.prefix = opts.prefix ? opts.prefix + '-' : '';
        this.form = opts.form || $('<form>')[0];

        this.inputSelector = 'input[name^="' + this.prefix + '"]';

        this.initListener();
    };

    OptionManager.prototype.initListener = function () {
        var self = this,
            $form = $(this.form);

        $form.find(this.inputSelector).each(function () {
            var $input = $(this);
            $input.on('change', function () {
                self.saveValue($input.attr('name'), $input.val());
            });
        });
    };

    OptionManager.prototype.load = function () {
        var self = this,
            $form = $(this.form);

        $form.find(this.inputSelector).each(function () {
            var $input = $(this);
            $input.val(self.loadValue($input.attr('name')) || '');
        });
    };

    OptionManager.prototype.loadValue = function (name) {
        return localStorage[name] || null;
    };

    OptionManager.prototype.saveValue = function (name, value) {
        return localStorage[name] = value;
    };

    win.OptionManager = OptionManager;
})(window, window.document, jQuery);
