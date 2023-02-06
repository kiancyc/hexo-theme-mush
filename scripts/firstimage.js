// get first image src from post
hexo.extend.helper.register('firstimage', function(post, defaultImage = "/image/thumbnail.png") {

    let firstImage = post.content.replace(/.*?src="([^"]*)".*/,'$1')

    if(firstImage)    
        return '/' + post.path + firstImage;
    else
        return defaultImage

})