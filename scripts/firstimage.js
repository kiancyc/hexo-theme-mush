// get first image src from post
hexo.extend.helper.register('firstimage', function(post, defaultImage = "/image/thumbnail.png") {

    let images = post.content.match(/src\s*=\s*"(.+?)"/)

    if(images && images.length >0)
        var firstImage = images[1]

    if(firstImage)
        return '/' + post.path + firstImage;
    else
        return defaultImage

})