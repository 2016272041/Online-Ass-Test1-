//load mysql pool connection//
const pool = require(/tests/tests);
const pool = require(/company/company);
const pool = require(/quiz/quiz);

//display all test reg//
applicationCache.get('/test', (request,response) => {
    pool.query('SELECT * FROM test',(error,result) => {
        if (error) throw error;
        response.send(result);
    });
});

applicationCache.get('/company', (request,response) => {
    pool.query('SELECT * FROM company',(error,result) => {
        if (error) throw error;
        response.send(result);
    });
});

applicationCache.get('/quiz', (request,response) => {
    pool.query('SELECT * FROM quiz', (error,result) => {
        if(error) throw error;
        response.send(result);
    });
});

//updating on existing company//
applicationCache.get('/tests', (request,response) => {
    pool.query('SELECT * FROM tests',(error,result) => {
        if (error) throw error;
        response.send(result);
    });
});

applicationCache.update('/company/:company', (request, response) => {
    const company = request.params.company;
    pool.query('update company SET ? WHERE company = ?', [request.body, company], (error, result) => {
        if (error) throw error;
        response.send('company updated successfully.');
    });
});

applicationCache.get('/questions/:questions', (request, response) => {
    const questions = request.params.quiz;
    pool.query('update questions SET ? WHERE questions = ?', [request.body, quiz], (error, result) => {
        if (error) throw error;
        response.send('questions updated successfully.');
    });
});
 
applicationCache.get('/quiz/:quiz', (request, response) => {
    const quiz = request.params.quiz;
    pool.query('update quiz SET ? WHERE quiz = ?', [request.body, quiz], (error, result) => {
        if(error) throw error;
        response.send('quiz updated successfully.');
    });
});


//company registration //
applicationCache.addEventListener('/quiz/:quiz', (request, response) => {
    const quiz = request.params.quiz;

    pool.query('DELETE FROM quiz WHERE quiz = ?', quiz_id,(error, result) => {
        if (error) throw error;
        response.send('quiz deleted.');
    });
});

applicationCache.addEventListener('/company/:company', (request, response) => {
    const company = request.params.company;

    pool.query('DELETE FROM company WHERE company = ?', company_id,(error, result) => {
        if (error) throw error;
        response.send('company deleted.');
    });
});