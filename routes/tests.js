var express = require('express')
var app = express()

// SHOW LIST OF CREATORS //
app.get('/src/app/tests/tests', function(req, res, next) {
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM tests ORDER BY test_id DESC',function(err, rows, fields) {
			//if(err) throw err
			if (err) {
				req.flash('error', err) 
				res.render('tests/tests', {
					title: 'Tests List', 
					data: ''
				})
			} else {
				// render to views/tests/list.ejs template file
				res.render('tests/tests', {
					title: 'Tests List', 
					data: rows
				})
			}
		})
	})
})

// SHOW ADD TESTS FORM
app.get('/src/app/tests/tests', function(req, res, next){	
	// render to views/tests/add.ejs
	res.render('tests/tests', {
		title: 'Add New Tests',
		tests_id: '',
		test_name: '',
        test_creator: ''		
	})
})

// ADD NEW TESTS POST ACTION
app.post('/add', function(req, res, next){	
	req.assert('test_id', 'A Valid Creator ID is required').isInt()           //Validate Creator ID
	req.assert('test_name', 'Test Name is required').notEmpty()             //Validate Test Name
    req.assert('test_creator', 'Test creator is required').notEmpty()  //Validate Test Type
    
    var errors = req.validationErrors()
    
    if( !errors ) {   //No errors were found.  Passed Validation!
		
		/********************************************
		 * Express-validator module
		 
		req.body.comment = 'a <span>comment</span>';
		req.body.tests = '   a tests    ';
		req.sanitize('comment').escape(); // returns 'a &lt;span&gt;comment&lt;/span&gt;'
		req.sanitize('companyname').trim(); // returns 'a company'
		********************************************/
		var tests = {
			test_id: req.sanitize('test_id').escape().trim(),
			test_name: req.sanitize('test_name').escape().trim(),
            test_creator: req.sanitize('test_creator').escape().trim(),
		}
		
		req.getConnection(function(error, conn) {
			conn.query('INSERT INTO tests SET ?', tests, function(err, result) {
				//if(err) throw err
				if (err) {
					req.flash('error', err)
					
					// render to views/tests/add.ejs
					res.render('tests/tests', {
						title: 'Add New Tests',
						test_id: tests.test_id,
						test_name: tests.test_name,
						test_creator: tests.test_creator				
					})
				} else {				
					req.flash('success', 'Tests Data added successfully!')
					
					// render to views/tests/add.ejs
					res.render('tests/tests', {
						title: 'Add New Tests',
						test_id: '',
						test_name: '',
						test_creator: ''					
					})
				}
			})
		})
	}
	else {   //Display errors to tests
		var error_msg = ''
		errors.forEach(function(error) {
			error_msg += error.msg + '<br>'
		})				
		req.flash('error', error_msg)		
		
		/**
		 * Using req.body.testname 
		 * because req.param('testname') is deprecated
		 */ 
        res.render('tests/tests', { 
            title: 'Add New Tests',
            test_id: req.body.test_id,
            test_name: req.body.test_name,
			test_creator: req.body.test_creator
        })
    }
})

// SHOW EDIT COMPANY FORM
app.get('/edit/(:test_id)', function(req, res, next){
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM tests WHERE test_id = ?', [req.params.test_id], function(err, rows, fields) {
			if(err) throw err
			
			// if user not found
			if (rows.length <= 0) {
				req.flash('error', 'Tests not found with creator_id = ' + req.params.test_id)
				res.redirect('/testid')
			}
			else { // if user found
				// render to views/tests/edit.ejs template file
				res.render('tests/tests', {
					title: 'Edit Tests', 
					//data: rows[0],
					test_id: rows[0].test_id,
					test_name: rows[0].test_name,
					test_creator: rows[0].test_creator					
				})
			}			
		})
	})
})

// EDIT TESTS POST ACTION
app.put('/edit/(:test_id)', function(req, res, next) {
	req.assert('test_id', 'Test ID is required').isInt()           //Validate creator id
	req.assert('test_name', 'Test Name is required').notEmpty()             //Validate test name
	req.assert('test_creator', 'Test Creator is required').notEmpty()  //Validate test type
    var errors = req.validationErrors()
    
    if( !errors ) {   //No errors were found.  Passed Validation!
		
		/********************************************
		 * Express-validator module
		 
		req.body.comment = 'a <span>comment</span>';
		req.body.tests = '   a tests   ';

		req.sanitize('comment').escape(); // returns 'a &lt;span&gt;comment&lt;/span&gt;'
		req.sanitize('companyname').trim(); // returns 'a company'
		********************************************/
		var tests = {
			test_id: req.sanitize('test_id').escape().trim(),
			test_name: req.sanitize('test_name').escape().trim(),
			test_creator: req.sanitize('test_creator').escape().trim()
		}
		
		req.getConnection(function(error, conn) {
			conn.query('UPDATE tests SET ? WHERE test_id = ' + req.params.test_id, tests, function(err, result) {
				//if(err) throw err
				if (err) {
					req.flash('error', err)
					
					// render to views/tests/add.ejs
					res.render('tests/tests', {
						title: 'Edit Tests',
						test_id: req.params.test_id,
						test_id: req.body.test_id,
						test_name: req.body.test_name,
						test_creator: req.body.test_creator,
						})
				} else {
					req.flash('success', 'Tests Data updated successfully!')
					
					// render to views/Tests/add.ejs
					res.render('tests/tests', {
						title: 'Edit Tests',
						test_id: req.params.test_id,
						test_id: req.body.test_id,
						test_name: req.body.test_name,
						test_creator: req.body.test_creator				
					})
				}
			})
		})
	}
	else {   //Display errors to tests
		var error_msg = ''
		errors.forEach(function(error) {
			error_msg += error.msg + '<br>'
		})
		req.flash('error', error_msg)
		
		/**
		 * Using req.body.name 
		 * because req.param('name') is deprecated
		 */ 
        res.render('tests/tests', { 
            title: 'Edit Tests',            
			test_id: req.params.test_id, 
			test_id: req.body.test_id,
			test_name: req.body.test_name,
			test_creator: req.body.test_creator,
        })
    }
})

// DELETE TESTS
app.delete('/delete/(:test_id)', function(req, res, next) {
	var tests = { creator_id: req.params.test_id}
	
	req.getConnection(function(error, conn) {
		conn.query('DELETE FROM tests WHERE test_id = ' + req.params.test_id, tests, function(err, result) {
			//if(err) throw err
			if (err) {
				req.flash('error', err)
				// redirect to company list page
				res.redirect('/tests')
			} else {
				req.flash('success', 'Tests deleted successfully! test_id = ' + req.params.test_id)
				// redirect to company list page
				res.redirect('/tests')
			}
		})
	})
})

module.exports = app
