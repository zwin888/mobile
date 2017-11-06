fis.match('::package', {
    spriter: fis.plugin('csssprites')
});

fis.match('**/*.{js,css,png,gif,jpg}', {
    useHash: false
});

fis.match('**/*.less', {
    rExt: '.css', 
    parser: fis.plugin('less'),
    useSprite: true,
    optimizer: fis.plugin('clean-css', {
        'keepBreaks': true
    })
});


fis.match("**/*.png",{
    optimizer: fis.plugin('png-compressor')
});

fis.match('**/*.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.match('**/*.css', {
    optimizer: fis.plugin('clean-css')
});



