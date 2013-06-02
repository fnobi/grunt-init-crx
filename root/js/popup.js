$(function () {
    var optionManager = new OptionManager({
        prefix: '{%= name %}'
    });
    var message = optionManager.loadValue('{%= name %}-message') || 'hoge';

    $('body').prepend(['<h1>', message, '</h1>'].join(''));
});