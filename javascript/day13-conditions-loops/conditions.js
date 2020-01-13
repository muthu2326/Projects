function facebookLikes(likes){
    if(likes.length == 0){
        return `no one likes this`
    }else if(likes.length == 1){
        return `${likes[0]} likes this`
    }else if(likes.length == 2){
        return `${likes[0]},${likes[1]} likes this`
    } else if(likes.length == 3){
        return `${likes[0]}, ${likes[1]}, ${likes[2]} likes this`
    }else{
        return `${likes[0]}, ${likes[1]} and ${likes.length - 2} others likes this`
    }
}

console.log(facebookLikes([]))
console.log(facebookLikes(['Peter']))
console.log(facebookLikes(['Jacob','John']))
console.log(facebookLikes(['Max', 'Alex', 'Mark']))
console.log(facebookLikes(['Max', 'Alex', 'Mark','Anthony']))