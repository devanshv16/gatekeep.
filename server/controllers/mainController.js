// Get Homepage

exports.homepage = async (req,res) =>{
    const locals = {
        title: 'gatekeep.',
        description: 'gatekeep all your ideas'
    }
    res.render('index',{
        locals,
        layout: '../views/layouts/front-page'
    });
}

// Get About

exports.about = async (req,res) =>{
    const locals = {
        title: 'about ~ gatekeep.',
        description: 'gatekeep all your ideas'
    }
    res.render('about',locals);
}