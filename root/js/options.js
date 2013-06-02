$(function () {
    new OptionManager({
        prefix: '{%= name %}',
        form: $('#{%= name %}-form')[0]
    }).load();
});